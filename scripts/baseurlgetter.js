// This gets the computer's URL and port number.
// This will be used to get the data from wherever the website is hosted.
var protocol = window.location.protocol
var url = window.location.hostname;
var path = window.location.pathname;
var port = window.location.port;
console.log(path);
console.log(path.substring(/\/pages/g));

// Now we clean the pathname of folders that I'm expecting.
// This allows me to host this as a subdomain of another website.
var pathpos = path.substring(/\/pages|\/scripts|\/images|[^\/]*\.html/g);
if (pathpos >= 0) {
    path = path.replace(pathpos, "");
}

// If you're looking at this, then this is just for debugging.
// Purely, if I'm testing this locally, I want all the web elements to come from my computer.
if (url == "localhost") {
    url = "http://" + url + ":" + port + path;
} else {
    if (protocol == "http:") {
        // Chrome did a weird thing in the recent update, so now the site should
        // automatically redirect to the HTTPS version.
        window.location.replace("https://" + url + path);
    }
    url = "https://" + url + path;
}
console.log(path);
console.log(url);

document.write("<base href=" + url + ">");