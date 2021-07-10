import React, { useState } from 'react';
import '../styles/Login.scss';
import '../styles/Inputs.scss';
import '../styles/Buttons.scss';
import logo from '../images/logo-color.svg';
import axios from 'axios';


//////////
function LoginForm() {
  const [campos, setCampos] = useState({
    email: '',
    password: '',
  });

  function handleInputChange(event) {

    campos[event.target.name] = event.target.value;
    setCampos(campos);
  }

  function send() {
    const formData = new FormData();
    Object.keys(campos).forEach(key => formData.append(key, campos[key]));

    axios.post(`https://reqres.in/api/login`, campos)
      .then(res => {
        if (res.status === 200) {
          sessionStorage.setItem('token', res.data.token);
          window.location.href = "/clientes";
        }
      })
  }

  function handleFormSubmit(event) {
    event.preventDefault();

    send(campos);
  }
  return (

    <section className="contact-form" id="contact">
      <div className="img-login" >
        <img src={logo} width="343px" alt="logo" />
      </div>
      <form onSubmit={handleFormSubmit}>
        <div className="container">
          <div>
            <label className="form-label" for="email">E-mail
              <input className="input-small" id="email" name="email" type="email" required="required" onChange={handleInputChange} /></label>
          </div>
          <div>
            <label for="password" className="form-label">Senha
              <input className="input-small" id="password" name="password" type="password" required="required" onChange={handleInputChange} /></label>
          </div>
        </div>
        <button className="btn-submit" id="sendMessageButton" type="submit">ACESSAR O SISTEMA</button>
      </form >
    </section >
  )
}

export default LoginForm;