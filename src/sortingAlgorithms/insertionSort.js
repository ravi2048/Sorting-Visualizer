export function getInsertionSortAnimations(array)
{
    let n = array.length;
    const animation_array = [];
    if (n <= 1) 
        return array;
    const arr = array.slice(); 
    // take 1st elemt as sorted and keep compairing other lelemts to it
    for(let i=1;i<n;i++)
    {
        let key = arr[i];
        let j=i-1;
        while(j>=0 && arr[j]>key)
        {
            animation_array.push([j,i]);
            animation_array.push([j,i]);
            animation_array.push([j+1, arr[j]]);
            arr[j+1] = arr[j];
            j--;
        }
        animation_array.push([j+1,j+1]);
        animation_array.push([j+1,j+1]);
        animation_array.push([j+1, key]);
        arr[j+1] = key;
    }
    return animation_array;
}