from django.db import models
from django.conf import settings


class Profile(models.Model):
    """Профиль"""
    # ---Основная информация---
    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    patronymic = models.CharField(max_length=40, blank=True, default='', verbose_name='Отчество')
    last_name_lat = models.CharField(max_length=40, blank=True, default='', verbose_name='Фамилия (латиница)')
    first_name_lat = models.CharField(max_length=40, blank=True, default='', verbose_name='Имя (латиница)')
    patronymic_lat = models.CharField(max_length=40, blank=True, default='', verbose_name='Отчество (латиница)')

    # regional_office
    region = models.ForeignKey('Region', null=True, on_delete=models.PROTECT, verbose_name='Регион')
    GENDERS = [('', '-'), ('Мужской', 'Мужской'), ('Женский', 'Женский')]
    gender = models.CharField(max_length=10, blank=True, choices=GENDERS, default='', verbose_name='Пол')
    date_of_birth = models.DateField(verbose_name='Дата рождения')
    telephone = models.CharField(max_length=30, blank=True, default='+7', verbose_name='Телефон')
    # detachment
    # Направление ЛСО
    # study_institution
    study_faculty = models.CharField(max_length=40, blank=True, default='', verbose_name='Факультет')
    study_group = models.CharField(max_length=20, blank=True, default='', verbose_name='Факультет')
    STUDY_FORMS = [('', '-'), ('очная', 'очная'), ('очно-заочная', 'очно-заочная'), ('вечерняя', 'вечерняя'),
                   ('заочная', 'заочная'), ('дистанционная', 'дистанционная')]
    study_form = models.CharField(max_length=15, blank=True, choices=STUDY_FORMS, default='', verbose_name='Форма '
                                                                                                           'обучения')
    # ---ДОКУМЕНТЫ---
    SNILS = models.CharField(max_length=15, blank=True, default='', verbose_name='СНИЛС')
    INN = models.CharField(max_length=15, blank=True, default='', verbose_name='ИНН')
    # INN_file
    # pass_file
    pass_ser = models.CharField(max_length=15, blank=True, default='', verbose_name='Серия паспорта')
    pass_nom = models.CharField(max_length=15, blank=True, default='', verbose_name='Номер паспорта')
    pass_town = models.CharField(max_length=15, blank=True, default='', verbose_name='Город рождения')
    pass_whom = models.CharField(max_length=15, blank=True, default='', verbose_name='Кем выдан паспорт')
    pass_date = models.DateField(blank=True, null=True, verbose_name='Дата выдачи паспорта')
    pass_kod = models.CharField(max_length=15, blank=True, default='', verbose_name='Код подразделения, выдавшего '
                                                                                    'паспорт')
    pass_address = models.CharField(max_length=15, blank=True, default='', verbose_name='Место регистрации по паспорту')
    address = models.CharField(max_length=15, blank=True, default='', verbose_name='Фактическое место проживания')
    # pass_sub Документ при отсутствии паспорта
    # ---Дополнительные данные---
    about = models.CharField(max_length=400, blank=True, default='', verbose_name='О себе')
    social_vk = models.CharField(max_length=50, blank=True, default='https://vk.com/', verbose_name='Ссылка на ВК')
    social_tg = models.CharField(max_length=50, blank=True, default='', verbose_name='Ссылка на Телеграм')

    banner = models.ImageField(upload_to='users/banner/%Y/%m/%d', blank=True, verbose_name='Баннер личной страницы')
    photo = models.ImageField(upload_to='users/avatar/%Y/%m/%d', blank=True, verbose_name='Аватарка')
    photo1 = models.ImageField(upload_to='users/photo/%Y/%m/%d', blank=True, verbose_name='Фото 1')
    photo2 = models.ImageField(upload_to='users/photo/%Y/%m/%d', blank=True, verbose_name='Фото 2')
    photo3 = models.ImageField(upload_to='users/photo/%Y/%m/%d', blank=True, verbose_name='Фото 3')
    photo4 = models.ImageField(upload_to='users/photo/%Y/%m/%d', blank=True, verbose_name='Фото 4')


    # document1_title
    # document1
    # document2_title
    # document2
    # document3_title
    # document3
    # document4_title
    # document4
    # document5_title
    # document5
    # document6_titlef
    # document6
    # ---Конфенденциальность (настройки приватности)---
    PRIVACIES = [('1', 'Все'), ('2', 'Члены отряда'), ('3', 'Руководство')]
    privacy_telephone = models.CharField(max_length=15, choices=PRIVACIES, default='1', verbose_name='Кто видит номер телефона')
    privacy_email = models.CharField(max_length=15, choices=PRIVACIES, default='1', verbose_name='Кто видит электронную почту')
    privacy_social = models.CharField(max_length=15, choices=PRIVACIES, default='1', verbose_name='Кто видит мои ссылки на соц сети')
    privacy_about = models.CharField(max_length=15, choices=PRIVACIES, default='1', verbose_name='Кто видит информацию обо мне')
    privacy_photo = models.CharField(max_length=15, choices=PRIVACIES, default='1', verbose_name='Кто видит мои фотографии')
    # ---Для несовершеннолетних---
    # ---На будущее---
    # membership_fee = models.BooleanField(default=False, verbose_name='Членский взнос оплачен')
    #
    # detachment = models.ForeignKey('Detachment', blank=True, null=True, on_delete=models.PROTECT, verbose_name='Отряд')
    # POSITIONS = [('', 'Без должности'), ('Комиссар', 'Комиссар'), ('Мастер-методист', 'Мастер-методист'),
    #              ('Специалист', 'Специалист'), ('Командир', 'Командир')]
    # position = models.CharField(max_length=20, blank=True, choices=POSITIONS, default='', verbose_name='Должность')
    #
    # @property
    # def position_output(self):
    #     # Если должность в отряде то ЕЁ, инче если оплачен членский БОЕЦ, иначе КАНДИДАТ
    #     # return ''.join([self.detachment.name, ' Боец'])
    #     if self.position == '':
    #         if self.membership_fee:
    #             return 'Боец'
    #         else:
    #             return 'Кандидат'
    #     else:
    #         return self.position

    def __str__(self):
        # return 'Профиль пользователя {}'.format(self.user.username)
        # ?Сделать Имя+Фамилия+(подумать что-то уникальное, скорее всего ID)
        return 'Профиль пользователя {}'.format(self.user.last_name)

    class Meta:
        verbose_name_plural = 'профили'
        verbose_name = 'Профиль'


class Region(models.Model):
    name = models.CharField(max_length=100, db_index=True, verbose_name='Название')

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = 'регионы'
        verbose_name = 'Регион'


class Unit(models.Model):
    """Структурная единица"""
    name = models.CharField(max_length=100, db_index=True, verbose_name='Название')
    commander = models.OneToOneField(Profile, related_name='commander', null=True, blank=True, on_delete=models.PROTECT,
                                     verbose_name='Командир')
    about = models.CharField(max_length=500, blank=True, verbose_name='Описание', default='')
    emblem = models.ImageField(upload_to='emblems/%Y/%m/%d', blank=True, verbose_name='Эмблема')
    social_vk = models.CharField(max_length=50, blank=True, verbose_name='Ссылка ВК', default='https://vk.com/')
    social_tg = models.CharField(max_length=50, blank=True, verbose_name='Ссылка Телеграм', default='https://')
    banner = models.ImageField(upload_to='emblems/%Y/%m/%d', blank=True, verbose_name='Баннер')
    slogan = models.CharField(max_length=100, blank=True, default='', verbose_name='Девиз')
    founding_date = models.DateField(blank=True, null=True, verbose_name='Дата основания')
    # Уровень Линейный отряд, Штаб учебного заведения, Региональное отделение, (Направление)
    # area = models.ForeignKey('Area', null=True, blank=True, on_delete=models.PROTECT, verbose_name='Направление')
    #
    # flag = models.ImageField(upload_to='flags/%Y/%m/%d', blank=True, verbose_name='Флаг')

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = 'структурные единицы'
        verbose_name = 'Структурная единица'


class Detachment(Unit):
    area = models.CharField(max_length=50, blank=True, default='', verbose_name='Направление')
    # регион
    # institution = models.ForeignKey('Institution', null=True, blank=True, on_delete=models.PROTECT,
    #                                verbose_name='Учебное заведение')
    # город
    # Местный штаб

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = 'отряды'
        verbose_name = 'Отряд'


# Штаб Образовательной Организации
# Регион
# Учебное заведение
# Местный штаб
#
# МестныйШтаб
# Регион
# Номер участника в реестре
# Дата участника в реестре
#
# Региональный Штаб
# Регион
# Год появления Отрядов в регионе
# Дата учредительной конференции
# Номер участника в реестре
# Дата участника в реестре
# Окружной штаб
#
# Окружной Штаб


# class Event(models.Model):
# Формат (онлайн)
# Масштаб
# Название
# Адрес
# Ссылка на конференцию
# Количество участников
# Баннер
# О мероприятии
# Направление (?)
# Вид заявок
# Кто может отправлять заявку
# Многодневное
# Дата начала
# Время начала
# Дата конца
# Время конца
# Дата и время окончания регистрации
# Нужен паспорт
# Нужен СНИЛС
# Нужен ИНН
# Нужна Трудовая книжка
# Нужен Военный билет или приписное свидетельство
# Нужно согласие на обработку персональных данных
# Дополнительный вопрос 1
# Дополнительный вопрос 2
# Дополнительный вопрос 3