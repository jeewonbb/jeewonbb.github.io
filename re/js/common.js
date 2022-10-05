var animation1 = bodymovin.loadAnimation({
  container: $('#Arw1')[0], // Required
  //path: 'https://assets2.lottiefiles.com/packages/lf20_muyl0kpg.json', // URL 직접 입력
  path: 'js/arw1.json', // 실제 사용 폴더 지정 ex) data.json
  renderer: 'svg', // Required
  loop: true, // Optional
  autoplay: true // Optional
});

var animation1 = bodymovin.loadAnimation({
  container: $('#Arw2')[0], // Required
  //path: 'https://assets2.lottiefiles.com/packages/lf20_muyl0kpg.json', // URL 직접 입력
  path: 'js/arw2.json', // 실제 사용 폴더 지정 ex) data.json
  renderer: 'svg', // Required
  loop: true, // Optional
  autoplay: true // Optional
});

var animation1 = bodymovin.loadAnimation({
  container: $('#Fly')[0], // Required
  //path: 'https://assets2.lottiefiles.com/packages/lf20_muyl0kpg.json', // URL 직접 입력
  path: 'js/fly.json', // 실제 사용 폴더 지정 ex) data.json
  renderer: 'svg', // Required
  loop: true, // Optional
  autoplay: true // Optional
});



/*const playerContainers = document.querySelectorAll(".hoverEffects");
playerContainers.forEach(container => {
  container.addEventListener("mouseover", () => {
    const player = container.querySelector("lottie-player");
    player.setDirection(1);
    player.play();
  });

  container.addEventListener("mouseleave", () => {
    const player = container.querySelector("lottie-player");
    player.setDirection(-1);
    player.play();
  });
});*/

$(document).ready(function () {
  $(".txt_list li").mouseover(function () {
      var tab_sel = $(this).attr("data-tab");
      $("#" + tab_sel).css({"transform":"translateY(0%)","z-index":"1"});
  });
  
  $(".txt_list li").mouseleave(function () {
    var tab_sel = $(this).attr("data-tab");
    $("#" + tab_sel).css({"transform":"translateY(800%)"});
    //$('.img_list').css("display", "none");
    
    timer = setTimeout(function () {
      //$("#" + tab_sel).css({"z-index":"-1","transform":"translateY(-800%)"});
      $("#" + tab_sel).css({"z-index":"-1"});

    }, 10);

    timer2 = setTimeout(function () {
      //$("#" + tab_sel).css({"z-index":"-1","transform":"translateY(-800%)"});
      $("#" + tab_sel).css({"transform":"translateY(-800%)"});

    }, 500);
  }); 

  $('.btn_top').on('click',function () {
      $('body,html').animate({
          scrollTop: 0
      }, 800);
      return false;
  });


   var $wrap = $(".wrapper"),
      pages = $(".page").length,
      scrolling = false,
      currentPage = 1,
      $navPanel = $(".nav-panel"),
      $scrollBtn = $(".scroll-btn"),
    $navBtn = $(".nav-btn");
  
  
  $(document).on("mousewheel DOMMouseScroll", function(e) {
    if (!scrolling) {
      if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
        navigateUp();
      } else { 
        navigateDown();
      }
    }
  });




});

