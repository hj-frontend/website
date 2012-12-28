
(function(){

/*
 * @name Enhancement for jBox
 * @author flashlizi
 * @date 2012/12/19
 */

if($ && $.jBox){
	var _jBox = $.jBox, defaults = _jBox.defaults;

	//default position&autoPosition configuration
	if(defaults.position == undefined) defaults.position = {left:0.5, top:0.5};
	if(defaults.autoPosition == undefined) defaults.autoPosition = false;

	//add moveTo() ability for jBox
	_jBox.moveTo = function(left, top){
		var boxElem = $("#jbox");
		if(!boxElem) return;

		var winWidth = $(window).width(), 
			winHeight = $(window).height(),
			boxWidth = boxElem.width(),
			boxHeight = boxElem.height();
		
		left = Math.abs(left) < 1 ? Math.round((winWidth - boxWidth) * left) : left;
		top = Math.abs(top) < 1 ? Math.round((winHeight - boxHeight) * top) : top;
		boxElem.css({left:left + "px", top:top + "px"});
	}

	//reconstruct the jBox constructor for positioning at startup
	$.jBox = function(){
		_jBox.apply(this, arguments);
		if(defaults.position){
			jBox.moveTo(defaults.position.left, defaults.position.top);
		}
	}
	$.extend($.jBox, _jBox);

	//auto position when resize window
	$(window).resize(function(){
		if(defaults.autoPosition && Math.abs(defaults.position.left) < 1){
			$.jBox.moveTo(defaults.position.left, defaults.position.top);
		}
	});
}


})();

