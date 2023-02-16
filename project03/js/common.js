let words =[]; // 입력된 글자 저장
let shiftFlag = false;
		
$(document).ready(function () {	
	$(".num_pin .num").click(function () {		
		var pNumber = $(this).find(".number").text();
	
		if (pNumber !== "취소") {
			$(".num_pin .numberinput").each(function () {
				var p = $(this).text();
				if (!p) {
					$(this).text(pNumber);
					return false;
				}
			});
		} else {
			$($(".num_pin .numberinput").get().reverse()).each(function () {
				var p = $(this).text();
				if (p) {
					$(this).text("");
					return false;
				}
			});
		}
		
		var hyphen03=$(".numberinput.hyphen03").text();
		var hyphen06=$(".numberinput.hyphen06").text();
		
		if(hyphen03 == "" ){
			$(".numberinput.hyphen03").removeClass("on");
		}else{
			$(".numberinput.hyphen03").addClass("on");
		}if(hyphen06 == "" ){
			$(".numberinput.hyphen06").removeClass("on");
		}else{
			$(".numberinput.hyphen06").addClass("on");
		}
	
	});

	//글자 입력하는 부부ㅜ
	$(".txt_pin .num").click(function () {
		var pNumber = $(this).find(".number").text();

		if (pNumber === "취소") {
			words.pop()
		} else if(pNumber === '쉬프트'){
			shiftFlag = true;
		} else {
			shiftFlag = false
			words.push(pNumber)
		}

		if(shiftFlag === false){
			$(".txt_box").css("display","block");
			$(".txt_box_shift").css("display","none");
		}else {
			$(".txt_box").css("display","none");
			$(".txt_box_shift").css("display","block");
		}
		
		$(".shift_btn").click(function () {
			$(".txt_box").css("display","block");
			$(".txt_box_shift").css("display","none");
		});


		document.querySelector('.txtinput').textContent = Hangul.assemble(words);
	});
	
	$(".inputwrapper").click(function () {
		$(".txt_box").css("display","block");
	});
	$(".t_close_btn").click(function () {
		$(this).parent("div").css("display","none");
	});
	
	$(".num.done").click(function () {
		$(this).parents(".txt_box, .txt_box_shift").css("display","none");
	});

	$(".allclear").click(function () {
		$(".inputwrapper>span").empty();
		$(".numberinput.hyphen03").removeClass("on");
		$(".numberinput.hyphen06").removeClass("on");
	});

	function allCheckFunc( obj ) {
		$("input[name=chkone]").prop("checked", $(obj).prop("checked") ).parent("li").removeClass('red_color');
	}

	function oneCheckFunc( obj )
	{
		var allObj = $("input[name=pop_allchk01]");
		var objName = $(obj).attr("name");

		if( $(obj).prop("checked") )
		{
			checkBoxLength = $("input[name="+ objName +"]").length;
			checkedLength = $("input[name="+ objName +"]:checked").length;

			if( checkBoxLength == checkedLength ) {
				allObj.prop("checked", true);
			} else {
				allObj.prop("checked", false);
			}
		}
		else
		{
			allObj.prop("checked", false);
		}
	}

	$(function(){
		$("input[name=pop_allchk01]").click(function(){
			allCheckFunc( this );
		});
		$("input[name=chkone]").each(function(){
			$(this).click(function(){
				oneCheckFunc( $(this) );
			});
		});

		$("input[name=chkone]").click(function(){
			if($(this).parent("li").hasClass("red_color")) {
			$(this).parent("li").removeClass("red_color");
			}
		});


	});

	$(".staff_btn").click(function () {
		$(".staff_call").fadeIn(300).find(".pop_cont").addClass("on");
	});
	

	$(".close_btn").click(function () {
		$(this).parent(".pop_cont").removeClass("on").parents(".pop").css("display","none");
	});


	$(".pop_btn .pop_close").click(function () {
		$(this).parents(".pop_cont").removeClass("on").parent(".pop").css("display","none");
	});

	$('.more_btn').on('click',function(){
		$(this).toggleClass('on').parent().find('ul').stop().slideToggle(500);
	});

	$(".addp_btn").click(function () {
		$(".add_parent").slideUp();
	});

	//select
	var x, i, j, l, ll, selElmnt, a, b, c;
	/*look for any elements with the class "custom-select":*/
	x = document.getElementsByClassName("custom-select");
	l = x.length;
	for (i = 0; i < l; i++) {
	  selElmnt = x[i].getElementsByTagName("select")[0];
	  ll = selElmnt.length;
	  /*for each element, create a new DIV that will act as the selected item:*/
	  a = document.createElement("DIV");
	  a.setAttribute("class", "select-selected");
	  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
	  x[i].appendChild(a);
	  /*for each element, create a new DIV that will contain the option list:*/
	  b = document.createElement("DIV");
	  b.setAttribute("class", "select-items select-hide");
	  for (j = 1; j < ll; j++) {
		/*for each option in the original select element,
		create a new DIV that will act as an option item:*/
		c = document.createElement("DIV");
		c.innerHTML = selElmnt.options[j].innerHTML;
		c.addEventListener("click", function(e) {
			/*when an item is clicked, update the original select box,
			and the selected item:*/
			var y, i, k, s, h, sl, yl;
			s = this.parentNode.parentNode.getElementsByTagName("select")[0];
			sl = s.length;
			h = this.parentNode.previousSibling;
			for (i = 0; i < sl; i++) {
			  if (s.options[i].innerHTML == this.innerHTML) {
				s.selectedIndex = i;
				h.innerHTML = this.innerHTML;
				y = this.parentNode.getElementsByClassName("same-as-selected");
				yl = y.length;
				for (k = 0; k < yl; k++) {
				  y[k].removeAttribute("class");
				}
				this.setAttribute("class", "same-as-selected");
				break;
			  }
			}
			h.click();
		});
		b.appendChild(c);
	  }
	  x[i].appendChild(b);
	  a.addEventListener("click", function(e) {
		  /*when the select box is clicked, close any other select boxes,
		  and open/close the current select box:*/
		  e.stopPropagation();
		  closeAllSelect(this);
		  this.nextSibling.classList.toggle("select-hide");
		  this.classList.toggle("select-arrow-active");
		});
	}
	function closeAllSelect(elmnt) {
	  /*a function that will close all select boxes in the document,
	  except the current select box:*/
	  var x, y, i, xl, yl, arrNo = [];
	  x = document.getElementsByClassName("select-items");
	  y = document.getElementsByClassName("select-selected");
	  xl = x.length;
	  yl = y.length;
	  for (i = 0; i < yl; i++) {
		if (elmnt == y[i]) {
		  arrNo.push(i)
		} else {
		  y[i].classList.remove("select-arrow-active");
		}
	  }
	  for (i = 0; i < xl; i++) {
		if (arrNo.indexOf(i)) {
		  x[i].classList.add("select-hide");
		}
	  }
	}
	/*if the user clicks anywhere outside the select box,
	then close all select boxes:*/
	document.addEventListener("click", closeAllSelect);


});
