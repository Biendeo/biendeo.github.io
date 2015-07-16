$(document).ready(function () {
	$(".navigation").load("pages/elements/navigation.html");
});

var loadIndex = function () {
	$(".mainarea").load("pages/elements/indexcontent.html");
};

var loadAbout = function () {
	$(".mainarea").load("pages/elements/aboutcontent.html");
};

var loadJavascriptTest = function () {
	$(".mainarea").load("pages/elements/javascripttestcontent.html");
};

var loadJQueryTest = function () {
	$(".mainarea").load("pages/elements/jquerytestcontent.html");
};