// This gets the computer's URL and port number.
// This will be used to get the data from wherever the website is hosted.
var protocol = window.location.protocol
var url = window.location.hostname;
var port = window.location.port;

// If you're looking at this, then this is just for debugging.
// Purely, if I'm testing this locally, I want all the web elements to come from my computer.
if (url == "localhost") {
    url = "http://" + url + ":" + port + "/";
} else {
    if (protocol == "http:") {
        // Chrome did a weird thing in the recent update, so now the site should
        // automatically redirect to the HTTPS version.
        window.location.replace("https://" + url + "/");
    }
    url = "https://" + url + "/";
}
document.write("<base href=" + url + ">");