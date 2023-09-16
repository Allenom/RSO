

// jQuery(document).ready(function(){
//     jQuery('.first').show();
//     // jQuery('.accordion-item-header').attr('disabled',true);
//     jQuery(".accordion .accordion-item-header").click(function () {
//          jQuery(".accordion .accordion-item-header").removeClass('active');
//          jQuery(this).addClass('active');
//
//          // if(jQuery(this).is('[disabled=disabled]')){
//          //    return false;
//          // }
//          if(!jQuery(this).next("div").is(":visible")) {
//               jQuery(".accordion .accordion-item-body").slideUp("slow");
//               jQuery(this).next("div").slideToggle("slow");
//           }
//       });
//
//      jQuery(".accordion .nav-next").click(function () {
//           nextBtn(this);
//      });
//
//      jQuery(".accordion .nav-prev").click(function () {
//           previousBtn(this);
//     });
//
//     function previousBtn(data){
//        var $prevContent = jQuery(data).parent().prev().prev();
//        jQuery(".accordion .accordion-item-header").removeClass('active');
//        jQuery(".accordion .accordion-item-body").slideUp();
//        // jQuery(data).parent().prev().attr('disabled',true);
//        $prevContent.slideDown(1000);
//     }
//     function nextBtn(data){
//        var $nextContent = jQuery(data).parent().next().next();
//        jQuery(".accordion .accordion-item-header").removeClass('active');
//        jQuery(".accordion .accordion-item-body").slideUp();
//        // jQuery(data).parent().prev().attr("disabled",false);
//        $nextContent.slideDown(10);
//     }
// });




 // jQuery(document).ready(function() {
 //    jQuery(".accordion .accordion-item").click(function() {
 //      if(jQuery(this).next("div").is(":visible")){
 //        jQuery(this).next("div").slideUp("slow");
 //      } else {
 //        jQuery(".accordion .accordion-item-body-content").slideUp("slow");
 //        jQuery(this).next("div").slideToggle("slow");
 //      }
 //    });
 //     jQuery(".accordion .nav-next").click(function(){
 //        jQuery(".accordion .accordion-item-body-content").slideUp("slow");
 //        jQuery(this).parent().siblings().next().show();
 //
 //     });
 //  });