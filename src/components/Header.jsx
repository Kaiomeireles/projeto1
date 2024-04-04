// Header.js
import React from 'react';
import Header from './components/Header'

function Header() {
  return (
    <header>
      <div className="container">
        <h1>Nome da Sua Loja de Esportes</h1>
        <nav>
          <ul>
            <li><a href="#">Página Inicial</a></li>
            <li><a href="#">Produtos</a></li>
            <li><a href="#">Contato</a></li>
            <li><a href="#">Sobre</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
