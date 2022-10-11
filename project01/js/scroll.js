$(document).ready(function () {
    $(window).scroll(function () {
      
      
      //alert();
      var aa = $('.imgslide').offset();
      var scT = $(window).scrollTop();
      var scBtm = scT+$(window).height();
      var slide01 = $('.section01 .imgslide').offset().top;
      var slide02 = $('.section02 .imgslide').offset().top;
      var slide03 = $('.section03 .imgslide').offset().top;
      var slide04 = $('.section04 .imgslide').offset().top;
      var slide05 = $('.section05 .imgslide').offset().top;
      var nav = $('.nav_title').offset().top;
      var scF = $('.sub_footer').offset().top;
   
    console.log("slide01 :" + slide01);
    console.log("slide02 :" + slide02);
    console.log("slide03 :" + scF);
   
      if(scBtm >= slide01){
        console.log("scT :" + scT);
        console.log("scBtm :" + scBtm);
        console.log("1 :");
         $('.section01 .imgslide').css('transform','translate(0)');
      }
      if(scBtm >= slide02){
         $('.section02 .imgslide').css('transform','translateX(0)');
      }
      if(scBtm >= slide03){
         $('.section03 .imgslide').css('transform','translateX(0)');
      }
      if(scBtm >= slide04){
         $('.section04 .imgslide').css('transform','translateX(0)');
      }
      if(scBtm >= slide05){
         $('.section05 .imgslide').css('transform','translateX(0)');
      }
       
       if (scF < nav) {
         
         if($(".nav_title").hasClass("left")) {
            $('.nav_title.left').css('transform','translateX(-250%)');
         }
         if ($(".nav_title").hasClass("right")) {
            $('.nav_title.right').css('transform','translateX(250%)');
         }
			
      }else{
         $('.nav_title').css('transform','translateX(0)');
      }
       
   });
      /*var scT = $(window).scrollTop();
      var scBtm = scT+$(window).height();
      var slide01 = $('.section .from_right').offset().top;
      var slide02 = $('.section .from_left').offset().top;
      var nav = $('.nav_title').offset().top;
      var scF = $('.sub_footer').offset().top;
      
       
      $(".section .from_left").each(function (){
         if (scBtm >= slide01) {
         console.log("scT :" + scT);
         console.log("scBtm :" + scBtm);
         console.log("1 :");
            $('.section .from_left').css('transform','translate(0)');
         }else{
         console.log("2 :");
            $('.section .from_left').css('transform','translate(-250%)');
         }
      });
      
       
      $(".section .from_right").each(function (){
         if (scBtm >= slide01) {
         console.log("scT :" + scT);
         console.log("scBtm :" + scBtm);
         console.log("1 :");
            $('.section .from_right').css('transform','translate(0)');
         }else{
         console.log("2 :");
            $('.section .from_right').css('transform','translate(250%)');
         }
      });
       
      if(scF < nav){
			$('.nav_title').css('transform','translateX(250%)');
      }else{
            $('.nav_title').css('transform','translateX(0)');
      }
      
   });*/
});