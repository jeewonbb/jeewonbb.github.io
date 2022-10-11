	$(window).scroll(function(){
		var scT = $(window).scrollTop();
		var scBtm = scT+$(window).height();
		var slide01 = $('.section01>.imgslide').offset().top;
		var slide02 = $('.section02>.imgslide').offset().top;
		var slide03 = $('.section03>.imgslide').offset().top;
		var slide04 = $('.section04>.imgslide').offset().top;
		var slide05 = $('.section05>.imgslide').offset().top;
		var nav = $('.nav_title').offset().top;
		var nav01 = $('.nav_title01').offset().top;
		var scF = $('#footer').offset().top;

		if(scBtm >= slide01){
			$('.section01>.imgslide').css('transform','translate(0)');
		}else{
			$('.section01>.imgslide').css('transform','translate(250%)');
		}
		if(scBtm >= slide02){
			$('.section02>.imgslide').css('transform','translateX(0)');
		}else{
			$('.section02>.imgslide').css('transform','translateX(-250%)');
		}
		if(scBtm >= slide03){
			$('.section03>.imgslide').css('transform','translateX(0)');
		}else{
			$('.section03>.imgslide').css('transform','translateX(250%)');
		}
		if(scBtm >= slide04){
			$('.section04>.imgslide').css('transform','translateX(0)');
		}else{
			$('.section04>.imgslide').css('transform','translateX(-250%)');
		}
		if(scBtm >= slide05){
			$('.section05>.imgslide').css('transform','translateX(0)');
		}else{
			$('.section05>.imgslide').css('transform','translateX(250%)');
		}
		if(scF < nav){
			$('.nav_title').css('transform','translateX(250%)');
		}else{
			$('.nav_title').css('transform','translateX(0)');
		}
		if(scF < nav01){
			$('.nav_title01').css('transform','translateX(-250%)');
		}else{
			$('.nav_title01').css('transform','translateX(0)');
		}
});

		$(document).ready(function(){
			var vdo = $('.imgslide02 #myvideo').get(0);
			$('.imgslide02 .click_btn').on('click',function(){
			vdo.play();

			$('.imgslide02 #myvideo').on('click',function(){
			vdo.pause();
			})
			
			})
})

	$(document).ready(function(){
			var vdo = $('.imgslide04 #myvideo02').get(0);
			$('.imgslide04 .click_btn02').on('click',function(){
			vdo.play();

			$('.imgslide04 #myvideo02').on('click',function(){
			vdo.pause();
			})
			
			})
})