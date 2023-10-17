// console.log($('.create-of-squad-form'));

$(document).ready(function() {
  $('.create-of-squad-form').submit(function(e) {
    e.preventDefault();
 
    if ($('#name-squad').val() === "") {
      // const inpPar = $('#name-squad').parent();
      // const errorDiv = inpPar.find("error");
      // errorDiv.removeClass("no-visible");

      $('#name-squad').after('<span class="error">* обязательно для заполнения</span>');
    }
  });
});

// const formVal = document.getElementById('accordion-form');
// const select_direction = document.getElementById('select-direction');
// const select_region = document.getElementById('select-region-selectized');
// const select_institution = document.getElementById('select-institution-selectized');
// const beast = document.getElementById('select-beast-selectized');

// $(document).ready(function() {
//     $(formVal).validate({
//         rules: {
//             name_squad: {
//                 required: true,
//             },
//             select_direction: {
//                 required: true,
//             },
//             create_date: {
//                 required: true,
//             },
//             select_region: {
//                 required: true,
//             },
//             select_institution: {
//                 required: true,
//             },
//             beast: {
//                 required: true,
//             },
//         },
//         messages: {
//             name_squad: {
//                 required: "* обязательно для заполнения",
//             },
//             select_direction: {
//                 required: "* обязательно для заполнения",
//             },
//             create_date: {
//                 required: "* обязательно для заполнения",
//             },
//             select_region: {
//                 required: "* обязательно для заполнения",
//             },
//             select_institution:{
//                 required: "* обязательно для заполнения",
//             },
//             beast: {
//                 required: "* обязательно для заполнения",
//             },
//         },
//         submitHandler: function(form) {
//           form.submit();
//         }
        
//       });
//   });

// const test = () => {
//   const name = document.getElementById('name-squad');
//   if (name.value === "") {
//     const inputControl = name.parentElement;
//     console.log(inputControl);//----------------------------------------
//     const errorDisplay = inputControl.querySelector(".error");

//     console.log(errorDisplay);//----------------------------------------

//     errorDisplay.classList.remove("no-visible");
//   }
// };
// test();