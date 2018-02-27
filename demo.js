var bgtext = document.getElementById("bgText");
var controls = document.getElementById("controls");
var c1 = document.getElementById("choice1");
var c2 = document.getElementById("choice2");
var c3 = document.getElementById("choice3");
var c4 = document.getElementById("choice4");
var prev = document.getElementById("prev");

bgtext.addEventListener("keyup", function(ev){
	
	if(ev.keyCode == 13){
		
		console.log(c1.checked, c2.checked, c3.checked,c4.checked);
		
		if(c1.chedked){
			
		}
		//controls.style.backgroundImage = bgtext.value;
		bgtext.value ="url(imgs/gears/h2.png)";
	}
});

