import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)
    
  // let counter = 15
  const addValue = () =>{
    // console.log("value added", Math.random())
    console.log("clicked", counter);
    counter = counter+1
    setCounter(counter)
  }

  const removeValue = () =>{
    counter = counter-1;
    setCounter(counter)
  }

    return (
      <>
        <h1>counter value = {counter}</h1>

        <button onClick={addValue}>{counter} add value</button>
        <br/>
        <button onClick={removeValue}>remove value {counter}</button>
      </>  
    )
}

export default App
