import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/actions/cart';

const Cart = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector(state => state.cartReducer);
  const delAction = product => dispatch(removeFromCart(product));

  return (
    <div>
      {cartItems.length > 0 ? (
        cartItems.map(cart => (
          <div className ="cart-items">
            <img src={cart.image} height="110px" width="110px" />
            <p>{cart.name}</p>
            <button onClick={() => delAction(cart)}>Delete</button>
          </div>
        ))
      ) : (
        <h1>Your cart is empty</h1>
      )}
    </div>
  );
};

export default Cart;
