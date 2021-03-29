import './App.css';
import Contacto from './components/Contacto';
import Personaje from './components/Personaje';
import Inicio from './components/Inicio';
import Descripcion from './components/Descripcion';

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
        <Link to="/personaje" className="btn btn-dark">
          Personajes
          </Link>

        {/* <Link to="/" className="btn btn-dark">
              Inicio
          </Link> */}

        <Link to="/contacto" className="btn btn-dark">
          Contacto
          </Link>


        <Switch>
          <Route path="/contacto">
            <Contacto />
          </Route>
          <Route path="/personaje/:id">
            <Descripcion />

          </Route>
          <Route path="/personaje">
            <Personaje />
          </Route>
          <Route path="/">
            <Inicio />
          </Route>
        </Switch>

      </Router>


    </div>
  );
}

export default App;
