import '../App.css';
import Header from '../components/Header';
import Form from '../components/FormNewClient.js';



function NewClient() {
  document.title = 'COOBRASTUR TURISMO - Novo cliente';
  return (
    <div className="App">
      <Header />
      <Form />
    </div >
  );
}

export default NewClient;
