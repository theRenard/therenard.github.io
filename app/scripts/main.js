// global vars


// history.js

//(function(window,undefined){

    //History.Adapter.bind(window,'statechange',function(){});

//})(window);

// background

var t = new Trianglify({/*x_gradient: colorbrewer.PuOr[9],*/noiseIntensity: 0, cellsize: 90});
var pattern = t.generate(document.body.clientWidth + 200, document.body.clientHeight + 200);

//document.body.setAttribute('style', 'background-image: '+pattern.dataUrl);

jQuery(document).ready(function($) {
	console.log($)
	window.$body = $('body'),
	window.$logo = $('#logo'),
	window.$container = $('#container'),
	window.$background = $('#background');

	window.$background.css('background-image', pattern.dataUrl );

});

$(window).load(function() {

	var $div = $('#social li'),
	    $a = $div.find('a');

	var tween = new TimelineMax();

	tween
		.to(window.$body, .5, {opacity:1}, 'tween#1')
		.from(window.$body, .5, {scale:0.90, ease:Back.easeOut}, 'tween#1')
		.from(window.$logo, .5, {y: +200, opacity: 0, scale:0.90, ease:Back.easeOut}, 'tween#2')
		.staggerTo($div, .5, {y:-50, scale:0.5, opacity:1, rotation:360, delay:1, ease:Back.easeOut}, 0.1, 'tween#2')
		.staggerTo($a, .5, { opacity:1, delay:0, ease:Back.easeOut}, 0.1, 'tween#2');

	// hover effect
/*
	$div.hover(function() {
	  	tween_2 = TweenMax.to($(this), 0.5, {css:{borderRadius:0, backgroundColor:"transparent", color:'rgba(0,0,0,0.2)'}});
	  },
	  function() {
	  	tween_2.reverse();
	}
	);
*/

	TweenMax.set(window.$background, {perspective:800, transformStyle:"preserve-3d"/* , backfaceVisibility:"hidden" */})

	function moveBackground(e) {

	  var xPos = Math.floor((e.pageX / document.body.clientWidth) * 100),
	  	  yPos = Math.floor((e.pageY / document.body.clientHeight) * 100);

	  	if (xPos < 50) {
		  	xPos = (-50 + xPos)/3;
	  	} else {
		  	xPos = Math.abs((-50 + xPos)/3);
	  	}

	  	if (yPos < 50) {
		  	yPos = (-50 + yPos)/3;
	  	} else {
		  	yPos = Math.abs((-50 + yPos)/3);
	  	}

		TweenMax.to(window.$background, 1, {rotationX: yPos, rotationY: xPos, ease:Back.easeOut});

	  //console.log('y:', yPos);

	}

	$(window).on('mousemove', moveBackground);

	//moveBackground();

});
