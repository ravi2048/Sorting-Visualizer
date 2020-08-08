
// import {randomIntFromInterval} from '../sortingAlgorithms/healperFunctions.js';


export function getQuickSortAnimations(array)
{
    const arr = array.slice();
    let n = arr.length;
    const animation_array = [];
    quick_sort(arr, 0, n-1, animation_array);
    return animation_array;
}

function quick_sort(arr, s, e, animation_array)
{
    if(s>=e)
        return;
    let partition_idx = partition_r(arr,s,e,animation_array);
    quick_sort(arr, s, partition_idx-1, animation_array);
    quick_sort(arr, partition_idx+1, e, animation_array);
}
// randomized quick sorting
function partition_r(arr, low, high, animation_array) 
{ 
    // Generate a random number in between 
    // low .. high 
    let rndm = randomIntFromInterval(low, high);
  
    // Swap A[random] with A[high] 
    [arr[rndm], arr[high]] = [arr[high], arr[rndm]];
  
    return partition(arr, low, high,animation_array); 
}
function partition(arr, s, e, animation_array)
{
    let pivot = arr[e];
    let p_idx = s;
    for(let i=s;i<=(e-1);i++)
    {
        if(arr[i]<=pivot)
        {
            animation_array.push([i,p_idx]);
            animation_array.push([i,p_idx]);
            animation_array.push([i,arr[p_idx]]);
            //swap
            [arr[i], arr[p_idx]] = [arr[p_idx], arr[i]];  

            animation_array.push([i,p_idx]);
            animation_array.push([i,p_idx]);
            animation_array.push([p_idx,arr[p_idx]]);                 
            p_idx++;
        }
        else{
            animation_array.push([i,i]);
            animation_array.push([i,i]);
            animation_array.push([i,arr[i]]);  
        }
    }
    animation_array.push([p_idx,e]);
    animation_array.push([p_idx,e]);
    animation_array.push([p_idx,arr[e]]);

    [arr[p_idx], arr[e]] = [arr[e], arr[p_idx]];

    animation_array.push([e,e]);
    animation_array.push([e,e]);
    animation_array.push([e,arr[e]]);
    
    

    return p_idx;
}

function randomIntFromInterval(min, max) 
{
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}