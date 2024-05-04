
  // Get user input values
  function calculate() {
  var attractiveness = parseInt(document.getElementById("attractiveness").value);
  var style = parseInt(document.getElementById("style").value);
  var weeks = parseInt(document.getElementById("weeks").value);

  // Ensure input values are within allowed range
  if (attractiveness < 1) {
    attractiveness = 1;
    document.getElementById("attractiveness").value = 1;
  } else if (attractiveness > 10) {
    attractiveness = 10;
    document.getElementById("attractiveness").value = 10;
  }

  if (style < 1) {
    style = 1;
    document.getElementById("style").value = 1;
  } else if (style > 10) {
    style = 10;
    document.getElementById("style").value = 10;
  }

  if (weeks < 0) {
    weeks = 0;
    document.getElementById("weeks").value = 0;
  } else if (weeks > 52) {
    weeks = 52;
    document.getElementById("weeks").value = 52;
  }
  
    // Calculate weeks in a relationship
    const weeksInRelationship = 5.8 * Math.log10(weeks + 1) / (attractiveness + style);
  
    // Multiply by 100 and round to whole number
    const result = (weeksInRelationship * 100).toFixed(0);
  
    // Display result
    document.getElementById("result").innerHTML = `Rizz Score: ${result}`;
    
   // Get input fields
var attractivenessInput = document.getElementById("attractiveness");
var styleInput = document.getElementById("style");
var weeksInput = document.getElementById("weeks");
var calculateButton = document.getElementById("calculate-button");

// Add event listeners to input fields
attractivenessInput.addEventListener("change", function() {
  checkInputRange(attractivenessInput);
});

styleInput.addEventListener("change", function() {
  checkInputRange(styleInput);
});

weeksInput.addEventListener("change", function() {
  checkInputRange(weeksInput);
});

// Add event listener to document
document.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    calculate();
  }
});

// Add event listener to Calculate button
calculateButton.addEventListener("click", function() {
  calculate();
});




  }
  

  
    