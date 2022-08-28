/*
const body = document.body;
const main = document.querySelector('.scroll_wrap');

let sx = 0;
let sy = 0;

let dx = sx;
let dy = sy;

body.style.height = main.height + 'px';

main.style.position = 'fixed';
main.style.top = 0;
main.style.left = 0;

window.addEventListener('scroll', scroll);

function scroll() {
  sx = window.pageXOffset;
  sy = window.pageYOffset;
}

window.requestAnimationFrame(render);

function render() {

  //dx = lerp(dx, sx, 0.07);
  dy = lerp(dy, sy, 0.07);
  
  //dx = Math.floor(dx * 100) / 100;
  dy = Math.floor(dy * 100) / 100;

  //body.style.transform = `translate(-${dx}px, -${dy}px)`;
  body.style.transform = `translate3d(0px, -${dy}px, 0px)`; 
  
  window.requestAnimationFrame(render);
}

function lerp(a, b, n) {
  return (1 - n) * a + n * b;
}

window.addEventListener("scroll", function () {
  const SCROLLED_HEIGHT = window.scrollY;
  const WINDOW_HEIGHT = window.innerHeight;
  const DOC_TOTAL_HEIGHT = document.body.offsetHeight;
  const IS_BOTTOM = WINDOW_HEIGHT + SCROLLED_HEIGHT === DOC_TOTAL_HEIGHT;
 
  if (IS_BOTTOM) {
    console.log('is bottom');
  }
});

/*
const $text = document.querySelector(".typing_txt");

// 글자 모음
const letters = ["Web Publisher Baek jeewon"];

// 글자 입력 속도
const speed = 100;
let i = 0;

// 타이핑 효과
const typing = async () => {  
  const letter = letters[i].split("");
  
  while (letter.length) {
    await wait(speed);
    $text.innerHTML += letter.shift(); 
  }
  
  // 잠시 대기
  await wait(800);
  
  // 지우는 효과
  if (letters[i + 1]) remove();
}

// 글자 지우는 효과
const remove = async () => {
  const letter = letters[i].split("");
  
  while (letter.length) {
    await wait(speed);
    
    letter.pop();
    $text.innerHTML = letter.join(""); 
  }
  
  // 다음 순서의 글자로 지정, 타이핑 함수 다시 실행
  i++;
  typing();
}

// 딜레이 기능 ( 마이크로초 )
function wait(ms) {
  return new Promise(res => setTimeout(res, ms))
}

// 초기 실행
setTimeout(typing, 2700);


$(function(){
  var welcomeSection = $('.welcome-section'),
  enterButton = welcomeSection.find('.enter-button');

  setTimeout(function(){
    welcomeSection.removeClass('content-hidden');
  },800);
  enterButton.on('click',function(e){
    e.preventDefault();
    welcomeSection.fadeOut();
  })
})
*/
$( document ).ready(function() {
    $(".intro .typing_txt").fadeIn();
    $(".intro").delay(3000).fadeOut().addClass('on');
    $(".about").css('margin-top','0');
    //if($('.intro').css('display') === 'flex') {
    //    $(body).css('overflow-y','hidden');
    //}
    setTimeout(function() {
        $('body').css('overflow-y','auto');
    }, 3000);

    $('.work_list li').hover(function() {
        //$(this).toggleClass('on');
        $(this).find('.img_in').fadeToggle();
    });
});	 