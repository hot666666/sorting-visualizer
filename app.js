function swap(elem1, elem2) {
    console.log('In swap()');
    
    let temp = elem1.style.height;
    elem1.style.height = elem2.style.height;
    elem2.style.height = temp;
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const rangeSize = document.getElementById("jsRangeSize");
const rangeSpeed = document.getElementById("jsRangeSpeed");
const bubbleSortBtn = document.getElementById("jsBubbleSort");
const mergeSortBtn = document.getElementById("jsMergeSort");
const newArray = document.getElementById("jsNewArray");
let DEFAULT_DELAY = 51;
let MAX_DELAY = 1001;
const btns = document.querySelectorAll(".btns");
console.log(btns);

let array = [];
let delay = DEFAULT_DELAY;


function disableButtons(){
    newArray.disabled = true;
    rangeSize.disabled = true;
    btns.forEach(element => {
        element.disabled = true;
    });
}
function enableButtons(){
    newArray.disabled = false;
    rangeSize.disabled = false;
    btns.array.forEach(element => {
        element.disabled = false;
    });

}


function createNewArray(size = 60) {
    deleteChild();

    array = [];
    for (let i = 0; i < size; i++) {
        array.push(Math.floor(Math.random() * 255) + 1);
    }
    console.log(array);

    const bars = document.querySelector("#bars");

    // create multiple element div using loop and adding class 'bar col(barNo)'
    for (let i = 0; i < size; i++) {
        const bar = document.createElement("div");
        bar.style.height = `${array[i]*2}px`;
        bar.classList.add('bar');
        bar.classList.add('flex-item');
        bar.classList.add(`barNo${i}`);
        bars.appendChild(bar);
    }
}
function deleteChild() {
    const bar = document.querySelector("#bars");
    bar.innerHTML = '';
}


function handleRangeSizeChange(event){
    const arraySize = parseInt(event.target.value);
    createNewArray(arraySize);
}
function handleRangeSpeedChange(event){
    delay = MAX_DELAY - parseInt(event.target.value);
}


function handleNewArray(event){
    createNewArray(array.length);
}


if(rangeSize){
    rangeSize.addEventListener("input",handleRangeSizeChange);
}
if(rangeSpeed){
    rangeSpeed.addEventListener("input",handleRangeSpeedChange);
}
if(newArray){
    newArray.addEventListener("click",handleNewArray);
}






createNewArray();