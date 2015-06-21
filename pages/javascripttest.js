var hello = function (targetName) {
	document.write("Hello " + targetName);
	return targetName;
};

var test1 = function () {
	hello("bananas");
};

var test2 = function () {
	document.write(hello("bananas"));
};

var test3 = function (maxIterations) {
	var iterations = 0;
	while (iterations < maxIterations) {
		hello("capsicum");
		document.write(" (" + (iterations + 1) + ")<br />");
		iterations++;
	}
};

var test4 = function () {
	var x = document.createElement("INPUT");
	x.setAttribute("type", "text");
	x.setAttribute("value", "Type a number!");
	document.body.appendChild(x);


	var y = document.createElement("BUTTON");
	y.setAttribute("value", "Click when done!");
	document.body.appendChild(y);
	test3(document.getElementById(x).value);
};