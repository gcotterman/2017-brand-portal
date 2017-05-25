$(function(){
		fullpage.initialize('#fullpage', {
		//Navigation
		//'menu': false,
		menu: '#menu',
		lockAnchors: false,
		anchors:['slide1', 'slide2', 'slide3'],
		navigation: false,
		navigationPosition: 'right',
		navigationTooltips: ['slide1', 'slide2'],
		showActiveTooltip: true,
		slidesNavigation: true,
		slidesNavPosition: 'bottom',

		//Scrolling
		css3: true,
		scrollingSpeed: 1000,
		autoScrolling: true,
		fitToSection: true,
		fitToSectionDelay: 1000,
		scrollBar: false,
		easing: 'easeInOutCubic',
		easingcss3: 'ease',
		loopBottom: false,
		loopTop: false,
		loopHorizontal: true,
		continuousVertical: false,
		continuousHorizontal: false,
		scrollHorizontally: false,
		interlockedSlides: false,
		dragAndMove: true,
		offsetSections: false,
		resetSliders: false,
		fadingEffect: false,
		normalScrollElements: '#element1, .element2',
		scrollOverflow: false,
		scrollOverflowReset: false,
		scrollOverflowOptions: null,
		touchSensitivity: 15,
		normalScrollElementTouchThreshold: 5,
		bigSectionsDestination: null,

		//Accessibility
		keyboardScrolling: true,
		animateAnchor: true,
		recordHistory: true,

		//Design
		controlArrows: true,
		verticalCentered: true,
		sectionsColor : ['#ccc', '#fff'],
		paddingTop: '3em',
		paddingBottom: '10px',
		fixedElements: '#header, .footer',
		responsiveWidth: 0,
		responsiveHeight: 0,
		responsiveSlides: true,
		parallax: false,
		//parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},

		//Custom selectors
		sectionSelector: '.section',
		slideSelector: '.slide',
		lazyLoading: false

	});
});