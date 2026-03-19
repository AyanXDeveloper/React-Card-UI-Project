import { useState } from 'react'
import './App.css'
import Test from './components/Demo'
import Card from './components/card'

function App() {
  // const [h5, setH5] = useState("Heading Number 1")
  // const [p, setP] = useState("This is the Description of Heading Number 1")

  return (
    <>
      <Test />
      <div className="flex justify-center gap-8 flex-wrap w-full text-black">
        <Card />
      </div>
    </>
  )
}

export default App
