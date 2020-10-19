// from data.js
var tableData = data;

// YOUR CODE HERE!

// display UFO sightings

function Display(ufoSightings) {
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

// print UFO sighting
console.log(tableData);
Display(tableData);

// 'Filter button
var button = d3.select("#filter-btn");

// database display and filter set up
button.on("click", function(event) {
	d3.event.preventDefault();
	deleteTbody();
	var dateInput = d3.select("#datetime").property("value");
	
	if (dateInput.trim() === "" ) {
			// display the whole database if the date field has no date
			var filteredData = tableData;
	} else {
			// else, display the filtered dataset  
			var filteredData = tableData.filter(ufoSighting => 
					ufoSighting.datetime === dateInput.trim());
	};
	
	console.log(filteredData);
	Display(filteredData);
});