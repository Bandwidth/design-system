$(document).ready(function () {
    $('.radio-group').each(function() {
        var parentWidth = $(this).parent().width();
        var group = this;
        var groupWidth = 0;
        $(group).find(' > label').each(function() {
            groupWidth += $(this).outerWidth();
        });
        if (parentWidth <= groupWidth) {
            $(group).addClass('vertical');
        }
        else {
            $(group).removeClass('vertical');
        }
        $(window).resize(function() {
            var parentWidth = $(group).parent().width();
            if (parentWidth <= groupWidth) {
                $(group).addClass('vertical');
            }
            else {
                $(group).removeClass('vertical');
            }
        });
    });
});