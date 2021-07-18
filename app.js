const range = document.getElementById("jsRange");
const sort = document.getElementById("jsSort");
const newArray = document.getElementById("jsNewArray");


let array = [];

createNewArray();

function createNewArray(size = 60) {
    deleteChild();

    array = [];
    for (let i = 0; i < size; i++) {
        array.push(Math.floor(Math.random() * 400) + 1);
    }
    console.log(array);

    const bars = document.querySelector("#bars");

    // create multiple element div using loop and adding class 'bar col'
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


function handleRangeChange(event){
    const arraySize = parseInt(event.target.value);
    createNewArray(arraySize);
}

if(range){
    range.addEventListener("input",handleRangeChange);
}

function handleSort(event){

}

function handlenewArray(event){
    createNewArray(array.length);
}

if(sort){
    sort.addEventListener("click",handleSort);
}
if(newArray){
    newArray.addEventListener("click",handlenewArray);
}