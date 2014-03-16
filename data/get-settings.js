var textArea = document.getElementById("edit-box");
var languageselector = document.getElementById("dropdown");

var consonants = [66,67,68,70,71,72,74,75,76,77,78,80,81,82,83,84,86,87,88,89,90];
var vowels = [65,69,73,79,85];
var previouskeytyped = 0;
var previouscharactertyped = "";

languageselector.addEventListener('change', function ondropdownchange(event) {
  self.port.emit("language-code", languageselector.value);
}, false);

textArea.addEventListener('keydown', function onkeyup(event) {
  if (languageselector.value != "en") {
    if ((event.keyCode >= 48 && event.keyCode <= 57) || (event.keyCode >= 65 && event.keyCode <= 90)) {
      event.preventDefault();
	  if (languageselector.value == "hi") {
	    replacewithhindi(textArea, event.keyCode, window.previouskeytyped);
	  }
	}
	else {
		window.previouskeytyped = event.keyCode;
        window.previouscharactertyped = "";
	}
  }
}, false);

self.port.on("show", function onShow() {
  textArea.focus();
});


