from django.contrib.auth import password_validation
from django.contrib.auth.forms import PasswordChangeForm, UserChangeForm, UsernameField
from django.contrib.auth.models import User
from django import forms

from django.db.models import Q

from django.core.exceptions import ValidationError
from django.utils.translation import gettext_lazy as _

from RSO import settings
from .models import Profile, Region, Detachment, Area


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
    region = forms.ModelChoiceField(required=True, queryset=Region.objects)

    password = forms.CharField(widget=forms.PasswordInput, label='Пароль',
                               help_text='Минимум 8 символов, не простой ''и не распространенный')
    repeat_password = forms.CharField(widget=forms.PasswordInput, label='Повтор пароля')
    username = forms.CharField(label='Логин', help_text='Только буквы, цифры и символы @/./+/-/_.')

    first_name = forms.CharField(label='Имя')
    last_name = forms.CharField(label='Фамилия')

    telephone = forms.CharField(label='Телефон')
    patronymic = forms.CharField(label='Отчество', required=False)
    date_of_birth = forms.DateField(label='Дата рождения',
                                    widget=forms.DateInput(attrs={'type': 'date'}, format='%Y-%m-%d'))

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


class ProfilePageEditForm(forms.ModelForm):
    """Настройки страницы лк"""

    class Meta:
        model = Profile
        fields = ('about', 'banner', 'photo', 'photo1', 'photo2', 'photo3', 'photo4')
        widgets = {
            'about': forms.Textarea(attrs={'rows': 3}),
        }


class ProfilePersonalEditForm(forms.ModelForm):
    """Настройки личных данных профиля"""

    # член рсо (по его мнению)
    # (ГОТОВО) Фамилия, имя, отчество, пол, фамилия(лат), имя(лат), отчество (лат), дата рождения, пол
    # (НЕ НУЖНО)*Законный представитель несовершеннолетнего*
    # (ГОТОВО) телефон, почта, вк, телеграм, адрес совпадает, *адрес регистрации, *адрес проживания
    # (ГОТОВО) гражданство РФ, номер и серия, дата выдачи, выдан, снилс, инн, трудовая, загран, воинский, серия номер воинского
    # (НЕ НУЖНО)*Для иностранцев*
    # (ГОТОВО) оо, факультет, курс, специальность
    # *файлы*
    # откуда узнали про рсо
    class Meta:
        model = Profile
        fields = ('patronymic', 'last_name_lat', 'first_name_lat', 'patronymic_lat', 'date_of_birth', 'gender',
                  'telephone', 'reg_region', 'reg_town', 'reg_house', 'reg_fac_same_address', 'fact_region',
                  'fact_town', 'fact_house', 'social_vk', 'social_tg', 'pass_ser_num', 'pass_date', 'pass_whom',
                  'SNILS', 'INN', 'work_book_num', 'inter_pass', 'mil_reg_doc_type', 'mil_reg_doc_ser_num',
                  'study_institution', 'study_faculty', 'study_year', 'study_spec',
                  )
        widgets = {
            'date_of_birth': forms.DateInput(attrs={'type': 'date'}, format='%Y-%m-%d'),
            # 'telephone': forms.TextInput(attrs={'data-mask': "000-000-0000"}),
            'gender': forms.RadioSelect,
            'reg_region': forms.Select(attrs={'class': 'select-big'}),
            'fact_region': forms.Select(attrs={'class': 'select-big'}),
            'pass_whom': forms.DateInput(attrs={'type': 'date'}, format='%Y-%m-%d'),
        }


class UserPersonalEditForm(forms.ModelForm):
    """Настройки личных данных пользователя"""

    class Meta:
        model = User
        fields = ('last_name', 'first_name', 'email')


class UserPasswordEditForm(PasswordChangeForm):
    """Настройки системные пароль"""


class ProfilePrivacyEditForm(forms.ModelForm):
    """Настройки приватности"""

    class Meta:
        model = Profile
        fields = ('privacy_telephone', 'privacy_email', 'privacy_social', 'privacy_about', 'privacy_photo')

# class UserLoginEditForm(forms.Form):
#     """Настройки системные логин"""
#     """
#     A form that lets a user change their username by entering their old
#     password.
#     """
#
#     error_messages = {
#         "password_incorrect": _(
#             "Неверный старый пароль. Введите снова."
#         ),
#     }
#
#     def __init__(self, user, *args, **kwargs):
#         self.user = user
#         super().__init__(*args, **kwargs)
#
#     old_password = forms.CharField(
#         label=_("Old password"),
#         strip=False,
#         widget=forms.PasswordInput(
#             attrs={"autocomplete": "current-password", "autofocus": True}
#         ),
#     )
#
#     # field_order = ["old_password", "username"]
#
#     def clean_old_password(self):
#         """
#         Validate that the old_password field is correct.
#         """
#         old_password = self.cleaned_data["old_password"]
#         if not self.user.check_password(old_password):
#             raise ValidationError(
#                 self.error_messages["password_incorrect"],
#                 code="password_incorrect",
#             )
#         return old_password
#
#     def save(self, commit=True):
#         username = self.cleaned_data["username"]
#         self.user.username = username
#         if commit:
#             self.user.save()
#         return self.user
#
#     # username = UsernameField(
#     #     label=_("Логин"),
#     #     widget=forms.TextInput(attrs={"autofocus": True}),
#     #
#     # )
#
#     class Meta:
#         model = User
#         fields = ['old_password', 'username']
#
#
# class UserPasswordEditForm(PasswordChangeForm):
#     """Настройки системные пароль"""
#     """
#     A form that lets a user change their password by entering their old
#     password.
#     """
#
#     error_messages = {
#         "password_mismatch": _("Пароли не совпадают. Введите новый пароль снова."),
#         "password_incorrect": _(
#             "Неверный старый пароль. Введите снова."
#         ),
#     }
#
#     new_password1 = forms.CharField(
#         label=_("Новый пароль"),
#         widget=forms.PasswordInput(attrs={"autocomplete": "new-password"}),
#         strip=False,
#         help_text=password_validation.password_validators_help_text_html(),
#     )
#     new_password2 = forms.CharField(
#         label=_("Новый пароль ещё раз"),
#         strip=False,
#         widget=forms.PasswordInput(attrs={"autocomplete": "new-password"}),
#     )
#
#     def __init__(self, user, *args, **kwargs):
#         self.user = user
#         super().__init__(*args, **kwargs)
#
#     def clean_new_password2(self):
#         password1 = self.cleaned_data.get("new_password1")
#         password2 = self.cleaned_data.get("new_password2")
#         if password1 and password2:
#             if password1 != password2:
#                 raise ValidationError(
#                     self.error_messages["password_mismatch"],
#                     code="password_mismatch",
#                 )
#         password_validation.validate_password(password2, self.user)
#         return password2
#
#     def save(self, commit=True):
#         password = self.cleaned_data["new_password1"]
#         self.user.set_password(password)
#         if commit:
#             self.user.save()
#         return self.user
#
#     old_password = forms.CharField(
#         label=_("Old password"),
#         strip=False,
#         widget=forms.PasswordInput(
#             attrs={"autocomplete": "current-password", "autofocus": True}
#         ),
#     )
#
#     field_order = ["old_password", "new_password1", "new_password2"]
#
#     def clean_old_password(self):
#         """
#         Validate that the old_password field is correct.
#         """
#         old_password = self.cleaned_data["old_password"]
#         if not self.user.check_password(old_password):
#             raise ValidationError(
#                 self.error_messages["password_incorrect"],
#                 code="password_incorrect",
#             )
#         return old_password


class DetachmentCreateForm(forms.ModelForm):
    class Meta:
        model = Detachment
        fields = '__all__'
        widgets = {
            'about': forms.Textarea(attrs={'rows': 3}),
            'slogan': forms.TextInput(attrs={'placeholder': 'Введите девиз'}),
            'founding_date': forms.DateInput(attrs={'type': 'date'}),
        }

    def clean_commander(self):
        commander = self.cleaned_data['commander']
        if commander:
            # Проверяем, является ли профиль командиром в другом отряде
            other_detachment_commander = Q(detachment__commander=commander)
            # Исключаем текущий отряд из проверки
            other_detachment_commander = other_detachment_commander.exclude(pk=self.instance.pk)
            if other_detachment_commander():
                raise forms.ValidationError('Профиль уже является командиром другого отряда.')
        return commander


class DetachmentEditForm(forms.ModelForm):
    class Meta:
        model = Detachment
        fields = '__all__'
        widgets = {
            'about': forms.Textarea(attrs={'rows': 3}),
            'slogan': forms.TextInput(attrs={'placeholder': 'Введите девиз'}),
            'founding_date': forms.DateInput(attrs={'type': 'date'}),
        }

    def clean_commander(self):
        commander = self.cleaned_data['commander']
        if commander:
            # Проверяем, является ли профиль командиром в другом отряде
            other_detachment_commander = Q(detachment__commander=commander)
            # Исключаем текущий отряд из проверки
            other_detachment_commander = other_detachment_commander.exclude(pk=self.instance.pk)
            if other_detachment_commander():
                raise forms.ValidationError('Профиль уже является командиром другого отряда.')
        return commander