var widgets = require("sdk/widget");
var tabs = require("sdk/tabs");
var self = require("sdk/self");
var data = self.data;

var worker;

var curlang;

var settings = require("sdk/panel").Panel({
  width: 148,
  height: 64,
  contentURL: data.url("main.html"),
  contentScriptFile: data.url("get-settings.js")
});

var typingpanel = require("sdk/panel").Panel({
  width: 212,
  height: 64,
  focus: false,
  contentURL: data.url("typingpanel.html"),
  contentScriptFile: data.url("typingpanel.js")
});

var widget = widgets.Widget({
  label: "Alt Lang",
  id: "alt-lang",
  contentURL: "http://www.mozilla.org/favicon.ico",
  panel: settings
});

settings.port.on("language-code", function (text) {
  //console.log(text);
  curlang = text;
  if(worker != null) {
    worker.port.emit("lang", text);
  }
});

tabs.on('ready', function(tab) {
  worker = tab.attach({
    contentScriptFile: [self.data.url("tabmanager.js"), self.data.url("convert2hindi2.js"), self.data.url("convert2bangla.js")]
  });
  if(curlang != null) {
  	worker.port.emit("lang", curlang);
  }
  worker.port.on("typing-begin", function (text) {
    //console.log(text);
    typingpanel.port.emit("typing-begin", text);
    typingpanel.show();
  });
  worker.port.on("typing-end", function (text) {
    //console.log("typing-end");
    typingpanel.hide();
  });
});
