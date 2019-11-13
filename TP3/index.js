var inputHasBeenChanged = false;
// these two functions allows us to show or hide the images depending on wether we changed the inout or not
function showInput() {
	var input = document.getElementsByTagName('select');

	for (i = 0; i < input.length; i++) {
		input[i].addEventListener('change', () => (inputHasBeenChanged = true)); // addEventListener used
	}
	document.getElementById('output').style.display = 'none';
	document.getElementById('input').style.display = 'block';
}

function showOutput() {
	document.getElementById('input').style.display = 'none';
	document.getElementById('output').style.display = 'block';
	changeImage();
}

// Aternating between the image and the json output

async function changeImage() {
	document.getElementById('input').style.display = 'none';
	if (inputHasBeenChanged) {
		
	} else {
		
	}
}
// generating the data: from the json to the HTML DOM

function generateOutput(data) {
	//document.getElementById('picture').setAttribute('src', '');
}
