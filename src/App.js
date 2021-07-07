import Login from './screens/Login';
import Clients from './screens/Clients';
import NewClient from './screens/NewClient';

import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = () => (
  <Router>
    <div>
      <Route path="/" exact component={Login} />
      <Route path="/Login" exact component={Login} />
      <Route path="/Clientes" exact component={Clients} />
      <Route path="/NovoCliente" exact component={NewClient} />
    </div>
  </Router>
);

export default App;
