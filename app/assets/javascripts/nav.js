$(function() {
  var nav = $('#nav');
  var navStaticPos = nav.offset().top;
  var isFixed = false;
  var $w = $(window);
  $w.scroll(function() {
	var scrollPos = $w.scrollTop();
	var shouldBeFixed = scrollPos > navStaticPos;
	if (shouldBeFixed && !isFixed) {
		nav.css({
				position: 'fixed',
				top: 0,
				left: nav.offset().left
		});
		isFixed = true;
	}
	else if (!shouldBeFixed && isFixed) {
		nav.css({
				position: 'relative'
		});
		isFixed = false;
	}
  });
});