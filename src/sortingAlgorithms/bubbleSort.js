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