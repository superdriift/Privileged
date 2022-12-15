import React, { useEffect } from 'react';
import ProductItem from '../ProductItem';
import { useStoreContext } from '../../utils/GlobalState';
import { UPDATE_PRODUCTS } from '../../utils/actions';
import { useQuery } from '@apollo/client';
import { QUERY_PRODUCTS } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import spinner from '../../assets/spinner.gif';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';






function ProductList() {
  const [state, dispatch] = useStoreContext();

  const { currentCategory } = state;

  const { loading, data } = useQuery(QUERY_PRODUCTS);

  useEffect(() => {
    if (data) {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products,
      });
      data.products.forEach((product) => {
        idbPromise('products', 'put', product);
      });
    } else if (!loading) {
      idbPromise('products', 'get').then((products) => {
        dispatch({
          type: UPDATE_PRODUCTS,
          products: products,
        });
      });
    }
  }, [data, loading, dispatch]);

  function filterProducts() {
    if (!currentCategory) {
      return state.products;
    }

    return state.products.filter(
      (product) => product.category._id === currentCategory
    );
  }


  const handleSelect = (eventKey) => alert(`selected ${eventKey}`);

  return (

    //     <div className="flex-row">
    //       {filterProducts().map((product) => (
    //         <ProductItem
    //           key={product._id}
    //           _id={product._id}
    //           image={product.image}
    //           name={product.name}
    //           price={product.price}
    //           quantity={product.quantity}
    //         />
    //       ))}


    <div>
      <br />
      <br/>
      <h2 style={{ display: "flex", justifyContent: "center" }}>Pieces</h2>
      <br />
      <br/>
      {/* <br/> */}
      <br/>




      <Navbar sticky='top' bg={'white'} expand="lg" id='navbar' style={{ paddingLeft:"20px", paddingRight:"20px" }}>
      <Container fluid>
        <Navbar.Brand href="#navbar"> All Pieces </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1"> Necklace </Nav.Link>
            <Nav.Link href="#action2"> Rings </Nav.Link>
            <NavDropdown title="Categories" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3"> Other </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Rings 
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Other
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Other 
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-secondary">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
      <br/>
    </Navbar>
    <br/>
    <br/>
    <br/>

      {state.products.length ? (
        <div className="flex-row">
          {filterProducts().map((product) => (
            <ProductItem
              key={product._id}
              _id={product._id}
              image={product.image}
              name={product.name}
              price={product.price}
              quantity={product.quantity}
              description={product.description}
            />
          ))}

        </div>
      ) : (
        <h3>No products yet, check back soon!</h3>
      )}
      {loading ? <img src={spinner} alt="loading" /> : null}
    </ div>






    // <div className="my-2">
    //   <h2>Our Products:</h2>
    // {state.products.length ? (
    //   <div className="flex-row">
    //     {filterProducts().map((product) => (
    //       <ProductItem
    //         key={product._id}
    //         _id={product._id}
    //         image={product.image}
    //         name={product.name}
    //         price={product.price}
    //         quantity={product.quantity}
    //       />
    //     ))}
    //   </div>
    // ) : (
    //   <h3>You haven't added any products yet!</h3>
    // )}
    //   {loading ? <img src={spinner} alt="loading" /> : null}
    // </div>
  );
}

export default ProductList;
