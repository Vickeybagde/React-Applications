import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200" style = {{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2"><div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
        <button onClick={() => setColor("red")} className="outline-none px-4 py-1 rounded-full"style = {{backgroundColor: "red"}}>Red</button>
        <button onClick={() => setColor("yellow")} className="outline-none px-4 py-1 rounded-full"style = {{backgroundColor: "yellow"}}>yellow</button>
        <button onClick={() => setColor("Green")} className="outline-none px-4 py-1 rounded-full"style = {{backgroundColor: "Green"}}>Green</button>
        <button onClick={() => setColor("Pink")} className="outline-none px-4 py-1 rounded-full"style = {{backgroundColor: "Pink"}}>Pink</button>
        <button onClick={() => setColor("orange")} className="outline-none px-4 py-1 rounded-full"style = {{backgroundColor: "orange"}}>Orange</button>
        <button onClick={() => setColor("black")} className="outline-none px-4 py-1 rounded-full text-white"style = {{backgroundColor: "black"}}>Black</button>
        <button onClick={() => setColor("blue")} className="outline-none px-4 py-1 rounded-full"style = {{backgroundColor: "blue"}}>Blue</button>
        <button onClick={() => setColor("maroon")} className="outline-none px-4 py-1 rounded-full"style = {{backgroundColor: "maroon"}}>Maroon</button>
        <button onClick={() => setColor("Grey")} className="outline-none px-4 py-1 rounded-full"style = {{backgroundColor: "Grey"}}>Grey</button>
      
      
      </div>
      </div>
      
      
      
    </div>
  )
}

export default App
