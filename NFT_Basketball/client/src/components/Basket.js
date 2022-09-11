import React from 'react';
import { Container } from 'reactstrap';

export default function Basket(props) {
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = itemsPrice * 0.1;
  const shippingPrice = itemsPrice > 2000 ? 0 : 20;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;
  return (
    <aside className="row">
      <Container>
      <h2>Cart Items</h2>
      <div className='col-12 block'>
        {cartItems.length === 0 && <div>Cart is empty</div>}
        {cartItems.map((item) => (
          <div key={item.id} className="row">
            <div className="col-4">{item.name}</div>
            <div className="col-4 text-center">
              <button onClick={() => onRemove(item)} className="remove">
                -
              </button>
              <button onClick={() => onAdd(item)} className="add">
                +
              </button>
            </div>

            <div className="col-4 text-right">
              {item.qty} x Rs {item.price.toFixed(2)}
            </div>
          </div>
        ))}

        {cartItems.length !== 0 && (
          <>
            <hr></hr>
            <div className="row">
              <div className="col-6">Items Price</div>
              <div className="col-6 mr-180 text-right">Rs {itemsPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-6">Tax Price</div>
              <div className="col-6 text-right">Rs {taxPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-6">Shipping Price</div>
              <div className="col-6 text-right">
                Rs {shippingPrice.toFixed(2)}
              </div>
            </div>

            <div className="row">
              <div className="col-6">
                <strong>Total Price</strong>
              </div>
              <div className="col-6 p-60 text-right">
                <strong>Rs {totalPrice.toFixed(2)}</strong>
              </div>
            </div>
            <hr />
            <div className="row">
              <button onClick={() => alert('Implement Checkout!')}>
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
      </Container>
    </aside>
  );
}