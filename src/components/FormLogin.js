import React, { useState } from 'react';
import '../styles/Login.css';
import '../styles/Inputs.css';
import '../styles/Buttons.css';
import loading from '../images/logo.svg';
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
    console.log(campos)
  }

  function send() {
    const formData = new FormData();
    Object.keys(campos).forEach(key => formData.append(key, campos[key]));
    // axios.post('https://reqres.in/api/login',
    //   formData,
    //   {
    //     headers: {
    //       "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
    //       "Access-Control-Allow-Origin": "*"
    //     }
    //   })
    //   .then(response => { console.log("Tudo certo ", response.data); })

    axios.post(`https://reqres.in/api/login`, { campos })
      .then(res => {
        console.log(res);
        console.log(res.data);
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