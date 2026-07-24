// import { useState } from 'react'
// import './App.css'

// function App() {
//  const [bg,setbg] =useState("white")

//   return (
//     <>
//       <div className="bg">
//         <button id='red' onClick={() => setbg("#ef4444")}>Red </button>
//         <button id='blue'>Blue</button>
//         <button id='orange'>Orange</button>
//         <button id='pink'>Pink</button>
//         <button id='black'>Black</button>
//         <button id='yellow'>Yellow</button>
//       </div>
//     </>
//   )
// }

// export default App
import { useState } from "react";
import './App.css'

 function App() {
  const [bg, setBg] = useState("olive");

  return (
    <div id="root" style={{ backgroundColor: bg }}>
      <div className="bg">
        <button id="red" onClick={() => setBg("#ef4444")}>Red</button>
        <button id="blue" onClick={() => setBg("#3b82f6")}>Blue</button>
        <button id="orange" onClick={() => setBg("#f97316")}>Orange</button>
        <button id="pink" onClick={() => setBg("#ec4899")}>Pink</button>
        <button id="yellow" onClick={() => setBg("#eab308")}>Yellow</button>
        <button id="black" onClick={() => setBg("#1e293b")}>Black</button>
      </div>
    </div>
  );
}
export default App