const leaders = [
    {
      id: 1,
      img: "/static/images/foto-leader-squad/foto-leader-squad-01.png",
      altTitle: "Фото бойца",
      logo: true,
      iconStatus: "/static/images/icons/icon-status/icon-status-01.svg",
      title: "Васильев Андрей Владимирович",
      date: "13.07.2000",
    },
    {
      id: 2,
      img: "/static/images/foto-leader-squad/foto-leader-squad-02.png",
      altTitle: "Фото бойца",
      logo: true,
      iconStatus: "/static/images/icons/icon-status/icon-status-02.svg",
      title: "Иванов Александр Петрович",
      date: "13.07.2000",
    },
    {
      id: 3,
      img: "/static/images/foto-leader-squad/foto-leader-squad-03.png",
      altTitle: "Фото бойца",
      logo: true,
      iconStatus: "/static/images/icons/icon-status/icon-status-03.svg",
      title: "Сидоров Дмитрий Олегович",
      date: "13.07.2000",
    },
    {
      id: 4,
      img: "/static/images/foto-leader-squad/foto-leader-squad-04.png",
      altTitle: "Фото бойца",
      logo: true,
      iconStatus: "/static/images/icons/icon-status/icon-status-04.svg",
      title: "Петрова Анастасия Владимировна",
      date: "13.07.2000",
    },
    {
      id: 5,
      img: "/static/images/foto-leader-squad/foto-leader-squad-05.png",
      altTitle: "Фото бойца",
      logo: false,
      iconStatus: "",
      title: "Петров Петр Петрович",
      date: "13.07.2000",
    },
    {
      id: 6,
      img: "/static/images/foto-leader-squad/foto-leader-squad-06.png",
      altTitle: "Фото бойца",
      logo: false,
      iconStatus: "",
      title: "Смирнова Елена Дмитриевна",
      date: "13.07.2000",
    },
    {
      id: 7,
      img: "",
      altTitle: "Фото бойца",
      logo: false,
      iconStatus: "",
      title: "Николаева Ольга Васильевна",
      date: "13.07.2000",
    },
    {
      id: 8,
      img: "/static/images/foto-leader-squad/foto-leader-squad-08.png",
      altTitle: "Фото бойца",
      logo: false,
      iconStatus: "",
      title: "Васильев Михаил Владимирович",
      date: "13.07.2000",
    },
    {
      id: 9,
      img: "/static/images/foto-leader-squad/foto-leader-squad-09.png",
      altTitle: "Фото бойца",
      logo: false,
      iconStatus: "",
      title: "Олегов Иван Иванович",
      date: "13.07.2000",
    },
    {
      id: 10,
      img: "/static/images/foto-leader-squad/foto-leader-squad-10.png",
      altTitle: "Фото бойца",
      logo: false,
      iconStatus: "",
      title: "Певцов Дмитрий Владимирович",
      date: "13.07.2000",
    },
  ]
const regions = [
  {
    id: 1,
    title: "Алтайский край",
  },
  {
    id: 2,
    title: "Амурская область",
  },
  {
    id: 3,
    title: "Архангельская область",
  },
  {
    id: 4,
    title: "Астраханская область",
  },
  {
    id: 5,
    title: "Белгородская область",
  },
  {
    id: 6,
    title: "Брянская область",
  },
  {
    id: 7,
    title: "Владимирская область",
  },
  {
    id: 8,
    title: "Волгоградская область",
  },
  {
    id: 9,
    title: "Вологодская область",
  },
  {
    id: 10,
    title: "Воронежская область",
  },
  {
    id: 11,
    title: "г. Москва",
  },
  {
    id: 12,
    title: "Еврейская автономная область",
  },
  {
    id: 13,
    title: "Забайкальский край",
  },
  {
    id: 14,
    title: "Ивановская область",
  },
  {
    id: 15,
    title: "Иркутская область",
  },
  {
    id: 16,
    title: "Кабардино-Балкарская Республика",
  },
  {
    id: 17,
    title: "Калининградская область",
  },
  {
    id: 18,
    title: "Калужская область",
  },
  {
    id: 19,
    title: "Камчатский край",
  },
  {
    id: 20,
    title: "Карачаево-Черкесская Республика",
  },
  {
    id: 21,
    title: "Кемеровская область",
  },
  {
    id: 22,
    title: "Кировская область",
  },
  {
    id: 23,
    title: "Костромская область",
  },
  {
    id: 24,
    title: "Краснодарский край",
  },
  {
    id: 25,
    title: "Красноярский край",
  },
  {
    id: 26,
    title: "Курганская область",
  },
  {
    id: 27,
    title: "Курская область",
  },
  {
    id: 28,
    title: "Ленинградская область",
  },
  {
    id: 29,
    title: "Липецкая область",
  },
  {
    id: 30,
    title: "Магаданская область",
  },
  {
    id: 31,
    title: "Московская область",
  },
  {
    id: 32,
    title: "Мурманская область",
  },
  {
    id: 33,
    title: "Ненецкий автономный округ",
  },
  {
    id: 34,
    title: "Нижегородская область",
  },
  {
    id: 35,
    title: "Новгородская область",
  },
  {
    id: 36,
    title: "Новосибирская область",
  },
  {
    id: 37,
    title: "Омская область",
  },
  {
    id: 38,
    title: "Оренбургская область",
  },
  {
    id: 39,
    title: "Орловская область",
  },
  {
    id: 40,
    title: "Пензенская область",
  },
  {
    id: 41,
    title: "Пермский край",
  },
  {
    id: 42,
    title: "Приморский край",
  },
  {
    id: 43,
    title: "Псковская область",
  },
  {
    id: 44,
    title: "Республика Адыгея (Адыгея)",
  },
  {
    id: 45,
    title: "Республика Алтай",
  },
  {
    id: 46,
    title: "Республика Башкортостан",
  },
  {
    id: 47,
    title: "Республика Бурятия",
  },
  {
    id: 48,
    title: "Республика Дагестан",
  },
  {
    id: 49,
    title: "Республика Ингушетия",
  },
  {
    id: 50,
    title: "Республика Калмыкия",
  },
  {
    id: 51,
    title: "Республика Карелия",
  },
  {
    id: 52,
    title: "Республика Коми",
  },
  {
    id: 53,
    title: "Республика Марий Эл",
  },
  {
    id: 54,
    title: "Республика Мордовия",
  },
  {
    id: 55,
    title: "Республика Саха (Якутия)",
  },
  {
    id: 56,
    title: "Республика Северная Осетия - Алания",
  },
  {
    id: 57,
    title: "Республика Татарстан (Татарстан)",
  },
  {
    id: 58,
    title: "Республика Тыва",
  },
  {
    id: 59,
    title: "Республика Хакасия",
  },
  {
    id: 60,
    title: "Ростовская область",
  },
  {
    id: 61,
    title: "Рязанская область",
  },
  {
    id: 62,
    title: "Самарская область",
  },
  {
    id: 63,
    title: "Санкт-Петербург",
  },
  {
    id: 64,
    title: "Саратовская область",
  },
  {
    id: 65,
    title: "Сахалинская область",
  },
  {
    id: 66,
    title: "Свердловская область",
  },
  {
    id: 67,
    title: "Смоленская область",
  },
  {
    id: 68,
    title: "Ставропольский край",
  },
  {
    id: 69,
    title: "Тамбовская область",
  },
  {
    id: 70,
    title: "Тверская область",
  },
  {
    id: 71,
    title: "Томская область",
  },
  {
    id: 72,
    title: "Тульская область",
  },
  {
    id: 73,
    title: "Тюменская область",
  },
  {
    id: 74,
    title: "Удмуртская Республика",
  },
  {
    id: 75,
    title: "Ульяновская область",
  },
  {
    id: 76,
    title: "Хабаровский край",
  },
  {
    id: 77,
    title: "Ханты-Мансийский автономный округ - Югра",
  },
  {
    id: 78,
    title: "Челябинская область",
  },
  {
    id: 79,
    title: "Чеченская Республика",
  },
  {
    id: 80,
    title: "Чувашская Республика - Чувашия",
  },
  {
    id: 81,
    title: "Чукотский автономный округ",
  },
  {
    id: 82,
    title: "Ямало-Ненецкий автономный округ",
  },
  {
    id: 83,
    title: "Ярославская область",
  },
];
const directions = [
  {
    id: 1,
    title: "ССО",
  },
  {
    id: 2,
    title: "СПО",
  },
  {
    id: 3,
    title: "СОП",
  },
  {
    id: 4,
    title: "ССервО",
  },
  {
    id: 5,
    title: "ССхО",
  },
  {
    id: 6,
    title: "СМО",
  },
]
const institutions = [
  {
    id: 1,
    title: "Алтайский государственный медицинский университет",
  },
  {
    id: 2,
    title: "Амурская государственная медицинская академия",
  },
  {
    id: 3,
    title: "Амурский государственный университет",
  },
  {
    id: 4,
    title: "Владивостокский государственный медицинский университет",
  },
  {
    id: 5,
    title: "Владивостокский государственный университет экономики и сервиса",
  },
  {
    id: 6,
    title: "Дальневосточный государственный технический университет",
  },
  {
    id: 7,
    title: "Дальневосточный федеральный университет",
  },
  // "Алтайский государственный медицинский университет",
  // "Амурская государственная медицинская академия",
  // "Амурский государственный университет",
  // "Владивостокский государственный медицинский университет",
  // "Владивостокский государственный университет экономики и сервиса",
  // "Дальневосточный государственный технический университет",
  // "Дальневосточный федеральный университет",
]

/*Добавление поля выбора командира отряда*/
$('#select-beast').selectize({
    maxItems: 1,
    valueField: 'id',
    labelField: 'title',
    searchField: 'title',
    create: false,
    sortField: {
        field: 'title',
        direction: 'asc'
    },
    options: leaders,
    plugins: ["clear_button"],
    respect_word_boundaries: false,

    render: {
        item: function (item, escape) {
            return (
                '<div class="squad-leader-item">' +
                    (item.img
                        ? '<img src="' + escape(item.img) + '">'
                        : '<img src="/static/images/foto-leader-squad/foto-leader-squad-stub.png">') +
                    (item.logo
                        ? '<img class="squad-leader-item--logo" src="' + escape(item.iconStatus) + '">'
                        : "") +
                    (item.title
                        ? '<span class="leader-name">' + escape(item.title) + "</span>"
                        : "") +
                    (item.date
                        ? '<span class="leader-date">' + escape(item.date) + "</span>"
                        : "") +
                "</div>"
            );
        },
        option: function (item, escape) {
            return (
                '<div class="squad-leader-item">' +
                (item.img
                    ? '<img src="' + escape(item.img) + '">'
                    : '<img src="/static/images/foto-leader-squad/foto-leader-squad-stub.png">') +
                (item.logo
                    ? '<img class="squad-leader-item--logo" src="' + escape(item.iconStatus) + '">'
                    : "") +
                (item.title
                    ? '<span class="leader-name">' + escape(item.title) + "</span>"
                    : "") +
                (item.date
                    ? '<span class="leader-date">' + escape(item.date) + "</span>"
                    : "") +
            "</div>"
            );
        },
    },
});

/*Добавление поля выбора региона*/
$('#select-region').selectize({
    maxItems: 1,
    valueField: 'id',
    labelField: 'title',
    searchField: 'title',
    create: false,
    sortField: {
        field: 'title',
        direction: 'asc'
    },
    options: regions,
    plugins: ["clear_button"],
    respect_word_boundaries: false,
});

/*Добавление поля выбора направления*/
$('#select-direction').selectize({
    maxItems: 1,
    valueField: 'id',
    labelField: 'title',
    searchField: 'title',
    create: false,
    sortField: {
        field: 'text',
        direction: 'asc'
    },
    options: directions,
    plugins: ["clear_button"],
    respect_word_boundaries: false,
});

/*Добавление поля выбора учебного заведения*/
$('#select-institution').selectize({
    maxItems: 1,
    valueField: 'id',
    labelField: 'title',
    searchField: 'title',
    create: false,
    sortField: {
        field: 'title',
        direction: 'asc'
    },
    options: institutions,
    plugins: ["clear_button"],
    respect_word_boundaries: false,
});
