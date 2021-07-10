
import '../App.css';
import Header from '../components/Header';
import List from '../components/ClientsList';




function Clients() {
  document.title = 'Bott Digital';
  return (
    <div className="App">
      <Header />
      <List />

    </div >
  );
}

export default Clients;
