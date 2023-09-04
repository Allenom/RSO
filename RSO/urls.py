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
from django.contrib import admin
from django.contrib.auth.views import LoginView, LogoutView
from django.urls import path

from system.views import SignUp, lk_page, profile_edit

urlpatterns = [
    path('admin/', admin.site.urls),

    path('login/', LoginView.as_view(template_name='login.html'), name='login'),
    path('logout/', LogoutView.as_view(), name='logout'),
    path("signup/", SignUp.as_view(), name='signup'),

    # path("profile/", profile_page, name='profile'), СДЕЛАТЬ ЛК
    # path("profile/settings/", ProfileEditView.as_view(), name='profile_settings'),
    path("profile/settings/", profile_edit, name='profile_settings'),
    # page personal login/password privacy
    path("lk/", lk_page, name='lk'),
    # path("lk/personal/", ProfileEditView.as_view(), name='lk_settings'),
    # path("lk/system", lk_system, name='lk_system'),
    # path("lk/privacy", lk_privacy, name='lk_privacy'),

]
