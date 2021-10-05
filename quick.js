async function partition(Arr,left,right){
    let pivot;
    let low, high;
    let temp;

    low = left;
    high = right-1;
    pivot = parseInt(Arr[right].style.height);
    Arr[right].style.background = 'gray';

    await sleep(delay);    

    while( low < high ){
        Arr[low].style.background = '#1E90FF';
        Arr[high].style.background = '#1E90FF';
        while( parseInt(Arr[low].style.height) < pivot && low < high ){
            await sleep(delay);
            Arr[low++].style.background = 'cyan';
            Arr[low].style.background = '#1E90FF';
        }
        while( parseInt(Arr[high].style.height) > pivot && low < high ){
            await sleep(delay);
            Arr[high--].style.background = 'cyan';            
            Arr[high].style.background = '#1E90FF';
        }
        if( low < high ){
            if( parseInt(Arr[low].style.height) === parseInt(Arr[high].style.height) ){
                Arr[low++].style.background = 'cyan';                
                Arr[low].style.background = '#1E90FF';
            }
            else{
                await sleep(delay);
                Arr[low].style.background = '#DC143C';
                Arr[high].style.background = '#DC143C';
                await sleep(delay);                 
                swap(Arr[low],Arr[high]);
            }
        }
    }
    if( parseInt(Arr[low].style.height) > pivot ){
        Arr[low].style.background = '#DC143C';
        Arr[right].style.background = '#DC143C';
        await sleep(delay);        
        swap(Arr[low],Arr[right]);
        Arr[right].style.background = 'cyan';
        Arr[low].style.background = 'green';
    }
    else if( parseInt(Arr[low].style.height) < pivot ) {
        await sleep(delay);                
        Arr[right].style.background = 'green';
        Arr[low].style.background = 'cyan';        
        low = right;
    }
    else{
        await sleep(delay);        
        Arr[right].style.background = 'green';
        Arr[low].style.background = 'green';                   
    }

    return low;
}

async function quickSort(arr,left,right){
	if (left < right){
		let pivot_idx = await partition(arr, left, right);
	    await quickSort(arr, left, pivot_idx-1);
		await quickSort(arr, pivot_idx+1, right);
    }
    else{
        if(left >= 0 && right >= 0 && left <arr.length && right <arr.length){        
            arr[right].style.background = 'green';
            arr[left].style.background = 'green';            
        }
    }

}

quickSortBtn.addEventListener('click', async function(){
    const bar_arr = document.querySelectorAll(".bar");
    initializeColor(bar_arr);
    disableButtons();
    await quickSort( bar_arr, 0, bar_arr.length-1 );
    enableButtons();
});