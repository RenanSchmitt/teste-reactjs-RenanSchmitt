import React, { Component } from 'react';
import '../styles/Header.css';
import logo from '../images/logo.svg';

// https://react.semantic-ui.com/


class Header extends Component {

  render() {
    return (
      <section className="menu">
        <nav id="menu">
          <div class="column-2">
            <img src={logo} width="283px" alt="icon Cancel" />
          </div>
          <div class="column-2">
            <p style={{ fontSize: "28px", color: "white" }}> Sair</p>
          </div>
        </nav>
      </section >
    );
  }
}

export default Header;