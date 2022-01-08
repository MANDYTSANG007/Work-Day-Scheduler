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
/*var myTextBox = document.querySelector(".form-control");
var myEvent = "keyEvent";

window.addEventListener("load", function(){
    var content = localStorage.getItem(myEvent);
    myTextBox.value = content;
});
myTextBox.addEventListener("change", function(e){
    localStorage.setItem(myEvent, e.target.value)
});*/
var eventStr = "event";
//var eventArr = ["","","","","","","","",""];   event array
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

const timeArr = Object.keys(eventObj);
const eventArr = Object.values(eventObj);
const newArr = []

for(var i = 0; i < timeArr.length; i++) {
    let item = {};
    item[timeArr[i]] = eventArr[i];
    newArr.push(item);
}
console.log(newArr);
console.log(timeArr);
console.log(eventArr);
// const eventArr = [{"09:00": "event1"},{"10:"}]

function init() {
    var storedEvents = JSON.parse(localStorage.getItem('events'));

    if(storeEvents !== null){
        events = storedEvents;
    }
    renderEvents();
}

function storeEventItems(){
    localStorage.setItem("eventObj", JSON.stringify(eventObj)); //stringfy and set key in localStorage to eventArr array
}
// var toSave = document.getElementsByClassName("save");
// console.log(toSave);
// var eventInput = document.getElementsByClassName("saved-text");
// toSave.addEventListener("click", function(event){
//     event.preventDefault();
    
//     var eventText = eventInput.value.trim();
//     console.log(eventInput.value);
//     //return function early if eventText is blank
//     if (eventText === ""){
//         return;
//     }

//     //add new eventText to eventArr array, clear the input
//     //eventStr.push(eventText);
//     //eventInput.value = "";

//     //Store updated events in localStorage, re-render the list
//     //storeEventItems();
//     //renderEvents();
// });

$(document).on("click",".save", function(evt){
    let time = $(this).data('time');
    let event = $(this).parent().parent().find('.saved-text').val();
    console.log(event);
    localStorage.setItem('example', event);
})


//get all the items from local storage (in an array) add that item to the array and then save it
//use submit button instead of on change.