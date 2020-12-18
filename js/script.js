var btn = document.getElementById('btn');
btn.onclick = function (e) {
	e.preventDefault();
	var text = document.querySelector('.subtitle__header');
	text.classList.add('purple');
}

// $(function () {
// 	$(window).scroll(function () {
// 		$('.free-time').each(function () {
// 			var imagePos = $(this).offset().top;

// 			var topOfWindow = $(window).scrollTop();
// 			if (imagePos < topOfWindow + 650) {
// 				$(this).addClass("fadeInLeft");
// 			}
// 		});
// 	});
// })

$('.skills').css('display', 'none')
$(window).one('scroll', () => {
	$('.skills').fadeIn(3000)
})
