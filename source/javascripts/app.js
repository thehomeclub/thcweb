$(document).foundation();

$(document).ready(function() {

	$('#mc-form').ajaxChimp({
    url: 'http://thehomeclub.us8.list-manage.com/subscribe/post?u=03edb19c21a3da2ef8c4e044a&amp;id=e4787c67bc'
	});

	setTimeout(function (){
	$(".outer-container").css('visibility', 'visible').addClass("animated fadeInDown");
	}, 500);

	$(window).scroll(function(){
        if ($(window).scrollTop() > 200){
            $('.intro').css('visibility', 'visible').addClass("animated fadeInDownSmall");
        }
    });

	$(window).scroll(function(){
        if ($(window).scrollTop() > 500){
            $('.preview').css('visibility', 'visible').addClass("animated bounceIn");
        }
    });


});

