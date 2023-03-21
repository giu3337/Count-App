// People Counter


const countEl = document.getElementById("count-el")
const saveEl = document.getElementById("save-el")
const incrementBtn = document.getElementById("increment-btn")
const decrementBtn = document.getElementById("decrement-btn")
const saveBtn = document.getElementById('save-btn')
const resetBtn = document.getElementById("reset-btn")


let count = 0; 

incrementBtn.addEventListener('click', function () {
    count += 1; 
    countEl.textContent = count; 
})

decrementBtn.addEventListener('click',function () {
    if (count >= 1) {
        count -= 1
    countEl.textContent = count; 
    }
})


saveBtn.addEventListener('click', function () {
    let saveEntries = count + " - "
    saveEl.textContent += " " + saveEntries; 
    countEl.textContent = count; 
    count = 0; 
    countEl.textContent = count += 0 
})


resetBtn.addEventListener('click',function () {
    saveEl.textContent = "Previous Entries: "
    countEl.textContent = count += 0; 
})

