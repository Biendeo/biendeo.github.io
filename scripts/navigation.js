console.log("The header is a magical javascript file. Wooooh!");

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

document.write(" \
<base href=" + url + "> \
<link href=\"main.css\" rel=\"stylesheet\"> \
<link rel=\"icon\" type=\"image/png\" href=\"images/favicon.png\"> \
<div class=\"navigation\"> \
	<ul> \
		<li><a href=\"index.html\">Home</a></li> \
		<li><a href=\"https://github.com/Biendeo/I-Am-Learning-To-Code\">Coding</a></li> \
		<li><a href=\"https://www.youtube.com/user/Biendeo\">YouTube</a></li> \
		<li><a href=\"https://www.twitter.com/Biendeo\">Twitter</a></li> \
		<li><a href=\"http://www.steamcommunity.com/id/biendeo\">Steam</a></li> \
		<li><a href=\"/pages/about.html\">About</a></li> \
	</ul> \
</div>");