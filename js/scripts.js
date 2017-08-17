$(function () {
	$('.hamburger-menu').on('click', function() {
		$('.bar').toggleClass('animate');
    $('.menu').fadeToggle(800);
	})
  $('.right-arrow').on('click', function() {
    $('.proj-title, .proj-img, .proj-desc, .left-arrow, .right-arrow').hide();
		$('.proj-title-2, .proj-img-2, .proj-desc-2, .left-arrow-2, .right-arrow-2').show();
	})
  $('.left-arrow-2').on('click', function() {
    $('.proj-title, .proj-img, .proj-desc, .left-arrow, .right-arrow').show();
		$('.proj-title-2, .proj-img-2, .proj-desc-2, .left-arrow-2, .right-arrow-2').hide();
	})

})();
