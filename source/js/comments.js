$(document).ready(function () {
    // Max width is set to 36em in case the base font size changes
    $('.comments').each(function() {
        var parentWidth = $(this).parent().width();
        var parentEm = parentWidth / parseFloat($("body").css("font-size"));
        var group = this;
        if (parentEm <= 36) {
            $(group).addClass('compressed');
        }
        else {
            $(group).removeClass('compressed');
        }
        $(window).resize(function() {
            var parentWidth = $(group).parent().width();
            var parentEm = parentWidth / parseFloat($("body").css("font-size"));
            if (parentEm <= 36) {
                $(group).addClass('compressed');
            }
            else {
                $(group).removeClass('compressed');
            }
        });
    });
});