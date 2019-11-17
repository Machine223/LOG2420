
var barChart;
var horizontalBarChart_A, horizontalBarChart_B ;

var inputList = ["Price Shift Alpha", "High Data Tariff (Alpha only)", "Price Shift Beta", "Price Shift Gamma"];
var competitorDataList = [100,80,30,50];
var products = ["Product 1", "Product 2", "Product 3", "Product 4"];
// these two functions allows us to show or hide the images depending on wether we changed the inout or not
function loadPage() {
	createGraph();
	var input = document.getElementsByTagName('select');
	for (i = 0; i < input.length; i++) {
		input[i].addEventListener('change', () => (updateGraph())); // addEventListener used
	}
}


// Aternating between the image and the json output

function createGraph() {
		
	// Bar chart
	barChart = new Chart(document.getElementById("bar-graph"), {
		type: 'bar',
		data: {
			labels: [],
			datasets: [
			{
				label: "Company A",
				backgroundColor: "#3e95cd",
				data: []
			}, {
				label: "Company B",
				backgroundColor: "#8e5ea2",
				data: []
			}
			]
		},
		options: {
			title: {
			display: true,
			text: 'Price ($CAD)'
			},
			scales: {
				yAxes: [{
					ticks: {
							beginAtZero: true
						}
				}]
			}

		}
	});

	// Horizontal bar chart
	horizontalBarChart_A = new Chart(document.getElementById("bar-chart-horizontal_A"), {
		type: 'horizontalBar',
		data: {
		  labels: [],
		  datasets: [
			{
			  label: "",
			  backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9"],
			  data: []
			}
		  ]
		},
		options: {
		  legend: { display: false },
		  title: {
			display: false,
			text: ''
		  },
		  scales: {
			  xAxes: [{
				  ticks: {
						  beginAtZero: true
					  }
			  }]
		  }
		}
	});
	horizontalBarChart_B = new Chart(document.getElementById("bar-chart-horizontal_B"), {
		type: 'horizontalBar',
		data: {
		  labels: [],
		  datasets: [
			{
			  label: "",
			  backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9"],
			  data: []
			}
		  ]
		},
		options: {
		  legend: { display: false },
		  title: {
			display: false,
			text: ''
		  },
		  scales: {
			  xAxes: [{
				  ticks: {
						  beginAtZero: true
					  }
			  }]
		  }
		}
	});
	for ( i=0; i< products.length; i++){
		barChart.data.labels[i] = products[i];
		barChart.data.datasets[1].data[i] = competitorDataList[i];
		horizontalBarChart_A.data.labels[i] = products[i];
		horizontalBarChart_B.data.labels[i] = '';
		horizontalBarChart_B.data.datasets[0].data[i] = competitorDataList[i];
	}
	chart.update();
	
}














