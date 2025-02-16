import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Block from './Components/1Block'

function App() {
  const [count, setCount] = useState(0)

  return (
   <Block/>
  )
}

export default App
