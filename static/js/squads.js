const squads = [
  {
    title: "Инвар",
    category: "Строительные",
    desc: "ССО",
    full: "Студенческий строительный отряд",
    image: "/static/images/logo/squad-logo.png",
    peoples: 12,
    createdAt: "2022-12-10",
    education: "Амурская государственная медицинская академия",
  },
  {
    title: "Звездочки",
    category: "Проводников",
    desc: "СОП-1",
    full: "Студенческий отряд проводников",
    image: "/static/images/logo/squad-logo.png",
    peoples: 19,
    createdAt: "2023-02-10",
    education: "Амурский государственный университет",
  },
  {
    title: "Помощь рядом",
    category: "Медицинские",
    desc: "ССО",
    full: "Студенческий строительный отряд",
    image: "/static/images/logo/squad-logo.png",
    peoples: 5,
    createdAt: "2021-12-01",
    education: "МГУ",
  },
  {
    title: "Мафия",
    category: "Педагогические",
    desc: "СОП-1",
    full: "Студенческий отряд проводников",
    image: "/static/images/logo/squad-logo.png",
    peoples: 8,
    createdAt: "2020-11-10",
    education: "Университет имени Баумана",
  },
  {
    title: "Юмористы",
    category: "Строительные",
    desc: "СОП-1",
    full: "Студенческий отряд проводников",
    image: "/static/images/logo/squad-logo.png",
    peoples: 7,
    createdAt: "2021-02-12",
    education: "Амурская государственная медицинская академия",
  },
  {
    title: "Сокол",
    category: "Сервисные",
    desc: "СОП-1",
    full: "Студенческий отряд проводников",
    image: "/static/images/logo/squad-logo.png",
    peoples: 14,
    createdAt: "2012-12-01",
    education: "Амурский государственный университет",
  },
  {
    title: "Гиена",
    category: "Сельскохозяйственные",
    desc: "СОП-1",
    full: "Студенческий отряд проводников",
    image: "/static/images/logo/squad-logo.png",
    peoples: 12,
    createdAt: "2020-12-18",
    education: "МГУ",
  },
  {
    title: "Санитары",
    category: "Медицинские",
    desc: "СОП-1",
    full: "Студенческий отряд проводников",
    image: "/static/images/logo/squad-logo.png",
    peoples: 22,
    createdAt: "2021-04-13",
    education: "Университет имени Баумана",
  },
  {
    title: "Ежики",
    category: "Педагогические",
    desc: "СОП-1",
    full: "Студенческий отряд проводников",
    image: "/static/images/logo/squad-logo.png",
    peoples: 12,
    createdAt: "2022-12-10",
    education: "Амурская государственная медицинская академия",
  },
  {
    title: "Бригада",
    category: "Путинные",
    desc: "СОП-1",
    full: "Студенческий отряд проводников",
    image: "/static/images/logo/squad-logo.png",
    peoples: 2,
    createdAt: "2022-12-10",
    education: "Амурский государственный университет",
  },
  {
    title: "Юниоры",
    category: "Сервисные",
    desc: "СОП-1",
    full: "Студенческий отряд проводников",
    image: "/static/images/logo/squad-logo.png",
    peoples: 5,
    createdAt: "2022-12-10",
    education: "МГУ",
  },
  {
    title: "Студенты МГИМО",
    category: "Строительные",
    desc: "ССО",
    full: "Студенческий строительный отряд",
    image: "/static/images/logo/squad-logo.png",
    peoples: 14,
    createdAt: "2022-12-10",
    education: "Университет имени Баумана",
  },
  {
    title: "Барбарики",
    category: "Проводников",
    desc: "СОП-1",
    full: "Студенческий отряд проводников",
    image: "/static/images/logo/squad-logo.png",
    peoples: 22,
    createdAt: "2022-12-10",
    education: "Амурская государственная медицинская академия",
  },
  {
    title: "Спортсмены МГУ",
    category: "Медицинские",
    desc: "ССО",
    full: "Студенческий строительный отряд",
    image: "/static/images/logo/squad-logo.png",
    peoples: 10,
    createdAt: "2022-12-10",
    education: "Амурский государственный университет",
  },
  {
    title: "Ковбои",
    category: "Педагогические",
    desc: "СОП-1",
    full: "Студенческий отряд проводников",
    image: "/static/images/logo/squad-logo.png",
    peoples: 4,
    createdAt: "2022-12-10",
    education: "МГУ",
  },
  {
    title: "Пришельцы",
    category: "Сельскохозяйственные",
    desc: "СОП-1",
    full: "Студенческий отряд проводников",
    image: "/static/images/logo/squad-logo.png",
    peoples: 6,
    createdAt: "2022-12-10",
    education: "Университет имени Баумана",
  },
  {
    title: "Луч света",
    category: "Сельскохозяйственные",
    desc: "СОП-1",
    full: "Студенческий отряд проводников",
    image: "/static/images/logo/squad-logo.png",
    peoples: 25,
    createdAt: "2022-12-10",
    education: "Амурская государственная медицинская академия",
  },
  {
    title: "Мираж",
    category: "Сельскохозяйственные",
    desc: "СОП-1",
    full: "Студенческий отряд проводников",
    image: "/static/images/logo/squad-logo.png",
    peoples: 11,
    createdAt: "2022-12-10",
    education: "Амурский государственный университет",
  },
  {
    title: "Градусники",
    category: "Медицинские",
    desc: "СОП-1",
    full: "Студенческий отряд проводников",
    image: "/static/images/logo/squad-logo.png",
    peoples: 17,
    createdAt: "2022-12-10",
    education: "МГУ",
  },
  {
    title: "Студенты РГСУ",
    category: "Педагогические",
    desc: "СОП-1",
    full: "Студенческий отряд проводников",
    image: "/static/images/logo/squad-logo.png",
    peoples: 15,
    createdAt: "2022-12-10",
    education: "РГГУ",
  },
  {
    title: "Топ",
    category: "Путинные",
    desc: "СОП-1",
    full: "Студенческий отряд проводников",
    image: "/static/images/logo/squad-logo.png",
    peoples: 10,
    createdAt: "2022-12-10",
    education: "Амурская государственная медицинская академия",
  },
  {
    title: "Белки",
    category: "Сервисные",
    desc: "СОП-1",
    full: "Студенческий отряд проводников",
    image: "/static/images/logo/squad-logo.png",
    peoples: 12,
    createdAt: "2022-12-10",
    education: "Амурский государственный университет",
  },
];

const filtered = [];


const productsContainer = document.querySelector("#squads-wrapper");
const categoryList = document.querySelector(".squads-tabs");

const productsContainerHorizontal = document.querySelector("#horizontal");

function displayProducts(products) {
  if (products.length > 0) {
    const product_details = products
      .map(
        (product) => `
  <a href="/personal_page_squad/personal_page_squad/" class="squads-wrapper__item">
    <div class="round-img">
      <img src="${product.image}" alt="${product.title}" />
    </div>
    <div class="container">
      <p class="squads-wrapper__item-category">${product.desc}</p>
      <p class="squads-wrapper__item-title">${product.title}</p>
    </div>
  </a>`
      )
      .join("");

    productsContainer.innerHTML = product_details;
  }  else {
    productsContainer.innerHTML = "<h3>Отряд не найден</h3>";
  }

}

function displayHorizontal(products) {
  if (products.length > 0) {
    const product_horizontal = products
      .map(
        (product) => `
  <a href="/personal_page_squad/personal_page_squad/" class="horizontal-item">
  <div class="horizontal-img">
    <img src="${product.image}" alt="${product.title}" />
  </div>
  <div class="containerHorizontal">
    <p class="squads-wrapper__item-category-full">${product.full}</p>
    <p class="squads-wrapper__item-title">${product.title}</p>
  </div>
  </a>`
      )
      .join("");

      productsContainerHorizontal.innerHTML = product_horizontal;
  }

  else {
    productsContainerHorizontal.innerHTML = "<h3>Отряд не найден</h3>";
  }

}

function allSquads(squads) {
  displayProducts(squads);
  displayHorizontal(squads);
}


function setCategories() {
  const allCategories = squads.map((product) => product.category);
  const catagories = [
    "Все",
    ...allCategories.filter((product, index) => {
      return allCategories.indexOf(product) === index;
    }),
  ];
  categoryList.innerHTML = catagories
    .map((category) => `<button class="squad-tabs__item">${category}</button>`)
    .join("");

  categoryList.addEventListener("click", (e) => {
    let selectedCatagory = e.target.textContent;
    if( selectedCatagory === "Все") {
      allSquads(squads)
    } else {
      allSquads(
        squads.filter((product) => product.category == selectedCatagory)
      );
    }

  });
}


function changeLayout(val) {
  if (val == 1) {
    document.getElementById("squads-wrapper").style.display = "grid";
    document.getElementById("horizontal").style.display = "none";
    document.querySelector(".menu-btn").classList.remove('active-change__menu');
    document.querySelector(".dashboard-btn").classList.remove('active-change');


  } else if (val == 2) {
    document.getElementById("squads-wrapper").style.display = "none";
    document.getElementById("horizontal").style.display = "grid";
    document.querySelector(".menu-btn").classList.add('active-change__menu');
    document.querySelector(".dashboard-btn").classList.add('active-change');
  }
}


const sortByDropdown = document.querySelector(".sort-alph");
const sortOrderDropdown = document.querySelector(".sort-order");
const EducationList = document.querySelector(".education-check");


function setEducations() {
  const allEducations = squads.map((product) => product.education);
  const educations = [
    "Образовательная организация",
    ...allEducations.filter((product, index) => {
      return allEducations.indexOf(product) === index;
    }),
  ];
  EducationList.innerHTML = educations
    .map(
      (education) =>
        `<option class="squad-sort__selected">${education}</option>`
    )
    .join("");

  EducationList.addEventListener("change", (e) => {
    const selectedEducation = e.target.value;
    selectedEducation === "Образовательная организация"
      ? allSquads(squads)
      : allSquads(
          squads.filter((product) => product.education == selectedEducation)
        );
  });
}

//concat



sortByDropdown.addEventListener("change", () => {
  const sortByValue = sortByDropdown.value; // price or ram value
  const sortOrderValue = sortOrderDropdown.value; // asc or desc value
  // const sortByEduc = EducationList.value

  const sorted = _.orderBy(squads, [sortByValue], sortOrderValue);

 allSquads(sorted);
});

sortOrderDropdown.addEventListener("change", () => {
  const event = new Event("change");
  const sortByValue = sortByDropdown.value;
  // const sortByEduc= sortByDropdown.value;

  if (sortByValue) {
    sortByDropdown.dispatchEvent(event);
  }
});


const txtSearch = document.querySelector("#search");
txtSearch.addEventListener("keyup", (e) => {
  const value = e.target.value.toLowerCase().trim();
  if (value) {
    allSquads(
      squads.filter(
        (product) => product.title.toLowerCase().indexOf(value) !== -1
      )
    );
  } else {
    allSquads(squads);
  }
});

allSquads(squads);
setCategories();
setEducations();

//Initially display all products
// window.onload = () => {
//   filterProduct("All");
// };
