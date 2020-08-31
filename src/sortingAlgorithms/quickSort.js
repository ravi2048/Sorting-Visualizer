
export function getQuickSortAnimations(array)
{
    let n = array.length;
    if (n <= 1) 
        return array;
    const animation_array = [];
    quick_sort(array, 0, n-1, animation_array);
    return animation_array;
}

function quick_sort(array, s, e, animation_array)
{
    if(s>=e)
        return;
    let partition_idx = partition_r(array,s,e,animation_array);
    quick_sort(array, s, partition_idx-1, animation_array);
    quick_sort(array, partition_idx+1, e, animation_array);
}
// randomized quick sorting
function partition_r(array, low, high, animation_array) 
{ 
    // Generate a random number in between 
    // low .. high 
    let rndm = randomIntFromInterval(low, high);
  
    // Swap A[random] with A[high] 
    [array[rndm], array[high]] = [array[high], array[rndm]];
  
    return partition(array, low, high,animation_array); 
}
function partition(array, s, e, animation_array)
{
    let pivot = array[e];
    let p_idx = s;
    for(let i=s;i<=(e-1);i++)
    {
        if(array[i]<=pivot)
        {
            animation_array.push([i,p_idx]);
            animation_array.push([i,p_idx]);
            animation_array.push([i,array[p_idx]]);
            //swap
            [array[i], array[p_idx]] = [array[p_idx], array[i]];  

            animation_array.push([i,p_idx]);
            animation_array.push([i,p_idx]);
            animation_array.push([p_idx,array[p_idx]]);                 
            p_idx++;
        }
        else{
            animation_array.push([i,i]);
            animation_array.push([i,i]);
            animation_array.push([i,array[i]]);  
        }
    }
    animation_array.push([p_idx,e]);
    animation_array.push([p_idx,e]);
    animation_array.push([p_idx,array[e]]);

    [array[p_idx], array[e]] = [array[e], array[p_idx]];

    animation_array.push([e,e]);
    animation_array.push([e,e]);
    animation_array.push([e,array[e]]);
    
    return p_idx;
}

function randomIntFromInterval(min, max) 
{
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}