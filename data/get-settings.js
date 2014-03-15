var textArea = document.getElementById("edit-box");
var languageselector = document.getElementById("dropdown");

var consonants = [66,67,68,70,71,72,74,75,76,77,78,80,81,82,83,84,86,87,88,89,90];
var vowels = [65,69,73,79,85];
var previouscharacter = 0;

languageselector.addEventListener('change', function ondropdownchange(event) {
  self.port.emit("language-code", languageselector.value);
}, false);

textArea.addEventListener('keydown', function onkeyup(event) {
  if (languageselector.value != "en") {
    if (event.keyCode >= 65 && event.keyCode <= 90) {
      event.preventDefault();
	  if (languageselector.value == "hi") {
	    replacewithhindi(event.keyCode, window.previouscharacter);
	  }
	}
  }
}, false);

self.port.on("show", function onShow() {
  textArea.focus();
});



function replacewithhindi(charactertoreplace, previouscharacter) {
  var newchar = "";
  self.port.emit("language-code", previouscharacter);
  if(charactertoreplace == 65) {
  	if(consonants.indexOf(previouscharacter) > -1) {
  	  newchar = "\u093E"
  	}
  	else {
  	  newchar = "\u0905";
	}
	//previouscharacter = 65;
  }
  else if(charactertoreplace == 66) {
  	newchar = "\u092C";
  	//previouscharacter = 66;
  }
  else if(charactertoreplace == 68) {
  	newchar = "\u0926";
  	//previouscharacter = 68;
  }
  window.previouscharacter = charactertoreplace;
    self.port.emit("text-entered", window.previouscharacter);
  	var content = textArea.value
    var startPos = textArea.selectionStart;
    var endPos = textArea.selectionEnd;
    selectedText = textArea.value.substring(startPos, endPos)
    textArea.value = content.slice(0, startPos) + newchar + content.slice(endPos);
    textArea.selectionStart = textArea.selectionEnd = startPos + 1;
};