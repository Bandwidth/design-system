$('.step a').click(function(){
  $(this).parents('.step').addClass('completed');
  $(document).trigger('oneComplete');
});
$('.step input').on("change paste keyup", function(){
  if ($(this).val().length > 0){
	$(this).parents('.step').addClass('completed');
	$(document).trigger('oneComplete');
  } else {
	$(this).parents('.step').removeClass('completed');
  }
});
$(window).scroll(function() {
  if($(window).scrollTop() + $(window).height() == $(document).height()) {
	$('#three').addClass('completed');
	$(document).trigger('oneComplete');
  }
});
$(document).on('oneComplete', function(){
  if($(".step").not('.completed').length == 1){
	$('#four').addClass('completed');
  };
});
$('#continue').click(function(){
  if($(".step").not('.completed').length > 0){
	$('.step').not('.completed').addClass('error');
  } else {
	window.location = "http://www.google.com";
  };
});