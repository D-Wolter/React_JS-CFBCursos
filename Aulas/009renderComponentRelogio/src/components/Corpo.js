import React from 'react'
import Dados from './Dados'
import './App.css'

export default function Corpo (){
    const canal=()=>{
        return 'cpb cursos'
    }
    const somar=(v1,v2)=>{
        return v1+v2
    }
    return (
        <section className='texto' >
            <p >Curso React</p>
            <p>Aluno Daniel</p>
            <p>Basico React</p>
            <Dados xcanal={canal()} xyoutube='www.youtube' xcurso='aula6React' somar={somar}/>
            
        </section>
    )
}