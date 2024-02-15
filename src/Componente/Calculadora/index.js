import React, { useState } from 'react';
import Botao from '../Botao/Index';
import Texto from '../Texto';
import './calculadora.css';
import Lista from '../lista';

const simbolos = ['+', '-', '*', '/'];


const Calculadora = ({ resultadoAlterado }) => {
 const [numero1, setNumero1] = useState('');
 const [numero2, setNumero2] = useState('');
 const [selectedSimbolo, setSelectedSimbolo] = useState('');


 const calculoGeral = (valor, simbolos) => {
   if (simbolos.includes(valor)) {
     let resultado;
     let tipoDeOperacao;


     if (valor === '+') {
       resultado = parseFloat(numero1) + parseFloat(numero2);
       tipoDeOperacao = "Soma";
     } else if (valor === '-') {
       resultado = parseFloat(numero1) - parseFloat(numero2);
       tipoDeOperacao = "Subtração";
     } else if (valor === '*') {
       resultado = parseFloat(numero1) * parseFloat(numero2);
       tipoDeOperacao = "Multiplicação";
     } else if (valor === '/') {
       resultado = parseFloat(numero1) / parseFloat(numero2);
       tipoDeOperacao = "Divisão";
     }


     return { resultado, tipoDeOperacao };
   }
 };


 const handleNumero1Change = (valor) => {
   setNumero1(valor);
 };


 const handleNumero2Change = (valor) => {
   setNumero2(valor);
 };


 const calcular = (evento) => {
   evento.preventDefault();


   const { resultado, tipoDeOperacao } = calculoGeral(selectedSimbolo, simbolos);

   if (resultado !== undefined) {
    const resultadoMedia = Math.abs(resultado) / 2;
    const soma = resultado;

    console.log("Resultado do cálculo (Geral):", resultado, tipoDeOperacao);
    console.log("Resultado da Média:", resultadoMedia);
    console.log("Resultado do teste:", soma);

    resultadoAlterado(resultadoMedia, resultado, tipoDeOperacao, calculoGeral);

    setNumero1('');
    setNumero2('');
    setSelectedSimbolo('');
  } else {
    console.error("Erro no cálculo. Certifique-se de que todos os campos estão preenchidos corretamente.");
  }
 };


 return (
   <section className="calculadora">
     <form onSubmit={calcular}>
       <h2>Coloque os números para calcularmos</h2>
       <h1>
         <Texto
           obrigatorio={true}
           label="Numero 1"
           placeholder="Digite o primeiro Número"
           value={numero1}
           onInputChange={(valor) => handleNumero1Change(valor)}
         />
       </h1>
       <h1>
         <Texto
           obrigatorio={true}
           label="Numero 2"
           placeholder="Digite o segundo Número"
           value={numero2}
           onInputChange={(valor) => handleNumero2Change(valor)}
         />
       </h1>
       <h1>
         <Lista
           obrigatorio={true}
           label="Como você deseja calcular"
           itens={simbolos}
           value={selectedSimbolo}
           alterado={(valor) => setSelectedSimbolo(valor)}
         />
       </h1>
       <Botao>Faça o Calculo</Botao>
     </form>
   </section>
 );
};


export default Calculadora;



