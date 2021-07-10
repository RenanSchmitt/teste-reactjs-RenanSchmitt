import React, { useState } from 'react';
import '../styles/NewClient.scss';
import '../styles/Inputs.scss';
import '../styles/Buttons.scss';
import '../App.css';
import client from '../images/client.svg';
import axios from 'axios';

function FormEdit() {
  const [campos, setCampos] = useState({
    name: '',
    job: '',
  });

  function handleInputChange(event) {

    campos[event.target.name] = event.target.value;
    setCampos(campos);
    console.log(campos);
  }

  function send() {
    const formData = new FormData();
    Object.keys(campos).forEach(key => formData.append(key, campos[key]));

    axios.post('https://reqres.in/api/users/2', campos)
      .then(response => {
        if (response.status === 201) {
          alert("Usuário editado com sucesso.");
          window.location.href = "/clientes";
        } else {
          alert("Houve um erro ao editar o usuário.");
        }
      })
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    send(campos);
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
            <label className="form-label" for="name">Nome
              <input className="input-small" id="name" name="name" type="text" required="required" onChange={handleInputChange} /></label>
          </div>
          <div>
            <label for="password" className="form-label">Profissão
              <input className="input-small" id="profession" name="job" type="text" required="required" onChange={handleInputChange} /></label>
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