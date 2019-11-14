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

function changeImage() {

	document.getElementById('input').style.display = 'none';
	if (inputHasBeenChanged) {

		// Bar chart
		chart = new Chart(document.getElementById("bar-graph"), {
			type: 'bar',
			data: {
			  labels: ["Product 1", "Product 2", "Product 3", "Product 4"],
			  datasets: [
				{
				  label: "Company A",
				  backgroundColor: "#3e95cd",
				  data: [133,221,783,2478]
				}, {
				  label: "Company B",
				  backgroundColor: "#8e5ea2",
				  data: [408,547,675,734]
				}
			  ]
			},
			options: {
			  title: {
				display: true,
				text: 'Price ($CAD)'
			  }
			}
		});
		console.log('data', chart.data, document.getElementsByName("Price Shift Kappa")[0].value);
		chart.data.datasets[0].data[1] = parseInt(document.getElementsByName("Price Shift Kappa")[0].value);
		chart.update();


	} else {
		
	}

	
	
}
// generating the data: from the json to the HTML DOM

function generateOutput(data) {
	//document.getElementById('picture').setAttribute('src', '');
}

