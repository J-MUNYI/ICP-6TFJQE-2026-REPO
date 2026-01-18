import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

return (
  <>
    <div style={{padding: '2rem', fontFamily: 'Arial, sans-serif'}}>
      <h1>EcoWise</h1>
      <p>Encouraging reuse, repair, responsible consumption and recycling</p>
    </div>
  </>
)
}

export default App

