// при нажатии на checkbox завершенные выводится текст нет завершнных
function myFinish(val) {
if (val == 1 ) {
    document.getElementById("textOpen").style.display = "block";
    document.getElementById("text").style.display = "none";

  } else if (val == 2) {
      document.getElementById("textOpen").style.display = "none";
        document.getElementById("text").style.display = "block";
  }
}
