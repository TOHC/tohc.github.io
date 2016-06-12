function colorCursor(str)
{
	document.querySelectorAll(".intro-content .intro-text .cursor")[0].className = "cursor " + str;
}

function showColor1Text(str)
{
	if (str.length == 0) {
		showColor2Text("Hacks");
		return;
	}
	document.querySelectorAll(".intro-content .intro-text .title.color1")[0].innerHTML = document.querySelectorAll(".intro-content .intro-text .title.color1")[0].innerHTML + str.charAt(0);
	colorCursor("color1");
	setTimeout(function(){showColor1Text(str.substring(1))}, 250);
}

function showColor2Text(str)
{
	if (str.length == 0) {
		return;
	}
	document.querySelectorAll(".intro-content .intro-text .title.color2")[0].innerHTML = document.querySelectorAll(".intro-content .intro-text .title.color2")[0].innerHTML + str.charAt(0);
	colorCursor("color2");
	setTimeout(function(){showColor2Text(str.substring(1))}, 250);
}

window.onload = function(){document.querySelectorAll(".intro-content .intro-text .cursor")[0].style.visibility="visible";setTimeout(function(){showColor1Text("T.")}, 250)};
