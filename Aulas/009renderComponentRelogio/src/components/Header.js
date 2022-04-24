import React from 'react'
import Homem from './imgs/homem.png'



export default function Header() {
    return (
    <header>
        <img src={Homem}/>
        <h1 style={{color:'#f00', fontSize:'5em'}}>Dwm</h1>
    </header>
    )
}
//formataçao inline deve estar entre {{no formato de escrita Camel separados por , e valores entre aspas}}