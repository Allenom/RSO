from django.contrib.auth.mixins import LoginRequiredMixin
from django.db import transaction
from django.http import Http404
from django.shortcuts import render, redirect
from django.urls import reverse_lazy
from django.views.generic import CreateView, UpdateView, FormView, TemplateView, DetailView
from rest_framework.decorators import api_view

from system import models
from system.forms import CreateUserForm, ProfilePrivacyEditForm, UserPasswordEditForm, UserPersonalEditForm, \
    ProfilePersonalEditForm, ProfilePageEditForm, DetachmentCreateForm, DetachmentEditForm
from system.models import Profile, Detachment

from .serializers import ProfileSerializer, DetachmentSerializer
def page(request, template):
    return render(request, template)


def detachments_list(request):
    detachments = Detachment.objects.all()
    serializer = DetachmentSerializer(detachments, many=True)
    return render(request, "squads/squads.html", {"detachments": serializer.data})


def detachment(request, detachment_id):
    try:
        detachment = Detachment.objects.get(id=detachment_id)
        serializer = DetachmentSerializer(detachment)
        return render(request, 'personal_page_squad/personal_page_squad.html', {'detachment': serializer.data})
    except Detachment.DoesNotExist:
        raise Http404("Отряд не найден")


def redirect_to_lk_page(request):
    return redirect('/profile/my_page/')


class ProfilePersonalEditView(LoginRequiredMixin, UpdateView):
    template_name = 'profile/profile_settings/personal.html'
    form_class = ProfilePersonalEditForm
    success_url = reverse_lazy('profile_settings_personal')

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


class DetachmentCreateView(LoginRequiredMixin, CreateView):
    form_class = DetachmentCreateForm
    success_url = reverse_lazy("structure/detachments")
    template_name = 'personal_page_squad/personal_page_squad-create.html'

    def form_valid(self, form):
        detachment = form.save()
        serializer = DetachmentSerializer(detachment)
        return render(self.request, "personal_page_squad.html", {"detachment": serializer.data})


class DetachmentUpdateView(LoginRequiredMixin, UpdateView):
    template_name = 'personal_page_squad-edit.html'
    form_class = DetachmentEditForm
    model = Detachment
    success_url = '/success/'  # URL, на который пользователь будет перенаправлен после успешного создания отряда

    def get_queryset(self):
        return Detachment.objects.filter(commander=self.request.user.profile)


class DetachmentPersonalView(LoginRequiredMixin, DetailView):
    model = Detachment
    template_name = 'personal_page_squad.html'

    def get_object(self, queryset=None):
        detachment = Detachment.objects.filter(
            models.Q(commander=self.request.user) | models.Q(unitparticipants__user=self.request.user)).first()
        if detachment is None:
            raise Http404("Отряд не найден")
        serializer = DetachmentSerializer(detachment)
        return serializer.datat


@api_view(['POST'])
def create_profile(request):
    if request.method == 'POST':
        serializer = ProfileSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['PUT'])
def update_profile(request, pk):
    try:
        profile = Profile.objects.get(pk=pk)
    except Profile.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'PUT':
        serializer = ProfileSerializer(profile, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['DELETE'])
def delete_profile(request, pk):
    try:
        profile = Profile.objects.get(pk=pk)
    except Profile.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'DELETE':
        profile.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

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
