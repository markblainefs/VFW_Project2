//Mark A. Blaine
//VFW 1207
//JavaScript for Project 2

//Wait until DOM is ready
window.addEventListener("DOMContentLoaded", function(){

	//getElementsById Function
	function $(x){
		var theElement = document.getElementById(x);
		return theElement;
	}
	

	//Variable defaults
	var locations = ["--Choose a Location--", "Home", "Car", "Errand"];
	
	
	//Set Link & Submit Click Events
	var displayLink = $('displayLink');
	displayLink.addEventListener("click", getData);
	var clearLink = $('clear');
	clearLink.addEventListener("click", clearLocal);
	var save = $('submit');
	save.addEventListener("click", storeData);



});