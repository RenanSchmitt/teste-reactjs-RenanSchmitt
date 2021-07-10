import React from 'react';
import axios from 'axios';
import '../styles/NewClient.css';
import '../styles/Inputs.css';
import '../styles/Buttons.css';
import '../styles/Tables.css';
import '../App.css';
import client from '../images/client.svg';

class ClientsList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      totalClients: null
    };
  }

  componentDidMount() {
    const clients = [];
    axios.get('https://reqres.in/api/users?page=2')
      .then(response => this.setState({ totalClients: response.data.total }));
    // .then(response => this.setState({ totalClients: response.data.data.length }));


    axios.get('https://reqres.in/api/users?page=2')
      .then(response => this.setState({ clients: response.data.data }));
  }

  render() {
    const { totalClients } = this.state;
    const { clients } = this.state;

    console.log(clients)
    return (
      <section className="client-form" id="contact">
        <div className="newClient-title" >
          <p> <img src={client} alt="avatar" /> Painel de Clientes</p>
          <hr></hr>
        </div>

        <table>
          <tr>
            <td><img className="image-content" src={"https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"} alt="avatar" /></td>
            <td>Michael Lawson</td>
            <td>michael.lawson@reqres.in</td>
            <th><a className="btn-back" href="/clientes">Editar</a></th>
          </tr>
          <tr>
            <td><img className="image-content" src={"https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"} alt="avatar" /></td>
            <td>Michael Lawson</td>
            <td>michael.lawson@reqres.in</td>
            <th><a className="btn-back" href="/clientes">Editar</a></th>
          </tr>
          <tr>
            <td><img className="image-content" src={"https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"} alt="avatar" /></td>
            <td>Michael Lawson</td>
            <td>michael.lawson@reqres.in</td>
            <th><a className="btn-back" href="/clientes">Editar</a></th>
          </tr>

        </table>
        <div>
          Total: {totalClients} clientes
        </div>
        <div className="column-2 pagination" >
          <a className="btn-back" href="/clientes">Anterior</a>
          <a className="btn-back" href="/clientes">Próximo</a>
        </div>
      </section >

    );
  }
}

export default ClientsList;