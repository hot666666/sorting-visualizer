let result = [];

async function merge(Arr,left,mid,right){
    const START = left; const MID = mid; const END = right; 
    let l = left; let r = mid+1;
    let x = START;

    while( l <= MID && r <= END ){
        Arr[l].style.background = '#1E90FF';
        Arr[r].style.background = '#1E90FF';        
        await sleep(delay);
        if( parseInt(Arr[l].style.height) < parseInt(Arr[r].style.height) ){
            Arr[l].style.background = '#DC143C';
            result[x++] = Arr[l++].style.height;
        }
        else{
            Arr[r].style.background = '#DC143C';
            result[x++] = Arr[r++].style.height;
        }

    }
    for (l; l <= MID; l++) {
        result[x++] = Arr[l].style.height;
        Arr[l].style.background = 'cyan';       
    }
    for (r; r <= END; r++) {
        result[x++] = Arr[r].style.height;
        Arr[r].style.background = 'cyan';
    }
    for (l = START; l <= END; l++) {
        Arr[l].style.height = result[l];
        Arr[l].style.background = 'green';
    }
    console.log(result);
}

async function mergeSort(arr, left, right){
    if(left >= right){
        return;
    }else{
        const mid = parseInt((left+right)/2);

        await mergeSort(arr,left,mid);
        await mergeSort(arr,mid+1,right);
        await merge(arr,left,mid,right);
    }
}


mergeSortBtn.addEventListener('click', async function(){
    const bar_arr = document.querySelectorAll(".bar");
    disableButtons();
    await mergeSort(bar_arr ,0,bar_arr.length-1);
    enableButtons();
    result=[];
})