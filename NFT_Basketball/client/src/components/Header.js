import React from 'react';

export default function Header(props) {
  return (
    <header className="block row center">
      <div className='text-center col-8'>
        <h1>NFT MARKET PLACE</h1>   
      </div>
      <div className='col-4 text-right'>
        <a href="#/cart">
          Cart{' '}
          {props.countCartItems ? (
            <button className="badge">{props.countCartItems}</button>
          ) : (
            ''
          )}
        </a>
        <span style={{marginLeft:20}}><a href="#/signin"> SignIn</a></span>
      </div>
    </header>
  );
}