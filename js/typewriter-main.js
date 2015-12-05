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

var typewriter = {
	screen: 0,
	speed: 20,
	string: ""
}

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
		case "checklist":
			return 19;
	}
}

var inputToAHrefFunction = function(input) {
	return '<a href="#" onclick="javascript:dialogueProceed(' + inputToTriggerIndex(input).toString() + ')">' + input + '</a>';
}

var dialogueProceed = function(trigger, input) {
	$(".display-content").html("");

	switch(trigger) {
		case 0:
			$(".hidden-text").load("html/typewriter-lines.html #start", function() {
				typewriter.screen = 0;
				typewriter.string = replaceAHrefTags($(".hidden-text").html().replace(/(\r\n|\n|\r)/gm, ""));
				typewriter.speed = 20;
				prepareTypeWriter();
			});
			break;
		case 1:
		default:
			commenceTypeWriter(".display-content", "I don't know what you mean by <i>" + input + "</i>. Try something else, or type " + inputToAHrefFunction("home") + ".", 20);
			break;
		case 2:
			switch(typewriter.screen) {
				case 0:
				default:
					$(".hidden-text").load("html/typewriter-lines.html #okay", function() {
						typewriter.screen = 2;
						typewriter.string = replaceAHrefTags($(".hidden-text").html().replace(/(\r\n|\n|\r)/gm, ""));
						typewriter.speed = 20;
						prepareTypeWriter();
					});
					break;
			}
			break;
		case 3:
			$(".hidden-text").load("html/typewriter-lines.html #home", function() {
				// Screen does not change.
				typewriter.string = replaceAHrefTags($(".hidden-text").html().replace(/(\r\n|\n|\r)/gm, ""));
				typewriter.speed = 20;
				prepareTypeWriter();
			});
			break;
		case 4:
			$(".hidden-text").load("html/typewriter-lines.html #blank", function() {
				typewriter.screen = 4;
				typewriter.string = replaceAHrefTags($(".hidden-text").html().replace(/(\r\n|\n|\r)/gm, ""));
				typewriter.speed = 20;
				prepareTypeWriter();
			});
			break;
		case 5:
			$(".hidden-text").load("html/typewriter-lines.html #code", function() {
				typewriter.screen = 5;
				typewriter.string = replaceAHrefTags($(".hidden-text").html().replace(/(\r\n|\n|\r)/gm, ""));
				typewriter.speed = 20;
				prepareTypeWriter();
			});
			break;
		case 6:
			$(".hidden-text").load("html/typewriter-lines.html #coolstuff", function() {
				typewriter.screen = 6;
				typewriter.string = replaceAHrefTags($(".hidden-text").html().replace(/(\r\n|\n|\r)/gm, ""));
				typewriter.speed = 20;
				prepareTypeWriter();
			});
			break;
		case 7:
			$(".hidden-text").load("html/typewriter-lines.html #about", function() {
				typewriter.screen = 7;
				typewriter.string = replaceAHrefTags($(".hidden-text").html().replace(/(\r\n|\n|\r)/gm, ""));
				typewriter.speed = 20;
				prepareTypeWriter();
			});
			break;
		case 8:
			$(".hidden-text").load("html/typewriter-lines.html #twitter", function() {
				typewriter.screen = 8;
				typewriter.string = replaceAHrefTags($(".hidden-text").html().replace(/(\r\n|\n|\r)/gm, ""));
				typewriter.speed = 20;
				prepareTypeWriter();
			});
			break;
		case 9:
			$(".hidden-text").load("html/typewriter-lines.html #youtube", function() {
				typewriter.screen = 9;
				typewriter.string = replaceAHrefTags($(".hidden-text").html().replace(/(\r\n|\n|\r)/gm, ""));
				typewriter.speed = 20;
				prepareTypeWriter();
			});
			break;
		case 10:
			$(".hidden-text").load("html/typewriter-lines.html #steam", function() {
				typewriter.screen = 10;
				typewriter.string = replaceAHrefTags($(".hidden-text").html().replace(/(\r\n|\n|\r)/gm, ""));
				typewriter.speed = 20;
				prepareTypeWriter();
			});
			break;
		case 11:
			var totalJokes = 4;
			var random = Math.floor(Math.random() * totalJokes) + 1;
			$(".hidden-text").load("html/typewriter-lines.html #joke" + random.toString(), function() {
				typewriter.screen = 11;
				typewriter.string = replaceAHrefTags($(".hidden-text").html().replace(/(\r\n|\n|\r)/gm, ""));
				typewriter.speed = 20;
				prepareTypeWriter();
			});
			break;
		case 12:
			$(".hidden-text").load("html/typewriter-lines.html #terminalwars", function() {
				typewriter.screen = 12;
				typewriter.string = replaceAHrefTags($(".hidden-text").html().replace(/(\r\n|\n|\r)/gm, ""));
				typewriter.speed = 20;
				prepareTypeWriter();
			});
			break;
		case 13:
			$(".hidden-text").load("html/typewriter-lines.html #github", function() {
				typewriter.screen = 13;
				typewriter.string = replaceAHrefTags($(".hidden-text").html().replace(/(\r\n|\n|\r)/gm, ""));
				typewriter.speed = 20;
				prepareTypeWriter();
			});
			break;
		case 14:
			$(".hidden-text").load("html/typewriter-lines.html #bitter", function() {
				typewriter.screen = 14;
				typewriter.string = replaceAHrefTags($(".hidden-text").html().replace(/(\r\n|\n|\r)/gm, ""));
				typewriter.speed = 20;
				prepareTypeWriter();
			});
			break;
		case 15:
			$(".hidden-text").load("html/typewriter-lines.html #website", function() {
				typewriter.screen = 15;
				typewriter.string = replaceAHrefTags($(".hidden-text").html().replace(/(\r\n|\n|\r)/gm, ""));
				typewriter.speed = 20;
				prepareTypeWriter();
			});
			break;
		case 16:
			$(".hidden-text").load("html/typewriter-lines.html #doge", function() {
				typewriter.screen = 16;
				typewriter.string = replaceAHrefTags($(".hidden-text").html().replace(/(\r\n|\n|\r)/gm, ""));
				typewriter.speed = 20;
				prepareTypeWriter();
			});
			break;
		case 17:
			$(".hidden-text").load("html/typewriter-lines.html #doge", function() {
				typewriter.screen = 17;
				typewriter.string = replaceAHrefTags($(".hidden-text").html().replace(/(\r\n|\n|\r)/gm, ""));
				typewriter.speed = 20;
				prepareTypeWriter();
			});
			break;
		case 18:
			$(".hidden-text").load("html/typewriter-lines.html #new", function() {
				typewriter.screen = 18;
				typewriter.string = replaceAHrefTags($(".hidden-text").html().replace(/(\r\n|\n|\r)/gm, ""));
				typewriter.speed = 20;
				prepareTypeWriter();
			});
			break;
		case 19:
			window.location.href = "/html/checklist.html";
	}
};

var prepareTypeWriter = function() {
	$(".hidden-text").html("");
	commenceTypeWriter(".display-content", typewriter.string, typewriter.speed);
	backgroundFade(typewriter.screen);
}

var backgroundFade = function(screen) {
	switch (screen) {
		case 0:
			$("body").delay(500).fadeTo('slow', 1).css("background-color", "#000000");
			break;
		case 3:
			$("body").delay(500).fadeTo('slow', 1).css("background-color", "#3333FF");
			break;
	}
};

var replaceAHrefTags = function(string) {
	var re = /\|\|\|(.+?)\|\|\|/g;

	matches = string.match(re);

	if (matches == null) {
		return string;
	}

	for (var i = 0; i < matches.length; i++) {
		matches[i] = matches[i].replace("|||", "");
		matches[i] = matches[i].replace("|||", "");
		string = string.replace("|||" + matches[i] + "|||", inputToAHrefFunction(matches[i]));
	}

	return string;
}