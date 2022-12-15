import React from "react";
import { Link } from "react-router-dom";
import { pluralize } from "../../utils/helpers"
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';



function ProductItem(item) {
  const [state, dispatch] = useStoreContext();

  const {
    image,
    name,
    _id,
    price,
    quantity,
    description
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

  // style={{ display: "flex", flexFlow: "row-wrap", justifyContent: "space-around" }}

  return (
    <>
      <div >
          <Card style={{ width: "18rem", paddingTop:"20px", margin:"5px, 10px", border: "none", background:"lightgrey" }}>
            <Card.Img variant="top" src={`/images/${image}`} />
            <Card.Body>
              <Card.Title> {name} </Card.Title>
              <Card.Text style={{ fontStyle: "italic" }}>
                {description}
              </Card.Text>
              <Card.Text style={{ fontStyle: "bold" }}>
                ${price}
              </Card.Text>
            </Card.Body>
            <Container>
              <Row style={{ display: "flex", flexFlow: "row-wrap", justifyContent: "space-around" }}>
                <Button onClick={addToCart} variant="light" style={{ marginBottom:"5px"}}> Add To Cart </Button>
                <Button href={`/products/${_id}`} variant="light"> View </Button>
              </Row>
            </Container>
            <Row> <br /> </Row>
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
