async function receiveData(){
	await fetch("http://localhost:8080/JSON/data.json")
    .then(resp => resp.json())
    .then(function (data) {
        generateOutput(data);
    }); 
}

async function receiveData() {
	await fetch('http://localhost:8080/JSON/data.json').then((resp) => resp.json()).then(function(data) {
		generateOutput(data);
	});
}
//
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
		receiveData();
	} else {
		let data = await fetch('http://localhost:8080/Images/fig4.png').then(function(data) {
			document.getElementById('picture').setAttribute('src', data.url);
		});
	}
}
// generating the data: from the json to the HTML DOM

function generateOutput(data) {
	document.getElementById('picture').setAttribute('src', '');
	document.getElementById('tableOutput').innerHTML = '';
	document.getElementById('tableOutput').innerHTML +=
		'<tr>' +
		'<th></th>' +
		'<th></th>' +
		'<th colspan="4">RECONTRACT</th>' +
		'<th colspan="4">NEW CUSTOMER</th>' +
		'</tr>';

	document.getElementById('tableOutput').innerHTML +=
		'<tr>' +
		'<th></th>' +
		'<th></th>' +
		'<th colspan="2">BASELINE</th>' +
		'<th colspan="2">SCENARIO</th>' +
		'<th colspan="2">BASELINE</th>' +
		'<th colspan="2">SCENARIO</th>' +
		'</tr>';

	document.getElementById('tableOutput').innerHTML +=
		'<tr>' +
		'<th></th>' +
		'<th>Population</th>' +
		'<th>Volume</th>' +
		'<th>ARPU</th>' +
		'<th>Volume</th>' +
		'<th>ARPU</th>' +
		'<th>Volume</th>' +
		'<th>ARPU</th>' +
		'<th>Volume</th>' +
		'<th>ARPU</th>' +
		'</tr>';
	document.getElementById('tableOutput').innerHTML += '<tr> <P id= "array1"> Consumer segment </p></tr>';
	data['consumer.segment'].forEach((element) => {
		document.getElementById('tableOutput').innerHTML +=
			'<tr>' +
			'<td class="tdOutput">' +
			element['Consumer.Segment'] +
			'</td>' +
			'<td class="tdOutput">' +
			element['Population'] * 100 +
			'%</td>' +
			'<td class="tdOutput">' +
			element['Volume.Baseline.Recontract'] * 100 +
			'%</td>' +
			'<td class="tdOutput">' +
			element['ARPU.Baseline.Recontract'] +
			'</td>' +
			'<td class="tdOutput">' +
			element['Volume.Scenario.Recontract'] * 100 +
			'%</td>' +
			'<td class="tdOutput">' +
			element['ARPU.Scenario.Recontract'] +
			'</td>' +
			'<td class="tdOutput">' +
			element['Volume.Baseline.NewCustomers'] * 100 +
			'%</td>' +
			'<td class="tdOutput">' +
			element['ARPU.Baseline.NewCustomers'] +
			'</td>' +
			'<td class="tdOutput">' +
			element['Volume.Scenario.NewCustomers'] * 100 +
			'%</td>' +
			'<td class="tdOutput">' +
			element['ARPU.Scenario.NewCustomers'] +
			'</td>' +
			'</tr>';
	});
	document.getElementById('tableOutput').innerHTML += '<tr> <P id= "array2">Estimated Mobile </p></tr>';
	data['estimated.usage'].forEach((element) => {
		document.getElementById('tableOutput').innerHTML +=
			'<tr>' +
			'<td class="tdOutput">' +
			element['Estimated.mobile.data.usage'] +
			'</td>' +
			'<td class="tdOutput">' +
			element['Population'] * 100 +
			'%</td>' +
			'<td class="tdOutput">' +
			element['Volume.Baseline.Recontract'] * 100 +
			'%</td>' +
			'<td class="tdOutput">' +
			element['ARPU.Baseline.Recontract'] +
			'</td>' +
			'<td class="tdOutput">' +
			element['Volume.Scenario.Recontract'] * 100 +
			'%</td>' +
			'<td class="tdOutput">' +
			element['ARPU.Scenario.Recontract'] +
			'</td>' +
			'<td class="tdOutput">' +
			element['Volume.Baseline.NewCustomers'] * 100 +
			'%</td>' +
			'<td class="tdOutput">' +
			element['ARPU.Baseline.NewCustomers'] +
			'</td>' +
			'<td class="tdOutput">' +
			element['Volume.Scenario.NewCustomers'] * 100 +
			'%</td>' +
			'<td class="tdOutput">' +
			element['ARPU.Scenario.NewCustomers'] +
			'</td>' +
			'</tr>';
	});
}
