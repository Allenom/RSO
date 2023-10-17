function myFinish(val) {
  if (val == 1) {
    document.getElementById("textOpen").style.display = "block";
    document.getElementById("text").style.display = "none";

  } else if (val == 2) {
    document.getElementById("textOpen").style.display = "none";
    document.getElementById("text").style.display = "block";
  }
}

function myOpen(val) {
  if (val == 1) {
    document.getElementById("textOpen").style.display = "block";
    document.getElementById("cloze").style.display = "none";

  } else if (val == 2) {
    document.getElementById("textOpen").style.display = "none";
    document.getElementById("cloze").style.display = "block";
  }
}
// кнопка пказать еще 
let nblock = 11;
//how much elements should be added/removed
let add_remove = 12;

$(".squadslso-wrapper__item:gt(" + nblock + ")").hide();


function toggleMore() { //ADDED THIS METHOD
  if (!$(".squadslso-wrapper__item:hidden").length) {
     $("#more").hide();
     $("#less").show();
  } else {
    $("#more").show();
    $("#less").hide();
  }
}

function showMore() {

  if ((nblock+1) < $('.squadslso-wrapper__item').length)
    nblock = nblock + add_remove;

  $(".squadslso-wrapper__item").fadeIn();
  $(".squadslso-wrapper__item:gt(" + nblock + ")").hide();
  toggleMore(); // CALLING HERE
};

function showLess() {

  if (nblock > add_remove) {
    nblock = nblock - add_remove;
  }

  $(".squadslso-wrapper__item:gt(" + nblock + ")").fadeOut(400, toggleMore);
};



