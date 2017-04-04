$(document).ready(function () {
    $('.sort').each(function() {
        var parentWidth = $(this).parent().width();
        var group = this;
        var groupWidth = 0;
        $(group).find('.radio-group.direction').each(function() {
            groupWidth += $(this).outerWidth(true);
        });
        $(group).find('.radio-group:not(.direction) > label').each(function() {
            groupWidth += $(this).outerWidth();
        });
        if (parentWidth <= groupWidth) {
            $(group).find('.radio-group:not(.direction)').addClass('vertical clearfix');
            $(group).find('.radio-group.direction').removeClass('vertical').addClass('clearfix');
        }
        else {
            $(group).find('.radio-group:not(.direction)').removeClass('vertical clearfix');
            $(group).find('.radio-group.direction').addClass('vertical').removeClass('clearfix');
        }
        $(window).resize(function() {
            var parentWidth = $(group).parent().width();
            if (parentWidth <= groupWidth) {
                $(group).find('.radio-group:not(.direction)').addClass('vertical clearfix');
                $(group).find('.radio-group.direction').removeClass('vertical').addClass('clearfix');
            }
            else {
                $(group).find('.radio-group:not(.direction)').removeClass('vertical clearfix');
                $(group).find('.radio-group.direction').addClass('vertical').removeClass('clearfix');
            }
        });
    });
    
    // change sort option
    $('.sort input').on('change', function() {
        var dataType = $('input[name=sort-options]:checked').attr('data-type');
        var inputAsc = $('.sort .direction input[value="asc"]');
        var inputDesc = $('.sort .direction input[value="desc"]');
        if (dataType == 'chrono') {
            inputAsc.next('label').find('span.top').text('New').next('span.bottom').text('Old');
            inputDesc.next('label').find('span.top').text('Old').next('span.bottom').text('New');
        }
        else if (dataType == 'num') {
            inputAsc.next('label').find('span.top').text('1').next('span.bottom').text('2');
            inputDesc.next('label').find('span.top').text('2').next('span.bottom').text('1');
        }
        else if (dataType == 'alpha') {
            inputAsc.next('label').find('span.top').text('A').next('span.bottom').text('Z');
            inputDesc.next('label').find('span.top').text('Z').next('span.bottom').text('A');
        }
    });
});