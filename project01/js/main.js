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
