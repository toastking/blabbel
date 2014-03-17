var widgets = require("sdk/widget");
var tabs = require("sdk/tabs");
var self = require("sdk/self");
var data = self.data;

var worker;

var curlang;

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

text_entry.port.on("language-code", function (text) {
  //console.log(text);
  curlang = text;
  if(worker != null) {
    worker.port.emit("lang", text);
  }
});

tabs.on('ready', function(tab) {
  worker = tab.attach({
    contentScriptFile: [self.data.url("tabmanager.js"), self.data.url("convert2hindi.js")]
  });
  if(curlang != null) {
  	worker.port.emit("lang", text);
  }
});