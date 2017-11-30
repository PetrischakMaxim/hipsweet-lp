


$(document).ready(function() {

/*WOW*/
	new WOW().init();

	/*Popup*/
	$('.menu__link-popup').on('click', function(event) {
		event.preventDefault();
		$('.popup').fadeIn(500);
	});

	$('.popup-close').on('click', function(event) {
		event.preventDefault();
		$('.popup').fadeOut(500);
	});

	/*toTop scroll*/
	var 
		top_show = 150,
		delay = 1500;

		$(window).scroll(function () { // При прокрутке попадаем в эту функцию
      /* В зависимости от положения полосы прокрукти и значения top_show, скрываем или открываем кнопку "Наверх" */
      		if ($(this).scrollTop() > top_show) $('#top').fadeIn();
      		else $('#top').fadeOut();
    	});
    	$('#top').click(function () { // При клике по кнопке "Наверх" попадаем в эту функцию
      		/* Плавная прокрутка наверх */
      		$('body, html').animate({
        		scrollTop: 0
      		}, delay);
    	});



	/*Slider*/
	$('.slider').bxSlider({
		auto: true,
		mode: 'fade',
	});


	/*Scroll*/
	 $(function() {
        $('a[href^="#form"]').on('click', function(e) {
            e.preventDefault();
            var target = $(this).attr('href');
            $('html, body').animate({
                scrollTop: $(target).offset().top
            }, 1500);
        });


        $('#menu a').on('click', function(event) {
	 			event.preventDefault();
	 			
	 			var 
	 				id  = $(this).attr('href'),
	 				top = $(id).offset().top;

	 			$('body,html').animate({scrollTop: top}, 1500);
	 		});   

    }());


		/*Ingridients*/
		(function(){

			$('.btn__ingredients').on('click', function(event) {
				event.preventDefault();
				$('.ingredients__popup').toggleClass('active');
			});
		})();

		/*  Tabs */
		 $(function() {

		 	$('.tabs__link').on('click', function(e) {
		 		e.preventDefault();
		 		var 
		 			item = $(this).closest('.tabs__item'),
		 			contentItem = $('.tabs__content-item'),
		 			itemPosition = item.index();

		 			contentItem.eq(itemPosition)
		 				.add(item)
		 				.addClass('active')
		 				.siblings()
		 				.removeClass('active');
		 	});
     	}());

		/*Forms*/

		(function($) {
			$(".form__phone").mask("+38(999) 999-9999");
		})(jQuery);

		/*Accordion*/
		(function() {
			$('.acco__triger').on('click', function(e) {
				e.preventDefault();
				var
					$this = $(this),
					link = $this.closest('.acco__triger'),
					item = $this.closest('.acco__item'),
					list = $this.closest('.acco'),
					items = list.find('.acco__item'),
					content = item.find('.acco__content'),
					otherContent = list.find('.acco__content'),
					duration = 500;


					if ( !item.hasClass('active')) {
						items.removeClass('active');
						item.addClass('active');
						otherContent.stop(true, true).slideUp(duration);
						content.stop(true, true).slideDown(duration);
					} else {
						content.stop(true, true).slideUp(duration);
						item.stop(true, true).removeClass('active');
					}		
			});
		})();



});
