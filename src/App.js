import Login from './screens/Login';
import Clients from './screens/Clients';
import NewClient from './screens/NewClient';
import EditClient from './screens/EditClient';


import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = () => (
  <Router>
    <div>
      <Route path="/" exact component={Login} />
      <Route path="/Login" exact component={Login} />
      <Route path="/Clientes" exact component={Clients} />
      <Route path="/NovoCliente" exact component={NewClient} />
      <Route path="/EditarCliente" exact component={EditClient} />

    </div>
  </Router>
);

export default App;
