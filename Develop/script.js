//GIVEN I am using a daily planner to create a schedule
//WHEN I open the planner
//THEN the current day is displayed at the top of the calendar
    //use moment.js to create current day element
//WHEN I scroll down
//THEN I am presented with timeblocks for standard business hours
    //create 3 columns 1)time 2)text content 3)save button
//WHEN I view the timeblocks for that day
//THEN each timeblock is color coded to indicate whether it is in the past, present, or future
    //if selectedTime < currentTime ->past (green)
    //else if selectedTime = currentTime -> present (orange)
    //else if selectedTime > currentTime -> future (yellow)
//WHEN I click into a timeblock
    //event handler
//THEN I can enter an event
    //input text box
//WHEN I click the save button for that timeblock
    //create a save button
//THEN the text for that event is saved in local storage
    //set up local storage
    //onclick event handler
//WHEN I refresh the page
//THEN the saved events persist

$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

var now = moment().hour(); //get current date and time
var x = document.getElementsByClassName("time");
var y = document.getElementsByClassName("form-control")

for (i=0; i<x.length; i++){
    var scheduleHour = parseInt(x[i].innerText.split(":")[0]); //parses a string argument to an integer
    if (scheduleHour > now){        //future
        y[i].style.backgroundColor = "yellow";
    }else if(scheduleHour === now){ //present
        y[i].style.backgroundColor = "orange";
    }else if(scheduleHour < now){   //past
        y[i].style.backgroundColor = "grey";
    }
};
//set up local storage
//get the element in the document w/ class save, text, and btn
/*var saveButton = document.getElementById("save");
var savedText = document.getElementById("saved-text");
saveButton.addEventListener("click", function(event){
    event.preventDefault();
    saveLastText();
    renderText();
});*/


var myTextBox = document.querySelector(".form-control");
var myEvent = "keyEvent";

window.addEventListener("load", function(){
    var content = localStorage.getItem(myEvent);
    myTextBox.value = content;
});
myTextBox.addEventListener("change", function(e){
    localStorage.setItem(myEvent, e.target.value)
});