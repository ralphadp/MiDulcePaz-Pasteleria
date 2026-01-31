
import { useState, useEffect } from 'react';
import { API_INFO, API_BASE_URL, APP_BASE_URLPORT} from '../constants';


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
            <p>About us</p>
            <p>{process.env.REACT_APP_API_SERVER_HOST}</p>
            <p>{API_BASE_URL}</p>
            <p>{process.env.REACT_APP_API_SERVER_PORT}</p>
            <p>{APP_BASE_URLPORT}</p>
            <p>{information.empresa}</p>
            <p>{information.direccion}</p>
            <p>{information.telefono}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
