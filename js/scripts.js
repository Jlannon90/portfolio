$(function () {
  //hamburger menu
	$('.hamburger-menu').on('click', function() {
		$('.bar').toggleClass('animate');
    $('.menu').fadeToggle(800);
	});
  //custom carousel

  $('.right-arrow').on('click', function() {
    $('.proj-title, .proj-img, .proj-desc, .left-arrow, .right-arrow').hide();
		$('.proj-title-2, .proj-img-2, .proj-desc-2, .left-arrow-2, .right-arrow-2').show();
	});
  $('.left-arrow-2').on('click', function() {
    $('.proj-title, .proj-img, .proj-desc, .left-arrow, .right-arrow').show();
		$('.proj-title-2, .proj-img-2, .proj-desc-2, .left-arrow-2, .right-arrow-2').hide();
	});

  $('.right-arrow-2').on('click', function() {
    $('.proj-title-2, .proj-img-2, .proj-desc-2, .left-arrow-2, .right-arrow-2').hide();
		$('.proj-title-3, .proj-img-3, .proj-desc-3, .left-arrow-3, .right-arrow-3').show();
	});
  $('.left-arrow-3').on('click', function() {
    $('.proj-title-2, .proj-img-2, .proj-desc-2, .left-arrow-2, .right-arrow-2').show();
		$('.proj-title-3, .proj-img-3, .proj-desc-3, .left-arrow-3, .right-arrow-3').hide();
	});

  $('.right-arrow-3').on('click', function() {
    $('.proj-title-3, .proj-img-3, .proj-desc-3, .left-arrow-3, .right-arrow-3').hide();
		$('.proj-title-4, .proj-img-4, .proj-desc-4, .left-arrow-4, .right-arrow-4').show();
	});
  $('.left-arrow-4').on('click', function() {
    $('.proj-title-3, .proj-img-3, .proj-desc-3, .left-arrow-3, .right-arrow-3').show();
		$('.proj-title-4, .proj-img-4, .proj-desc-4, .left-arrow-4, .right-arrow-4').hide();
	});

  $('.right-arrow-4').on('click', function() {
    $('.proj-title-4, .proj-img-4, .proj-desc-4, .left-arrow-4, .right-arrow-4').hide();
		$('.proj-title-5, .proj-img-5, .proj-desc-5, .left-arrow-5, .right-arrow-5').show();
	});
  $('.left-arrow-5').on('click', function() {
    $('.proj-title-4, .proj-img-4, .proj-desc-4, .left-arrow-4, .right-arrow-4').show();
		$('.proj-title-5, .proj-img-5, .proj-desc-5, .left-arrow-5, .right-arrow-5').hide();
	});

  $('.right-arrow-5').on('click', function() {
    $('.proj-title-5, .proj-img-5, .proj-desc-5, .left-arrow-5, .right-arrow-5').hide();
		$('.proj-title-6, .proj-img-6, .proj-desc-6, .left-arrow-6, .right-arrow-6').show();
	});
  $('.left-arrow-6').on('click', function() {
    $('.proj-title-5, .proj-img-5, .proj-desc-5, .left-arrow-5, .right-arrow-5').show();
		$('.proj-title-6, .proj-img-6, .proj-desc-6, .left-arrow-6, .right-arrow-6').hide();
	});

  $('.right-arrow-6').on('click', function() {
    $('.proj-title-6, .proj-img-6, .proj-desc-6, .left-arrow-6, .right-arrow-6').hide();
    $('.proj-title, .proj-img, .proj-desc, .left-arrow, .right-arrow').show();
  });
  $('.left-arrow').on('click', function() {
    $('.proj-title-6, .proj-img-6, .proj-desc-6, .left-arrow-6, .right-arrow-6').show();
    $('.proj-title, .proj-img, .proj-desc, .left-arrow, .right-arrow').hide();
  });

  //scrolling
  $("a").on('click', function(event) {

  if (this.hash !== "") {
    event.preventDefault();

    var hash = this.hash;

    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 1800, function(){
      window.location.hash = hash;
    });
  }
});

})();
