import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Add from './components/Add'
import View from './components/View'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
       
      
        <Navbar/>
        <Routes>
        <Route path="/" element={<View/>}/>
        <Route path="/a" element={<Add/>}/>
        </Routes>
        
        </div>
    </>
  )
}

export default App
