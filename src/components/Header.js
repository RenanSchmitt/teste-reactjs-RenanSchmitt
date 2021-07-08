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
          <ul>
            <li>
              <img className="headerLogo" src={logo} alt="Header logo" />
            </li>
            <li className="floatRight">
              <a className="icon" href="/logout"> <img src={logout} alt="Logout image" /> </a>
            </li>
          </ul>
        </nav>
      </section >
    );
  }
}

export default Header;