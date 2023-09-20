"""RSO URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.conf.urls.static import static
from django.contrib import admin
from django.contrib.auth.views import LoginView, LogoutView, PasswordChangeView
from django.urls import path, reverse_lazy

from RSO import settings
from system.views import SignUp, lk_page, ProfilePrivacyEditView, page, ProfilePersonalEditView, ProfilePageEditView

urlpatterns = [
    path('admin/', admin.site.urls),

    # Аутентификация
    path('login/', LoginView.as_view(template_name='login.html'), name='login'),
    path('logout/', LogoutView.as_view(), name='logout'),
    path("registration/", SignUp.as_view(), name='registration'),
    path("recover_password/", page, {'template': 'recover_password.html'}, name='recover_password'),
    path("change_password/", page, {'template': 'change_password.html'}, name='change_password'),

    # Профиль
    path("profile/my_page/", lk_page, name='profile'),

    # Настройки профиля
    path("profile/profile_settings/my_page/", ProfilePageEditView.as_view(), name='profile_settings_my_page'),
    path("profile/profile_settings/personal/", ProfilePersonalEditView.as_view(), name='profile_settings_personal'),
    path("profile/profile_settings/system/",
         PasswordChangeView.as_view(template_name='profile/profile_settings/system.html',
                                    success_url=reverse_lazy("profile")),
         name='profile_settings_system'),
    path("profile/profile_settings/privacy/", ProfilePrivacyEditView.as_view(), name='profile_settings_privacy'),

    # Доп страницы
    path("404/", page, {'template': '404.html'}, name='page_not_found'),
    path("privacy_policy/", page, {'template': 'privacy_policy.html'}, name='privacy_policy'),
    path("terms_of_use/", page, {'template': 'terms_of_use.html'}, name='terms_of_use'),

] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
