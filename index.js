import React, { useState, useEffect, Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

/*
Make a component that has two buttons, one that will change the color of a box based on the multiple of randomly fed number

evens - blue
three - red
five - yellow
all else - orange
*/ 

function App() {

  const [number, changeNumber] = useState(Math.round(Math.random() * 100))
  const [color, changeColor] = useState("orange")

  function updateNumber(){
    changeNumber(Math.round(Math.random() * 100))
  }

  useEffect(()=> {
    let temp = ""
      if (number % 2 == 0) {
        temp = "blue"
      } else if (number % 3 == 0) {
        temp = "red"
      } else if (number % 5 == 0) {
        temp = "yellow"
      } else {
        temp = "orange"
      }
      changeColor(temp)
  }, [number])

    return (
      <div>
        <div style={{margin: "25px", width: "100px", height: "100px", backgroundColor: color}}></div>
        <button onClick={updateNumber}>Click here to change color</button>
      </div>
    );
  }

render(<App />, document.getElementById('root'));
