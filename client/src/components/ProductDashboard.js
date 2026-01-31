import { useState, useEffect } from 'react';
import { ProductCard } from './ProductCard';
import { API_PRODUCTS} from '../constants';

export function ProductDashboard() {
  const [products, setProducts] = useState([]);

   useEffect(() => {
      fetch(API_PRODUCTS)
        .then(response => response.text())
        .then(data => setProducts(JSON.parse(data)))
        .catch(error => console.error('Error fetching products:', error));
    }, []);

  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container-fluid py-4">
      {/* Header Section */}
      <div className="row mb-4">
        <div className="col-12">
          <div className="d-flex justify-content-between align-items-center">
            <h1 className="display-6 fw-bold text-primary">Nuestros postres</h1>
            <div className="d-flex gap-2">
              <input
                type="text"
                className="form-control"
                placeholder="Escriba su postre..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ width: '250px' }}
              />
              <button className="btn btn-primary">
                <i className="bi bi-search"></i> Buscar
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Alert for empty search */}
      {searchTerm && filteredProducts.length === 0 && (
        <div className="alert alert-warning" role="alert">
          <i className="bi bi-exclamation-triangle"></i> No se encontro postre "{searchTerm}"
        </div>
      )}

      {/* Products Grid */}
      <div className="row g-4">
        {filteredProducts.map(product => (
          <div key={product.id} className="col-lg-4 col-md-6 col-sm-12">
            <ProductCard product={product} />
          </div>
        ))}
      </div>

      {/* Statistics Section */}
      <div className="row mt-5">
        <div className="col-12">
          <div className="card bg-light">
            <div className="card-body">
              <div className="row text-center">
                <div className="col-md-4">
                  <h3 className="text-primary">{products.length}</h3>
                  <p className="text-muted">Total</p>
                </div>
                <div className="col-md-4">
                  <h3 className="text-success">{filteredProducts.length}</h3>
                  <p className="text-muted">Mostrados</p>
                </div>
                <div className="col-md-4">
                  <h3 className="text-info">$579.97</h3>
                  <p className="text-muted">Costo total</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDashboard;