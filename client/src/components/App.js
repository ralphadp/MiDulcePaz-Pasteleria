
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GridPage } from './GridPage';
import { ProductsPage } from './ProductsPage';
import { NotFound } from './NotFound';

function App() {

  return (
    <>
    <div class="p-3 bg-primary text-nowrap text-light" >
      <h1 class="display-5 fw-bold fst-italic"><i class="bi bi-app"></i>Mi dulce paz</h1>
      <h3 class="fw-bold fst-italic">pasteles y postres</h3>
    </div>
      <BrowserRouter>
        <div className="App">
        <nav>
           | {" "}
          <Link to="/">Catalogo</Link> | {" "}
          <Link to="/Menu">Menu</Link> | {" "}
        </nav>
        <Routes>
          <Route path="/" element={<ProductsPage />} />
          <Route path="/Menu" element={<GridPage />} />
          {/* Fallback route for non-existent paths */}
          <Route path="*" element={<NotFound />} /> 
        </Routes>
        <nav>
            | {" "}
          <Link to="/">Catalogo</Link> | {" "}
          <Link to="/Menu">Menu</Link> | {" "}
        </nav>
        </div>
      </BrowserRouter>
      </>
  );
}

export default App;
