import React from 'react'
import './App.css'
import Header from './components/Header'
import Corpo from './components/Corpo'
import Relogio from './components/Relogio'


export default function App() {
  
  

  return (
    <section className='caixa'>
      <Relogio/>
      <Header/>
      <Corpo/>
      <a href='https://www.youtube.com' target='blank'>cpb youtube</a>
    </section>
      
    
  )
}