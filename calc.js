//wait for page to load before applying functions
window.onload = function() {

	//global variables to distinguish the display from the buttons
	var display = document.getElementById('display');
	var buttons = document.getElementById('buttons');
	
	//these are variables I was thinking I would use to control what characters can be pressed in the calculator	
	//var regEx = /0-9./gi;
	//var operators = /+-=*\//gi;

	
	//event listener for button clicks
	buttons.addEventListener('click', function(event) {
		
		//creating a variable for the innerHTML of the button clicked
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

	//function to add an event listener to the document for any key presses, and displaying them
	document.addEventListener('keypress', function(event) {
	
	//this variable converts the keyboard key's keycode to a string	
	var inputKey = String.fromCharCode(event.keyCode);

		if (event.keyCode === 13 || event.keyCode === 61) {
			
			display.innerHTML = eval(display.innerHTML);
		
		} else {

			display.innerHTML += inputKey;
		}	
	});
	
	//I had to create another function for the delete key, because the 'keypress" function wouldnt grab iy
	document.addEventListener('keydown', function(event) {

		if (event.keyCode === 8) {
		
			display.innerHTML = '';
		}	
			
	});

}












