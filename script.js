//$(document).ready(function(){					// анимация первого блока
	$(window).bind("load", function() {
	$('body').addClass('back-animate');
	$('.opening__logo').addClass('logo-anim');
	$('.opening__links').addClass('links-anim');


	$('.about__li-a').mouseover(function(){		// анимация линков второго блока блока
		$('.about__a-a').addClass('_active-a')});
	$('.about__li-a').mouseout(function(){
		$('.about__a-a').removeClass('_active-a')});

	$('.about__li-b').mouseover(function(){
		$('.about__a-b').addClass('_active-b')});
	$('.about__li-b').mouseout(function(){
		$('.about__a-b').removeClass('_active-b')});

	$('.about__li-c').mouseover(function(){
		$('.about__a-c').addClass('_active-c')});
	$('.about__li-c').mouseout(function(){
		$('.about__a-c').removeClass('_active-c')});


	function setHeiHeight() {	// функция, устанавливающая высоту первого блока в зависимости от всысоты размера окна браузера
  
      $('.about').css({
        marginTop: $(window).height() - 327 + 'px'	// 327 - высота header
      });
  
    }    
    setHeiHeight(); // устанавливаем высоту окна при первой загрузке страницы
  $(window).resize( setHeiHeight );


  $('.slider').slick({  // слайдер
		dots:false,
		arrows: false,
		autoplay: true,
		speed: 2000,
  		autoplaySpeed: 3000,
  		lazyLoad: 'ondemand',
		slidesToShow: 3,
		centerMode: true,
		variableWidth: true,
		pauseOnFocus: false,
		pauseOnHover: false,
		pauseOnDotsHover: false,
		touchThreshold: 10,
		waitForAnimate: false,

		responsive:[
			{
				breakpoint: 800,
				settings: {
					slidesToShow: 1,
					centerMode: false,
					variableWidth: false,
					autoplaySpeed: 1500,
					speed: 1000,
					focusOnSelect: false,
				}
			}
		]
	});
		$('.slider').on('touchstart', e => {
		$('.slider').slick('slickPlay');
	});



  $('.sliderInsta').slick({  // слайдер
		dots:false,
		arrows: false,
		autoplay: true,
		speed: 2000,
  		autoplaySpeed: 1,
  		lazyLoad: 'ondemand',
		slidesToShow: 3,
		centerMode: false,
		variableWidth: true,
		pauseOnFocus: false,
		pauseOnHover: false,
		pauseOnDotsHover: false,
	});
  		$('.sliderInsta').on('touchstart', e => {
		$('.sliderInsta').slick('slickPlay');
	});


	$("#menu").on("click","a", function (event) {		// функция плавного перехода по якорям

		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
		top = $(id).offset().top;

		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
	});



});

	const animItems = document.querySelectorAll('._anim-items');

	if (animItems.length > 0) {
		window.addEventListener('scroll', animOnScroll);
		function animOnScroll() {
			for (let index = 0; index < animItems.length; index++) {
				const animItem = animItems[index];
				const animItemHeight = animItem.offsetHeight;
				const animItemOffset = offset(animItem).top;
				const animStart = 150;				

				let animItemPoint = window.innerHeight - animItemHeight / animStart;
				if (animItemHeight > window.innerHeight) {
					animItemPoint = window.innerHeight - window.innerHeight / animStart;
				}

				if ((pageYOffset + window.innerHeight > (animItemOffset - animItemHeight + 50))) {
					animItem.classList.add('_active');
				} else {
					animItem.classList.remove('_active');
				}
			}
		}

		function offset(el) {
			const rect = el.getBoundingClientRect(),
				scrollLeft = window.pageXOfset || document.documentElement.scrollLeft,
				scrollTop = window.pageYOffset || document.documentElement.scrollTop;
			return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
		}
		setTimeout(() => {
			animOnScroll();
		}, 100);
	}
