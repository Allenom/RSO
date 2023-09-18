

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

$("#main-info-next").on("click", function() {
$("#contacts").accordionItemHeaders.show();
$("#main-info").hide();
$(".accordion-item-header").removeClass("active")
});
//Primary Buttons
// $("#primaryNextBtn").on("click", function() {
// $("#collapseSuccess").collapse('show');
// $("#collapsePrimary").collapse('hide');
// });
// $("#primaryPrevBtn").on("click", function() {
// $("#collapseDefault").collapse('show');
// $("#collapsePrimary").collapse('hide');
// });
// //Success Buttons
// $("#successNextBtn").on("click", function() {
// $("#collapseInfo").collapse('show');
// $("#collapseSuccess").collapse('hide');
// });
// $("#successPrevBtn").on("click", function() {
// $("#collapsePrimary").collapse('show');
// $("#collapseSuccess").collapse('hide');
// });
// //Info Buttons
// $("#infoNextBtn").on("click", function() {
// $("#collapseWarning").collapse('show');
// $("#collapseInfo").collapse('hide');
// });
// $("#infoPrevBtn").on("click", function() {
// $("#collapseSuccess").collapse('show');
// $("#collapseInfo").collapse('hide');
// });
// //Warning Buttons
// $("#warningNextBtn").on("click", function() {
// $("#collapseDanger").collapse('show');
// $("#collapseWarning").collapse('hide');
// });
// $("#warningPrevBtn").on("click", function() {
// $("#collapseInfo").collapse('show');
// $("#collapseWarning").collapse('hide');
// });
// //DangerButtons
// $("#dangerPrevBtn").on("click", function() {
// $("#collapseWarning").collapse('show');
// $("#collapseDanger").collapse('hide');
// });
