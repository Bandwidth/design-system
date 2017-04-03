$(document).ready(function() {
    // Click accordion drawer
    $('.accordion:not(.active) .content').hide();
    $('.accordion:not(.disabled) .drawer').click(function(){
        if (!$(this).parent('.accordion').hasClass('active')) {
            // Change active accordion
            $(this).parent('.accordion').siblings('.accordion').removeClass('active');
            $(this).parent('.accordion').addClass('active');
            // Change active content
            $(this).siblings('.content').slideDown(200);
            $(this).parent('.accordion').siblings('.accordion').find('.content').slideUp(200);
        } else {
            // Remove active state
            $(this).parent('.accordion').removeClass('active');
            // Close content
            $(this).siblings('.content').slideUp(200);
        }
    });
});