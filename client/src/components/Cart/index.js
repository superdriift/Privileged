import React, { useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useLazyQuery } from '@apollo/client';
import { QUERY_CHECKOUT } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import CartItem from '../CartItem';
import Auth from '../../utils/auth';
import { useStoreContext } from '../../utils/GlobalState';
import { TOGGLE_CART, ADD_MULTIPLE_TO_CART } from '../../utils/actions';
import './style.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_live_51LkYc2KJ7CeSMx9kdE1kThCuGC1kof11AcLIPXhGhqmAyissI0jF8tHzI8KkTWDX6WGoiu18CkJKbsHmA4I4JUgW00queppJe0');


const Cart = () => {
  const [state, dispatch] = useStoreContext();
  const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);

  useEffect(() => {
    if (data) {
      stripePromise.then((res) => {
        res.redirectToCheckout({ sessionId: data.checkout.session });
      });
    }
  }, [data]);

  useEffect(() => {
    async function getCart() {
      const cart = await idbPromise('cart', 'get');
      dispatch({ type: ADD_MULTIPLE_TO_CART, products: [...cart] });
    }

    if (!state.cart.length) {
      getCart();
    }
  }, [state.cart.length, dispatch]);

  function toggleCart() {
    dispatch({ type: TOGGLE_CART });
  }

  function calculateTotal() {
    let sum = 0;
    state.cart.forEach((item) => {
      sum += item.price * item.purchaseQuantity;
    });
    return sum.toFixed(2);
  }

  function submitCheckout() {
    const productIds = [];

    state.cart.forEach((item) => {
      for (let i = 0; i < item.purchaseQuantity; i++) {
        productIds.push(item._id);
      }
    });

    getCheckout({
      variables: { products: productIds },
    });
  }

  if (!state.cartOpen) {
    return (
      <div className="cart-closed" style={{ textAlign: "center" }} onClick={toggleCart}>
        {/* <span role="img" aria-label="trash">
          🛒
        </span> */}
        <svg xmlns="http://www.w3.org/2000/svg" width="26pt" height="26pt" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
          <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
        </svg>
      </div>
    );
  }

  return (
    <div className="cart">
      <Button variant='outline-danger' className='close' onClick={toggleCart}>
        Close
      </Button>
      <h2 style={{ fontFamily: "Inknut Antiqua" }}>Shopping Cart</h2>
      {state.cart.length ? (
        <div>
          {state.cart.map((item) => (
            <CartItem key={item._id} item={item} />
          ))}
          <br />
          <div className="flex-row space-between">
            <span style={{ fontFamily: "Inknut Antiqua", fontWeight: "", fontSize: "14pt" }} >Total: ${calculateTotal()}</span>

            {Auth.loggedIn() ? (
              <Button variant="outline-success" style={{ textDecoration: "none" }} onClick={submitCheckout} >Checkout</Button>
            ) : (
              <>
                <Button variant="outline-success" style={{ textDecoration: "none" }} onClick={submitCheckout} >Checkout As Guest </Button>
                <Button href="/login" variant="outline-success" style={{ textDecoration: "none" }} >Login to Checkout </Button>
              </>
            )}
          </div>
        </div>
      ) : (
        <h4 style={{ fontFamily: "Inknut Antiqua" }} n>
          No items in your cart
        </h4>
      )}
    </div>
  );
};

export default Cart;
