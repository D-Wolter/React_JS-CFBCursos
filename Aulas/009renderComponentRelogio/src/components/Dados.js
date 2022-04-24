import React from 'react'

export default function Dados (props) {
    //const com estilos junto
const textoDestaque={
    color:'#00f',
    fontSize:'1em'
}
    let n1=10
    let n2=20
    return (
        <section style={textoDestaque}>
            <p >Canal: {props.xcanal}</p>
            <p>Youtube: {props.xyoutube}</p>
            <p>Cursos: {props.xcurso}</p>
            <p>{'A soma de ' + n1 + ' com ' + n2 + ' é igual a ' + props.somar(n1,n2)}</p>
        </section>
    )
} 