import React from 'react';
import { Row } from 'reactstrap';
import Product from './Product';

export default function Main(props) {
  const { products, onAdd } = props;
  return (
    <main>
      <h2>Products</h2>
      <Row className='block'>
        {products.map((product) => (
          <Product key={product.id} product={product} onAdd={onAdd}></Product>
        ))}
      </Row>
    </main>
  );
}