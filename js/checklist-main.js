$(document).ready(function() {
	$(".main-content").load("../html/checklist-objects.html #start");
});

$(document).on("click", ".game-button", function(event) {
	var code = event.target.value;
	//console.log(code);
	$(".main-content").load("../html/checklist-objects.html #in-game", function() {
		$(".checklist-area").load("../html/checklist-objects.html #" + code, function() {
			loadCookie(code);
		});
		$(".save-button").val(code);
		$(".load-button").val(code);
		$(".reset-button").val(code);
		$(".delete-button").val(code);
		loadCookie(code);
		$(".pop").progressbar({
			disabled: false,
			max: 100,
			value: 25
		});
	});
});

$(document).on("click", ".back-button", function(event) {
	$(".main-content").load("../html/checklist-objects.html #start");
});

$(document).on("click", ".save-button", function(event) {
	var code = event.target.value;
	saveCookie(code);
});

$(document).on("click", ".load-button", function(event) {
	var code = event.target.value;
	loadCookie(code);
});

$(document).on("click", ".reset-button", function(event) {
	var code = event.target.value;
	$(".checklist-area").load("../html/checklist-objects.html #" + code);
});

$(document).on("click", ".delete-button", function(event) {
	var code = event.target.value;
	var cookie = Cookies.get(code);
	if (cookie != "" && cookie != null) {
		if (confirm("Do you want to delete your cookie?")) {
			Cookies.remove(code);
		}
	} else {
		return;
	}
});

var loadCookie = function(code) {
	var cookie = Cookies.get(code);
	if (cookie != "" && cookie != null) {
		cookie = cookie.split("&");
	} else {
		return;
	}
	console.log(cookie);
	for (var i = 0; i < cookie.length; i++) {
		var key = cookie[i].split("=")[0];
		var value = cookie[i].split("=")[1];
		//alert(key + " has the value of " + value);
		if (value == "y") {
			$("#" + key).prop("checked", true);
		} else {
			$("#" + key).val(value);
		}
	}
}

var saveCookie = function(code) {
	Cookies.set(code, $("#" + code + "-DATA").serialize(), { expires: 1000 });
}