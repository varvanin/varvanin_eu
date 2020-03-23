$(document).ready(function() {
    "use strict";

	/* 06. Switch to Content */
	$('.navigation ul li').on('click', function() {
		var name = $(this).attr('id');
	});

	/* 07. Navigation */
	$('.bar, nav').hover(
		function() {
			$('nav').addClass('hovered');
			$('.page').addClass('filter');
			$('.bar, nav').addClass('b-open');
		},
		function() {
			$('nav').removeClass('hovered');
			$('.page').removeClass('filter');
			$('.bar, nav').removeClass('b-open');
		}
	);
});

/* 16. Mousemove transform 3D */
!(function ($doc, $win) {
	var screenWidth = $win.screen.width / 2,
		screenHeight = $win.screen.height / 2,
		$elems = $doc.getElementsByClassName("elem"),
		validPropertyPrefix = '',
		otherProperty = 'perspective(1000px)',
		elemStyle = $elems[0].style;

	if(typeof elemStyle.webkitTransform == 'string') {
		validPropertyPrefix = 'webkitTransform';
	} else if (typeof elemStyle.MozTransform == 'string') {
		validPropertyPrefix = 'MozTransform';
	}

	$doc.addEventListener('mousemove', function (e) {
		var centroX = e.clientX - screenWidth,
			centroY = screenHeight - (e.clientY + 13),
			degX = centroX * 0.004,
			degY = centroY * 0.008,
			$elem

		for (var i = 0; i < $elems.length; i++) {
   			$elem = $elems[i];
			$elem.style[validPropertyPrefix] = otherProperty + 'rotateY('+ degX +'deg)  rotateX('+ degY +'deg)';
		};
	});
})(document, window);