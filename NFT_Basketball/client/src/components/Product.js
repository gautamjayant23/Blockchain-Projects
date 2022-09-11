import React from 'react';
import { Col, Button } from 'reactstrap';

export default function Product(props) {
  const { product, onAdd } = props;
  return (
    <div className="col-lg-4 col-md-6 col-sm-8" style={{marginBottom:20}}>
      <div className='img-wrapper'>
        <img src={product.image} alt={product.name} className="product-img rounded img-fluid" fluid rounded/>
      </div>
      
      <h3>{product.name}</h3>
      <div>Rs {product.price}</div>
      <div>
        <Button onClick={() => onAdd(product)} color="warning">Add To Cart</Button>
      </div>
    </div>
  );
}