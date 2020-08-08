
// ######################## MERGE SORT ###############################
export function getMergeSortAnimations(array) 
{
    const animation_array = [];
    if (array.length <= 1) 
        return array;
    const tempArray = array.slice();   //copying array into temp_array
    mergesort(array, 0, array.length-1, tempArray, animation_array);
    return animation_array;
}
  
  function mergesort(mainArray,s,e,tempArray, animation_array) 
  {
    if (s >= e) 
        return;
    const mid = Math.floor((s+e) / 2);
    mergesort(tempArray, s, mid, mainArray, animation_array);
    mergesort(tempArray, mid + 1, e, mainArray, animation_array);
    merge(mainArray, s, mid, e, tempArray, animation_array);
  }
  
  function merge(mainArray, s, mid, e, tempArray,animation_array) 
  {
    let k = s;
    let i = s;
    let j = mid + 1;
    while (i <= mid && j <= e) 
    {
      // These are the values that we're comparing; we push them once
      // to change their color.
      animation_array.push([i, j]);
      // These are the values that we're comparing; we push them a second
      // time to revert their color.
      animation_array.push([i, j]);
      if (tempArray[i] <= tempArray[j]) 
      {
        // We overwrite the value at index k in the original array with the
        // value at index i in the auxiliary array.
        animation_array.push([k, tempArray[i]]);
        mainArray[k] = tempArray[i];
        k++;
        i++;
      } 
      else 
      {
        // We overwrite the value at index k in the original array with the
        // value at index j in the auxiliary array.
        animation_array.push([k, tempArray[j]]);
        mainArray[k] = tempArray[j];
        k++;
        j++;
      }
    }
    while (i <= mid) 
    {
      // These are the values that we're comparing; we push them once
      // to change their color.
      animation_array.push([i, i]);
      // These are the values that we're comparing; we push them a second
      // time to revert their color.
      animation_array.push([i, i]);
      // We overwrite the value at index k in the original array with the
      // value at index i in the auxiliary array.
      animation_array.push([k, tempArray[i]]);
      mainArray[k++] = tempArray[i++];
    }
    while (j <= e) 
    {
      // These are the values that we're comparing; we push them once
      // to change their color.
      animation_array.push([j, j]);
      // These are the values that we're comparing; we push them a second
      // time to revert their color.
      animation_array.push([j, j]);
      // We overwrite the value at index k in the original array with the
      // value at index j in the auxiliary array.
      animation_array.push([k, tempArray[j]]);
      mainArray[k++] = tempArray[j++];
    }
  }


//################################## bubble sort  ############################################

export function getBubbleSortAnimations(arr)
{
    let n = arr.length;
    const animation_array = [];
    const array = arr.slice();
    if(n<=1)
        return;
    let idx=0;
    for(let i=0;i<n-1;i++)
    {
        for(let j=0;j<n-i-1;j++)
        {
            if(array[j]>array[j+1])
            {
                animation_array.push([j,j+1]);
                animation_array.push([j,j+1]);
                animation_array.push([j,array[j+1]]);
                //swappping
                [array[j], array[j+1]] = [array[j+1], array[j]];

                animation_array.push([j,j+1]);
                animation_array.push([j,j+1]);
                animation_array.push([j+1,arr[j+1]]);
            }
            else{
                animation_array.push([j,j]);
                animation_array.push([j,j]);
                animation_array.push([j,array[j]]);
            }
        }
        animation_array.push([n-1-i,n-1-i]);
        animation_array.push([n-1-i,n-1-i]);
        animation_array.push([n-1-i,array[n-1-i]]);
    }


    return animation_array;
}


// ############################### QUICK SORT #############################

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

// ############################################################################