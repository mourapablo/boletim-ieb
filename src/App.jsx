import React from 'react';
import Navbar from "./componentes/navbar/Navbar";
import Title from './componentes/titulos/Titulos';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <div className='instruction'>
        <p><strong>19h - LOUVOR:</strong> MINISTÉRIO DE MÚSICA</p>
      </div>
      <div className='instruction-2'>
        <p><strong>PRELÚDIO</strong></p>
        <p>CANTADO</p>
      </div>
      <Title />
    </div>
  
   
  );
}

export default App;
