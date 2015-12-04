$(document).ready(function() {
	$(".main-content").load("../html/checklist-objects.html #start");
});

$(document).on("click", ".game-button", function(event) {
	var code = event.target.value;
	//console.log(code);
	$(".main-content").load("../html/checklist-objects.html #in-game", function() {
		$(".checklist-area").load("../html/checklist-objects.html #" + code);
		$(".save-button").val(code);
		$(".load-button").val(code);
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

var loadCookie = function(code) {
	var cookie = Cookies.get(code).split("&");
	console.log(cookie);
	for (var i = 0; i < cookie.length; i++) {
		var key = cookie[i].split("=")[0];
		var value = cookie[i].split("=")[1];
		//alert(key + " has the value of " + value);
		if (value == "true") {
			$("#" + key).prop("checked", true);
		} else {
			$("#" + key).val(value);
		}
	}
}

var saveCookie = function(code) {
	Cookies.set(code, $("#" + code + "-DATA").serialize());
}