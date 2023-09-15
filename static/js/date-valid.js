$('#birthdatee').bind('blur', function(){
  var d = new Date();
  var InputVal = $(this).val().split('-')[0];
  var ThisYear = d.getFullYear();
  if(ThisYear-InputVal<18) {
    $('.parents-wrapper').show();
  } else {
    $('.parents-wrapper').hide();
  }
});