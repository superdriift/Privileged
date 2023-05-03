import React from "react";
import { Link } from "react-router-dom";
import { pluralize } from "../../utils/helpers"
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image'



function ProductItem(item) {
  const [state, dispatch] = useStoreContext();

  const {
    image,
    name,
    _id,
    price,
    quantity,
    description,
  } = item;

  const { cart } = state

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === _id)
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: _id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      });
      idbPromise('cart', 'put', {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...item, purchaseQuantity: 1 }
      });
      idbPromise('cart', 'put', { ...item, purchaseQuantity: 1 });
    }
  }

  const handleSelect = (eventKey) => alert(`selected ${eventKey}`);

  console.log(name)

  // style={{ display: "flex", flexFlow: "row-wrap", justifyContent: "space-around" }}

  return (
    <>
          {/* <div style={{ display:"flexbox"}}> */}
          <div className="cards" style={{ marginBottom:"1pt", marginRight:"1pt", marginLeft:"1pt"}}>
          <Card style={{ border: "none",  width:"498px", maxWidth:"", height:"auto" }}>
            <Card.Img variant="top" src={`/images/${image}`} />
            <Card.Body className="cards">
              <Card.Title style={{ fontFamily: "Inknut Antiqua", fontWeight: 525, fontSize:"20pt" }}> {name} </Card.Title>
              <p style={{ fontSize:"1pt" }}> </p>
              <Card.Text style={{ fontFamily: "Proxima Nova", fontWeight: 525, fontSize:"15pt" }}>
                {description}
              </Card.Text>
              <Card.Text style={{ fontFamily: "Inknut Antiqua", fontWeight: 525, fontSize:"18pt" }}>
                ${price}
              </Card.Text>
            </Card.Body>
            <Container className="cards">
              <Row className="cards">
              <Stack gap={2} >
                <Button size="lg" className="m-auto" onClick={addToCart} style={{ width:"18rem", display:"flex", justifyContent:"center", fontFamily:"Inknut Antiqua" }} variant="outline-success" > Add To Cart </Button>
                <Button size="lg" className="m-auto" onClick={addToCart} style={{ width:"15rem", display:"flex", justifyContent:"center", fontFamily:"Inknut Antiqua", textDecoration: "none" }} href={`/products/${_id}`} variant="outline-dark"> View </Button>
             </Stack>
              </Row>
              <br/>
            </Container>
            {/* <Row className="cards" /> <br /> </Row> */}
          </Card>
      </div>


      {/* <div className="card px-1 py-1">
        <Link to={`/products/${_id}`}>
          <img
            alt={name}
            src={`/images/${image}`}
          />
          <p>{name}</p>
        </Link>
        <div>
          <div>{quantity} {pluralize("item", quantity)} in stock</div>
          <span>${price}</span>
        </div>
        <button onClick={addToCart}>Add to cart</button>
      </div> */}
    </>
  );
}

export default ProductItem;
