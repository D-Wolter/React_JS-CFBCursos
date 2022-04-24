import React from 'react'
 
export default function App() {

  const carros=[
    {categoria: 'Esporte', preco: '1100000.00', modelo: 'Golf GTI'},
    {categoria: 'Esporte', preco: '1200000.00', modelo: 'Camaro'},
    {categoria: 'SUV', preco: '8500000.00', modelo: 'HRV'},
    {categoria: 'SUV', preco: '6000000.00', modelo: 'T-Cross'},
    {categoria: 'Ultilitarios', preco: '1500000.00', modelo: 'Ranger'},
    {categoria: 'Ultilitarios', preco: '1900000.00', modelo: 'Hillux'}
    ];

  const listaCarros=carros.map( 
    (c, i)=> 
  <li key={i}>{i} - {c}</li>
    )

  return (
    <>
    <li>{listaCarros}</li>
    </>
  );
}


