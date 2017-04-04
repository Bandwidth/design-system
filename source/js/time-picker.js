var convertTime = function(timeString){
    var H = +timeString.substr(0, 2);
    var h = (H % 12) || 12;
    var ampm = H < 12 ? " AM" : " PM";
    timeString = h + timeString.substr(2, 3) + ampm;
    return timeString;
}

var showTime = function(){
    var val = $('input[type="time"]').val();
    val = convertTime(val);
    $('.time-picker .slider .time').html(val);
}

var changeTime = function(leftPx) {
    /*
    var currentTime = document.getElementById('activation-time').value;
    var newTime = currentTime;
    var parts = currentTime.split(':');
    var hour = parseInt(parts[0]);
    var minute = parseInt(parts[1]);
    
    if (direction == "earlier") {
        if (minute >= 15) {
            minute -= 15;
        } else {
            minute = 45;
            hour -= 1;
        }
    }
    else if (direction == "later") {
        if (minute <= 30) {
            minute += 15;
        } else {
            minute = 0;
            hour += 1;
        }
    }
    hour = ("0" + hour).slice(-2);
    minute = ("0" + minute).slice(-2);
    newTime = hour + ':' + minute;
    $('input[type="time"]').val(newTime);
    */
    
    var times = {
        0: "05:00", 5: "05:15", 10: "05:30", 15: "05:45",
        20: "06:00", 25: "06:15", 30: "06:30", 35: "06:45",
        40: "07:00", 45: "07:15", 50: "07:30", 55: "07:45",
        60: "08:00", 65: "08:15", 70: "08:30", 75: "08:45",
        80: "09:00", 85: "09:15", 90: "09:30", 95: "09:45",
        100: "10:00", 105: "10:15", 110: "10:30", 115: "10:45",
        120: "11:00", 125: "11:15", 130: "11:30", 135: "11:45",
        140: "12:00", 145: "12:15", 150: "12:30", 155: "12:45",
        160: "13:00", 165: "13:15", 170: "13:30", 175: "13:45",
        180: "14:00", 185: "14:15", 190: "14:30", 195: "14:45",
        200: "15:00", 205: "15:15", 210: "15:30", 215: "15:45",
        220: "16:00", 225: "16:15", 230: "16:30", 235: "16:45",
        240: "17:00", 245: "17:15", 250: "17:30", 255: "17:45",
        260: "18:00", 265: "18:15", 270: "18:30", 275: "18:45",
        280: "19:00", 285: "19:15", 290: "19:30", 295: "19:45",
        300: "20:00", 305: "20:15", 310: "20:30", 315: "20:45",
        320: "21:00", 325: "21:15", 330: "21:30", 335: "21:45",
        340: "22:00"
    };
    
    $('input[type="time"]').val(times[leftPx]);
    showTime();
}

var updateSlider = function(leftPx){
    // Change time
    changeTime(leftPx);
    
    // Change border color
    if (leftPx < 61 || leftPx > 299) {
        $('.time-picker .slider').addClass('ext');
    } else {
        $('.time-picker .slider').removeClass('ext');
    }
    
    // Prev/next arrows
    if (leftPx >= 340) {
        $('.time-picker .slider .icons8-forward').addClass('disabled');
    } else {
        $('.time-picker .slider .icons8-forward').removeClass('disabled');
    }
    if (leftPx <= 0) {
        $('.time-picker .slider .icons8-back').addClass('disabled');
    } else {
        $('.time-picker .slider .icons8-back').removeClass('disabled');
    }
}

$(document).ready(function(){
    showTime();
    $('input[type="time"]').change(showTime);
    
    // left value ranges 0-60, 65-295, 300-340
    var leftPx = parseInt($('.time-picker .slider').css("left"));
    
    // Make the time slider draggable
    $('.time-picker .slider').draggable({
        axis: 'x',
        grid: [ 5, 0 ],
        containment: 'parent',
        drag: function() {
            leftPx = parseInt($('.time-picker .slider').css("left"));
            updateSlider(leftPx);
        },
        stop: function() {
            leftPx = parseInt($('.time-picker .slider').css("left"));
            updateSlider(leftPx);
        }
    });
    
    // Disable prev link when far left
    if (leftPx <= 0) {
        $('.time-picker .slider .icons8-back').addClass('disabled');
    }
    // Disable next link when far right
    if (leftPx >= 340) {
        $('.time-picker .slider .icons8-forward').addClass('disabled');
    }
    
    // Click prev
    $('.time-picker .slider .icons8-back').click(function(){
        $('.time-picker .slider .icons8-forward').removeClass('disabled');
        if (leftPx > 0) {
            // Decrease left position
            leftPx -= 5;
            
            updateSlider(leftPx);
            
            // Move slider
            $('.time-picker .slider').css('left', leftPx + 'px');
            
            // Decrease value by step, down to minimum
            //changeTime('earlier');
        }
    });
    
    // Click next
    $('.time-picker .slider .icons8-forward').click(function(){
        $('.time-picker .slider .icons8-back').removeClass('disabled');
        if (leftPx < 340) {
            // Increase left position
            leftPx += 5;
            
            updateSlider(leftPx);
            
            // Move slider
            $('.time-picker .slider').css('left', leftPx + 'px');
            
            // Increase value by step, up to maximum
            //changeTime('later');
        }
    });
});