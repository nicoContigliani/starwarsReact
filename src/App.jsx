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
    <div >
      <h1 className="nat">StarWars</h1>
<br/>
      <Router>
        <div className="nat">


         <Link to="/" className="btn btn-dark">
              Inicio
          </Link> 
        <Link to="/personaje" className="btn btn-dark">
          Personajes
          </Link>


        <Link to="/contacto" className="btn btn-dark">
          Contacto
          </Link>
        </div>


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
