//Caleb Smith-Salzberg, Vivien Lee
//Team caLeeb
//SoftDev2 pd7
//K11 -- All that Bouncin'
//2018-03-12
var pic = document.getElementById("vimage");
var btn = document.getElementById("clear");
var balls = [];
var nums = [];

var initDotRad = 20;


var clearRect = function() {
    var rect = document.createElementNS(
	"http://www.w3.org/2000/svg",
	"rect"
    );
    rect.setAttribute("x", 0);
    rect.setAttribute("y", 0);
    rect.setAttribute("width", pic.getAttribute("width"));
    rect.setAttribute("height", pic.getAttribute("height"));
    rect.setAttribute("fill", "white");
    pic.appendChild(rect);
};

var draw = function(e) {
    makeDot(Math.floor((Math.random() * 460)+20), Math.floor((Math.random() * 460)+20)).display();
};

var makeDot = function(x,y){
    var dot = document.createElementNS("http://www.w3.org/2000/svg","circle");
    dot.setAttribute("cx",x);
    dot.setAttribute("cy",y);
    dot.setAttribute("r",initDotRad);
    dot.setAttribute("fill","red");
    dot.setAttribute("vx",1);
    dot.setAttribute("vy",1);

    dot.display = function() {
	     pic.appendChild(this);
       balls.push(this);
    };

    dot.setx = function(x) {
	return dot.setAttribute("cx",x);
    };

    dot.sety = function(y) {
	return dot.setAttribute("cy",y);
    };

    dot.setcolor = function(color) {
	return dot.setAttribute("fill",color);
    };

    dot.getcolor = function() {
	return dot.getAttribute("fill");
    };

    dot.bounce = function(e) {
       var x = parseInt(dot.getAttribute("cx"));
       var y = parseInt(dot.getAttribute("cy"));

       if (x <= 20 || x >= 480){
           dot.setAttribute("vx", dot.getAttribute("vx") * -1);
       }

       if (y <= 0 || y >= 480){
         dot.setAttribute("vy", dot.getAttribute("vy") * -1);
       }

       dot.setx(x + parseInt(dot.getAttribute("vx")));
       dot.sety(y + parseInt(dot.getAttribute("vy")));
       dot.display();
   };

   var num = setInterval(dot.bounce, 10);
   nums.push(num);
   return dot;

};

var clearBalls = function() {
    var i = 0;
    for (i = 0; i < nums.length; i ++){
        clearInterval(nums[i]);
    }
    while (pic.firstChild) {
        pic.removeChild(pic.firstChild);
    }
};

pic.addEventListener("click", draw);
btn.addEventListener("click", clearBalls);
