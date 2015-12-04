$(document).on("change", "input", function() {
	var code = $(".save-button").val();
	switch (code) {
		case "GTA-III":
			calculate_GTA_III();
			break;
	}
});

var floatToPercent = function(float) {
	var percentage = (float * 100).toFixed(2) + "%";
	return percentage;
}

var calculate_GTA_III = function() {
	var data = $("#" + "GTA-III" + "-DATA").serialize().split("&"); // This could be generic to all.

	// THIS AREA INITIALISES VALUES FOR CALCULATING THE PERCENTAGES
	// CONSTANTS
	var totalMissions = 72;
	var totalMissionsPortland = 20;
	var totalMissionsPortlandLuigi = 5;
	var totalMissionsPortlandJoey = 6;
	var totalMissionsPortlandToni = 5;
	var totalMissionsPortlandSalvatore = 4;
	var totalMissionsStauntonIsland = 18;
	var totalMissionsStauntonIslandAsuka = 5;
	var totalMissionsStauntonIslandKenji = 5;
	var totalMissionsStauntonIslandRay = 5;
	var totalMissionsStauntonIslandDonald = 3;
	var totalMissionsShoresideVale = 9;
	var totalMissionsShoresideValeDonald = 3;
	var totalMissionsShoresideValeRay = 1;
	var totalMissionsShoresideValeAsuka = 5;
	var totalMissionsPayphone = 17;
	var totalMissionsPayphoneMarty = 4;
	var totalMissionsPayphoneBurro = 4;
	var totalMissionsPayphoneCourtney = 4;
	var totalMissionsPayphoneDIce = 5;
	var totalMissionsOther = 8;
	var totalMissionsOtherOffroad = 4;
	var totalMissionsOtherRC = 4;
	var totalVehicleAmbulance = 12;
	var totalVehicleFirefighterPortland = 20;
	var totalVehicleFirefighterStauntonIsland = 20;
	var totalVehicleFirefighterShoresideVale = 20;
	var totalVehicleVigilantePortland = 20;
	var totalVehicleVigilanteStauntonIsland = 20;
	var totalVehicleVigilanteShoresideVale = 20;
	var totalVehicleTaxi = 100;
	var totalImport = 39;
	var totalImportPortlandEmergency = 7;
	var totalImportPortland = 16;
	var totalImportShoresideVale = 16;
	var totalHiddenPackages = 100;
	var totalRampages = 20;
	var totalUniqueJumps = 20;

	// CALCULATED VALUES
	var totalPercent = 0.00;
	var currentMissions = 0;
	var currentMissionsPortland = 0;
	var currentMissionsPortlandLuigi = 0;
	var currentMissionsPortlandJoey = 0;
	var currentMissionsPortlandToni = 0;
	var currentMissionsPortlandSalvatore = 0;
	var currentMissionsStauntonIsland = 0;
	var currentMissionsStauntonIslandAsuka = 0;
	var currentMissionsStauntonIslandKenji = 0;
	var currentMissionsStauntonIslandRay = 0;
	var currentMissionsStauntonIslandDonald = 0;
	var currentMissionsShoresideVale = 0;
	var currentMissionsShoresideValeDonald = 0;
	var currentMissionsShoresideValeRay = 0;
	var currentMissionsShoresideValeAsuka = 0;
	var currentMissionsPayphone = 0;
	var currentMissionsPayphoneMarty = 0;
	var currentMissionsPayphoneBurro = 0;
	var currentMissionsPayphoneCourtney = 0;
	var currentMissionsPayphoneDIce = 0;
	var currentMissionsOther = 0;
	var currentMissionsOtherOffroad = 0;
	var currentMissionsOtherRC = 0;
	var currentVehicleAmbulance = 0;
	var currentVehicleFirefighterPortland = 0;
	var currentVehicleFirefighterStauntonIsland = 0;
	var currentVehicleFirefighterShoresideVale = 0;
	var currentVehicleVigilantePortland = 0;
	var currentVehicleVigilanteStauntonIsland = 0;
	var currentVehicleVigilanteShoresideVale = 0;
	var currentVehicleTaxi = 0;
	var currentImport = 0;
	var currentImportPortlandEmergency = 0;
	var currentImportPortland = 0;
	var currentImportShoresideVale = 0;
	var currentHiddenPackages = 0;
	var currentRampages = 0;
	var currentUniqueJumps = 0;

	for (var i = 0; i < data.length; i++) {
		var key = data[i].split("=")[0];
		var value = data[i].split("=")[1];

		// THIS AREA ADDS THE VALUES
		if (key == "M01") currentMissionsPortlandLuigi++;
		else if (key == "M02") currentMissionsPortlandLuigi++;
		else if (key == "M03") currentMissionsPortlandLuigi++;
		else if (key == "M04") currentMissionsPortlandLuigi++;
		else if (key == "M05") currentMissionsPortlandLuigi++;
		else if (key == "V01") currentVehicleAmbulance = parseInt(value);
		else if (key == "V02") currentVehicleFirefighterPortland = parseInt(value);
		else if (key == "V03") currentVehicleFirefighterStauntonIsland = parseInt(value);
	}

	// THIS AREA CALCULATES THE OVERALL PERCENTAGE
	// TODO: This is so messy.
	currentMissionsPortland = currentMissionsPortlandLuigi + currentMissionsPortlandJoey + currentMissionsPortlandToni + currentMissionsPortlandSalvatore;
	currentMissionsStauntonIsland = currentMissionsStauntonIslandAsuka + currentMissionsStauntonIslandKenji + currentMissionsStauntonIslandRay + currentMissionsStauntonIslandDonald;
	currentMissionsShoresideVale = currentMissionsShoresideValeDonald + currentMissionsShoresideValeRay + currentMissionsShoresideValeAsuka;
	currentMissionsPayphone = currentMissionsPayphoneMarty + currentMissionsPayphoneBurro + currentMissionsPayphoneCourtney + currentMissionsPayphoneDIce;
	currentMissionsOther = currentMissionsOtherOffroad + currentMissionsOtherRC;
	currentMissions = currentMissionsPortland + currentMissionsStauntonIsland + currentMissionsShoresideVale + currentMissionsPayphone + currentMissionsOther;
	currentImport = currentImportPortlandEmergency + currentImportPortland + currentImportShoresideVale;

	totalPercent = ((currentMissions / totalMissions) * 0.5) + (((currentVehicleAmbulance / totalVehicleAmbulance) + (currentVehicleFirefighterPortland / totalVehicleFirefighterPortland) + (currentVehicleFirefighterStauntonIsland / totalVehicleFirefighterStauntonIsland) + (currentVehicleFirefighterShoresideVale / totalVehicleFirefighterShoresideVale) + (currentVehicleVigilantePortland / totalVehicleVigilantePortland) + (currentVehicleVigilanteStauntonIsland / totalVehicleVigilanteStauntonIsland) + (currentVehicleVigilanteShoresideVale / totalVehicleVigilanteShoresideVale) + (currentVehicleTaxi / totalVehicleTaxi)) * 0.0125) + ((currentImport / totalImport) * 0.1) + ((currentHiddenPackages / totalHiddenPackages) * 0.15) + ((currentRampages / totalRampages) * 0.075) + ((currentUniqueJumps / totalUniqueJumps) * 0.075);

	// THIS AREA PRESENTS IT
	$("#grand-total").html(floatToPercent(totalPercent));
	$("#mission-total").html(floatToPercent(currentMissions / totalMissions));

	console.log(totalPercent);
	console.log(floatToPercent(totalPercent));
}

