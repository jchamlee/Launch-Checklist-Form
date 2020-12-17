// Write your JavaScript code here!

window.addEventListener("load", function() {

	fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
		response.json().then(function(json) {
		let div = document.getElementById("missionTarget");
		div.innerHTML = `
			<h2>Mission Destination</h2>
			<ol>
				<li>Name: ${json[0].name}</li>
				<li>Diameter: ${json[0].diameter}</li>
				<li>Star: ${json[0].star}</li>
				<li>Distance from Earth: ${json[0].distance}</li>
				<li>Number of Moons: ${json[0].moons}</li>
			</ol>
			<img src="${json[0].image}">
			`
		});
	});

   let launchForm = document.querySelector("launchForm");
   let pilotName = document.querySelector("input[name=pilotName]");
   let copilotName = document.querySelector("input[name=copilotName]");
   let fuelLevel = document.querySelector("input[name=fuelLevel]");
   let cargoMass = document.querySelector("input[name=cargoMass]");
   let launchStatus = document.getElementById("launchStatus");
   let pilotStatus = document.getElementById("pilotStatus");
   let copilotStatus = document.getElementById("copilotStatus");
   let list = document.getElementById("faultyItems");

	launchForm.addEventListener("submit", function(event) {
		event.preventDefault();
		
		if (pilotName.value == "" || copilotName.value == "" || fuelLevel.value == "" || cargoMass.value == "") {
			alert("Enter all Required fields!");
		} else if (isNaN(Number(pilotName.value)) == false || isNaN(Number(copilotName.value)) == false ||isNaN(Number(fuelLevel.value)) == true || isNaN(Number(cargoMass.value)) == true) {
			alert("Please input valid information for all fields!");
		}
		pilotStatus.innerHTML = `Pilot ${pilotName.value} is ready for Launch`;
		copilotStatus.innerHTML - `Co-Pilot ${copilotName.value} is ready for Launch`;
		if (fuelLevel.value < 10000) {
         document.getElementById("fuelStatus").innerHTML = "Fuel Level too low for Launch";
			launchStatus.innerHTML = "Shuttle Not Ready for Launch";
         launchStatus.style.color = "red";
         faultyItems.style.visibility - "visible";
      }
      if (cargoMass.value > 10000) {
			document.getElementById("cargoStatus").innerHTML = "Cargo Mass too heavy for Launch";
			launchStatus.innerHTML = "Shuttle Not Ready for Launch";
         launchStatus.style.color = "red";
         faultyItems.style.visibility - "visible";
      }
      if (fuelLevel.value >= 10000 && cargoMass.value < 9999) {
			launchStatus.innerHTML = "Shuttle is Ready for Launch";
			launchStatus.style.color = "green";
		}
	});
});