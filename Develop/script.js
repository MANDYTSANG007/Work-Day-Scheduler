//GIVEN I am using a daily planner to create a schedule
//WHEN I open the planner
//THEN the current day is displayed at the top of the calendar
    //use moment.js to create current day element
//WHEN I scroll down
//THEN I am presented with timeblocks for standard business hours
    //create 3 columns 1)time 2)text content 3)save button
//WHEN I view the timeblocks for that day
//THEN each timeblock is color coded to indicate whether it is in the past, present, or future
    //if selectedDate < currentDate ->past (green)
    //else if selectedDate = currentDate -> present (orange)
    //else if selectedDate > currentDate -> future (yellow)
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

