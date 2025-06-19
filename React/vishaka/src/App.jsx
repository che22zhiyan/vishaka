// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
        
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App


import React from 'react'
import useLocalStorage from './hook/useLocalStorage'
function App() {
  const [name, setName] = useLocalStorage('userName','')
  const [id, setId] = useLocalStorage('userId','')
  const [password, setpassword] = useLocalStorage('userpassword','')
  return (
    <>
    <h1>Application</h1>
    <h1>{name}</h1>
      <h1>{id}</h1>
      <h1>{password}</h1>
      <input type="text" placeholder="enter your name" value={name}
      onChange={(e)=> setName(e.target.value)}/><br />
      <input type="text" placeholder="enter your ID" value={id}
      onChange={(e)=> setId(e.target.value)}/><br />
      <input type="number" placeholder="enter your number" value={password}
      onChange={(e)=> setpassword(e.target.value)}/>
    </>
  )
}

export default App

