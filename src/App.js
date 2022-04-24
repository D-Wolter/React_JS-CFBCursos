import React,  {useState} from 'react'
//nesse codigo usamos recurso da renderizaçao condicional para informar o cliente um cumprimento adapatavel a hora local
//
//depois cliamos um botao logar que muda o estado de outra mensagem
export default function App() {

  const [log,setLog] =useState(false)

  const msglogin=()=>{
    return 'Usuario Logado'
  }
  const msglogoff=()=>{
    return 'Favor Logar'
  }

  const cumprimento = ()=> {
    const hora=new Date().getHours()
    if(hora >=0 && hora < 13) {
      return <p>Bom Dia</p>
    } else if(hora>=13 && hora < 18){
      return <p>Boa Tarde</p>
    }else{
      return <p>Boa Noite</p>
    }
  }
  return (
    <>
    {cumprimento()}
    <p>{log?msglogin():msglogoff()}</p>
    <button onClick={()=>setLog(!log)}>{log?'Logoff':'Login'}</button>
    </>
  );
}


