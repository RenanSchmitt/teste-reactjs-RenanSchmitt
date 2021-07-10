
import '../App.css';
import Header from '../components/Header';
import List from '../components/ClientsList';

function Clients() {
  document.title = 'COOBRASTUR TURISMO - Clientes';
  if (sessionStorage.getItem('token') === null) {
    alert("Você não está logado!")
    window.location.href = "/login";
  };

  return (
    <div className="App">
      <Header />
      <List />

    </div >
  );
}

export default Clients;
