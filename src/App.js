import React, { useState } from 'react'
import Nota from './components/Nota'
import Resultado from './components/Resultado'
 
export default function App() {

  const [Nota1,setNota1]=useState(0)
  const [Nota2,setNota2]=useState(0)
  const [Nota3,setNota3]=useState(0)
  const [Nota4,setNota4]=useState(0)


  return (
    <>
      <Nota/>
      <Nota/>
      <Nota/>
      <Nota/>
      <Resultado/>

    </>
    );
}


