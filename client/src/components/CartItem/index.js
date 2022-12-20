import React from 'react';
import { useStoreContext } from "../../utils/GlobalState";
import { REMOVE_FROM_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container';

const CartItem = ({ item }) => {

  const [, dispatch] = useStoreContext();

  const removeFromCart = item => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: item._id
    });
    idbPromise('cart', 'delete', { ...item });

  };

  const onChange = (e) => {
    const value = e.target.value;
    if (value === '0') {
      dispatch({
        type: REMOVE_FROM_CART,
        _id: item._id
      });
      idbPromise('cart', 'delete', { ...item });

    } else {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: item._id,
        purchaseQuantity: parseInt(value)
      });
      idbPromise('cart', 'put', { ...item, purchaseQuantity: parseInt(value) });

    }
  }

  return (

    <Container>
      <Row>
        <Col id='photoThumb'>
          <div style={{ textAlign:"center", maxHeight:"auto", maxwidth:"10rem" }}>
            <img style={{ height:"auto", width:"auto", borderRadius:"5pt" }}
              src={`/images/${item.image}`}
              alt=""
            />
          </div>
        </Col>
        <Col id='cartInfo'>
          <div style={{ textAlign:"center",  }}>
            <div>
              <span style={{ fontFamily:"Inknut Antiqua", fontSize:"15pt", fontWeight:"500" }} >{item.name}</span>
              <br/>
              <span style={{ fontFamily:"Proxima Nova", fontWeight:"600" }} >${item.price} </span>
            </div>
            <div>
              <span style={{ fontFamily:"Inknut Antiqua", fontSize:"14pt", fontWeight:"" }} >Qty:</span>
              <input
                type="number"
                placeholder="1"
                value={item.purchaseQuantity}
                onChange={onChange}
              />
              <span style={{ fontSize:"15pt" }}
                role="img"
                aria-label="trash"
                onClick={() => removeFromCart(item)}
              >
                🗑️
              </span>
            </div>
          </div>
        </Col>
      </Row>
    </Container>

  );
}

export default CartItem;
