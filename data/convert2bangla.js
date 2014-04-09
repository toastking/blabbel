var consonants = [66,67,68,70,71,72,74,75,76,77,78,80,81,82,83,84,86,87,88,89,90];
var vowels = [65,69,73,79,85];
var previouskeytyped = 0;
var previouscharactertyped = "";
var count_prev_pressed = 0;
var offset = 0;

var bn_numerals = ["\u09E6", "\u09E7", "\u09E8", "\u09E9", "\u09EA", "\u09EB", "\u09EC", "\u09ED", "\u09EE", "\u09EF"];

var bn_a_vowel_sounds = ["\u09BE", "\u0985", "\u0986"];
var bn_i_vowel_sounds = ["\u09BF", "\u09C0", "\u0987", "\u0988"];
var bn_u_vowel_sounds = ["\u09C1", "\u09C2", "\u0989", "\u098A"];
var bn_e_vowel_sounds = ["\u09C7", "\u09C8", "\u098F", "\u0990"];
var bn_o_vowel_sounds = ["\u09CB", "\u09CC", "\u0993", "\u0994"];

var bn_ka_sounds = ["\u0995", "\u0996"];
var bn_ga_sounds = ["\u0997", "\u0998"];
var bn_ca_sounds = ["\u099A", "\u099B"];
var bn_ja_sounds = ["\u099C", "\u099D"];
var bn_ta_sounds = ["\u09A4", "\u09A5", "\u099F", "\u09A0"];
var bn_da_sounds = ["\u09A6", "\u09A7", "\u09A1", "\u09A2"];
var bn_pa_sounds = ["\u09AA", "\u09AB"];
var bn_ba_sounds = ["\u09AC", "\u09AD"];
var bn_na_sounds = ["\u0999", "\u099E", "\u09A3", "\u09A8", "\u09AE"];
var bn_sa_sounds = ["\u09B8", "\u09B7", "\u09B6"];
var bn_ya_sounds = ["\u09AF", "\u09DF"];
var bn_ha_sounds = ["\u09B9"];
var bn_ra_sounds = ["\u09B0", "\u09DC", "\u09DD"];
//var bn_va_sounds = ["\u0935"];
var bn_la_sounds = ["\u09B2"];
var bn_punc = ["\u09CD", "\u09E4", "\u09E5", "\u09BC", "\u09BD", "\u0981", "\u0982"];

function replacewithbangla(textArea, keytoreplace, previouskeytyped) {
  var newchar = "";
  var content = textArea.value
  var startPos = textArea.selectionStart;
  var endPos = textArea.selectionEnd;
  offset = 0;
  //self.port.emit("language-code", previouskeytyped);
  ////////////////////////////////Numbers
  if(keytoreplace >= 48 && keytoreplace <= 57) {
    newchar = bn_numerals[keytoreplace - 48];
  }
  ////////////////////////////////End Numbers
  ////////////////////////////////Vowels
  else if(keytoreplace == 65) {////////////////////////////////A sounds
    newchar = getReplacementFromArray(keytoreplace, bn_a_vowel_sounds);
  }////////////////////////////////End A Sounds
  else if(keytoreplace == 73) {////////////////////////////////I sounds
    newchar = getReplacementFromArray(keytoreplace, bn_i_vowel_sounds);
  }////////////////////////////////End I Sounds
  else if(keytoreplace == 85) {////////////////////////////////U sounds
    newchar = getReplacementFromArray(keytoreplace, bn_u_vowel_sounds);
  }////////////////////////////////End U Sounds
  else if(keytoreplace == 69) {////////////////////////////////E sounds
    newchar = getReplacementFromArray(keytoreplace, bn_e_vowel_sounds);
  }////////////////////////////////End E Sounds
  else if(keytoreplace == 79) {////////////////////////////////O sounds
    newchar = getReplacementFromArray(keytoreplace, bn_o_vowel_sounds);
  }////////////////////////////////End O Sounds
  ////////////////////////////////End Vowels
  ////////////////////////////////Consonants
  else if(keytoreplace == 75) {////////////////////////////////Ka Sounds
    newchar = getReplacementFromArray(keytoreplace, bn_ka_sounds);
  }////////////////////////////////End Ka Sounds
  ////////////////////////////////Consonants
  else if(keytoreplace == 71) {////////////////////////////////Ga Sounds
    newchar = getReplacementFromArray(keytoreplace, bn_ga_sounds);
  }////////////////////////////////End Ga Sounds
  else if(keytoreplace == 67) {////////////////////////////////Ca Sounds
    newchar = getReplacementFromArray(keytoreplace, bn_ca_sounds);
  }////////////////////////////////End Ca Sounds
  else if(keytoreplace == 74) {////////////////////////////////Ja Sounds
    newchar = getReplacementFromArray(keytoreplace, bn_ja_sounds);
  }////////////////////////////////End Ja Sounds
  else if(keytoreplace == 84) {////////////////////////////////Ta Sounds
    newchar = getReplacementFromArray(keytoreplace, bn_ta_sounds);
  }////////////////////////////////End Ta Sounds
  else if(keytoreplace == 68) {////////////////////////////////Da Sounds
    newchar = getReplacementFromArray(keytoreplace, bn_da_sounds);
  }////////////////////////////////End Da Sounds
  else if(keytoreplace == 80) {////////////////////////////////Pa Sounds
    newchar = getReplacementFromArray(keytoreplace, bn_pa_sounds);
  }////////////////////////////////End Pa Sounds
  else if(keytoreplace == 66) {////////////////////////////////Ba Sounds
    newchar = getReplacementFromArray(keytoreplace, bn_ba_sounds);
  }////////////////////////////////End Ba Sounds
  else if(keytoreplace == 78) {////////////////////////////////Na Sounds
    newchar = getReplacementFromArray(keytoreplace, bn_na_sounds);
  }////////////////////////////////End Na Sounds
  else if(keytoreplace == 83) {////////////////////////////////Sibilant Sounds
    newchar = getReplacementFromArray(keytoreplace, bn_sa_sounds);
  }////////////////////////////////End Sibilant Sounds
  else if(keytoreplace == 89) {////////////////////////////////Ya Sounds
    newchar = getReplacementFromArray(keytoreplace, bn_ya_sounds);
  }////////////////////////////////End Ya Sounds
  else if(keytoreplace == 72) {////////////////////////////////Ha Sounds
    newchar = getReplacementFromArray(keytoreplace, bn_ha_sounds);
  }////////////////////////////////End Ha Sounds
  else if(keytoreplace == 82) {////////////////////////////////Ra Sounds
    newchar = getReplacementFromArray(keytoreplace, bn_ra_sounds);
  }////////////////////////////////End Ra Sounds
  //else if(keytoreplace == 86) {////////////////////////////////Va Sounds
  //  newchar = getReplacementFromArray(keytoreplace, bn_va_sounds);
  //}////////////////////////////////End Va Sounds
  else if(keytoreplace == 76) {////////////////////////////////La Sounds
    newchar = getReplacementFromArray(keytoreplace, bn_la_sounds);
  }////////////////////////////////End La Sounds
  ////////////////////////////////End Consonants
  else if(keytoreplace == 77) {////////////////////////////////Virama + Punctuation
    newchar = getReplacementFromArray(keytoreplace, bn_punc);
  }////////////////////////////////End Virama + Punctuation
  window.previouskeytyped = keytoreplace;
  window.previouscharactertyped = newchar;

  selectedText = textArea.value.substring(startPos, endPos)
  textArea.value = content.slice(0, startPos + offset) + newchar + content.slice(endPos);
  textArea.selectionStart = textArea.selectionEnd = startPos + 1 + offset;
  return true;
};
