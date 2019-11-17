var barChart;
var horizontalBarChart_A, horizontalBarChart_B;

var inputList = [ 'Alpha', 'Beta', 'Gamma', 'Epsilon', 'Mobile', 'Iota', 'Tetha', 'Lambda' ];
var competitorDataList = [ 100, 80, 30, 50, 100, 80, 30, 50 ];
// these two functions allows us to show or hide the images depending on wether we changed the inout or not
function loadPage() {
	createGraph();
	for (i = 0; i < inputList.length; i++) {
		document.getElementById(inputList[i]).addEventListener('change', () => updateGraph());
	}
	SwitchGraph();
}

// Aternating between the image and the json output

function createGraph() {
	// Bar chart
	barChart = new Chart(document.getElementById('bar-graph'), {
		type: 'bar',
		data: {
			labels: [],
			datasets: [
				{
					label: 'Company A',
					backgroundColor: '#3e95cd',
					data: []
				},
				{
					label: 'Company B',
					backgroundColor: '#8e5ea2',
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
				yAxes: [
					{
						ticks: {
							beginAtZero: true
						}
					}
				]
			}
		}
	});

	// Horizontal bar chart
	horizontalBarChart_A = new Chart(document.getElementById('bar-chart-horizontal_A'), {
		type: 'horizontalBar',
		data: {
			labels: [],
			datasets: [
				{
					label: '',
					backgroundColor: [
						'#3e95cd',
						'#8e5ea2',
						'#3cba9f',
						'#e8c3b9',
						'#3e95cd',
						'#8e5ea2',
						'#3cba9f',
						'#e8c3b9'
					],
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
				xAxes: [
					{
						ticks: {
							beginAtZero: true
						}
					}
				]
			}
		}
	});
	horizontalBarChart_B = new Chart(document.getElementById('bar-chart-horizontal_B'), {
		type: 'horizontalBar',
		data: {
			labels: [],
			datasets: [
				{
					label: '',
					backgroundColor: [
						'#3e95cd',
						'#8e5ea2',
						'#3cba9f',
						'#e8c3b9',
						'#3e95cd',
						'#8e5ea2',
						'#3cba9f',
						'#e8c3b9'
					],
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
				xAxes: [
					{
						ticks: {
							beginAtZero: true
						}
					}
				]
			}
		}
	});
	for (i = 0; i < inputList.length; i++) {
		barChart.data.labels[i] = inputList[i];
		barChart.data.datasets[1].data[i] = competitorDataList[i];
		horizontalBarChart_A.data.labels[i] = inputList[i];
		horizontalBarChart_B.data.labels[i] = '';
		horizontalBarChart_B.data.datasets[0].data[i] = competitorDataList[i];
	}
	barChart.update();
	horizontalBarChart_A.update();
	horizontalBarChart_B.update();
}

function reset() {
	for (i = 0; i < inputList.length; i++) {
		document.getElementById(inputList[i]).value = '0';
	}

	document.getElementById('range_slider_value').innerHTML = '0';
	document.getElementById('range_slider_value2').innerHTML = '0';
	document.getElementById('range_slider_value3').innerHTML = '0';
	document.getElementById('range_slider_value4').innerHTML = '0';
	document.getElementById('range_slider_value5').innerHTML = '0';
	document.getElementById('range_slider_value6').innerHTML = '0';
	document.getElementById('range_slider_value7').innerHTML = '0';
	document.getElementById('range_slider_value8').innerHTML = '0';

	console.log('reset button is pressed reset all value!');
}

function updateGraph() {
	//Bar Graph
	console.log(barChart.data);

	for (i = 0; i < inputList.length; i++) {
		barChart.data.datasets[0].data[i] = parseInt(document.getElementById(inputList[i]).value);
		horizontalBarChart_A.data.datasets[0].data[i] = parseInt(document.getElementById(inputList[i]).value);
	}
	barChart.update();
	horizontalBarChart_A.update();
	horizontalBarChart_B.update();
}

// this functions allows us to show or hide the graphs

function SwitchGraph() {
	barGraph_ = document.getElementById('bar-graph');
	barHorizontal_A = document.getElementById('bar-chart-horizontal_A');
	barHorizontal_B = document.getElementById('bar-chart-horizontal_B');

	if (barHorizontal_A.style.display === 'block' && barHorizontal_B.style.display === 'block') {
		barHorizontal_A.style.display = 'none';
		barHorizontal_B.style.display = 'none';
		barGraph_.style.display = 'block';
	} else {
		barHorizontal_A.style.display = 'block';
		barHorizontal_B.style.display = 'block';
		barGraph_.style.display = 'none';
	}
}
