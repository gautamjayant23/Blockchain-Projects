import Header from './components/Header';
import Main from './components/Main';
import Basket from './components/Basket';
import data from './data';
import { useState } from 'react';
import { Row, Col, Container } from 'reactstrap';

function App() {
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  return (
      <Container>
      <Header countCartItems={cartItems.length}></Header>
      <Row>
        <div className='col-lg-8 col-md-8 col-sm-12'>
            <Main products={products} onAdd={onAdd}></Main>
        </div>
        <div className='col-lg-4 col-md-4 col-sm-12'>
          <Basket
            cartItems={cartItems}
            onAdd={onAdd}
            onRemove={onRemove} />
        </div>
      </Row>
      </Container>
  );
}

export default App;