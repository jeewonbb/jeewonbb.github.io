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

$(".txt_list li").mouseover(function () {
  var tab_sel = $(this).attr("data-tab");
  $("#" + tab_sel).css({"transform":"translateY(0%)","z-index":"1"});
});

$(".txt_list li").mouseleave(function () {
var tab_sel = $(this).attr("data-tab");
$("#" + tab_sel).css({"transform":"translateY(800%)"});

timer = setTimeout(function () {
  $("#" + tab_sel).css({"z-index":"-1"});
}, 10);

timer2 = setTimeout(function () {
  $("#" + tab_sel).css({"transform":"translateY(-800%)"});
}, 500);
}); 

$(".txt_wrap .left_t").css({"transform":"translateY(100%)"});

$(function(){
  $(window).resize(function () {
      var width = $(window).width();
      if (width>=768) {
        
        var $wrap = $(".scroll_wrap"),
            pages = $(".page").length,
            scrolling = false,
            currentPage = 1,
            $navPanel = $(".nav-panel"),
            $scrollBtn = $(".scroll-btn"),
            $navBtn = $(".nav-btn");
            
        /*****************************
        ***** NAVIGATE FUNCTIONS *****
        *****************************/
        function manageClasses() {
          $wrap.removeClass(function (index, css) {
            return (css.match (/(^|\s)active-page\S+/g) || []).join(' ');
          });
          $wrap.addClass("active-page" + currentPage);
          $navBtn.removeClass("active");
          $(".nav-btn.nav-page" + currentPage).addClass("active");
          $navPanel.addClass("invisible");
          scrolling = true;
          setTimeout(function() {
            $navPanel.removeClass("invisible");
            scrolling = false;
          }, 1000);
        }
        function navigateUp() {
          if (currentPage > 1) {
            currentPage--;
            if (Modernizr.csstransforms) {
              manageClasses();
            } else {
              $wrap.animate({"top": "-" + ( (currentPage - 1) * 100) + "%"}, 1000);
            }
          }
        }
      
        function navigateDown() {
          if (currentPage < pages) {
            currentPage++;
            if (Modernizr.csstransforms) {
              manageClasses();
            } else {
              $wrap.animate({"top": "-" + ( (currentPage - 1) * 100) + "%"}, 1000);
            }
          }
        }
      
        /*********************
        ***** MOUSEWHEEL *****
        *********************/
        $(document).on("mousewheel DOMMouseScroll", function(e) {
          if (!scrolling) {
            if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
              navigateUp();
            } else { 
              navigateDown();
            }
          }
        });
      
        /**************************
        ***** RIGHT NAVIGATION ****
        **************************/
      
        /* NAV UP/DOWN BTN PAGE NAVIGATION */
        $(document).on("click", ".scroll-btn", function() {
          if ($(this).hasClass("up")) {
            navigateUp();
          } else {
            navigateDown();
          }
        });
      
        /* NAV CIRCLE DIRECT PAGE BTN */
        $(document).on("click", ".nav-btn:not(.active)", function() {
          if (!scrolling) {
            var target = $(this).attr("data-target");
            if (Modernizr.csstransforms) {
              $wrap.removeClass(function (index, css) {
                return (css.match (/(^|\s)active-page\S+/g) || []).join(' ');
              });
              $wrap.addClass("active-page" + target);
              $navBtn.removeClass("active");
              $(this).addClass("active");
              $navPanel.addClass("invisible");
              currentPage = target;
              scrolling = true;
              setTimeout(function() {
                $navPanel.removeClass("invisible");
                scrolling = false; 
              }, 1000);
            } else {
              $wrap.animate({"top": "-" + ( (target - 1) * 100) + "%"}, 1000);
            }
          }
        });
      } else if (width < 767){
        $(".btn_top").click(function(){
          $('html, body').stop().animate( { scrollTop : 0 } );
        })
        $('.btn_bubble').click(function(){
          $('html, body').stop().animate({scrollTop: $(".home_footer").offset().top - 10}, 500);
        });
      }
  });
  $(window).trigger("resize"); 
});




$(document).ready(function () {
  

  ///////////////////////////////////

  /*
  var $wrap = $(".scroll_wrap"),
      pages = $(".page").length,
      scrolling = false,
      currentPage = 1,
      $navPanel = $(".nav-panel"),
      $scrollBtn = $(".scroll-btn"),
      $navBtn = $(".nav-btn");
      
  //////////////////////////////
  ***** NAVIGATE FUNCTIONS *****
  //////////////////////////////
  function manageClasses() {
    $wrap.removeClass(function (index, css) {
      return (css.match (/(^|\s)active-page\S+/g) || []).join(' ');
    });
    $wrap.addClass("active-page" + currentPage);
    $navBtn.removeClass("active");
    $(".nav-btn.nav-page" + currentPage).addClass("active");
    $navPanel.addClass("invisible");
    scrolling = true;
    setTimeout(function() {
      $navPanel.removeClass("invisible");
      scrolling = false;
    }, 1000);
  }
  function navigateUp() {
    if (currentPage > 1) {
      currentPage--;
      if (Modernizr.csstransforms) {
        manageClasses();
      } else {
        $wrap.animate({"top": "-" + ( (currentPage - 1) * 100) + "%"}, 1000);
      }
    }
  }

  function navigateDown() {
    if (currentPage < pages) {
      currentPage++;
      if (Modernizr.csstransforms) {
        manageClasses();
      } else {
        $wrap.animate({"top": "-" + ( (currentPage - 1) * 100) + "%"}, 1000);
      }
    }
  }

  //////////////////////
  ***** MOUSEWHEEL *****
  //////////////////////
  $(document).on("mousewheel DOMMouseScroll", function(e) {
    if (!scrolling) {
      if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
        navigateUp();
      } else { 
        navigateDown();
      }
    }
  });

  ///////////////////////////
  ***** RIGHT NAVIGATION ****
  ///////////////////////////

  ///////////////////////////////////
  * NAV UP/DOWN BTN PAGE NAVIGATION *
  ///////////////////////////////////
  $(document).on("click", ".scroll-btn", function() {
    if ($(this).hasClass("up")) {
      navigateUp();
    } else {
      navigateDown();
    }
  });

  //////////////////////////////
  * NAV CIRCLE DIRECT PAGE BTN *
  //////////////////////////////
  $(document).on("click", ".nav-btn:not(.active)", function() {
    if (!scrolling) {
      var target = $(this).attr("data-target");
      if (Modernizr.csstransforms) {
        $wrap.removeClass(function (index, css) {
          return (css.match (/(^|\s)active-page\S+/g) || []).join(' ');
        });
        $wrap.addClass("active-page" + target);
        $navBtn.removeClass("active");
        $(this).addClass("active");
        $navPanel.addClass("invisible");
        currentPage = target;
        scrolling = true;
        setTimeout(function() {
          $navPanel.removeClass("invisible");
          scrolling = false; 
        }, 1000);
      } else {
        $wrap.animate({"top": "-" + ( (target - 1) * 100) + "%"}, 1000);
      }
    }
  });
  
  */
 
    var random = Math.floor(Math.random() * $('.loading_page p').length);
    $('.loading_page p').hide().eq(random).hide();

    /*
    $(window).resize(function(){ 
      if (window.innerWidth < 480) {
        $(".scroll_wrap > *").removeClass("page");
      } else { 
        $(".scroll_wrap > *").addClass("page");
      }
    }).resize();
    */
  });