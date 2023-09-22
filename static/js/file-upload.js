
// -------------------------------------------------------------------------------------------------------------------
// заменяет заглушку другой картинкой

let bannerOne = document.getElementById("banner-one");
let uploadBannerOne = document.getElementById("upload-banner-one");


let bannerTwo = document.getElementById("banner-two");
let uploadBannerTwo = document.getElementById("upload-banner-two");


let bannerHree = document.getElementById("banner-hree");
let uploadBannerHree = document.getElementById("upload-banner-hree");

let bannerFour = document.getElementById("banner-four");
let uploadBannerFour = document.getElementById("upload-banner-four");

uploadBannerOne.onchange = () => {
  bannerOne.src = URL.createObjectURL(uploadBannerOne.files[0])
}

uploadBannerTwo.onchange = () => {
  bannerTwo.src = URL.createObjectURL(uploadBannerTwo.files[0])
}

uploadBannerHree.onchange = () => {
  bannerHree.src = URL.createObjectURL(uploadBannerHree.files[0])
}

uploadBannerFour.onchange = () => {
  bannerFour.src = URL.createObjectURL(uploadBannerFour.files[0])
}

