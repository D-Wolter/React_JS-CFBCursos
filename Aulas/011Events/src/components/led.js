import React, { useState } from 'react'
import LedGreen from './imgs/led-green.png'
import LedRed from './imgs/led-red.png'


// use state const ligado, setado false para iniciar desligado
export default function Led() {
  const [ligado,setLigado]=useState(false)
  return (
    <>
      <h1>Dwm</h1>

      <img style={{width:'50px'}} src={ligado?LedGreen:LedRed}/>
      <br/>
      <button onClick={()=>setLigado(!ligado)}>{ligado?'Desligar':'Ligar'}</button>
    </>
    //no src de img tem uma func ternaria {seÉverdadeiro?seSim:seNao}
    //no button adicionamos uma arrow func onde declara o state setLigado negado !  porque por padrao o 
    //state vem false, depois usamos a func ternaria para alterar o nome no botao ligar/desligar
    
  )
}