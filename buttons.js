var button_1 = document.getElementById("button_1");
var button_2 = document.getElementById("button_2");
var button_3 = document.getElementById("button_3");

var image_bg = document.getElementById("img_bg");
var image = document.getElementById("img");

var button_1_clicks = 0;
var button_2_clicks = 0;
var button_3_clicks = 0;

button_1.addEventListener("click", function(){
	image_bg.src = "images/bg1.jpg"
	image.src = "images/1.jpg"
	button_1_clicks = button_1_clicks + 1;
	button_1.textContent = button_1_clicks
})
button_2.addEventListener("click", function(){
	image_bg.src = "images/bg2.jpg"
	image.src = "images/2.jpg"
	button_2_clicks = button_2_clicks + 1;
	button_2.textContent = button_2_clicks
})
button_3.addEventListener("click", function(){
	image_bg.src = "images/bg3.jpg"
	image.src = "images/3.jpg"
	button_3_clicks = button_3_clicks + 1;
	button_3.textContent = button_3_clicks
})
