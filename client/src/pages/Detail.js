import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/col';
import Cart from '../components/Cart';
import { useStoreContext } from '../utils/GlobalState';
import {
  REMOVE_FROM_CART,
  UPDATE_CART_QUANTITY,
  ADD_TO_CART,
  UPDATE_PRODUCTS,
} from '../utils/actions';
import { QUERY_PRODUCTS } from '../utils/queries';
import { idbPromise } from '../utils/helpers';
import spinner from '../assets/spinner.gif';

function Detail() {
  const [state, dispatch] = useStoreContext();
  const { id } = useParams();

  const [currentProduct, setCurrentProduct] = useState({});

  const { loading, data } = useQuery(QUERY_PRODUCTS);

  const { products, cart } = state;

  useEffect(() => {
    // already in global store
    if (products.length) {
      setCurrentProduct(products.find((product) => product._id === id));
    }
    // retrieved from server
    else if (data) {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products,
      });

      data.products.forEach((product) => {
        idbPromise('products', 'put', product);
      });
    }
    // get cache from idb
    else if (!loading) {
      idbPromise('products', 'get').then((indexedProducts) => {
        dispatch({
          type: UPDATE_PRODUCTS,
          products: indexedProducts,
        });
      });
    }
  }, [products, data, loading, dispatch, id]);

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === id);
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
      idbPromise('cart', 'put', {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...currentProduct, purchaseQuantity: 1 },
      });
      idbPromise('cart', 'put', { ...currentProduct, purchaseQuantity: 1 });
    }
  };

  const removeFromCart = () => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: currentProduct._id,
    });

    idbPromise('cart', 'delete', { ...currentProduct });
  };

  return (
    <>
      {currentProduct && cart ? (
        <Container fluid style={{ padding: "20px" }}>
          <Link style={{ color: "black", textDecoration: "none", fontFamily:"Proxima Nova" }} to="/products">← Products</Link>
          <br />
          <br />
          <br />
          <Row>

          </Row>
          <br />
          <Row>
            <Col>
            <br/>
            <br/>
              <div style={{ textAlign:"center" }}>
              <h1 style={{ fontFamily:"Inknut Antiqua" }}> {currentProduct.name} </h1>
              <p style={{ height:"1pt" }} />
            <p style={{ fontSize:"18pt", fontFamily:"Proxima Nova", fontStyle:"" }}>{currentProduct.description}</p>
            <br/>
                <h1 style={{ fontFamily:"Inknut Antiqua"}}>
                  <strong></strong>${currentProduct.price}{' '}
                </h1>
                <br />
                <br />
                <Button size="lg" variant="outline-success" style={{ fontFamily:"Inknut Antiqua" }} onClick={addToCart}> Add To Cart </Button>{' '}
                {/* <button style={{ size:"lg" }} onClick={addToCart}>Add to Cart</button> */}
                {/* <button
              disabled={!cart.find((p) => p._id === currentProduct._id)}
              onClick={removeFromCart}
            >
              Remove from Cart
            </button> */}
              </div>
              {/* <div >
          <img
            src={`/images/${currentProduct.image}`}
            alt={currentProduct.name}
          />
          </div> */}
            </Col>
            <Col>
            <div id='image' style={{ textAlign: "left top" }}>
                <img style={{ borderRadius: "5pt"}} className='bg-image hover-zoom'
                  src={`/images/${currentProduct.image}`}
                  alt={currentProduct.name}
                />
              </div>
            </Col>
          </Row>
          <br/>
          <br/>
          <br/>

        </Container>
      ) : null}
      {loading ? <img src={spinner} alt="loading" /> : null}
      {/* <Cart /> */}
    </>
  );
}

export default Detail;
