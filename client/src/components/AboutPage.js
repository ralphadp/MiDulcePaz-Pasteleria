
import { useState, useEffect } from 'react';
import { API_INFO } from '../constants';


import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


export function AboutPage() {

  const [information, setInformation] = useState({});

   useEffect(() => {
      fetch(API_INFO)
        .then(response => response.text())
        .then(data => setInformation(JSON.parse(data)))
        .catch(error => console.error('Error fetching Info about us:', error));
    }, []);

  return (
    <div className="App">
      <div className="container-fluid py-4">
        {/* Header Section */}
        <div className="row mb-4">
          <div className="col-12">
            <p>Acerca de ...</p>
            <input type="hidden" value="{process.env.REACT_APP_API_SERVER_HOST}"/>
            <input type="hidden" value="{process.env.REACT_APP_API_SERVER_PORT}"/>
            <p><div class="text-primary">Nosotros somos: </div>{information.empresa}</p>
            <p><div class="text-primary">Direccion: </div>{information.direccion}</p>
            <p><div class="text-primary">Telefono: </div>{information.telefono}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
