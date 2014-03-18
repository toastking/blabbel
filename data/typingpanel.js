var lister = document.getElementById('lister');
self.port.on("typing-begin", function (inparray) {
  //content = "&#x939;";
  /*for (i = 0; i < inparray.length; ++i) {
  	//var item = inparray[i].substring(0);
  	var item = inparray[i].charCodeAt(0);
    //console.log(item);
    var hexString = item.toString(16);
    //console.log("&#x" + hexString);
    var tmp = "<div>&#x" + hexString + ";</div>";
    console.log(tmp);
    //content += tmp;
  }*/
  //console.log(content);
  //console.log(lister.innerHTML)
  lister.innerHTML = inparray.toString();
  //console.log(lister.innerHTML);
});