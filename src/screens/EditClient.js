import '../App.css';
import Header from '../components/Header';
import Form from '../components/FormEditClient';



function EditClient() {
  document.title = 'COOBRASTUR TURISMO - Editar cliente';
  return (
    <div className="App">
      <Header />
      <Form />
    </div >
  );
}

export default EditClient;
