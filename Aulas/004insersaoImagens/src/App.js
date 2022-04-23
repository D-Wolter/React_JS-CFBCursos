import React from 'react'
import Homem from './components/imgs/homem.png'

//importamos o Homem da pasta dentro do servidor (chamado aqui em cima ) e a mulher da pasta public fora do servidor está descrita detro da render selection abaixo (chamado la em baixo dentro do render)
//temos duas const uma dentro da funcao, usase {} chama const pelo nome e funcao pelo nome() 
export default function App() {
  const canal=()=>{return ('DWM')}
  const curso='React-js'
  return (
    <section>
      <header>
        <p>Aluno: {canal()}</p>
        <br/>
        <p>Curso: {curso}</p>
      </header>
      <section>
        <img src={Homem}/>
        <img src='/img/mulher.png'/>
      </section>
      
    </section>
  )
}