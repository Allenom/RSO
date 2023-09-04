const wrapper = document.querySelector(".wrapper"),
  selectBtn = wrapper.querySelector(".select-btn"),
  searchInp = wrapper.querySelector("input"),
  options = wrapper.querySelector(".options");


  let regions = [
    "Кировская область",
    "Пензенская область",
    "Приморский край",
    "Чукотский автономный округ",
    "Еврейская автономная область",
    "Сахалинская область",
    "Магаданская область",
    "Курганская область",
    "Республика Тыва",
    "Челябинская область",
    "Тюменская область",
    "Самарская область",
    "Республика Мордовия",
    "Республика Марий Эл",
    "Республика Татарстан",
    "Чувашская Республика",
    "Республика Дагестан",
    "Чеченская Республика",
    "Ростовская область",
    "Санкт-Петербург",
    "Мурманская область",
    "Республика Коми",
    "Республика Карелия",
    "Ярославская область",
    "Тульская область",
    "Смоленская область",
    "Рязанская область",
    "Орловская область",
    "Липецкая область",
    "Курская область",
    "Костромская область",
    "Калужская область",
    "Краснодарский край",
    "Брянская область",
    "Белгородская область",
    "Республика Крым",
    "Амурская область",
    "Ленинградская область",
    "Забайкальский край",
    "Московская область",
    "Владимирская область",
    "Приморский край",
    "Тверская область",
    "Москва",
    "Новгородская область"
  ];
  function addRegion(selectedRegion) {
    options.innerHTML = "";
    regions.forEach((region) => {
      let isSelected = region == selectedRegion ? "selected" : "";
      let li = `<li onclick="updateName(this)" class="${isSelected}">${region}</li>`;
      options.insertAdjacentHTML("beforeend", li);
    });
  }
  addRegion();
  function updateName(selectedLi) {
    searchInp.value = "";
    addRegion(selectedLi.innerText);
    wrapper.classList.remove("active");
    selectBtn.firstElementChild.innerText = selectedLi.innerText;
  }
  searchInp.addEventListener("keyup", () => {
    let arr = [];
    let searchWord = searchInp.value.toLowerCase();
    arr = regions
      .filter((data) => {
        return data.toLowerCase().startsWith(searchWord);
      })
      .map((data) => {
        let isSelected =
          data == selectBtn.firstElementChild.innerText ? "selected" : "";
        return `<li onclick="updateName(this)" class="${isSelected}">${data}</li>`;
      })
      .join("");
    options.innerHTML = arr
      ? arr
      : `<p style="margin-top: 10px;"> Ой, Регион не найден!</p>`;
  });
  selectBtn.addEventListener("click", () => wrapper.classList.toggle("active"));