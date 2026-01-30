
//import { API_BASE_URL, API_STANDARD} from '../constants';

export function ProductCard({ product }) {
  return (
    <div className="card h-100 shadow-sm">
      <img
        src={product.image}
        className="card-img-top"
        alt={product.name}
        style={{ height: '300px', objectFit: 'cover' }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text text-muted flex-grow-1">
          {product.description}
        </p>
        <div className="d-flex justify-content-between align-items-center">
          <span className="h5 text-primary mb-0">${product.price}</span>
          <button className="btn btn-outline-primary">Añadir a pedido</button>
        </div>
      </div>
    </div>
  );
}

