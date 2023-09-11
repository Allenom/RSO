from django.db import transaction
from django.shortcuts import render, redirect
from django.urls import reverse_lazy
from django.views.generic import CreateView, UpdateView

from system.forms import CreateUserForm, ProfilePrivacyEditForm
from system.models import Profile


def profile_edit(request):

    return render(request, 'lk/settings.html')


def lk_page(request):
    if not request.user.is_authenticated:
        return redirect('/login/?next=/lk/')
    context = {}

    return render(request, 'lk.html', context)


class SignUp(CreateView):
    form_class = CreateUserForm
    success_url = reverse_lazy("login")
    template_name = "signup.html"

    def form_valid(self, form):
        c = {'form': form, }
        user = form.save(commit=False)
        # Cleaned(normalized) data
        # institution = form.cleaned_data['institution']
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
        Profile.objects.create(user=user, telephone=telephone, patronymic=patronymic, date_of_birth=date_of_birth)

        return super(SignUp, self).form_valid(form)


class ProfilePrivacyEditView(UpdateView):
    form_class = ProfilePrivacyEditForm
    template_name = "lk/settings/privacy.html"
    model = Profile
    success_url = reverse_lazy("lk_privacy")
    # def form_valid(self, form):
    #     if form.is_valid():
    #         form.save()
    #     return super(ProfilePrivacyEditView, self).form_valid(form)

    def get_object(self, queryset=None):
        return self.request.user.profile
