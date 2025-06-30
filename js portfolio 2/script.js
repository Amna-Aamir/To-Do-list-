const inputBox = document.getElementById("todo-input");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value.trim() === ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        saveData(); // Call saveData only when input is not empty
    }
    inputBox.value = "";
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    const savedData = localStorage.getItem("data");
    if (savedData) {
        listContainer.innerHTML = savedData; // Load saved tasks, replacing current list
    }
}
window.addEventListener("load", showTask);
showTask();
