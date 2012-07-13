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

	//Create select field element and populate with options
	function makeList(){
		var formTag = document.getElementsByTagName("form"),  // formTag is an array of all the form tags
			selectLi = $('select'),
			makeSelect = document.createElement('select');
			makeSelect.setAttribute("id", "groups");
		for (var i=0, j=locations.length; i<j; i++){
			var makeOption = document.createElement('option');
			var optText = locations[i];
			makeOption.setAttribute("value", optText);
			makeOption.innerHTML = optText;
			makeSelect.appendChild(makeOption);
		}
		selectLi.appendChild(makeSelect);
	}
	
	//Find value of selected radio button
	function getSelectedRadio(){
		var radios = document.forms[0].priority;
		for (var i=0; i<radios.length; i++){
			if (radios[i].checked){
				priorityValue = radios[1].value;
			}
		}
	}
	
	//Store the form data in local storage
	function storeData(){
		//Generate a random number for a key
		var id 				= Math.floor(Math.random()*1000000001);
		getSelectedRadio();
		//Gather up all of our form field values and store in an object
		//Object properties are going to contain an array with the form label and input value.
		var item			= {};
			item.taskName 	= ["Task name:", $('taskName').value];
			item.group		= ["Location:", $('groups').value];
			item.dueDate	= ["Due date:", $('dueDate').value];
			item.importance	= ["Importance:", $('importance').value];
			item.priority 	= ["Priority:", priorityValue];
			item.honey 		= ["List for:", $('forHoney').value];
			item.specialInstructions = ["How to not mess up:", $('specialInstructions').value];
		//Save data to local storage: Use Stringify to convert our object to a string.
		localStorage.setItem(id, JSON.stringify(item));
		alert("Honey Do Saved!");
	}
	
	//Variable defaults
	var locations = ["--Choose a Location--", "Home", "Car", "Errand"],
		priorityValue;

	//Run the function
	makeList();
	
	//Set Link & Submit Click Events
	/*
var displayLink = $('displayLink');
	displayLink.addEventListener("click", getData);
	var clearLink = $('clear');
	clearLink.addEventListener("click", clearLocal);
*/	
	var save = $('submit');
	save.addEventListener("click", storeData);



});