from django.contrib.auth import update_session_auth_hash
from django.contrib.auth.decorators import login_required
from django.contrib.auth.mixins import LoginRequiredMixin
from django.contrib.auth.models import User
from django.contrib.auth.views import PasswordChangeView, PasswordContextMixin
from django.db import transaction
from django.http import Http404
from django.shortcuts import render, redirect
from django.urls import reverse_lazy
from django.utils.translation import gettext_lazy as _
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_protect
from django.views.decorators.debug import sensitive_post_parameters
from django.views.generic import CreateView, UpdateView, FormView, TemplateView, DetailView

from system import models
from system.forms import CreateUserForm, ProfilePrivacyEditForm, UserPasswordEditForm, UserPersonalEditForm, \
    ProfilePersonalEditForm, ProfilePageEditForm, DetachmentCreateForm, DetachmentEditForm
from system.models import Profile, Detachment


def page(request, template):
    return render(request, template)


def detachments_list(request):
    detachments = Detachment.objects.all
    context = {"detachments": detachments}
    return render(request, "squads/squads.html", context)


def detachment(request, detachment_id):
    detachment = Detachment.objects.filter(id=detachment_id)
    context = {'detachment': detachment}
    return render(request, 'personal_page_squad/personal_page_squad.html', context)


def redirect_to_lk_page(request):
    return redirect('/profile/my_page/')


def lk_page(request):
    if not request.user.is_authenticated:
        return redirect('/login/?next=/profile/my_page/')
    context = {}

    return render(request, 'profile/my_page.html', context)


class SignUp(CreateView):
    form_class = CreateUserForm
    success_url = reverse_lazy("login")
    template_name = "registration.html"

    def form_valid(self, form):
        c = {'form': form, }
        user = form.save(commit=False)
        # Cleaned(normalized) data
        # institution = form.cleaned_data['institution']
        region = form.cleaned_data['region']
        telephone = form.cleaned_data['telephone']
        password = form.cleaned_data['password']
        patronymic = form.cleaned_data['patronymic']
        repeat_password = form.cleaned_data['repeat_password']
        date_of_birth = form.cleaned_data['date_of_birth']
        if password != repeat_password:
            form.add_error('repeat_password', "Пароли не совпадают")
            return render(self.request, self.template_name, c)
        user.set_password(password)
        user.save()

        # Create UserProfile model
        Profile.objects.create(user=user, region=region, telephone=telephone, patronymic=patronymic,
                               date_of_birth=date_of_birth)

        return super(SignUp, self).form_valid(form)


class ProfilePrivacyEditView(LoginRequiredMixin, UpdateView):
    form_class = ProfilePrivacyEditForm
    template_name = "profile/profile_settings/privacy.html"
    model = Profile
    success_url = reverse_lazy("profile_settings_privacy")

    # @method_decorator(login_required)
    # def form_valid(self, form):
    #     if form.is_valid():
    #         form.save()
    #     return super(ProfilePrivacyEditView, self).form_valid(form)

    def get_object(self, queryset=None):
        return self.request.user.profile


class ProfilePersonalEditView(LoginRequiredMixin, UpdateView):
    login_url = "/login/"

    template_name = 'profile/profile_settings/personal.html'
    form_class = ProfilePersonalEditForm
    success_url = reverse_lazy('profile_settings_personal')
    model = Profile

    def get_object(self, queryset=None):
        return self.request.user.profile

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['title'] = f'Редактирование профиля пользователя: {self.request.user.username}'
        if self.request.POST:
            context['user_form'] = UserPersonalEditForm(self.request.POST, instance=self.request.user)
        else:
            context['user_form'] = UserPersonalEditForm(instance=self.request.user)
        return context

    def form_valid(self, form):
        context = self.get_context_data()
        user_form = context['user_form']
        with transaction.atomic():
            if all([form.is_valid(), user_form.is_valid()]):
                user_form.save()
                form.save()
            else:
                context.update({'user_form': user_form})
                return self.render_to_response(context)
        return super(ProfilePersonalEditView, self).form_valid(form)


class ProfilePageEditView(LoginRequiredMixin, UpdateView):
    login_url = "/login/"

    template_name = 'profile/profile_settings/my_page.html'
    form_class = ProfilePageEditForm
    success_url = reverse_lazy('profile_settings_my_page')
    model = Profile

    def get_object(self, queryset=None):
        return self.request.user.profile


class DetachmentCreateView(LoginRequiredMixin, CreateView):

    form_class = DetachmentCreateForm
    success_url = reverse_lazy("structure/detachments")
    template_name = 'personal_page_squad/personal_page_squad-create.html'

    def form_valid(self, form):
        # if self.request.user.profile.position == '':
        #     return render(self.request, self.template_name)
        detachment = form.save()
        detachment.save()
        self.success_url = reverse_lazy("detachment", kwargs={"detachment_id": detachment.id})
        return super(DetachmentCreateView, self).form_valid(form)


class DetachmentUpdateView(LoginRequiredMixin, UpdateView):
    template_name = 'personal_page_squad-edit.html'
    form_class = DetachmentEditForm
    model = Detachment
    success_url = '/success/'  #URL, на который пользователь будет перенаправлен после успешного создания отряда

    def get_queryset(self):
        return Detachment.objects.filter(commander=self.request.user.profile)


class DetachmentPersonalView(LoginRequiredMixin, DetailView):

    model = Detachment
    template_name = 'personal_page_squad.html'

    def get_object(self, queryset=None):
        # Отряд, где пользователь - командир или где он является участником
        detachment = Detachment.objects.filter(
            models.Q(commander=self.request.user) | models.Q(unitparticipants__user=self.request.user)).first()
        if detachment is None:
            raise Http404("Отряд не найден")
        return detachment


# class UserSystemEditView(TemplateView):
#     template_name = 'profile/profile_settings/system.html'
#
#     def get(self, request, *args, **kwargs):
#         login_change_form = UserLoginEditForm(self.request.GET or None)
#         password_change_form = UserPasswordEditForm(self.request.GET or None, self.request.user)
#         context = self.get_context_data(**kwargs)
#         context['login_change_form'] = login_change_form
#         context['password_change_form'] = password_change_form
#         return self.render_to_response(context)
#
#
# class UserLoginEditView(PasswordContextMixin, FormView):
#     form_class = UserLoginEditForm
#     success_url = reverse_lazy("profile_settings_system")
#     template_name = "profile/profile_settings/system.html"
#     title = _("Login change")
#     model = User
#
#     @method_decorator(sensitive_post_parameters())
#     @method_decorator(csrf_protect)
#     @method_decorator(login_required)
#     def dispatch(self, *args, **kwargs):
#         return super().dispatch(*args, **kwargs)
#
#     def get_form_kwargs(self):
#         kwargs = super().get_form_kwargs()
#         kwargs["user"] = self.request.user
#         return kwargs
#
#     def form_valid(self, form):
#         form.save()
#         # Updating the username logs out all other sessions for the user
#         # except the current one.
#         update_session_auth_hash(self.request, form.user)
#         return super().form_valid(form)
#
#     def post(self, request, *args, **kwargs):
#         login_change_form = self.form_class(request.POST)
#         password_change_form = UserPasswordEditForm()
#         if login_change_form.is_valid():
#             login_change_form.save()
#             return self.render_to_response(
#                 self.get_context_data(
#                     success=True
#                 )
#             )
#         else:
#             return self.render_to_response(
#                 self.get_context_data(
#                     login_change_form=login_change_form,
#                 )
#             )
#
#
# class UserPasswordEditView(PasswordContextMixin, FormView):
#     form_class = UserPasswordEditForm
#     success_url = reverse_lazy("profile_settings_system")
#     template_name = "profile/profile_settings/system.html"
#     title = _("Password change")
#
#     @method_decorator(sensitive_post_parameters())
#     @method_decorator(csrf_protect)
#     @method_decorator(login_required)
#     def dispatch(self, *args, **kwargs):
#         return super().dispatch(*args, **kwargs)
#
#     def get_form_kwargs(self):
#         kwargs = super().get_form_kwargs()
#         kwargs["user"] = self.request.user
#         return kwargs
#
#     def form_valid(self, form):
#         form.save()
#         # Updating the password logs out all other sessions for the user
#         # except the current one.
#         update_session_auth_hash(self.request, form.user)
#         return super().form_valid(form)
#
#     def post(self, request, *args, **kwargs):
#         password_change_form = self.form_class(request.POST)
#         login_change_form = UserLoginEditForm()
#         if password_change_form.is_valid():
#             password_change_form.save()
#             return self.render_to_response(
#                 self.get_context_data(
#                     success=True
#                 )
#             )
#         else:
#             return self.render_to_response(
#                 self.get_context_data(
#                     password_change_form=password_change_form,
#                 )
#             )
