var bg1 = document.getElementById("bg1");
var bg2 = document.getElementById("bg2");
var bg3 = document.getElementById("bg3");
var bg4 = document.getElementById("bg4");
var main = document.getElementById("main");
var content = document.getElementById("mcontents");
bg1.addEventListener("click", function(){
	main.style.display= "block";
	content.style.backgroundImage ="url(imgs/gears/h1.png)";
	content.style.backgroundImage ="url(imgs/gears/h2.png)";
	content.style.backgroundImage ="url(imgs/gears/h3.png)";
	content.style.backgroundSize = "cover";
	content.style.backgroundPosition= "center center";
	content.style.display ="inline-block";
	 
});


