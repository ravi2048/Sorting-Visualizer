export function getHeapSortAnimations(array)
{
    // using max heap
    let n = array.length;
    const animation_array = [];
    if (n <= 1) 
        return array;
    const tempArray = array.slice();   //copying array into temp_array
    for(let i=n/2-1;i>=0;i--)
    {
        heapify(tempArray, n, i, animation_array);
    }
    for(let i=n-1;i>0;i--)
    {
        animation_array.push([0,i]);
        animation_array.push([0,i]);
        animation_array.push([i,tempArray[0]]);
        animation_array.push([0,i]);
        animation_array.push([0,i]);
        animation_array.push([0,tempArray[i]]);

        [tempArray[i], tempArray[0]] = [tempArray[0], tempArray[i]];

        heapify(tempArray, i, 0, animation_array);  // calling heapify for reduced array i=n-1
    }
    return animation_array;
}

function heapify(tempArray, n, idx, animation_array)
{
    let left_child_idx = 2*idx+1;
    let right_child_idx = 2*idx+2;
    let largest_node_idx = idx;
    if(left_child_idx < n && tempArray[left_child_idx] > tempArray[largest_node_idx])
        largest_node_idx = left_child_idx;
    if(right_child_idx < n && tempArray[right_child_idx] > tempArray[largest_node_idx])
        largest_node_idx = right_child_idx;
    
    if(largest_node_idx != idx)
    {
        // animation_array.push([largest_node_idx,idx]);
        // animation_array.push([largest_node_idx,idx]);
        // animation_array.push([largest_node_idx,tempArray[idx]]);
        [tempArray[largest_node_idx], tempArray[idx]] = [tempArray[idx], tempArray[largest_node_idx]];
        // animation_array.push([idx,idx]);
        // animation_array.push([idx,idx]);
        // animation_array.push([idx,tempArray[largest_node_idx]]);
        heapify(tempArray, n, largest_node_idx, animation_array);
    }
    // else{
    //     animation_array.push([idx,idx]);
    //     animation_array.push([idx,idx]);
    //     animation_array.push([idx,tempArray[idx]]);
    // }
}