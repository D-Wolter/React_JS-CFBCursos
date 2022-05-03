import React, {useEffect,useState} from 'react'
export default function App() {

  const [contagem,setContagem]=useState(0)  
  //useEffect eh chamdos sempre que a uma atualizaçao na pagina, e dai ele eh executado
  useEffect(


    ()=>{
      console.log('Pagina Carregada')
    document.title='coontagem:'+contagem
    }
  )

  return (
    
    <>
    <p>Contagem: {contagem}</p>
    <button onClick={()=>setContagem(contagem+1)}>Contar</button>
    </>
    );
}


