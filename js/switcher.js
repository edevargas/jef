/*-----------------------------------------------------------------------------------

/* Styles Switcher

-----------------------------------------------------------------------------------*/



window.console = window.console || (function(){

	var c = {}; c.log = c.warn = c.debug = c.info = c.error = c.time = c.dir = c.profile = c.clear = c.exception = c.trace = c.assert = function(){};

	return c;

})();





jQuery(document).ready(function($) {

	

		// Color Changer

		$(".default" ).click(function(){

			$("#colors" ).attr("href", "css/colors/default/color.css" );

			return false;

		});



		$(".light-green" ).click(function(){

			$("#colors" ).attr("href", "css/colors/light-green/color.css" );

			return false;

		});

		

		$(".light-red" ).click(function(){

			$("#colors" ).attr("href", "css/colors/light-red/color.css" );

			return false;

		});

		$(".midnight-blue" ).click(function(){

			$("#colors" ).attr("href", "css/colors/midnight-blue/color.css" );

			return false;

		});

		$(".orange" ).click(function(){

			$("#colors" ).attr("href", "css/colors/orange/color.css" );

			return false;

		});		

		$(".yellow" ).click(function(){

			$("#colors" ).attr("href", "css/colors/yellow/color.css" );

			return false;

		});	

		$(".darkblue" ).click(function(){

			$("#colors" ).attr("href", "css/colors/darkblue.css" );

			return false;

		});

		$(".black" ).click(function(){

			$("#colors" ).attr("href", "css/colors/black.css" );

			return false;

		});		

		

		$(".mix_1" ).click(function(){

			$("#colors" ).attr("href", "css/colors/mix_1.css" );

			return false;

		});

		$(".mix_2" ).click(function(){

			$("#colors" ).attr("href", "css/colors/mix_2.css" );

			return false;

		});

		$(".mix_3" ).click(function(){

			$("#colors" ).attr("href", "css/colors/mix_3.css" );

			return false;

		});

		$(".mix_4" ).click(function(){

			$("#colors" ).attr("href", "css/colors/mix_4.css" );

			return false;

		});

		$(".mix_5" ).click(function(){

			$("#colors" ).attr("href", "css/colors/mix_5.css" );

			return false;

		});

		$(".mix_6" ).click(function(){

			$("#colors" ).attr("href", "css/colors/mix_6.css" );

			return false;

		});

		



		

		





		

		// Style Switcher	

		$('.style-switcher').animate({

			left: '-200px'

		});

		

		$('.style-switcher a.switch_control').click(function(e){

			e.preventDefault();

			var div = $('.style-switcher');

			console.log(div.css('left'));

			if (div.css('left') === '-200px') {

				$('.style-switcher').animate({

					left: '0px'

				}); 

			} else {

				$('.style-switcher').animate({

					left: '-200px'

				});

			}

		})

		

		$('.colors li a').click(function(e){

			e.preventDefault();

			$(this).parent().parent().find('a').removeClass('active');

			$(this).addClass('active');

		})

		

		$('.bgimage a').click(function(e){

			e.preventDefault();

			$(this).parent().parent().find('a').removeClass('active');

			$(this).addClass('active');

			var bg = $(this).css('backgroundImage');

			$('body').css('backgroundImage',bg)

		})

		

		

		$('#reset').click(function(e){

			var bg = $(this).css('backgroundImage');

			$('body').css('backgroundImage','url(./images/bg/creampaper.png)')

			$("#layout" ).attr("href", "css/layout/wide.css" );

			$("#colors" ).attr("href", "css/colors/orange.css" );

		})

			



	});