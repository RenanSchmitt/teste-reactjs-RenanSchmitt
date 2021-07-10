import '../App.css';
import Header from '../components/Header';
import Form from '../components/FormEditClient';

function EditClient() {
  document.title = 'COOBRASTUR TURISMO - Editar cliente';
  if (sessionStorage.getItem('token') === null) {
    alert("Você não está logado!")
    window.location.href = "/login";
  };

  return (
    <div className="App">
      <Header />
      <Form />
    </div >
  );
}

export default EditClient;
