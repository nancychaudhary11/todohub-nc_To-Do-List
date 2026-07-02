const inputBox = document.getElementById("input-box")
const listConatiner = document.getElementById("list-container")

function addTask() {

    if (inputBox.value === '') {
        alert("Must Add your tasks first.")
    }
    else {
        let li = document.createElement("li")
        li.innerHTML = inputBox.value;
        listConatiner.appendChild(li)
        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.appendChild(span)
    }
    inputBox.value = ""
    saveData()
}
inputBox.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        addTask();
    }
});

listConatiner.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData()
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove()
        saveData()
    }
}, false);

function saveData() {
    localStorage.setItem("data", listConatiner.innerHTML)
}

function showTask() {
    listConatiner.innerHTML = localStorage.getItem("data")
}
showTask()
