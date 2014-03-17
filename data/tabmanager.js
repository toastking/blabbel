document.addEventListener('keydown', onkeydown, false);
document.addEventListener('mousedown', onmousedown, false);
var lang = "en";

function onkeydown(event) {
  if (lang != "en" && (document.activeElement != null || document.activeElement != document.body)) {
    if ((event.keyCode >= 48 && event.keyCode <= 57) || (event.keyCode >= 65 && event.keyCode <= 90)) {
      event.preventDefault();
	  if ("hi" == "hi") {
	    replacewithhindi(document.activeElement, event.keyCode, window.previouskeytyped);
	  }
	}
	else {
		window.previouskeytyped = event.keyCode;
        window.previouscharactertyped = "";
	}
  }
}
function onmousedown(event) {
  window.previouskeytyped = event.keyCode;
  window.previouscharactertyped = "";
}
self.port.on("lang", function (text) {
  //console.log("received");
  //console.log(text);
  lang = text;
});