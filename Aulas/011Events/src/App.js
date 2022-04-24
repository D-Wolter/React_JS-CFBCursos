import React, { useState } from 'react'
import Led from './components/led'


// use state const ligado, setado false para iniciar desligado
export default function App() {
  const [ligado,setLigado]=useState(false)
  return (
    <>
      
      <Led/>
    </>

    
  )
}