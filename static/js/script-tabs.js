"use strict";
// Табы Настройки профиля
// const tabCrimea = document.querySelectorAll('.tab-title-navigation');
// const crimea = document.querySelectorAll('.tab-content-crimea')


// for (let i = 0; i < tabCrimea.length; i++) {
//     tabCrimea[i].addEventListener('click', function (e) {
//         e.preventDefault();
//         let activeTabCrimea = e.target.getAttribute('data-tab-ps__navigation');
//         for (let j = 0; j < tabCrimea.length; j++) {
//             let content = crimea[j].getAttribute('data-tab-content-about-user');

//             if (activeTabCrimea === content) {
//                 tabCrimea[j].classList.add('active');
//                 crimea[j].classList.add('active');
//             } else {
//                 tabCrimea[j].classList.remove('active');
//                 crimea[j].classList.remove('active');
//             }
//         }
//     })
// }

let filter_btn = document.querySelectorAll('.tab-title-navigation');
let tab_items = document.querySelectorAll('.tab-item');

for (let i = 0; i < filter_btn.length; i++) {
  filter_btn[i].addEventListener('click', function () {
    for (let j = 0; j < filter_btn.length; j++) {
      filter_btn[j].classList.remove('active');
    }
    let select_tab = filter_btn[i].getAttribute('data-tab');
    filter_btn[i].classList.add('active');
    for (let t = 0; t < tab_items.length; t++) {
      document.querySelector('.tab-filter-item-container').style.height =
        tab_items[t].scrollHeight + 'px';
      if (tab_items[t].classList.contains(select_tab)) {
        tab_items[t].classList.add('select_tab');
      } else {
        tab_items[t].classList.remove('select_tab');
      }
    }
  });
}
