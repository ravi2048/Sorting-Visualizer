export function getInsertionSortAnimations(array)
{
    let n = array.length;
    const animation_array = [];
    if (n <= 1) 
        return array;
    // take 1st elemt as sorted and keep compairing other lelemts to it
    for(let i=1;i<n;i++)
    {
        let key = array[i];
        let j=i-1;
        while(j>=0 && array[j]>key)
        {
            animation_array.push([j,i]);
            animation_array.push([j,i]);
            animation_array.push([j+1, array[j]]);
            array[j+1] = array[j];
            j--;
        }
        animation_array.push([j+1,j+1]);
        animation_array.push([j+1,j+1]);
        animation_array.push([j+1,key]);
        array[j+1] = key;
    }
    return animation_array;
}