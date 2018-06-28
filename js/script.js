$(document).ready(function() {
function range(){
	var
	val = $('.range').val();
	$('.range').css({'background':'-webkit-linear-gradient(left ,#8870FF 0%,#8870FF '+val+'%,#fff '+val+'%, #fff 100%)'});
 }

  $("#down").click(function(){   
   			$("#menu").slideToggle(200);
   		});
   $(function() {
 
$(window).scroll(function() {
 
if($(this).scrollTop() != 0) {
 
$('#toTop').fadeIn();
 
} else {
 
$('#toTop').fadeOut();
 
}
 
});
 
$('#toTop').click(function() {
 
$('body,html').animate({scrollTop:0},800);
 
}); 
}); 

});  