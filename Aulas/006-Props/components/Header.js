import React from 'react'
import Homem from './imgs/homem.png'

export default function Header() {
    return (
    <header>
        <img src={Homem}/>
        <h1>Dwm</h1>
    </header>
    )
}