import React, { useState } from 'react';
import Banner from './Componente/Banner/Banner';
import Calculadora from './Componente/Calculadora';
import Resultado from './Componente/Resultado';



function App() {
  const [resultadoMedia, setResultadoMedia] = useState('');
  const[resultadoDivisivel,setResultadoDivisivel] =useState('');
  const[calculoGeral,setCaluloGeral] = useState('');

  const resultadoAlterado = (media,resultadoDivisivel,calculoGeral) => {
    setResultadoMedia(media);
    setResultadoDivisivel(resultadoDivisivel);
    setCaluloGeral(calculoGeral);
  

  };

  return (
    <div className='App'>
      <Banner />
      <Calculadora resultadoAlterado={resultadoAlterado} />
      <Resultado calculoGeral={calculoGeral} resultadoMedia={resultadoMedia} resultadoDivisivel={resultadoDivisivel}/>
    </div>
  );
}

export default App;
