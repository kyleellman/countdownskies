(function( $ ) {
	
	var timeLeft, intervalID, element;
	
	var methods = {
		init: function (seconds) {
			timeLeft = parseInt(seconds);
			
			if(timeLeft > 0)
			{
				methods.iterate();
				intervalID = setInterval(function(){methods.iterate()}, 1000);
			}
		},
		
		iterate: function () {
			periods = methods.splitUpPeriods(timeLeft);
			
			element.find('.days').html(methods.padNumber(periods.days, 2));
			element.find('.hours').html(methods.padNumber(periods.hours, 2));
			element.find('.minutes').html(methods.padNumber(periods.minutes, 2));
			element.find('.seconds').html(methods.padNumber(periods.seconds, 2));
			
			if(timeLeft < 1)
				clearInterval(intervalID);
				
			timeLeft = timeLeft -1;
		},
		
		splitUpPeriods: function (interval)
		{
			var periods = {};
			
			periods.days = Math.floor(interval / (3600 * 24));
			interval = interval - (periods.days * 3600 * 24);
			
			periods.hours = Math.floor(interval / 3600);
			interval = interval - (periods.hours * 3600);
			
			periods.minutes = Math.floor(interval / 60);
			interval = interval - (periods.minutes * 60);
			
			periods.seconds = interval;
			
			return periods;
		},
		
		padNumber: function (number, places)
		{
			number = number.toString();
			while(number.length < places)
				number = '0'+number;
			return number;
		}
	};
	
	$.fn.countdownskies = function(seconds) {
		element = this;
		methods.init(seconds);
	};
})( jQuery );