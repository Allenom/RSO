'use strict' // Располагаем строку в самом начале файла!
//////////////////////////////////Бургер меню/////////////////////////////
const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach( 
  function(menuItem) { 
    menuItem.addEventListener("click", toggleMenu);
  }
)
/////////////////////////////////////////////////////////////////////////
//////////////////////////////////Суб меню/////////////////////////////
$(document).on("click", function(e) {
  if (e.target.id != 'test' && e.target.id != 'subMenu') {
    $("#subMenu").hide();
  } else if (e.target.id != 'subMenu') {
    $("#subMenu").toggle();
  }
});
/////////////////////////////////////////////////////////////////////////
