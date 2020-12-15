// Write your JavaScript code here!

window.addEventListener("load", function() {

	fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
		response.json().then(function(json) {
		const div = document.getElementById("missionTarget");
		let index = Math.floor(Math.random()*json.length);
		let data = json[index];
		div.innerHTML = `
			<h2>Mission Destination</h2>
			<ol>
				<li>Name: ${data.name}</li>
				<li>Diameter: ${data.diameter}</li>
				<li>Star: ${data.star}</li>
				<li>Distance from Earth: ${data.distance}</li>
				<li>Number of Moons: ${data.moons}</li>
			</ol>
			<img src="${data.image}">
			`;
		});
	});

	let list = document.getElementById("faultyItems");
	list.style.visibility = "hidden";
	let form = document.querySelector("form");

	let fuelStatus = document.getElementById("fuelStatus");
	let cargoStatus = document.getElementById("cargoStatus");
	let pilotStatus = document.getElementById("pilotStatus");
	let copilotStatus = document.getElementById("copilotStatus");

	form.addEventListener("submit", function(event) {
		event.preventDefault();
		let pilotInput = document.querySelector("input[name=pilotName]");
		let pilot = pilotInput.value;
		let pilotTest = Number(pilot);

		let copilotInput = document.querySelector("input[name=copilotName]");
		let copilot = copilotInput.value;
		let copilotTest = Number(copilot);

		let fuelInput = document.querySelector("input[name=fuelLevel]");
		let fuelLevel = Number(fuelInput.value);

		let cargoInput = document.querySelector("input[name=cargoMass]");
		let cargoMass = Number(cargoInput.value);

		if (pilotInput.value === "" || copilotInput.value === "" || fuelInput.value === "" || cargoInput.value === "") {
			alert("Enter all Required fields!");
		} else if (isNaN(pilotTest) === false || isNaN(copilotTest) === false ||isNaN(fuelLevel) || isNaN(cargoMass)) {
			alert("Please input valid information for all fields!");
		} else {
			list.style.visibility = "visible";
			pilotStatus.innerHTML = `Pilot ${pilot} is ready for Launch`;
			copilotStatus.innerHTML - `Co-Pilot ${copilot} is ready for Launch`;
			let launchStatus = document.getElementById("launchStatus");
			if (fuelLevel < 10000 && cargoLevel <= 10000) {
				fuel.innerHTML = "Fuel Level too low for Launch";
				cargo.innerHTML = "Cargo Mass low enough for Launch";
				launchStatus.innerHTML = "Shuttle Not Ready for Launch";
				launchStatus.style.color = "#C7254E";
			} else if (fuelLevel >= 10000 && cargoLevel > 10000) {
				fuel.innerHTML = "Fuel Level high enough for Launch";
				cargo.innerHTML = "Cargo Mass too heavy for Launch";
				launchStatus.innerHTML = "Shuttle Not Ready for Launch";
				launchStatus.style.color = "C7254E";
			} else if (fuelLevel < 10000 && cargoLevel > 10000) {
				fuel.innerHTML = "Fuel Level too low for Launch";
				cargo.innerHTML = "Cargo Mass too heavy for Launch";
				launchStatus.innerHTML = "Shuttle Not Ready for Launch";
				launchStatus.style.color = "C7254E";
			} else {
				fuel.innerHTML = "Fuel Level high enough for Launch";
				cargo.innerHTML = "Cargo Mass low enough for Launch";
				launchStatus.innerHTML = "Shuttle is Ready for Launch";
				launchStatus.style.color = "#419F6A";
			}
		}
	});
});