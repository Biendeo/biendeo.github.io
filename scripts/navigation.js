var protocol = window.location.protocol
var url = window.location.hostname;
var port = window.location.port;

$(document).ready(function () {
    $(".navigation").load("pages/elements/navigation.html");
});

var loadIndex = function () {
    $(".mainarea").load("pages/elements/indexcontent.html");
    swapURL("");
};

var loadAbout = function () {
    $(".mainarea").load("pages/elements/aboutcontent.html");
    swapURL("/pages/about.html");
};

var loadJavascriptTest = function () {
    $(".mainarea").load("pages/elements/javascripttestcontent.html");
    swapURL("/pages/javascripttest.html");
};

var loadJQueryTest = function () {
    $(".mainarea").load("pages/elements/jquerytestcontent.html");
    swapURL("/pages/jquerytest.html");
};

var loadTerminalWars = function () {
    $(".mainarea").load("pages/elements/terminalwarscontent.html");
    swapURL("/pages/terminalwars.html");
};

var loadLinkedListViewer = function () {
    $(".mainarea").load("pages/elements/linkedlistviewercontent.html");
    swapURL("/pages/linkedlistviewer.html");
};

var loadCalculator = function () {
    $(".mainarea").load("pages/elements/calculatorcontent.html");
    swapURL("/pages/calculator.html");
};

var swapURL = function (directory) {
    if (url == "localhost") {
        // window.location.href = protocol + "//" + url + ":" + port + directory;
        window.history.pushState('Object', 'Title', protocol + "//" + url + ":" + port + directory);
    } else {
        // window.location.href = protocol + "//" + url + directory;
        window.history.pushState('Object', 'Title', protocol + "//" + url + directory);
    }
}