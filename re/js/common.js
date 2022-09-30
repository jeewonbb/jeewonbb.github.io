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

});
