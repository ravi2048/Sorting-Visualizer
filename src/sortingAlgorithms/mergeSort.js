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
      // These are the values that we're comparing; pushing them again to get their previous color.
      animation_array.push([i, j]);
      if (tempArray[i] <= tempArray[j]) 
      {
        animation_array.push([k, tempArray[i]]);
        mainArray[k] = tempArray[i];
        k++;
        i++;
      } 
      else 
      {
        animation_array.push([k, tempArray[j]]);
        mainArray[k] = tempArray[j];
        k++;
        j++;
      }
    }
    while (i <= mid) 
    {
      animation_array.push([i, i]);
      animation_array.push([i, i]);
      animation_array.push([k, tempArray[i]]);
      mainArray[k++] = tempArray[i++];
    }
    while (j <= e) 
    {
      animation_array.push([j, j]);
      animation_array.push([j, j]);
      animation_array.push([k, tempArray[j]]);
      mainArray[k++] = tempArray[j++];
    }
  }