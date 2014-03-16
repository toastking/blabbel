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
	    replacewithhindi(event.keyCode, window.previouskeytyped);
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



function replacewithhindi(keytoreplace, previouskeytyped) {
  var newchar = "";
  var content = textArea.value
  var startPos = textArea.selectionStart;
  var endPos = textArea.selectionEnd;
  var offset = 0;
  //self.port.emit("language-code", previouskeytyped);
  ////////////////////////////////Numbers
  if(keytoreplace == 48) {////////////////////////////////0
  	newchar = "\u0966";
  }
  else if(keytoreplace == 49) {////////////////////////////////1
  	newchar = "\u0967";
  }
  else if(keytoreplace == 50) {////////////////////////////////2
  	newchar = "\u0968";
  }
  else if(keytoreplace == 51) {////////////////////////////////3
  	newchar = "\u0969";
  }
  else if(keytoreplace == 52) {////////////////////////////////4
  	newchar = "\u096A";
  }
  else if(keytoreplace == 53) {////////////////////////////////5
  	newchar = "\u096B";
  }
  else if(keytoreplace == 54) {////////////////////////////////6
  	newchar = "\u096C";
  }
  else if(keytoreplace == 55) {////////////////////////////////7
  	newchar = "\u096D";
  }
  else if(keytoreplace == 56) {////////////////////////////////8
  	newchar = "\u096E";
  }
  else if(keytoreplace == 57) {////////////////////////////////9
  	newchar = "\u096F";
  }
  ////////////////////////////////End Numbers
  ////////////////////////////////Vowels
  else if(keytoreplace == 65) {////////////////////////////////A sounds
  	if(previouskeytyped == keytoreplace) {
  	  if(previouscharactertyped == "\u093E") {
        newchar = "\u0905";
        offset = -1;
      }
      else if(previouscharactertyped == "\u0905") {
        newchar = "\u0906";
        offset = -1;
      }
      else {
  	    newchar = "\u093E";
  	  }
  	}
  	else {
  	  newchar = "\u093E";////////////////////////////////End A Sounds
    }
  }
  else if(keytoreplace == 73) {////////////////////////////////I sounds
  	if(previouskeytyped == keytoreplace) {
  	  if(previouscharactertyped == "\u093F") {
        newchar = "\u0940";
        offset = -1;
      }
      else if(previouscharactertyped == "\u0940") {
        newchar = "\u0907";
        offset = -1;
      }
      else if(previouscharactertyped == "\u0907") {
        newchar = "\u0908";
        offset = -1;
      }
      else {
  	    newchar = "\u093F";
  	  }
  	}
  	else {
  	  newchar = "\u093F";////////////////////////////////End I Sounds
    }
  }
  ////////////////////////////////End Vowels
  ////////////////////////////////Consonants
  else if(keytoreplace == 75) {////////////////////////////////Ka Sounds
  	if(previouskeytyped == keytoreplace) {
  	  if(previouscharactertyped == "\u0915") {
        newchar = "\u0916";
        offset = -1;
      }
      else {
  	    newchar = "\u0915";
  	  }
  	}
  	else {
  	  newchar = "\u0915";////////////////////////////////End Ka Sounds
    }
  }
  else if(keytoreplace == 71) {////////////////////////////////Ga Sounds
  	if(previouskeytyped == keytoreplace) {
      if(previouscharactertyped == "\u0917") {
        newchar = "\u0918";
        offset = -1;
      }
      else {
  	    newchar = "\u0917";
  	  }
  	}
  	else {
  	  newchar = "\u0917";////////////////////////////////End Ga Sounds
    }
  }
  else if(keytoreplace == 67) {////////////////////////////////Ca Sounds
  	if(previouskeytyped == keytoreplace) {
      if(previouscharactertyped == "\u091A") {
        newchar = "\u091B";
        offset = -1;
      }
      else {
  	    newchar = "\u091A";
  	  }
  	}
  	else {
  	  newchar = "\u091A";////////////////////////////////End Ca Sounds
    }
  }
  else if(keytoreplace == 74) {////////////////////////////////Ja Sounds
  	if(previouskeytyped == keytoreplace) {
      if(previouscharactertyped == "\u091C") {
        newchar = "\u091D";
        offset = -1;
      }
      else {
  	    newchar = "\u091C";
  	  }
  	}
  	else {
  	  newchar = "\u091C";////////////////////////////////End Ja Sounds
    }
  }
  else if(keytoreplace == 84) {////////////////////////////////Ta Sounds
  	if(previouskeytyped == keytoreplace) {
      if(previouscharactertyped == "\u0924") {
        newchar = "\u0925";
        offset = -1;
      }
      else if(previouscharactertyped == "\u0925") {
        newchar = "\u091F";
        offset = -1;
      }
      else if(previouscharactertyped == "\u091F") {
        newchar = "\u0920";
        offset = -1;
      }
      else {
  	    newchar = "\u0924";
  	  }
  	}
  	else {
  	  newchar = "\u0924";////////////////////////////////End Ta Sounds
    }
  }
  else if(keytoreplace == 68) {////////////////////////////////Da Sounds
  	if(previouskeytyped == keytoreplace) {
      if(previouscharactertyped == "\u0926") {
        newchar = "\u0927";
        offset = -1;
      }
      else if(previouscharactertyped == "\u0927") {
        newchar = "\u0921";
        offset = -1;
      }
      else if(previouscharactertyped == "\u0921") {
        newchar = "\u0922";
        offset = -1;
      }
      else {
  	    newchar = "\u0926";
  	  }
  	}
  	else {
  	  newchar = "\u0926";////////////////////////////////End Da Sounds
    }
  }
  else if(keytoreplace == 80) {////////////////////////////////Pa Sounds
    if(previouskeytyped == keytoreplace) {
      if(previouscharactertyped == "\u092A") {
        newchar = "\u092B";
        offset = -1;
      }
      else {
  	    newchar = "\u092A";
  	  }
    }
    else {
  	  newchar = "\u092A";////////////////////////////////End Pa Sounds
    }
  }
  else if(keytoreplace == 66) {////////////////////////////////Ba Sounds
    if(previouskeytyped == keytoreplace) {
      if(previouscharactertyped == "\u092C") {
        newchar = "\u092D";
        offset = -1;
      }
      else {
  	    newchar = "\u092C";
  	  }
    }
    else {
  	  newchar = "\u092C";////////////////////////////////End Ba Sounds
    }
  }
  else if(keytoreplace == 78) {////////////////////////////////Na Sounds
  	if(previouskeytyped == keytoreplace) {
      if(previouscharactertyped == "\u0919") {
        newchar = "\u091E";
        offset = -1;
      }
      else if(previouscharactertyped == "\u091E") {
        newchar = "\u0923";
        offset = -1;
      }
      else if(previouscharactertyped == "\u0923") {
        newchar = "\u0928";
        offset = -1;
      }
      else if(previouscharactertyped == "\u0928") {
        newchar = "\u092E";
        offset = -1;
      }
      else {
  	    newchar = "\u0919";
  	  }
  	}
  	else {
  	  newchar = "\u0919";////////////////////////////////End Na Sounds
    }
  }
  else if(keytoreplace == 83) {////////////////////////////////Sibilant Sounds
  	if(previouskeytyped == keytoreplace) {
      if(previouscharactertyped == "\u0938") {
        newchar = "\u0937";
        offset = -1;
      }
      else if(previouscharactertyped == "\u0937") {
        newchar = "\u0936";
        offset = -1;
      }
      else {
  	    newchar = "\u0938";
  	  }
  	}
  	else {
  	  newchar = "\u0938";////////////////////////////////End Sibilant Sounds
    }
  }
  else if(keytoreplace == 89) {////////////////////////////////Ya Sounds
  	//if(previouskeytyped == keytoreplace) {
  	//  if(previouscharactertyped == "\u0915") {
    //    newchar = "\u0916";
    //    offset = -1;
    //  }
    //  else {
  	//    newchar = "\u0915";
  	//  }
  	//}
  	//else {
  	  newchar = "\u092F";////////////////////////////////End Ya Sounds
    //}
  }
  else if(keytoreplace == 72) {////////////////////////////////Ya Sounds
  	//if(previouskeytyped == keytoreplace) {
  	//  if(previouscharactertyped == "\u0915") {
    //    newchar = "\u0916";
    //    offset = -1;
    //  }
    //  else {
  	//    newchar = "\u0915";
  	//  }
  	//}
  	//else {
  	  newchar = "\u0939";////////////////////////////////End Ya Sounds
    //}
  }
  else if(keytoreplace == 82) {////////////////////////////////Ra Sounds
  	//if(previouskeytyped == keytoreplace) {
  	//  if(previouscharactertyped == "\u0915") {
    //    newchar = "\u0916";
    //    offset = -1;
    //  }
    //  else {
  	//    newchar = "\u0915";
  	//  }
  	//}
  	//else {
  	  newchar = "\u0930";////////////////////////////////End Ra Sounds
    //}
  }
  else if(keytoreplace == 86) {////////////////////////////////Va Sounds
  	//if(previouskeytyped == keytoreplace) {
  	//  if(previouscharactertyped == "\u0915") {
    //    newchar = "\u0916";
    //    offset = -1;
    //  }
    //  else {
  	//    newchar = "\u0915";
  	//  }
  	//}
  	//else {
  	  newchar = "\u0935";////////////////////////////////End Va Sounds
    //}
  }
  else if(keytoreplace == 76) {////////////////////////////////La Sounds
  	if(previouskeytyped == keytoreplace) {
  	 if(previouscharactertyped == "\u0932") {
       newchar = "\u0933";
       offset = -1;
     }
     else {
  	   newchar = "\u0932";
  	 }
  	}
  	else {
  	  newchar = "\u0932";////////////////////////////////End La Sounds
    }
  }
  ////////////////////////////////End Consonants
  else {

  }
  window.previouskeytyped = keytoreplace;
  window.previouscharactertyped = newchar;
    //self.port.emit("text-entered", window.previouskeytyped);
  	
    selectedText = textArea.value.substring(startPos, endPos)
    textArea.value = content.slice(0, startPos + offset) + newchar + content.slice(endPos);
    textArea.selectionStart = textArea.selectionEnd = startPos + 1 + offset;
};