import React from 'react'
import Header from './components/Header'
import Corpo from './components/Corpo'
import Dados from './components/Dados'

export default function App() {
  
  const canal='cpb cursos'

  return (
    <>
      <Header/>
      <Corpo/>
      <Dados x_canal={canal} x_youtube='www.youtube' x_curso='aula6React'/>
    </>
      
    
  )
}