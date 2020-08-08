
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
const NUMBER_OF_ARRAY_BARS = 100;


// This is the main color of the array bars.
const PRIMARY_COLOR = 'turquoise';

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = 'red';

const screen_width =  getscreenwidth();

// getting proper bar width for responsive look
const bar_width = Math.floor(screen_width/NUMBER_OF_ARRAY_BARS);


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
  }

  resetArray() 
  {
    const array = [];
    for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) 
    {
      array.push(randomIntFromInterval(5, 500));
    }
    this.setState({array});
  }

  mergeSort() 
  {
    const animations = getMergeSortAnimations(this.state.array);
    animation_healper(animations);
  }

  quickSort() 
  {
    const animations = getQuickSortAnimations(this.state.array);
    animation_healper(animations);
  }

  heapSort() 
  {
    const animations = getHeapSortAnimations(this.state.array);
    animation_healper(animations);
  }

  bubbleSort() 
  {
    const animations = getBubbleSortAnimations(this.state.array);
    animation_healper(animations);
  }
  selectionSort()
  {

  }

  insertionSort()
  {
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
            position:"absolute",
            right:`${bar_width*0.05*NUMBER_OF_ARRAY_BARS}px`,

            left:`${bar_width*0.05*NUMBER_OF_ARRAY_BARS}px`,
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
              width: `${bar_width*0.5}px`,
              margin: `${bar_width*0.1}px`,
            }}></div>
        ))}
        <button onClick = {() => this.resetArray()}>Generate New Array</button>
        <button onClick = {() => this.mergeSort()}>Merge Sort</button>
        <button onClick = {() => this.quickSort()}>Quick Sort</button>
        <button onClick = {() => this.heapSort()}>Heap Sort</button>
        <button onClick = {() => this.bubbleSort()}>Bubble Sort</button>
        <button onClick = {() => this.insertionSort()}>Insertion Sort</button>
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
        function()
        {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } 
      else 
      {
        setTimeout( 
        function()
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

function getscreenwidth()
{
    const w = window.screen.width;
    return w;
}
