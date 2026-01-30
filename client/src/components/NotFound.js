import logo from '../assets/logo.svg';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';



export function NotFound() {

  return (
    <div className="App">

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Pagina no encontrada</h1>
      </header>
    </div>
  );
}

export default NotFound;
