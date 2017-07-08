window.onload = function() {

	var display = document.getElementById('display');
	var buttons = document.getElementById('buttons');

	buttons.addEventListener('click', function(event) {
		
		var value = event.target.innerHTML;

		if (value === '=') {
			try {
			display.innerHTML = eval(display.innerHTML);
			} catch(event) {
				display.innerHTML = "ERROR";	
			}
		} else {
		display.innerHTML += value;
		}

		if (value === 'AC') {
			display.innerHTML = '';
		}
			
	});
			
};










