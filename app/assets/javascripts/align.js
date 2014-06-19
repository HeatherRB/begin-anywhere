$(function() {
  valign('#big_logo','35%','50%');
  valign('#earlyAccess','70%','50%');
  valign('#learnMore','90%','50%');
  valign('#text1','50%','50%');
  valign('#formContainer','50%','50%');
  valign('#yellowChevron','90%','50%');
});

valign = function(element_id,top_pos,left_pos) {
	var x = $(element_id);
	x.css({
		  position: 'absolute',
		  height: x.height(),
		  width: x.width(),
		  left: left_pos,
		  top: top_pos,
		  'margin-left': -x.width()/2,
		  'margin-top': -x.height()/2
		  });
}