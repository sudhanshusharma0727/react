import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)
// let counter=5
const addvalue=()=>{
   
   if(counter<20)
  {
    counter=counter + 1;
    setCounter(counter)
  console.log("clicked",counter);
  
  }
  else{
    console.log("value cant exceed 20");
    
  }
}
const decreasevalue=()=>{

  if(counter>0)
  {
  setCounter(counter-1);
  console.log("Decrease button clicked: ",counter);
  }
  else{
    console.log("Decrease value cant go below 0");
    
  }
}
  return (
    <>
    <h1>Sudhanshu Learning React</h1>
    <h2>Counter value: {counter}</h2>


    <button
    onClick={addvalue}
    >Add value</button>
    <br />
    <button
    onClick={decreasevalue}
    >Decrease value</button>
    </>
  )
}

export default App
