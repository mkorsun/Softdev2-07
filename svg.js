
var c = document.getElementById("svg_id");

var clears = function(e) {
    while (c.hasChildNodes()){
	c.removeChild(c.firstChild)
    }
    prevx = -1;
    prevy = -1;
}



var prevx = -1;
var prevy = -1;

var draw = function(e) {
    var x= e.offsetX;
    var y= e.offsetY; 
    var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle")
    circle.setAttribute("cx",x+"");
    circle.setAttribute("cy",y+"");
    circle.setAttribute("r",25+"");
    circle.setAttribute("fill","black");
    circle.setAttribute("stroke","black");
    c.appendChild(circle)
    if(prevx != -1){
	var line =  document.createElementNS("http://www.w3.org/2000/svg", "line")
	line.setAttribute("x1",x+"");
	line.setAttribute("x2",prevx+"");
	line.setAttribute("y1",y+"");
	line.setAttribute("y2",prevy+"");
	line.setAttribute("stroke","black");
	line.setAttribute("stroke-width","2");
	c.appendChild(line);
    }
    prevx = x;
    prevy = y;
   
}


c.addEventListener("click", draw);

clear.addEventListener("click", clears);
