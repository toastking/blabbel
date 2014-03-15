var widgets = require("sdk/widget");
var tabs = require("sdk/tabs");
var data = require("sdk/self").data;

var text_entry = require("sdk/panel").Panel({
  width: 212,
  height: 200,
  contentURL: data.url("main.html"),
  contentScriptFile: data.url("get-settings.js")
});

var widget = widgets.Widget({
  label: "Text entry",
  id: "text-entry",
  contentURL: "http://www.mozilla.org/favicon.ico",
  panel: text_entry
});

text_entry.on("show", function() {
  text_entry.port.emit("show");
});

text_entry.port.on("text-entered", function (text) {
  console.log(text);
  //text_entry.hide();
});

text_entry.port.on("language-code", function (text) {
  console.log(text);
  //text_entry.hide();
});