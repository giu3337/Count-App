// Ship Counter


let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0; 

function increment() {
    count += 1; 
    countEl.textContent = count; 
    
}

function save() {
    let saveEntries = count + " - "
    saveEl.textContent += " " + saveEntries; 
    countEl.textContent = count; 
    count = 0; 
    countEl.textContent = count += 0 
    
}

function reset() {
    saveEl.textContent = "Previous Entries: "
    countEl.textContent = count += 0; 
}


