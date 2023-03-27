let count = 0;
let countEl = document.getElementById("count-el");
countEl.innerText = count;
saveEl = document.getElementById("save-el");


function increment() {
    count += 1;
    countEl.innerText = count;
}

function save() {
    let countStr = " " + count + " - ";
    saveEl.textContent += countStr;
    count = 0;
    countEl.innerText = count;
}


function reset() {
    count = 0;
    countEl.innerText = count;
    saveEl.textContent = "Drops instilled:";
  }