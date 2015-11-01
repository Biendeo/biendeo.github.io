$(document).ready(function() {
	$(".main-content").load("html/typewriter.html", function () {
		blankSpaceTopAdjust();
		dialogueProceed(0);
	});
});

$(window).resize(function() {
	blankSpaceTopAdjust();
});

var blankSpaceTopAdjust = function() {
	var height = $(window).height();
	$("#blank-space-top").css("height", ((height - 480) / 2));
};

var commenceTypeWriter = function(element, text, speed) {
	var highestTimeoutId = setTimeout(";");
	for (var i = 0 ; i < highestTimeoutId ; i++) {
		clearTimeout(i);
	}
	typeWriterEffect(element, text, "", speed);
}

var typeWriterEffect = function(element, textToGo, currentText, speed) {
	if (currentText[currentText.length - 1] == "<") {
		textToGo = "<" + textToGo;
		currentText = currentText + textToGo.match(/^<.+?>/)[0].slice(1);
		textToGo = textToGo.match(/>.*$/)[0].slice(1);
	}
	//console.log("currentText = " + currentText);
	//console.log("textToGo = " + textToGo);
	$(element).html(currentText);

	if (textToGo.length > 0) {
		setTimeout(function() {
			typeWriterEffect(element, textToGo.slice(1), currentText + textToGo[0], speed);
		}, speed);
	}
};

var screen = 0;

$(document).on("keypress", "#input-prompt-field", function(event) {
	if (event.which == 13) {
		$(".display-content").val("");
		var input = $("#input-prompt-field").val().trim();
		$("#input-prompt-field").val("");
		var trigger = inputToTriggerIndex(input.toLowerCase());
		dialogueProceed(trigger, input);
	}
});

var inputToTriggerIndex = function(input) {
	input = input.toLowerCase().trim();
	switch(input) {
		default:
			return 1;
		case "okay":
		case "ok":
			return 2;
		case "help":
		case "back":
		case "home":
			return 3;
		case "":
			return 4;
		case "code":
			return 5;
		case "cool stuff":
			return 6;
		case "about":
			return 7;
		case "twitter":
			return 8;
		case "youtube":
			return 9;
		case "steam":
			return 10;
		case "joke":
			return 11;
		case "terminal wars":
			return 12;
		case "github":
			return 13;
		case "bitter":
			return 14;
		case "this website":
			return 15;
		case "doge":
			return 16;
		case "dennis":
		case "go dennis":
			return 17;
		case "new":
		case "what's new":
		case "whats new":
		case "what is new":
			return 18;
	}
}

var inputToAHrefFunction = function(input) {
	return '<a href="#" onclick="javascript:dialogueProceed(' + inputToTriggerIndex(input).toString() + ')">' + input + '</a>';
}

var dialogueProceed = function(trigger, input) {
	$(".display-content").html("");
	switch(trigger) {
		case 0:
			commenceTypeWriter(".display-content", "Welcome to the Biendeo website!" + "<br />" + "Input some words in the box below, or click the links to see things!" + "<br /><br />" + "Check out " + inputToAHrefFunction("what's new") + "." + "<br /><br />" + "Go " + inputToAHrefFunction("home") + ".", 20);
			break;
		case 1:
		default:
			commenceTypeWriter(".display-content", "I don't know what you mean by <i>" + input + "</i>. Try something else, or type " + inputToAHrefFunction("home") + ".", 20);
			break;
		case 2:
			switch(screen) {
				case 0:
				default:
					commenceTypeWriter(".display-content", "Sure, I guess... You should just type " + inputToAHrefFunction("home") + " in case.", 20);
					break;
			}
			screen = 2;
			break;
		case 3:
			commenceTypeWriter(".display-content", "This website controls like a text-based adventure, but I also let you just click on links if you want to operate it that way. Of course, there's neat secrets to find. :)" + "<br /><br />" + "The main features are found at " + inputToAHrefFunction("Code") + ", " + inputToAHrefFunction("Cool Stuff") + ", and " + inputToAHrefFunction("About") + "." + "<br /><br />" + "Some people may also want to find my " + inputToAHrefFunction("Twitter") + ", " + inputToAHrefFunction("YouTube") + ", or " + inputToAHrefFunction("Steam") + "." + "<br /><br />" + "You can also email me at <a href='mailto://biendeos@gmail.com'>biendeos@gmail.com</a> about anything really. I try to reply to these quickly. :)", 20);
			break;
		case 4:
			commenceTypeWriter(".display-content", "That's the box where you type commands! Type something there, like " + inputToAHrefFunction("home") + "!", 20);
			screen = 4;
			break;
		case 5:
			commenceTypeWriter(".display-content", "I'm currently doing a software engineering degree at UNSW. I'm currently a first year student, but I've done quite a lot of awesome stuff already. Here's some cool stuff that I've done." + "<br /><br />" + "<ul>" + "<li>" + inputToAHrefFunction("Terminal Wars") + "</li>" + "<li>" + inputToAHrefFunction("Bitter") + "</li>" + "<li>" + inputToAHrefFunction("Github") + "</li>" + "</li>" + "<li>" + inputToAHrefFunction("This Website") + "</li>" + "</ul>" + "<br /><br />" + "Go back " + inputToAHrefFunction("home") + ".", 20);
			screen = 5;
			break;
		case 6:
			commenceTypeWriter(".display-content", "Later on I'll be button some neat stuff in here. You can type " + inputToAHrefFunction("joke") + ". :)" + "<br /><br />" + "Go back " + inputToAHrefFunction("home") + ".", 20);
			screen = 6;
			break;
		case 7:
			commenceTypeWriter(".display-content", "I'm Thomas Moffet, but you may also know me by my internet name of Biendeo. I'm currently doing a software engineering degree at UNSW, and I'm looking toward graduating in 2018. I don't really know where or what field in particular I'll be working with in the future, but I'm absolutely loving programming. I made this sweet website because of it!" + "<br /><br />" + "Some of you may know I love playing video games in my spare time. A lot. I play way too many for my own good. Still, I think in a few years, we can see video games being held in such a respectable position as music or television. Maybe. Depends if there's less corporate business about it and more artistic merit. Still, I think that there's always something awesome to play. :)" + "<br /><br />" + "If this about page seems bad, that's because I'm writing it way late at night. I'll clean it up later. I promise. ;3" + "<br /><br />" + "Go back " + inputToAHrefFunction("home") + ".", 20);
			screen = 7;
			break;
		case 8:
			commenceTypeWriter(".display-content", "I have a Twitter account mostly for my " + inputToAHrefFunction("YouTube") + " channel, but I sometimes post about things I'm doing there. You can check it out <a href='https://twitter.com/biendeo'>here</a> <i>(external link)</i>." + "<br /><br />" + "Go back " + inputToAHrefFunction("home") + ".", 20);
			screen = 8;
			break;
		case 9:
			commenceTypeWriter(".display-content", "I do a YouTube channel where I do analytical videos of video games, as well as Let's Play commentary on games that I enjoy." + "<br /><br />" + "You can check it out <a href='https://youtube.com/biendeo'>here</a> <i>(external link)</i>." + "<br /><br />" + "Unfortunately I've been pretty lazy on doing new videos, but don't worry, there will be new content in November! Trust me!" + "<br /><br />" + "Go back " + inputToAHrefFunction("home") + ".", 20);
			screen = 9;
			break;
		case 10:
			commenceTypeWriter(".display-content", "I play too many games in my spare time. I have a Steam account if you want to stalk me <a href='http://steamcommunity.com/id/biendeo/'>there</a> <i>(external link)</i>. :)" + "<br /><br />" + "Go back " + inputToAHrefFunction("home") + ".", 20);
			screen = 10;
			break;
		case 11:
			var totalJokes = 4;
			var random = Math.floor(Math.random() * totalJokes);
			switch(random % totalJokes) {
				case 0:
					commenceTypeWriter(".display-content", "Why did the doctor cross the road?" + "<br /><br />" + "Insurance of course!", 20);
					break;
				case 1:
					commenceTypeWriter(".display-content", "What did the cannibal do after he dumped his girlfriend?" + "<br /><br />" + "He wiped his butt!", 20);
					break;
				case 2:
					commenceTypeWriter(".display-content", "Those deadbeat kids. They're too ghoul for school!", 20);
					break;
				default:
					commenceTypeWriter(".display-content", "I'm not that funny!", 20);
					break;
			}
			screen = 11;
			break;
		case 12:
			commenceTypeWriter(".display-content", "Terminal Wars is an Advance Wars clone I made entirely in C for my first semester COMP1917 class. I created it to demonstrate my ability in planning and debugging. It's a little bit incomplete, as there is no functional buy menu for sea or air units, nor is there any win state in the game, but overall it recreates the game quite nicely." + "<br /><br />" + "Check it out <a href='https://github.com/Biendeo/I-Am-Learning-To-Code/tree/master/009%20-%20Terminal%20Wars'>here</a> <i>(external link)</i>." + "<br /><br />" + "Go back to " + inputToAHrefFunction("code") + "." + "<br />" + "Go back " + inputToAHrefFunction("home") + ".", 20);
			screen = 12;
			break;
		case 13:
			commenceTypeWriter(".display-content", "I do a bunch of code on Github, mostly for personal tests and stuff. Right now, I'm working on creating C++ interpretations of data structures I've learned about at uni." + "<br /><br />" + "You can check out my Github <a href='https://github.com/Biendeo'>here</a> <i>(external link)</i>." + "<br /><br />" + "Go back to " + inputToAHrefFunction("code") + "." + "<br />" + "Go back with " + inputToAHrefFunction("home") + ".", 20);
			screen = 13;
			break;
		case 14:
			commenceTypeWriter(".display-content", "Bitter is my COMP2041 assignment. Basically, we were told to basically re-create Twitter using CGI. I did mine mostly in Python, with hints of Javascript and JQuery about. There's some basic features to be used, but I think I did quite a nice job not only getting it to work properly, but also looking nice. I did like 99% of the CSS from scratch, and I think it's pretty awesome." + "<br /><br />" + "You can check it out <a href='http://cgi.cse.unsw.edu.au/~z5061905/15s2-comp2041-cgi/ass2/bitter.cgi'>here</a> <i>(external link)</i>." + "<br /><br />" + "Go back to " + inputToAHrefFunction("code") + "." + "<br />" + "Go back " + inputToAHrefFunction("home") + ".", 20);
			screen = 14;
			break;
		case 15:
			commenceTypeWriter(".display-content", "This website was done entirely in Javascript and JQuery. It's basically just a load of check prompts, and responses to those. If you really want to, you can view the page source to see how it works, or check out the hosting on <a href='https://github.com/Biendeo/biendeo.github.io'>Github</a> <i>(external link)</i>." + "<br /><br />" + "Go back to " + inputToAHrefFunction("code") + "." + "<br />" + "Go back " + inputToAHrefFunction("home") + ".", 20);
			screen = 15;
			break;
		case 16:
			commenceTypeWriter(".display-content", '<video preload="auto" autoplay="autoplay" muted="muted" loop="loop"><source src="https://i.imgur.com/ISfNKj9.webm" type="video/webm"></video>', 20);
			screen = 16;
			break;
		case 17:
			commenceTypeWriter(".display-content", "I'll make a Dungeonman reference here later, for now, I'll be lazy and just link you to <a href='http://www.homestarrunner.com/dungeonman.html'>the original</a>. HAHAHA!", 20);
			screen = 16;
			break;
		case 18:
			commenceTypeWriter(".display-content", "<b>1/11/15</b>: I'm working on getting more features on this website. I want to make it a bit easier to use (because right now everything is tucked away a bit). I also want to try and get the interface to look better. It's got that retro look, but there's no wow, it just looks plain.", 20);
			screen = 17;
			break;
	}
};