$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

var now = moment().hour(); //get current date and time
var x = document.getElementsByClassName("time");
var y = document.getElementsByClassName("form-control");
var toDo = $(".to-do");
var save = $(".save");

for (i=0; i<x.length; i++){
    var scheduleHour = parseInt(x[i].innerHTML.split(":")[0]); //parses a string argument to an integer
    if (scheduleHour > now){        //future
        y[i].style.backgroundColor = "yellow";
    }else if(scheduleHour === now){ //present
        y[i].style.backgroundColor = "orange";
    }else if(scheduleHour < now){   //past
        y[i].style.backgroundColor = "silver";
    }
};

for (i=0; i < save.length; i++){
    $(save[i]).on("click", saveEvent);
}

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

function getToDos(){
    var addWork = JSON.parse(localStorage.getItem("addWork"));
    addWork.forEach(function(task){
        document.getElementById(task.time).value = task.text;
    })
}
getToDos();
