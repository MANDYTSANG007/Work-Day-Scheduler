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
var eventStr = "event";

var eventObj ={
    "09:00":"",
    "10:00":"",
    "11:00":"",
    "12:00":"",
    "13:00":"",
    "14:00":"",
    "15:00":"",
    "16:00":"",
    "17:00":"",
}

var timeArr = Object.keys(eventObj);
var eventArr = Object.values(eventObj);
var newArr = []

for(var i = 0; i < timeArr.length; i++) {
    let item = {};
    item[timeArr[i]] = eventArr[i];
    newArr.push(item);
}


var storedEvent = localStorage.getItem("events");
var input = document.getElementsByClassName("input-group");

if (storedEvent){
    events = JSON.parse(storedEvent);
}

var addWork = function getElementById(){
    localStorage.setItem("addWork", JSON.stringify(work));
}



/*function init() {
    var storedEvents = JSON.parse(localStorage.getItem('events'));

    if(storedEvents !== null){
        events = storedEvents;
    }
    renderEvents();
}*/



/*function storeEventItems(){
    localStorage.setItem("eventObj", JSON.stringify(eventObj)); //stringfy and set key in localStorage to eventArr array
}*/

$(document).on("click",".save", function(event){
    var time = $(this).data('time');
    var event = $(this).parent().parent().find('.saved-text').val();
    localStorage.setItem('event', event);
});

//Pseudocode
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