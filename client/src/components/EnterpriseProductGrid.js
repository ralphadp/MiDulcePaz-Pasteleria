import { API_AVAILABLE_PRODUCTS} from '../constants';

import '@progress/kendo-theme-bootstrap/dist/all.css';

import { Grid, GridColumn } from '@progress/kendo-react-grid';
import { Button } from '@progress/kendo-react-buttons';

import React, { useState, useEffect } from 'react';

export function EnterpriseProductGrid() {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    console.log("Getting available products");
    fetch(API_AVAILABLE_PRODUCTS)
      .then(response => response.text())
      .then(data => {
          setProducts(JSON.parse(data));
          console.log("Available products", data);
        })
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <div className="container mt-4">
      <div className="row mb-3">
        <div className="col">
          <h2 className="text-primary">Menu</h2>
          <p className="text-muted">Puede Elegir los que mas desee.</p>
        </div>
        <div className="col-auto">
          <Button themeColor="primary" className="me-2">
            Añadir a pedido
          </Button>
          <Button themeColor="secondary">
            Pedir
          </Button>
        </div>
      </div>
      
      <Grid data={products} style={{ height: '400px' }}>
        <GridColumn field="name" title="Nombre" />
        <GridColumn field="category" title="Categoria" />
        <GridColumn field="price" title="Precio" format="{0:c}" />
        <GridColumn field="inStock" title="Estado" />
      </Grid>
    </div>
  );
}