// This gets the computer's URL and port number.
// This will be used to get the data from wherever the website is hosted.
var url = window.location.hostname;
var port = window.location.port;

// If you're looking at this, then this is just for debugging.
// Purely, if I'm testing this locally, I want all the web elements to come from my computer.
if (url == "localhost") {
	url = "http://" + url + ":" + port + "/";
} else {
	url = "https://" + url + "/";
}
document.write("<base href=" + url + ">");