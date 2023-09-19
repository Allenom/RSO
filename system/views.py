from django.contrib.auth import update_session_auth_hash
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
from django.contrib.auth.views import PasswordChangeView, PasswordContextMixin
from django.db import transaction
from django.shortcuts import render, redirect
from django.urls import reverse_lazy
from django.utils.translation import gettext_lazy as _
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_protect
from django.views.decorators.debug import sensitive_post_parameters
from django.views.generic import CreateView, UpdateView, FormView, TemplateView

from system.forms import CreateUserForm, ProfilePrivacyEditForm, UserPasswordEditForm
from system.models import Profile


def page(request, template):
    return render(request, template)


def lk_page(request):
    if not request.user.is_authenticated:
        return redirect('/login/?next=/profile/')
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


class ProfilePrivacyEditView(UpdateView):
    form_class = ProfilePrivacyEditForm
    template_name = "profile/profile_settings/privacy.html"
    model = Profile
    success_url = reverse_lazy("profile_settings_privacy")

    # def form_valid(self, form):
    #     if form.is_valid():
    #         form.save()
    #     return super(ProfilePrivacyEditView, self).form_valid(form)

    def get_object(self, queryset=None):
        return self.request.user.profile




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