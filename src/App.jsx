import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import Test from './components/Demo'

function App() {
  const cards = [
    {
      h5: "Heading Number 1",
      p: "This is the Description of Heading Number 1"
    },
    {
      h5: "Heading Number 2",
      p: "This is the Description of Heading Number 2"
    },
    {
      h5: "Heading Number 3",
      p: "This is the Description of Heading Number 3"
    },
    {
      h5: "Heading Number 4",
      p: "This is the Description of Heading Number 4"
    },
    {
      h5: "Heading Number 5",
      p: "This is the Description of Heading Number 5"
    },

  ]

  return (
    <>
      <Test />
      <div className="flex justify-center gap-8 flex-wrap w-full text-black">
        <Card cardData={cards}/>
      </div>
    </>
  )
}

export default App
