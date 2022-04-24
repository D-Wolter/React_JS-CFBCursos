import React, { useState, useSyncExternalStore } from 'react'
 
export default function App() {

  const [nome,setNome] = useState('')

  return (
    <>
    <label>Digite Seu Nome </label>
    <input 
    type='text' 
    name='fnome' 
    value={nome}
    onChange={(e)=>setNome(e.target.value)} />
    <p>Nome Digitado: {nome}</p>
    </>
  );
}


