const inputBox = document.getElementById("input-box")
const listContainer = document.getElementById("list-container")

function addTask(){
    if (inputBox.value.trim() === '') {
        alert("Você deve escrever alguma coisa!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.insertBefore(li, listContainer.firstChild);
        let span = document.createElement("span")
        span.innerHTML="\u00d7";
        li.appendChild(span)
        saveData()
    }
    inputBox.value="";
}

listContainer.addEventListener("click", (e) => {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked")
        saveData()
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove()
        saveData()
    }
})

function saveData() {
    localStorage.setItem("tasks", listContainer.innerHTML)
}

function getTasks() {
    listContainer.innerHTML = localStorage.getItem("tasks")
}

getTasks()
