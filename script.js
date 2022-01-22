//Display current date and time
$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

var now = moment().hour(); 
var timeEl = document.getElementsByClassName("time");
var colorEl = document.getElementsByClassName("form-control");
var toDo = $(".to-do");
var save = $(".save");

//Iterate througth the time and compare between schedule hour and current time
//Display past, present, and future hours using different colors
for (i = 0; i < timeEl.length; i++) {
    var scheduleHour = parseInt(timeEl[i].innerHTML.split(":")[0]); 
    if (scheduleHour > now){        
        colorEl[i].style.backgroundColor = "yellow";
    }else if(scheduleHour === now){
        colorEl[i].style.backgroundColor = "orange";
    }else if(scheduleHour < now){  
        colorEl[i].style.backgroundColor = "silver";
    }
};

//Point to the save button and iterate through all save event
for (i=0; i < save.length; i++){
    $(save[i]).on("click", saveEvent);
}

//Set up local storage
function saveEvent(e){
    var selectedHour = toDo[e.currentTarget.dataset.id].id;
    var saveText = toDo[e.currentTarget.dataset.id].value;
    var result = { time: selectedHour, text: saveText};

    let savedResults = JSON.parse(localStorage.getItem("addWork"));
    if (savedResults){
        savedResults.push(result);
        localStorage.setItem("addWork", JSON.stringify(savedResults))
    } else {
        savedResults = [];
        savedResults.push(result);
        localStorage.setItem("addWork", JSON.stringify(savedResults));
    }
    getToDos();
}

//Get items from local storage
function getToDos(){
    var addWork = JSON.parse(localStorage.getItem("addWork"));
    addWork.forEach(function(task){
        document.getElementById(task.time).value = task.text;
    })
}
getToDos();
