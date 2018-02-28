
var c = document.getElementById("svg_id");


var clears = function() {
    while (c.hasChildNodes()){
	c.removeChild(c.firstChild)
    }
}

var cbutton = clear.addEventListener("click", clears);



var draw = function(e) {
    var x= e.offsetX;
    var y= e.offestY; 
    var r = 1;
   
}
var start = function(){
    window.requestAnimationFrame(animate);
}

startB.addEventListener("click",start);
var stops = function(e) {
    window.cancelAnimationFrame(requestID);

}
var stop = document.getElementById("stop");
stop.addEventListener("click",stops);

