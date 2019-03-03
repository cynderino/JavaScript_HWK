// references to the tbody element, input fields and buttons
var $tbody = document.querySelector("tbody");
var $dateInput = document.querySelector("#date");
var $cityInput = document.querySelector("#city");
var $stateInput = document.querySelector("#state");
var $countryInput = document.querySelector("#country");
var $shapeInput = document.querySelector("#shape");
var $searchBtn = document.querySelector("#search");
var $resetBtn = document.querySelector("#reset");

// event listener search button, reset button and call functions
$searchBtn.addEventListener("click", handleSearchButtonClick);
$resetBtn.addEventListener("click", handleResetButtonClick);

// Set to filtered data set initially
var filteredData = data;

// render table of filtered data to the tbody
function renderTable() {
  $tbody.innerHTML = "";
  for (var i = 0; i < filteredData.length; i++) {
    
    // get current sighting object and fields
    var sighting = filteredData[i];
    var fields = Object.keys(sighting);
    
    // create new row in tbody, set index 
    var $row = $tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {
      
      // create a new cell and set inner text current value at current sighting field
      var field = fields[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = sighting[field];
    }
  }
}

function handleSearchButtonClick() {
  // search items with user's search terms remove whitespace

  var filterDate = $dateInput.value.trim();
  if (filterDate != "") {
    filteredData = data.filter(function (sighting) {
      var sightingDate = sighting.datetime;
      return sightingDate === filterDate;
    });
  };
  console.log(filteredData);

  
  renderTable();
};


// reset data and form after search
function handleResetButtonClick() {
  filteredData = data;
  $dateInput.value = "";
renderTable();
}

// render table on page load
renderTable();