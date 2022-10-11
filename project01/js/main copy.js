$(window).scroll(function(){
		var scT = $(window).scrollTop();
		var scBtm = scT+$(window).height();
		var slide01 = $('.section01').offset().top;
		var slide02 = $('.section02').offset().top;
		var slide03 = $('.section03').offset().top;
		var slide04 = $('.section04').offset().top;
		var slide05 = $('.section05').offset().top;
		var nav = $('.nav_wrap').offset().top;
		//let nav01 = $('.nav_title01').offset().top;
		var scF = $('.sub_footer').offset().top;
        

		if(scT >= slide01){
            $('.section01 .imgslide').addClass('on');
        } else {
			$('.section01 .imgslide').remove('on');
        }
		if(scT >= slide02){
			$('.section02 .imgslide').css('transform','translateX(0)');
		}else{
			$('.section02 .imgslide').css('transform','translateX(-250%)');
		}
		if(scBtm >= slide03){
			$('.section03 .imgslide').css('transform','translateX(0)');
		}else{
			$('.section03 .imgslide').css('transform','translateX(250%)');
		}
		if(scBtm >= slide04){
			$('.section04 .imgslide').css('transform','translateX(0)');
		}else{
			$('.section04 .imgslide').css('transform','translateX(-250%)');
		}
		if(scBtm >= slide05){
			$('.section05 .imgslide').css('transform','translateX(0)');
		}else{
			$('.section05 .imgslide').css('transform','translateX(250%)');
		}
		if(scF < nav){
			$('.nav_title').css('transform','translateX(250%)');
		}else{
			$('.nav_title').css('transform','translateX(0)');
		}
		if(scF < nav){
			$('.nav_title').css('transform','translateX(-250%)');
		}else{
			$('.nav_title').css('transform','translateX(0)');
		}
	});

$(document).ready(function () {
    if ($('.main').hasClass('main_home')) { 
        $('.wrap').addClass('main_home').removeClass('sub');
        $('body').addClass('main_home');
        $('header p').text('Celebra con noi il 45° Anniversario di Nike Cortez');
    }
    else if ($('.main').hasClass('sub01')) { 
        $('.wrap').addClass('sub01');
        $('.f_menu>li:first-child').addClass('on');
    }
    else if ($('.main').hasClass('sub02')) { 
        $('.wrap').addClass('sub02');
        $('.f_menu>li:nth-child(2)').addClass('on');
    }
    else if ($('.main').hasClass('sub03')) { 
        $('.wrap').addClass('sub03');
        $('.f_menu>li:nth-child(3)').addClass('on');
    }
    else if ($('.main').hasClass('sub04')) { 
        $('.wrap').addClass('sub04');
        $('.f_menu>li:last-child').addClass('on');
    }

	$('.imgslide .click_btn').click(function () {
		$(this).next('video').get(0).play();
	});

	$('.imgslide video').click(function () {
		$(this).get(0).pause();
	});
	
	$(".loading_bg").show(3000);
	$(".loading_img").fadeIn(1000);
	$(".loading_img").fadeOut();
	$(".loading_bg").delay(1500).fadeOut();

	$('.box_in .box').hover(function () {
		var playTab = $(this).attr('data-tab');
		$('.box_in').toggleClass('on');
		$(this).addClass('play').siblings().removeClass('play');
		$('.' + playTab).toggleClass('play').siblings().removeClass('play');
    });

    
    
});
