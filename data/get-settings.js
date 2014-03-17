var languageselector = document.getElementById("dropdown");

languageselector.addEventListener('change', function ondropdownchange(event) {
  self.port.emit("language-code", languageselector.value);
}, false);

self.port.on("lang", function func(text) {
  console.log("received elsewhere");
});
