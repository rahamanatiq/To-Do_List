const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

function addList() {
    if (inputBox.value === '') {
        alert("Please write something");
    } else {
        const li = document.createElement("li");
        li.innerHTML = inputBox.value;
        
       
        const span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        
        listContainer.appendChild(li);
    }
    inputBox.value = '';
    saveData();
}

function saveData() {
    localStorage.setItem('data', listContainer.innerHTML);
}

function toggleListItem(li) {
    li.classList.toggle("checked");
    saveData();
}

function removeListItem(li) {
    li.remove();
    saveData();
}

listContainer.addEventListener('click', (e) => {
    const target = e.target;
    if (target.tagName === "LI") {
        toggleListItem(target);
    } else if (target.tagName === "SPAN") {
        removeListItem(target.parentElement);
    }
});

function loadData() {
    listContainer.innerHTML = localStorage.getItem("data");
}

loadData();
