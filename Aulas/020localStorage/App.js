  //localStorage.setItem('nome','daniel')
  //localStorage.setItem('nome','wolter')
  //localStorage.getItem('nome')
  //localStorage.removeItem('nome')

import React, {useState} from 'react'
export default function App() {

  const[nome,setNome]=useState()

  const armazenar =(chave,valor)=>{
    localStorage.setItem(chave,valor)
  }
  const consultar=(chave,valor)=>{
    alert(localStorage.getItem(chave))
  }
  const apagar=(chave)=>{
    localStorage.removeItem(chave)
}  
return (
    
    <>
      <label>Digite um Nome</label><br/>
      <input type='text' value={nome} onChange={(e)=>setNome(e.target.value)}/><br/>
      <button onClick={()=>armazenar('ls_nome', nome)}>Gravar Nome</button>
      <button onClick={()=>consultar('ls_nome', nome)}>Ver Nome</button>
      <button onClick={()=>apagar('ls_nome', nome)}>Remover Nome</button>
    </>
    );
}


