var searchField = $('#number-search > .form-input > input');

searchField.on('change paste keyup', function(){
    if ($(this).val().length >= 3){
        $('#searchButton').attr('disabled', false);
    } else {
        $('#searchButton').attr('disabled', true);
    };
});

$('#searchButton').click(function(){
    $('#results-container').show();
    $('#buy-numbers > h1, #number-search').hide();
    $('#input-text').val("");
    $(this).attr('disabled', true);
});
