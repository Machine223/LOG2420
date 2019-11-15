var inputList = ["Price Shift Alpha", "High Data Tariff (Alpha only)", "Price Shift Beta", "Price Shift Gamma"];
// these two functions allows us to show or hide the images depending on wether we changed the inout or not
function loadPage() {
	var input = document.getElementsByTagName('select');

	for (i = 0; i < input.length; i++) {
		input[i].addEventListener('change', () => (UpdateGraph())); // addEventListener used
	}
	UpdateGraph();
}


// Aternating between the image and the json output

function UpdateGraph() {
		
	// Bar chart
	chart = new Chart(document.getElementById("bar-graph"), {
		type: 'bar',
		data: {
			labels: ["Product 1", "Product 2", "Product 3", "Product 4"],
			datasets: [
			{
				label: "Company A",
				backgroundColor: "#3e95cd",
				data: []
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
	for ( i=0; i< inputList.length; i++){
		chart.data.datasets[0].data.push(parseInt(document.getElementsByName(inputList[i])[0].value));
	}
	chart.update();
	
	
	
}

