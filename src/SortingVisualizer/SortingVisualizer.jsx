
import React from 'react';

import {getMergeSortAnimations} from '../sortingAlgorithms/mergeSort.js';
import {getBubbleSortAnimations} from '../sortingAlgorithms/bubbleSort.js';
import {getQuickSortAnimations} from '../sortingAlgorithms/quickSort.js';
import {getHeapSortAnimations} from '../sortingAlgorithms/heapSort.js';
import {getInsertionSortAnimations} from '../sortingAlgorithms/insertionSort.js';

import './SortingVisualizer.css';

// Change this value for the speed of the animations.
const ANIMATION_SPEED_MS = 1;

// Change this value for the number of bars (value) in the array.
const NUMBER_OF_ARRAY_BARS = 150;


// This is the main color of the array bars.
const PRIMARY_COLOR = 'turquoise';

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = 'red';

var screen_width =   window.screen.width;
var screen_height =  window.screen.height;


var onresize = function() {
  screen_width = window.screen.width;
  screen_height = window.screen.height;
}
window.addEventListener("resize", onresize);


// getting proper bar width for responsive look
const bar_width = screen_width*0.65/NUMBER_OF_ARRAY_BARS;


export default class SortingVisualizer extends React.Component 
{
  constructor(props) 
  {
    super(props);
    this.state = { array: []};
  }

  componentDidMount() 
  {
    this.resetArray();
    this.mergeSort();
    this.quickSort();
    this.heapSort();
    this.insertionSort();
    this.bubbleSort();
  }
 

  resetArray() 
  {
    document.getElementById("i1").style.backgroundColor = "turquoise";
    document.getElementById("i1").position="relative";
    const array = [];
    const x = screen_height;
    for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) 
    {
      array.push(randomIntFromInterval(5, x*0.58));
    }
    this.setState({array});
  }

  mergeSort() 
  {
    document.getElementById("i2").style.backgroundColor = "turquoise";
    document.getElementById("i2").position="relative";
    const animations = getMergeSortAnimations(this.state.array);
    animation_healper(animations);
  }

  quickSort() 
  {
    document.getElementById("i3").style.backgroundColor = "turquoise";
    document.getElementById("i3").position="relative";
    const animations = getQuickSortAnimations(this.state.array);
    animation_healper(animations);
  }

  heapSort() 
  {
    document.getElementById("i4").style.backgroundColor = "turquoise";
    document.getElementById("i4").position="relative";
    const animations = getHeapSortAnimations(this.state.array);
    animation_healper(animations);
  }

  bubbleSort() 
  {
    document.getElementById("i5").style.backgroundColor = "turquoise";
    document.getElementById("i5").position="relative";
    const animations = getBubbleSortAnimations(this.state.array);
    animation_healper(animations);
  }

  insertionSort()
  {
    document.getElementById("i6").style.backgroundColor = "turquoise";
    document.getElementById("i6").position="relative";
      // best == O(n) avg. == O(n^2)  worst = O(n^2)
    const animations = getInsertionSortAnimations(this.state.array);
    animation_healper(animations);
  }


  render() 
  {
    const {array} = this.state;

    return (
      <div className="array-container"
        style={{
          width:1200,
          // height:100,
            position:"absolute",
            // right:`${bar_width*0.05*NUMBER_OF_ARRAY_BARS}px`,

            left:`${bar_width*0.01*NUMBER_OF_ARRAY_BARS}px`,
        }}
        >
        {array.map((value, idx) => (
          <div
            className="array-bar"
            key={idx}
            style={{
              backgroundColor: PRIMARY_COLOR,
              position: "relative",
              height: `${value}px`,
              width: `${bar_width*0.9}px`,
              margin: `${bar_width*0.1}px`,
            }}></div>
        ))}
        <button  id = "i1" onClick = {() => this.resetArray()}>Generate New Array</button>
        <button  id = "i2" onClick = {() => this.mergeSort()}>Merge Sort</button>
        <button  id = "i3" onClick = {() => this.quickSort()}>Quick Sort</button>
        <button  id = "i4" onClick = {() => this.heapSort()}>Heap Sort</button>
        <button  id = "i5" onClick = {() => this.bubbleSort()}>Bubble Sort</button>
        <button  id = "i6" onClick = {() => this.insertionSort()}>Insertion Sort</button>
      </div>
    );
  }
}

// HEALPER FUNCTIONS-------------
function animation_healper(animation_array)
{
    for (let i = 0; i < animation_array.length; i++) 
    {
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = (i%3 !== 2);
      if (isColorChange) 
      {
        const [barOneIdx, barTwoIdx] = animation_array[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(
        ()=>               // arrow function is convinient bcz it makes the scoping similar to other programming languages
        {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } 
      else 
      {
        setTimeout( 
        ()=>
        {
          const [barOneIdx, newHeight] = animation_array[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
}

function randomIntFromInterval(min, max) 
{
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// function get_width()
// { 
  
   
//   document.documentElement.clientWidth +  
                    
// }
// function get_height
// {
//   document.documentElement.clientHeight;
// }

