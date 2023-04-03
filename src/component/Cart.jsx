import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const Cart = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const handleRemove = (product) => {
    dispatch({ type: 'DELITEM', payload: product });
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? <p>Your cart is empty.</p> : (
        <ul>
          {cart.map((product) => (
            <li key={product.id}>
              <div>
                <h3>{product.name}</h3>
                <p>Quantity: {product.qty}</p>
                <button onClick={() => handleRemove(product)}>Remove</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
