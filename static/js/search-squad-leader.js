//Отображение и сскрытие кнопки Назад во вкладке Оформление

const tabThree = document.getElementById('collapseThree');
const backButton = document.getElementById('backButton');

(function(){
  //Сохраняем ссылку на стандартный метод jQuery
  var originalAddClassMethod = jQuery.fn.addClass;
  //Переопределяем
  $.fn.addClass = function(){
    var result = originalAddClassMethod.apply(this, arguments);
    //Инициализируем событие смены класса
    $(this).trigger('show');
    return result;
  }
})();

$(function(){ 
  $(tabThree).bind('show', function(){

    //Отработает, как только сменится класс
    if ($(tabThree).hasClass("show")) {
      $(backButton).show();      
    } else {
      $(backButton).hide();
    }
  });
});
