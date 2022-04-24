import React, { useState } from 'react'
 
export default function App() {

  const [nome,setNome] = useState('')
  const [carro,setCarro] = useState('')
  
  return (
    <>
      <label>Digite Seu Nome </label>
      <input type='text' name='fnome' value={nome}onChange={(e)=>setNome(e.target.value)} />
      <p>Nome Digitado: {nome}</p>
      <label>Selecione um Carro</label>
      <select value={carro} onChange={(e)=>setCarro(e.target.value)}>
        <option value="HRV">HRV</option>
        <option value="golf">golf</option>
        <option value="cruze">cruze</option>
        <option value="argo">argo</option>
      </select>
      <p>Carro Selecionado: {carro}</p>
    </>
    );
}


