import React from 'react';
import Logo from './img/logo-ieb.png';
import '../Navbar.css'

function Navbar() {
  return (
    <nav className='home'>
      <img src={Logo} alt="Descrição da Imagem" className='navbar-image' />
      <div className='navbar-text'>
        <h1>IGREJA EVANGÉLICA BATISTA NO CORDEIRO</h1>
        <h3>ORGANIZADA EM 14/06/2008</h3>
        <h2>CULTO DE ORAÇÃO 14/08/2024</h2>
      </div>
    </nav>
    
  );
}



export default Navbar;
