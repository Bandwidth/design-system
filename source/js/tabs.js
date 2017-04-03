$(document).ready(function() {
    // Calculate tab widths
    $('.tabbed.horizontal').each(function(){
        var numTabs = $(this).find('.tab').length;
        var percentWidth = (100/numTabs).toString() + "%";
        $(this).find('.tab').each(function(){
            $(this).css('width', percentWidth);
        });
        $(this).find('.tabs').css('margin-right', '-' + (numTabs - 1) + 'px');
    });
    
    // Click tab
    $('.tabbed .tab:not(.disabled)').click(function(){
        if (!$(this).hasClass('active')) {
            var tabNum = this.className.match(/t(\d+)/)[1];
            // Change active tab
            $(this).siblings('.tab').removeClass('active');
            $(this).addClass('active');
            // Change active content
            $(this).parents('.tabbed').find('.content').removeClass('active');
            $(this).parents('.tabbed').find('.c' + tabNum).addClass('active');
        }
    });
    
    // Click tab drawer
    $('.tabbed.stacked .content:not(.active)').hide();
    $('.tabbed .tab-drawer:not(.disabled)').click(function(){
        if (!$(this).hasClass('active')) {
            var tabNum = this.className.match(/t(\d+)/)[1];
            // Change active tab
            $(this).siblings('.tab-drawer').removeClass('active');
            $(this).addClass('active');
            // Change active content
            $(this).siblings('.content').removeClass('active').slideUp(200);
            $(this).siblings('.c' + tabNum).addClass('active').slideDown(200);
        } else {
            // Remove active state
            $(this).removeClass('active');
            // Close content
            $(this).siblings('.content').removeClass('active').slideUp(200);
        }
    });
});