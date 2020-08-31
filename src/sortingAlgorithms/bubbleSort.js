export function getBubbleSortAnimations(array)
{
    let n = array.length;
    const animation_array = [];
    if(n<=1)
        return array;
    let idx=0;
    let b=false;

    for(let j=0;j<n-1;j++)
    {
        if(array[j]>array[j+1])
            b = true;
    }
    
    for(let i=0;i<n-1;i++)
    {
        
        if(b===true)  //  if already sorted then don't sort
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
                }
                else{
                    animation_array.push([j,j+1]);
                    animation_array.push([j,j+1]);
                    animation_array.push([j,array[j]]);
                }
            }
            animation_array.push([i,i+1]);
            animation_array.push([i,i+1]);
            animation_array.push([n-1-i,array[n-1-i]]);

        }
        else
        {
            animation_array.push([i,i+1]);
            animation_array.push([i,i+1]);
            animation_array.push([n-1-i,array[n-1-i]]);
        }
    }
    return animation_array;
}