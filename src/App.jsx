import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)
  const addvalue=()=>{
    if(counter<20){
      //counter=counter+1;
      setCounter(counter+1);
      //console.log(counter)
    }
  }
  const subvalue=()=>{
    if(counter>0){
    //counter=counter-1;
    setCounter(counter-1);
    //console.log(counter);
    }
  }
  return (
    <>
      <div className="container1">
        <h1>ABHIAHEKH KUMAR SHAKY</h1>
        <p>Revision practices</p>
      </div>
      <h1>Counter value: {counter}</h1>
      <button onClick={addvalue} >Increase count: {counter}</button>
      <br />
      <br />
      <button onClick={subvalue}>Decrease count: {counter}</button>
    </>
  )
}

export default App
