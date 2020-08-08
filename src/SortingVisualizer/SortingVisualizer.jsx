// import React from 'react';
// import './SortingVisualizer.css';


// //--export-- keyword is used so that this class can be used(by importing) by 
// //other programms also
// //--extends-- used to create a class/object of parent class
// // syntax ==> class childclass extends parentclass
// //--React.Components-- similar to functions in JavaScript
// // but work in isolation and returns HTML via a render function
// export default class SortingVisualizer extends React.Component{
//     // constuctor creats an instance Objet
//     // props is property of the component
//     constructor(props)
//     {
//         //--super(arguments)-- this can accept all the arguments  that has been
//         // used to create a constuctor
//         super(props);
//     // state is accessible only within component(to keep track of data 
//     // within component)
//         this.state = {
//         array : [],


import React from 'react';
import {getMergeSortAnimations} from '../sortingAlgorithms/sortingAlgorithms.js';
import {getBubbleSortAnimations} from '../sortingAlgorithms/sortingAlgorithms.js';
import {getQuickSortAnimations} from '../sortingAlgorithms/sortingAlgorithms.js';
import './SortingVisualizer.css';

// Change this value for the speed of the animations.
const ANIMATION_SPEED_MS = 1;

// Change this value for the number of bars (value) in the array.
const NUMBER_OF_ARRAY_BARS = 150;

// This is the main color of the array bars.
const PRIMARY_COLOR = 'turquoise';

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = 'red';

export default class SortingVisualizer extends React.Component 
{
  constructor(props) 
  {
    super(props);
    this.state = { array: [],};
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
    animation_healper1(animations);
  }

  quickSort() 
  {
    const animations = getQuickSortAnimations(this.state.array);
    animation_healper1(animations);
  }

  heapSort() 
  {
    // We leave it as an exercise to the viewer of this code to implement this method.
  }

  bubbleSort() 
  {
    const animations = getBubbleSortAnimations(this.state.array);
    animation_healper1(animations);
  }
  selectionSort()
  {

  }

  insertionSort()
  {

  }


  render() 
  {
    const {array} = this.state;

    return (
      <div className="array-container">
        {array.map((value, idx) => (
          <div
            className="array-bar"
            key={idx}
            style={{
              backgroundColor: PRIMARY_COLOR,
              height: `${value}px`,
            }}></div>
        ))}
        <button onClick = {() => this.resetArray()}>Generate New Array</button>
        <button onClick = {() => this.mergeSort()}>Merge Sort</button>
        <button onClick = {() => this.quickSort()}>Quick Sort</button>
        <button onClick = {() => this.heapSort()}>Heap Sort</button>
        <button onClick = {() => this.bubbleSort()}>Bubble Sort</button>
        <button onClick = {() => this.insertionSort()}>Insertion Sort</button>
        <button onClick = {() => this.selectionSort()}> Selection Sort</button>
      </div>
    );
  }
}

// From https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
function randomIntFromInterval(min, max) 
{
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function animation_healper1(animation_array)
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

