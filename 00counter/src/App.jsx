import { useState } from 'react'
import './App.css'
//impelmentation of usestate..

function App() {
  let [counter,setcounter]= useState(0)//state creation

  //add function
 const addvalue =()=>{
  if(counter < 20){
    console.log("value added",counter);
   setcounter(prevCounter =>counter+1);
   setcounter(prevCounter =>counter+1); // doing same work on same var
  }else{
    console.log("Maximum limit reached.");
  }
   
}

//remove fucntion
const removeval=()=>{
  if(counter >0){
    console.log("removed",{counter});
    setcounter(counter-1)
  }else{
    console.log("Minimum limit reached.");
  }
}

  return (
    <>
    <h1>Counter</h1>
    <h2>counter value: {counter}</h2>
      <div className="but">
        <button onClick={addvalue}>add value</button><br />
        <button onClick={removeval}>remove value</button>
        <p>{counter}</p>
      </div>
    </>
  )
}

export default App
