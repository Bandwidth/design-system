$('.interstitial').click(function(){
  $('#interstitial').show().delay(15000).fadeOut();;
});
$('.message').click(function(){
  $('#message').show();
});
$('.smaller').click(function(){
  $('#smaller').show();
});
$('.close, .button--cancel').click(function(){
  $(this).parents('.modalContainer').hide();
});
