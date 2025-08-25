import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  console.log("props",props)
   const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-2xl '>Tailwind test</h1>
    <Card channel="vikcey with code" />
    <Card/>
    </>
  )
}

export default App
