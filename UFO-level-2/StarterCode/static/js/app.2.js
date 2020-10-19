// from data.js
var tableData = data;

// YOUR CODE HERE!

// function to display UFO sightings
function tableDisplay(ufoSightings) {
	var tbody = d3.select("tbody");
	ufoSightings.forEach((ufoRecord) => {
			var row = tbody.append("tr");
			Object.entries(ufoRecord).forEach(([key, value]) => {
					var cell = row.append("td");
					cell.html(value);
			});
	});
};

// clear the table for new data
function deleteTbody() {
	d3.select("tbody")
			.selectAll("tr").remove()
			.selectAll("td").remove();
};
	
// initial display of all UFO sightings
console.log(tableData);
tableDisplay(tableData);

// 'Filter Table' button
var button = d3.select("#filter-btn");

// filter the database
button.on("click", function(event) {
	
	d3.event.preventDefault();
	deleteTbody();
	
	var filteredData = tableData;
	var inputId = document.getElementsByClassName("form-control");
	
	// iterate through all the input fields
	for (var i = 0; i < inputId.length; i++) {

var idName = inputId[i].id;
var field = d3.select("#" + idName).property("value");

	};

	// database print
	console.log(filteredData);
	tableDisplay(filteredData);
});

