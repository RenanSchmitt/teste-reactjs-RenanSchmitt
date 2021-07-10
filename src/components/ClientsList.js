import React, { Component } from "react";
import axios from "axios";
import '../styles/NewClient.scss';
import '../styles/Inputs.scss';
import '../styles/Buttons.scss';
import '../styles/Table.scss';
import '../App.css';
import client from '../images/client.svg';

class User extends Component {
  state = {
    people: []
  };



  componentDidMount() {
    axios.get('https://reqres.in/api/users?page=2')
      .then(response => this.setState({ totalClients: response.data.total }));


    axios
      .get("https://reqres.in/api/users?page=1")
      .then(response => {
        this.successShow(response);
      })
      .catch(error => {
        this.successShow(error);
      });
  }

  successShow(response) {
    this.setState({
      people: response.data.data
    });
  }

  render() {
    const { totalClients } = this.state;
    return (
      <section className="client-form" id="contact">
        <div className="newClient-title" >
          <p> <img src={client} alt="avatar" /> Painel de Clientes</p>
          <hr></hr>
        </div>
        <table>

          {this.state.people.map(({ id, first_name, last_name, avatar, email }) => (
            <tr key={id}>
              <td>
                <img className="image-content" src={avatar} alt="avatar" />
              </td>
              <td >
                {first_name}{last_name}
              </td>
              <td>{email}</td>
              <th>
                <a className="btn-back" href="/EditarCliente">Editar</a>
              </th>
            </tr>
          ))}

        </table>
        <div>
          Total: {totalClients} clientes
        </div>
        <div className="column-2 pagination" >
          <a className="btn-back" href="/clientes">Anterior</a>
          <a className="btn-back" href="/clientes">Próximo</a>
        </div>
      </section>
    );
  }
}
export default User;