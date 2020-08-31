export function getHeapSortAnimations(array)
{
    // using max heap
    let n = array.length;
    const animation_array = [];
    if (n <= 1) 
        return array;
    for(let i=n/2-1;i>=0;i--)  // no need to heapify leaf nodes so the first parent node of last leaf node(at n-1) is at 2x+1 = n-1==>x =n/2-1 
    {
        heapify(array, n, i, animation_array);
    }
    for(let i=n-1;i>0;i--)
    {
        animation_array.push([0,i]);
        animation_array.push([0,i]);
        animation_array.push([i,array[0]]);

        animation_array.push([0,i]);
        animation_array.push([0,i]);
        animation_array.push([0,array[i]]);

        [array[i], array[0]] = [array[0], array[i]];

        heapify(array, i, 0, animation_array);  // calling heapify for reduced array i=n-1
    }
    return animation_array;
}

function heapify(array, n, idx, animation_array)
{
    let left_child_idx = 2*idx+1;
    let right_child_idx = 2*idx+2;
    let largest_node_idx = idx;

    if(left_child_idx < n && array[left_child_idx] > array[largest_node_idx])
        largest_node_idx = left_child_idx;

    if(right_child_idx < n && array[right_child_idx] > array[largest_node_idx])
        largest_node_idx = right_child_idx;
    
    if(largest_node_idx !== idx)
    {
        [array[largest_node_idx], array[idx]] = [array[idx], array[largest_node_idx]];
        heapify(array, n, largest_node_idx, animation_array);
    }
}