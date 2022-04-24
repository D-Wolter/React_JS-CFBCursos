import React,  {useState} from 'react'
 
export default function App() {

  const [cor,setCor] =useState(1)

  const vermelho={color:'#f00'}
  const verde={color:'#0f0'}
  const azul={color:'#00f'}

  const corAtual=(c)=>{
    if(c==1){
      return vermelho
    }else if(c==2){
      return verde
    } else {
      return azul
    }
  }
  const mudaCor=()=> {
    setCor(cor+1)
    if(cor > 2){
      setCor(1)
    }
  }

  //setInterval(mudaCor,1000)
//setInterval automatizando a mudança de cor
  return (
    <>
    
    <h1 style={corAtual(cor)}>cfb cursos</h1>
    <button onClick={()=>mudaCor()}>Muda Cor</button>
    </>
  );
}


