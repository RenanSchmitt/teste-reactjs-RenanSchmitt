import React, { Component } from 'react';
import '../styles/Header.css';
import logo from '../images/logo.svg';
import logout from '../images/logout.svg';

// https://react.semantic-ui.com/

class Header extends Component {

  render() {
    return (
      <section className="menu">
        <nav id="menu">
          <div class="column-2">
            <img className="headerLogo" src={logo} alt="Header logo" />
          </div>
          <div class="column-2">
            <a className="icon" href="/logout"> <img src={logout} alt="Logout image" />Sair </a>
          </div>
        </nav>
      </section >
    );
  }
}

export default Header;