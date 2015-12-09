$(document).on("change", "input", function() {
	updatePercentage();
});

var updatePercentage = function() {
	var code = $(".save-button").val();
	switch (code) {
		case "GTA-III":
			calculate_GTA_III();
			break;
		case "GTA-IV":
			calculate_GTA_IV();
			break;
	}
}

var floatToPercent = function(float, decimals) {
	var percentage = (float * 100).toFixed(decimals) + "%";
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
		if (key.substring(0, 1) == "M" && parseInt(key.substring(1, 3)) <= 5) currentMissionsPortlandLuigi++;
		else if (key.substring(0, 1) == "M" && parseInt(key.substring(1, 3)) > 5 && parseInt(key.substring(1, 3)) <= 11) currentMissionsPortlandJoey++;
		else if (key.substring(0, 1) == "M" && parseInt(key.substring(1, 3)) > 11 && parseInt(key.substring(1, 3)) <= 16) currentMissionsPortlandToni++;
		else if (key.substring(0, 1) == "M" && parseInt(key.substring(1, 3)) > 16 && parseInt(key.substring(1, 3)) <= 20) currentMissionsPortlandSalvatore++;
		else if (key.substring(0, 1) == "M" && parseInt(key.substring(1, 3)) > 20 && parseInt(key.substring(1, 3)) <= 25) currentMissionsStauntonIslandAsuka++;
		else if (key.substring(0, 1) == "M" && parseInt(key.substring(1, 3)) > 25 && parseInt(key.substring(1, 3)) <= 30) currentMissionsStauntonIslandKenji++;
		else if (key.substring(0, 1) == "M" && parseInt(key.substring(1, 3)) > 30 && parseInt(key.substring(1, 3)) <= 35) currentMissionsStauntonIslandRay++;
		else if (key.substring(0, 1) == "M" && parseInt(key.substring(1, 3)) > 35 && parseInt(key.substring(1, 3)) <= 38) currentMissionsStauntonIslandDonald++;
		else if (key.substring(0, 1) == "M" && parseInt(key.substring(1, 3)) > 38 && parseInt(key.substring(1, 3)) <= 41) currentMissionsShoresideValeDonald++;
		else if (key.substring(0, 1) == "M" && parseInt(key.substring(1, 3)) > 41 && parseInt(key.substring(1, 3)) <= 42) currentMissionsShoresideValeRay++;
		else if (key.substring(0, 1) == "M" && parseInt(key.substring(1, 3)) > 42 && parseInt(key.substring(1, 3)) <= 47) currentMissionsShoresideValeAsuka++;
		else if (key.substring(0, 1) == "M" && parseInt(key.substring(1, 3)) > 47 && parseInt(key.substring(1, 3)) <= 51) currentMissionsPayphoneMarty++;
		else if (key.substring(0, 1) == "M" && parseInt(key.substring(1, 3)) > 51 && parseInt(key.substring(1, 3)) <= 55) currentMissionsPayphoneBurro++;
		else if (key.substring(0, 1) == "M" && parseInt(key.substring(1, 3)) > 55 && parseInt(key.substring(1, 3)) <= 59) currentMissionsPayphoneCourtney++;
		else if (key.substring(0, 1) == "M" && parseInt(key.substring(1, 3)) > 59 && parseInt(key.substring(1, 3)) <= 64) currentMissionsPayphoneDIce++;
		else if (key.substring(0, 1) == "M" && parseInt(key.substring(1, 3)) > 64 && parseInt(key.substring(1, 3)) <= 68) currentMissionsOtherOffroad++;
		else if (key.substring(0, 1) == "M" && parseInt(key.substring(1, 3)) > 68 && parseInt(key.substring(1, 3)) <= 72) currentMissionsOtherRC++;
		else if (key == "V01") currentVehicleAmbulance = parseInt(value);
		else if (key == "V02") currentVehicleFirefighterPortland = parseInt(value);
		else if (key == "V03") currentVehicleFirefighterStauntonIsland = parseInt(value);
		else if (key == "V04") currentVehicleFirefighterShoresideVale = parseInt(value);
		else if (key == "V05") currentVehicleVigilantePortland = parseInt(value);
		else if (key == "V06") currentVehicleVigilanteStauntonIsland = parseInt(value);
		else if (key == "V07") currentVehicleVigilanteShoresideVale = parseInt(value);
		else if (key == "V08") currentVehicleTaxi = parseInt(value);
		else if (key.substring(0, 1) == "I" && parseInt(key.substring(1, 3)) <= 7) currentImportPortlandEmergency++;
		else if (key.substring(0, 1) == "I" && parseInt(key.substring(1, 3)) > 7 && parseInt(key.substring(1, 2)) <= 23) currentImportPortland++;
		else if (key.substring(0, 1) == "I" && parseInt(key.substring(1, 3)) > 23) currentImportShoresideVale++;
		else if (key.substring(0, 2) == "HP") currentHiddenPackages++;
		else if (key.substring(0, 2) == "RA") currentRampages++;
		else if (key.substring(0, 2) == "SJ") currentUniqueJumps++;
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
	currentVehicle = (currentVehicleAmbulance / totalVehicleAmbulance) + (currentVehicleFirefighterPortland / totalVehicleFirefighterPortland) + (currentVehicleFirefighterStauntonIsland / totalVehicleFirefighterStauntonIsland) + (currentVehicleFirefighterShoresideVale / totalVehicleFirefighterShoresideVale) + (currentVehicleVigilantePortland / totalVehicleVigilantePortland) + (currentVehicleVigilanteStauntonIsland / totalVehicleVigilanteStauntonIsland) + (currentVehicleVigilanteShoresideVale / totalVehicleVigilanteShoresideVale) + (currentVehicleTaxi / totalVehicleTaxi);

	totalPercent = ((currentMissions / totalMissions) * 0.5) + (((currentVehicleAmbulance / totalVehicleAmbulance) + (currentVehicleFirefighterPortland / totalVehicleFirefighterPortland) + (currentVehicleFirefighterStauntonIsland / totalVehicleFirefighterStauntonIsland) + (currentVehicleFirefighterShoresideVale / totalVehicleFirefighterShoresideVale) + (currentVehicleVigilantePortland / totalVehicleVigilantePortland) + (currentVehicleVigilanteStauntonIsland / totalVehicleVigilanteStauntonIsland) + (currentVehicleVigilanteShoresideVale / totalVehicleVigilanteShoresideVale) + (currentVehicleTaxi / totalVehicleTaxi)) * 0.0125) + ((currentImport / totalImport) * 0.1) + ((currentHiddenPackages / totalHiddenPackages) * 0.15) + ((currentRampages / totalRampages) * 0.075) + ((currentUniqueJumps / totalUniqueJumps) * 0.075);

	// THIS AREA PRESENTS IT
	$("#grand-total").html(floatToPercent(totalPercent, 4));
	$("#mission-total").html(floatToPercent(currentMissions / totalMissions, 2));
	$("#vehicle-total").html(floatToPercent(currentVehicle / 8, 2));
	$("#import-total").html(floatToPercent(currentImport / totalImport, 2));
	$("#collectable-total").html(floatToPercent((currentHiddenPackages + currentRampages + currentUniqueJumps) / (totalHiddenPackages + totalRampages + totalUniqueJumps), 2));
	$("#hiddenpackage-total").html(floatToPercent(currentHiddenPackages / totalHiddenPackages, 0));
	$("#rampage-total").html(floatToPercent(currentRampages / totalRampages, 0));
	$("#stuntjump-total").html(floatToPercent(currentUniqueJumps / totalUniqueJumps, 0));
}


var calculate_GTA_IV = function() {
	var data = $("#" + "GTA-IV" + "-DATA").serialize().split("&");

	// THIS AREA INITIALISES VALUES FOR CALCULATING THE PERCENTAGES
	// CONSTANTS
	var totalMissions = 88;
	var totalDrugDeliveries = 10;
	var totalBrucieRaces = 9;
	var totalExoticExports = 10;
	var totalFixerAssassinations = 9;
	var totalCarThefts = 30;
	var totalFriendshipPoints = 22;
	var totalGamePoints = 4;
	var totalRandomCharacters = 16;
	var totalMostWanted = 30;
	var totalVigilante = 20;
	var totalPigeons = 200;
	var totalStuntJumps = 50;


	// CALCULATED VALUES
	var totalPercent = 0.00;
	var currentMissions = 0;
	var currentDrugDeliveries = 0;
	var currentBrucieRaces = 0;
	var currentExoticExports = 0;
	var currentFixerAssassinations = 0;
	var currentCarThefts = 0;
	var currentFriendshipPoints = 0;
	var currentGamePoints = 0;
	var currentRandomCharacters = 0;
	var currentMostWanted = 0;
	var currentVigilante = 0;
	var currentPigeons = 0;
	var currentStuntJumps = 0;



	for (var i = 0; i < data.length; i++) {
		var key = data[i].split("=")[0];
		var value = data[i].split("=")[1];

		// THIS AREA ADDS THE VALUES
		if (key.substring(0, 2) == "MI") currentMissions++;
		else if (key == "DD") currentDrugDeliveries = parseInt(value);
		else if (key == "BR") currentBrucieRaces = parseInt(value);
		else if (key == "EE") currentExoticExports = parseInt(value);
		else if (key == "FA") currentFixerAssassinations = parseInt(value);
		else if (key.substring(0, 2) == "CT") currentCarThefts++;
		else if (key.substring(0, 2) == "FR") currentFriendshipPoints++;
		else if (key.substring(0, 2) == "GP") currentGamePoints++;
		else if (key.substring(0, 2) == "RC" && parseInt(key.substring(2, 4)) <= 16) currentRandomCharacters++;
		else if (key.substring(0, 2) == "MW") currentMostWanted++;
		else if (key == "VI") currentVigilante = parseInt(value);
		else if (key.substring(0, 2) == "PI") currentPigeons++;
		else if (key.substring(0, 2) == "SJ") currentStuntJumps++;

	}

	// THIS AREA CALCULATES THE OVERALL PERCENTAGE

	totalPercent = ((currentMissions / totalMissions) * 0.6) + ((currentDrugDeliveries / totalDrugDeliveries) * 0.02) + ((currentBrucieRaces / totalBrucieRaces) * 0.02) + ((currentExoticExports / totalExoticExports) * 0.02) + ((currentFixerAssassinations / totalFixerAssassinations) * 0.02) + ((currentCarThefts / totalCarThefts) * 0.02) + ((currentFriendshipPoints / totalFriendshipPoints) * 0.1) + ((currentGamePoints / totalGamePoints) * 0.05) + ((currentRandomCharacters / totalRandomCharacters) * 0.05) + ((currentMostWanted / totalMostWanted) * 0.025) + ((currentVigilante / totalVigilante) * 0.025) + ((currentPigeons / totalPigeons) * 0.025) + ((currentStuntJumps / totalStuntJumps) * 0.025);

	// THIS AREA PRESENTS IT
	$("#grand-total").html(floatToPercent(totalPercent, 4));
	$("#mission-total").html(floatToPercent(currentMissions / totalMissions, 2));
	$("#random-total").html(floatToPercent(currentRandomCharacters / totalRandomCharacters, 2));
	$("#side-total").html(floatToPercent(((currentDrugDeliveries / totalDrugDeliveries) * 0.2) + ((currentBrucieRaces / totalBrucieRaces) * 0.2) + ((currentExoticExports / totalExoticExports) * 0.2) + ((currentFixerAssassinations / totalFixerAssassinations) * 0.2) + ((currentCarThefts / totalCarThefts) * 0.2), 2));
	$("#friend-total").html(floatToPercent(currentFriendshipPoints / totalFriendshipPoints, 2));
	$("#mostwanted-total").html(floatToPercent(currentMostWanted / totalMostWanted, 1));
	$("#pigeon-total").html(floatToPercent(currentPigeons / totalPigeons, 1));
	$("#stuntjump-total").html(floatToPercent(currentStuntJumps / totalStuntJumps, 0));
}

