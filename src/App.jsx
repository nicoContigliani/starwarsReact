import './App.css';
import Contacto from './components/Contacto';
import Nosotros from './components/Nosotros';
import Inicio from './components/Inicio';
import User from './components/User';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";

function App() {
  return (
    <div>
      <h1>Natvbar</h1>

      <Router>
      <Link to="/nosotros" className="btn btn-dark">
              Nosotros
          </Link>
       
          <Link to="/" className="btn btn-dark">
              Inicio
          </Link>

          <Link to="/contacto" className="btn btn-dark">
              Contacto
          </Link>


        <Switch>
          <Route path="/contacto">
              <Contacto/>
          </Route>
          <Route path="/nosotros/:id">
               <User/> 
              
          </Route>
          <Route path="/nosotros">
              <Nosotros/>
          </Route>
          <Route path="/">
              <Inicio/>
          </Route>
        </Switch>

      </Router>


    </div>
  );
}

export default App;
