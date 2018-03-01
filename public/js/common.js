
var navL = document.querySelector('.select_language');
    var footL = document.querySelector('.footer_select_language');
    var one = document.getElementById("one");
    var two = document.getElementById("two");
    var one_f = document.getElementById("one_f");
    var two_f = document.getElementById("two_f");
    navL.addEventListener("click", function () {
        one.classList.toggle('ttt');
        two.classList.toggle('ttt');
    });
    footL.addEventListener("click", function () {
        one_f.classList.toggle('ttt');
        two_f.classList.toggle('ttt');
    });
    if (one.classList.contains('active') && one_f.classList.contains('active')) {
        one.style.pointerEvents = "none";
        one_f.style.pointerEvents = "none";
        two.style.display = "none";
        two_f.style.display = "none";

    } else if (two.classList.contains('active') && two_f.classList.contains('active')) {
        two.style.pointerEvents = "none";
        two_f.style.pointerEvents = "none";
        one.style.display = "none";
        one_f.style.display = "none";
    }
$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	}
	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail

});

