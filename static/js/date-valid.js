  //  var d = new Date();
  // var InputVal = $(this).val().split('-')[0];
  // var ThisYear = d.getFullYear();

  $(document).ready(function (){

  $("#birthdatee").bind("change", function(){
      let d = new Date();
   let InputVal = $(this).val().split('-')[0];
  let ThisYear = d.getFullYear();
  if(ThisYear-InputVal<18) {
    $('.parents-wrapper').show();
  } else {
    $('.parents-wrapper').hide();
  }
  });
$("#birthdatee").trigger('change');
  })

// $('#birthdatee').bind(function (){
//
// });


// $checkDate = function(){
//   var d = new Date();
//   var InputVal = $(this).val().split('-')[0];
//   var ThisYear = d.getFullYear();
//   if(ThisYear-InputVal<18) {
//     $('.parents-wrapper').show();
//   } else {
//     $('.parents-wrapper').hide();
//   }
// }
//
// $('#birthdatee').bind(checkDate());
// let parentsWrapper = document.querySelector('.parents-wrapper')
// function CheckDate(){
//   var d = new Date();
//   var InputVal = this.val().split('-')[0];
//   var ThisYear = d.getFullYear();
//   if(ThisYear-InputVal<18) {
//    parentsWrapper.display.style('block')
//   } else {
//     parentsWrapper.display.style('none')
//   }
// }

// $('#birthdatee').bind(CheckDate());