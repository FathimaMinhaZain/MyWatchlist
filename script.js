const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addMovie(){
    if(inputBox.value === ''){
        alert("No input");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li); 
        let span = document.createElement("span");
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }

    // to clear the box after add
    inputBox.value =''
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData();
    }
    
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showData(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showData();