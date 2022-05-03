import React from 'react'


export default class Classe extends React.Component{
    constructor(props){
        super(props)
    }
  render() {
    return (
      <>
      <h1> primeiro Componente de Classe</h1>
      <p>Canal: {this.props.canal}</p>
      <p>Nome: {this.props.nome}</p>
      </>
    )
  }
}
 



