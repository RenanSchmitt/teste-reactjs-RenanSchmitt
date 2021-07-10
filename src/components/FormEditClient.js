import React, { useState } from 'react';
import '../styles/NewClient.css';
import '../styles/Inputs.css';
import '../styles/Buttons.css';
import '../App.css';
import client from '../images/client.svg';
import axios from 'axios';


//////////
function FormEdit() {
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
    axios.post('http://localhost:3030/login',
      formData,
      {
        headers: {
          "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
          "Access-Control-Allow-Origin": "*"
        }
      })
      .then(response => { console.log("Tudo certo ", response.data); })
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    document.getElementById("loading").style.visibility = 'visible';
    document.getElementById("sendMessageButton").disabled = true;
    send(campos);
    setTimeout(() => {

      document.getElementById("loading").style.visibility = 'hidden';
      document.getElementById("sendMessageButton").disabled = false;
      alert("Mensagem enviada");
    }, 3000);



  }
  return (

    <section className="client-form" id="contact">
      <div className="newClient-title" >
        <p> <img src={client} width="13.5px" alt="logo" /> Painel de Clientes</p>
        <hr></hr>
      </div>
      <div className="text-information" >
        <h5> Editar cliente</h5>
        <p>Informe os campos a seguir para editar cliente existente.</p>
      </div>
      <form onSubmit={handleFormSubmit}>
        <div className="container">
          <div>
            <label className="form-label" for="email">Nome
              <input className="input-small" id="name" name="text" type="text" required="required" onChange={handleInputChange} /></label>
          </div>
          <div>
            <label for="password" className="form-label">Profissão
              <input className="input-small" id="profession" name="profession" type="text" required="required" onChange={handleInputChange} /></label>
          </div>
        </div>
        <div className="column-2">
          <button className="btn-primary" id="sendMessageButton" type="submit">Editar</button>
          <a className="btn-back" href="/clientes">Voltar</a>
        </div>
      </form >
    </section >
  )
}

export default FormEdit;