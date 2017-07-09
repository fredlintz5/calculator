window.onload = function() {

	var display = document.getElementById('display');
	var buttons = document.getElementById('buttons');
	//var regEx = /0-9./gi;
	//var operators = /+-=*\//gi;


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


	document.addEventListener('keypress', function(event) {
	
	var inputKey = String.fromCharCode(event.keyCode);

		if (event.keyCode === 13 || event.keyCode === 61) {
			
			display.innerHTML = eval(display.innerHTML);
		
		} else {

			display.innerHTML += inputKey;
		}	
	});

	document.addEventListener('keydown', function(event) {

		if (event.keyCode === 8) {
		
			display.innerHTML -= '';
		}	
			
	});

}












