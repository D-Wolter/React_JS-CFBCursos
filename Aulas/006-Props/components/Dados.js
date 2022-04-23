import React from 'react'

export default function Dados (props) {
    return (
        <section>
            <p>Canal: {props.x_canal}</p>
            <p>Youtube: {props.x_youtube}</p>
            <p>Cursos: {props.x_curso}</p>
        </section>
    )
} 