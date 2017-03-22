var value = 0;
var increment = 1;
var ceiling = 100;
var interval = 0;
var simulateUpload = function(){
    if (value < ceiling) {
        value += increment;
    }
    else if (value == ceiling) {
        clearInterval(interval);
        $('.file-loader .icons8-checkmark').fadeIn(200);
        $('.file-loader a.remove').css('opacity',0);
        setTimeout(function(){
            $('.file-loader a.remove').html('Remove').css('opacity',1);
        }, 200);
    }
    $('.file-loader .icon-full').css('height', value + '%');
    $('.file-loader .percent').html(value + '%');
}
$(document).ready(function () {
    $('button.launch-loader').click(function(){
        $(this).fadeOut(200);
        setTimeout(function(){
            $('.file-loader').fadeIn(200);
        }, 200);
        setTimeout(function(){
            interval = setInterval(simulateUpload, 100);
        }, 600);
    });
    $('.file-loader a.remove').click(function(){
        $(this).closest('.file-loader').fadeOut(200);
        setTimeout(function(){
            $('button.launch-loader').fadeIn(200);
            value = 0;
            clearInterval(interval);
            $('.file-loader .icons8-checkmark').hide();
            $('.file-loader .icon-full').css('height', '0%');
            $('.file-loader .percent').html('0%');
            $('.file-loader a.remove').html('Cancel');
        }, 200);
        return false;
    });
});