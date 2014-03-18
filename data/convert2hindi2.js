var consonants = [66,67,68,70,71,72,74,75,76,77,78,80,81,82,83,84,86,87,88,89,90];
var vowels = [65,69,73,79,85];
var previouskeytyped = 0;
var previouscharactertyped = "";
var count_prev_pressed = 0;
var offset = 0;

var numerals = ["\u0966", "\u0967", "\u0968", "\u0969", "\u096A", "\u096B", "\u096C", "\u096D", "\u096E", "\u096F"];

var a_vowel_sounds = ["\u093E", "\u0905", "\u0906"];
var i_vowel_sounds = ["\u093F", "\u0940", "\u0907", "\u0908"];
var u_vowel_sounds = ["\u0941", "\u0942", "\u0909", "\u090A"];
var e_vowel_sounds = ["\u0947", "\u0948", "\u090F", "\u0910"];
var o_vowel_sounds = ["\u094B", "\u094C", "\u0913", "\u0914"];

var ka_sounds = ["\u0915", "\u0916", "\u0958", "\u0959"];
var ga_sounds = ["\u0917", "\u0918", "\u095A"];
var ca_sounds = ["\u091A", "\u091B"];
var ja_sounds = ["\u091C", "\u091D", "\u095B"];
var ta_sounds = ["\u0924", "\u0925", "\u091F", "\u0920"];
var da_sounds = ["\u0926", "\u0927", "\u0921", "\u0922"];
var pa_sounds = ["\u092A", "\u092B", "\u095E"];
var ba_sounds = ["\u092C", "\u092D"];
var na_sounds = ["\u0919", "\u091E", "\u0923", "\u0928", "\u092E"];
var sa_sounds = ["\u0938", "\u0937", "\u0936"];
var ya_sounds = ["\u092F"];
var ha_sounds = ["\u0939"];
var ra_sounds = ["\u0930", "\u095C", "\u095D"];
var va_sounds = ["\u0935"];
var la_sounds = ["\u0932", "\u0933"];
var punc = ["\u094D", "\u0964", "\u0965", "\u0970", "\u0971", "\u093C", "\u093D", "\u0901", "\u0902"];

function replacewithhindi(textArea, keytoreplace, previouskeytyped) {
  var newchar = "";
  var content = textArea.value
  var startPos = textArea.selectionStart;
  var endPos = textArea.selectionEnd;
  offset = 0;
  //self.port.emit("language-code", previouskeytyped);
  ////////////////////////////////Numbers
  if(keytoreplace >= 48 && keytoreplace <= 57) {
    newchar = numerals[keytoreplace - 48];
  }
  ////////////////////////////////End Numbers
  ////////////////////////////////Vowels
  else if(keytoreplace == 65) {////////////////////////////////A sounds
    newchar = getReplacementFromArray(keytoreplace, a_vowel_sounds);
  }////////////////////////////////End A Sounds
  else if(keytoreplace == 73) {////////////////////////////////I sounds
    newchar = getReplacementFromArray(keytoreplace, i_vowel_sounds);
  }////////////////////////////////End I Sounds
  else if(keytoreplace == 85) {////////////////////////////////U sounds
    newchar = getReplacementFromArray(keytoreplace, u_vowel_sounds);
  }////////////////////////////////End U Sounds
  else if(keytoreplace == 69) {////////////////////////////////E sounds
    newchar = getReplacementFromArray(keytoreplace, e_vowel_sounds);
  }////////////////////////////////End E Sounds
  else if(keytoreplace == 79) {////////////////////////////////O sounds
    newchar = getReplacementFromArray(keytoreplace, o_vowel_sounds);
  }////////////////////////////////End O Sounds
  ////////////////////////////////End Vowels
  ////////////////////////////////Consonants
  else if(keytoreplace == 75) {////////////////////////////////Ka Sounds
    newchar = getReplacementFromArray(keytoreplace, ka_sounds);
  }////////////////////////////////End Ka Sounds
  ////////////////////////////////Consonants
  else if(keytoreplace == 71) {////////////////////////////////Ga Sounds
    newchar = getReplacementFromArray(keytoreplace, ga_sounds);
  }////////////////////////////////End Ga Sounds
  else if(keytoreplace == 67) {////////////////////////////////Ca Sounds
    newchar = getReplacementFromArray(keytoreplace, ca_sounds);
  }////////////////////////////////End Ca Sounds
  else if(keytoreplace == 74) {////////////////////////////////Ja Sounds
    newchar = getReplacementFromArray(keytoreplace, ja_sounds);
  }////////////////////////////////End Ja Sounds
  else if(keytoreplace == 84) {////////////////////////////////Ta Sounds
    newchar = getReplacementFromArray(keytoreplace, ta_sounds);
  }////////////////////////////////End Ta Sounds
  else if(keytoreplace == 68) {////////////////////////////////Da Sounds
    newchar = getReplacementFromArray(keytoreplace, da_sounds);
  }////////////////////////////////End Da Sounds
  else if(keytoreplace == 80) {////////////////////////////////Pa Sounds
    newchar = getReplacementFromArray(keytoreplace, pa_sounds);
  }////////////////////////////////End Pa Sounds
  else if(keytoreplace == 66) {////////////////////////////////Ba Sounds
    newchar = getReplacementFromArray(keytoreplace, ba_sounds);
  }////////////////////////////////End Ba Sounds
  else if(keytoreplace == 78) {////////////////////////////////Na Sounds
    newchar = getReplacementFromArray(keytoreplace, na_sounds);
  }////////////////////////////////End Na Sounds
  else if(keytoreplace == 83) {////////////////////////////////Sibilant Sounds
    newchar = getReplacementFromArray(keytoreplace, sa_sounds);
  }////////////////////////////////End Sibilant Sounds
  else if(keytoreplace == 89) {////////////////////////////////Ya Sounds
    newchar = getReplacementFromArray(keytoreplace, ya_sounds);
  }////////////////////////////////End Ya Sounds
  else if(keytoreplace == 72) {////////////////////////////////Ha Sounds
    newchar = getReplacementFromArray(keytoreplace, ha_sounds);
  }////////////////////////////////End Ha Sounds
  else if(keytoreplace == 82) {////////////////////////////////Ra Sounds
    newchar = getReplacementFromArray(keytoreplace, ra_sounds);
  }////////////////////////////////End Ra Sounds
  else if(keytoreplace == 86) {////////////////////////////////Va Sounds
    newchar = getReplacementFromArray(keytoreplace, va_sounds);
  }////////////////////////////////End Va Sounds
  else if(keytoreplace == 76) {////////////////////////////////La Sounds
    newchar = getReplacementFromArray(keytoreplace, la_sounds);
  }////////////////////////////////End La Sounds
  ////////////////////////////////End Consonants
  else if(keytoreplace == 77) {////////////////////////////////Virama + Punctuation
    newchar = getReplacementFromArray(keytoreplace, punc);
  }////////////////////////////////End Virama + Punctuation
  window.previouskeytyped = keytoreplace;
  window.previouscharactertyped = newchar;

  selectedText = textArea.value.substring(startPos, endPos)
  textArea.value = content.slice(0, startPos + offset) + newchar + content.slice(endPos);
  textArea.selectionStart = textArea.selectionEnd = startPos + 1 + offset;
  return true;
};

function getReplacementFromArray(keytoreplace, inparray) {
  if(keytoreplace != previouskeytyped) {
      count_prev_pressed = 0;
    }
    repchar = inparray[count_prev_pressed];
    if(count_prev_pressed > 0) {
      offset = -1;
    }
    count_prev_pressed++;
    if (count_prev_pressed >= inparray.length) {
      count_prev_pressed = 0;
    }
    self.port.emit("typing-begin", inparray);
    return repchar
}