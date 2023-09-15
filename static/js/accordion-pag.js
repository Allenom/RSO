jQuery(document).ready(function(){
    $('.accordion').accordion();
    $('.accordion .nav-next, .accordion .nav-prev').click(function(e) {
        e.preventDefault();
        if ( $(this).hasClass('nav-next') ) {
            $(this).closest('.ui-accordion-content').next('.ui-accordion-header').click();
        } else if ( $(this).hasClass('nav-prev') ) {
            $(this).closest('.ui-accordion-content').prevUntil('.ui-accordion-header:first').prev().click();
        }
    });
});