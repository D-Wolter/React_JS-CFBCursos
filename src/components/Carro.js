import React from 'react'


export default class Carro extends React.Component{
    constructor(props){
        super(props)
    }
  render() {
    return (
      <>
      <h1> Meu Carro</h1>
      <p>Canal: {this.props.canal}</p>
      <p>Nome: {this.props.nome}</p>
      </>
    )
  }
}
 



