from django.contrib.auth.models import User
from django import forms
from .models import Profile, Region


# class UserEditForm(forms.ModelForm):
#     class Meta:
#         model = User
#         fields = ('first_name', 'last_name', 'email')
#
#
# class ProfileEditForm(forms.ModelForm):
#     class Meta:
#         model = Profile
#         fields = ('patronymic', 'institution', 'photo', 'link_vk', 'about', 'telephone')
#         widgets = {'about': forms.Textarea(attrs={'rows': 3}), }


class CreateUserForm(forms.ModelForm):
    """Регистрация"""
    region = forms.ModelChoiceField(required=False, queryset=Region.objects)

    password = forms.CharField(widget=forms.PasswordInput, label='Пароль', help_text='Минимум 8 символов, не простой '                                                                             'и не распространенный')
    repeat_password = forms.CharField(widget=forms.PasswordInput, label='Повтор пароля')
    username = forms.CharField(label='Логин', help_text='Только буквы, цифры и символы @/./+/-/_.')

    telephone = forms.CharField(label='Телефон')
    patronymic = forms.CharField(label='Отчество')
    date_of_birth = forms.DateField(label='Дата рождения')

    # institution = forms.ModelChoiceField(required=False, queryset=Institution.objects)

    class Meta:
        model = User
        fields = [
            'region',
            'first_name',
            'last_name',
            'patronymic',
            'date_of_birth',
            'telephone',
            'email',
            'username',
            'password',
        ]


class ProfilePrivacyEditForm(forms.ModelForm):
    """Настройки приватности"""
    class Meta:
        model = Profile
        fields = ('privacy_telephone', 'privacy_email', 'privacy_social', 'privacy_about', 'privacy_photo')
        