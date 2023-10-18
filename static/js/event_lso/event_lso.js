
// кнопка пказать еще 
let nblock = 11;
//how much elements should be added/removed
let add_remove = 12;

$(".eventlso-wrapper__item:gt(" + nblock + ")").hide();


function toggleMore() { //ADDED THIS METHOD
  if (!$(".eventlso-wrapper__item:hidden").length) {
     $("#more-eventlso").hide();
     $("#less-eventlso").show();
  } else {
    $("#more-eventlso").show();
    $("#less-eventlso").hide();
  }
}

function showMoreEventlso() {

  if ((nblock+1) < $('.eventlso-wrapper__item').length)
    nblock = nblock + add_remove;

  $(".eventlso-wrapper__item").fadeIn();
  $(".eventlso-wrapper__item:gt(" + nblock + ")").hide();
  toggleMore(); // CALLING HERE
};

function showLessEventlso() {

  if (nblock > add_remove) {
    nblock = nblock - add_remove;
  }

  $(".eventlso-wrapper__item:gt(" + nblock + ")").fadeOut(400, toggleMore);
};

$(".eventlso-wrapper__item:gt(" + nblock + ")").hide();

