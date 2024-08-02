import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/NavBar/Navbar'
import Banner from './Components/Banner'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Banner />
    </>
  )
}

export default App
