$(function() {
  valign('#barText1');
  valign('#barText2');
});

valign = function(element) {
	var x = $(element);
	x.css({
		  position: 'absolute',
		  height: x.height(),
		  width: x.width(),
		  left: '50%',
		  top: '50%',
		  'margin-left': -x.width()/2,
		  'margin-top': -x.height()/2
		  });
}