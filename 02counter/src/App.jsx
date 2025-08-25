import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(20)    //setcounter ki jagah hum uska naam kuch bhi rakh saakte hai
  //let counter = 20 // ye 1 normal javascript varieble hota hai jisse react ko pata nahi chalta ki value change hui hai ya nahi
  const addValue = ()=> {
    //console.log("value added", counter);
    //counter = counter + 1
    setCounter(counter + 1)
  }

  const removeValue = () =>{
    //console.log("value removed", counter);
    //setCounter(counter - 1)

    if(counter > 0){
      setCounter(counter - 1)
    }
    else{
      alert("counter cannot go below!")
    }
  }
  

  return (
    <>
      <h1>chai aur react</h1>
      <h2>counter value : {counter}</h2>


      <button onClick={addValue}> Add value{counter}</button>
      <br />

      <br/>
      <button onClick={removeValue}>remove value{counter}</button>
    </>
  )
}

export default App
