import React, { useEffect } from 'react';
import ProductItem from '../ProductItem';
import { useStoreContext } from '../../utils/GlobalState';
import { UPDATE_PRODUCTS } from '../../utils/actions';
import { useQuery } from '@apollo/client';
import { QUERY_PRODUCTS } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import spinner from '../../assets/spinner.gif';
// import Button from 'react-bootstrap/Button';
// import Nav from 'react-bootstrap/Nav';
// import Row from 'react-bootstrap/Row';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Navbar from 'react-bootstrap/Navbar';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import {
//   UPDATE_CATEGORIES,
//   UPDATE_CURRENT_CATEGORY,
// } from '../../utils/actions';

import Catbar from '../Catbar'





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

  // const handleSelect = (eventKey) => alert(`selected ${eventKey}`);

  return (
    <div>
      <br />
      <h2 style={{ display: "flex", fontSize: "36pt", fontFamily: "Inknut Antiqua", justifyContent: "center" }}>Pieces</h2>
      <br />
      <h4 style={{ display: "flex", justifyContent: "center", fontSize: "18pt", fontStyle: "italic", fontFamily: "Inknut Antiqua" }} > All of our jade gemstones are hand-carved and sourced from southeast Asia. </h4>
      <br />
      <br />
      <Catbar />
      <br />
      <br />
      <br />
      {/* <Container fluid>
        <Row >  */}
      {state.products.length ? (
      <div className='flex-row'>
        {filterProducts().map((product) => (
          <ProductItem
            key={product._id}
            _id={product._id}
            image={product.image}
            name={product.name}
            price={product.price}
            quantity={product.quantity}
            description={product.description}
            category={product.category}
          />
        ))}
      </div>
      ) : (
      <h3>No products yet, check back soon!</h3>
      )}
      {loading ? <img src={spinner} alt="loading" /> : null}
      {/* </Row>
      </Container> */}
      <br/>
      <br/>
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