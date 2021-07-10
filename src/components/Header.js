import React, { Component } from 'react';
import '../styles/Header.css';
import logo from '../images/logo.svg';
import logout from '../images/logout.svg';
import { Link } from 'react-router-dom';


//////////
function Header() {

  function checkHiddenButtonNewClient() {
    setTimeout(() => {
      const title = document.title;

      switch (title) {
        case 'COOBRASTUR TURISMO - Novo cliente':
          document.getElementById("btn-newClient").style.display = "none";
          break;
        case 'COOBRASTUR TURISMO - Editar cliente':
          document.getElementById("btn-newClient").style.display = "none";
          break;
        default:
          document.getElementById("btn-newClient").style.display = "block";
      }
    }, 100);

  }

  checkHiddenButtonNewClient();

  return (
    < header className="menu" >
      <nav id="menu">
        <ul>
          <li>
            <img className="headerLogo" src={logo} alt="Header logo" />
          </li>

          <li className="floatRight">
            <Link class="icon" to={'/'}> <img src={logout} alt="Logout image" /> </Link>
          </li>
          <li className="floatRight" style={{ marginTop: "12px", position: "flex" }}>
            <Link class="icon" to={'/NovoCliente'}>
              <a id="btn-newClient" className="btn-new-client" href="/clientes">➕ NOVO CLIENTE</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header >
  )
}

export default Header;