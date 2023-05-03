import React, { useEffect } from 'react';
// import ProductItem from '../ProductItem';
import { useStoreContext } from '../../utils/GlobalState';
// import { UPDATE_PRODUCTS } from '../../utils/actions';
import { useQuery } from '@apollo/client';
// import { QUERY_PRODUCTS } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
// import spinner from '../../assets/spinner.gif';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
import {
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
} from '../../utils/actions';
import { QUERY_CATEGORIES } from '../../utils/queries';
import { isCompositeType } from 'graphql';




const Catbar = () => {
  const [state, dispatch] = useStoreContext();

  const { categories, currentCategory } = state;

  const { loading, data: categoryData } = useQuery(QUERY_CATEGORIES);

  useEffect(() => {
    if (categoryData) {
      dispatch({
        type: UPDATE_CATEGORIES,
        categories: categoryData.categories,
      });
      categoryData.categories.forEach((category) => {
        idbPromise('categories', 'put', category);
      });
    } else if (!loading) {
      idbPromise('categories', 'get').then((categories) => {
        dispatch({
          type: UPDATE_CATEGORIES,
          categories: categories,
        });
      });
    }
  }, [categoryData, loading, dispatch]);

  function filterProducts() {
    if (!currentCategory) {
      return state.products;
    }

    return state.products.filter(
      (product) => product.category._id === currentCategory
    );
  }

  const handleClick = (id) => {
    dispatch({
      type: UPDATE_CURRENT_CATEGORY,
      currentCategory: id,
    });
  };

    console.log(categories)

  return (
    <Navbar className="catbar" sticky='top' bg='' expand="lg" id='navbar' style={{ paddingLeft: "10px", paddingRight: "10px" }}>
      <Container fluid >
        {/* <Navbar.Brand href="#navbar"> All Pieces </Navbar.Brand> */}
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight:'100px' }}
            navbarScroll
          >
            <Nav.Link style={{ color:"#f0f0f0" }} onClick={() => { handleClick() }} href='#navbar'> All Pieces </Nav.Link>
            {/* <Nav.Link onClick={() => { handleClick(categories.id==='63aa9abee22b9ea748049a45') }} > Necklace </Nav.Link> */}
            {categories.map((item) => (<Nav.Link style={{ color:"#f0f0f0" }} key={item._id} onClick={() => { handleClick(item._id) }}> {item.name} </Nav.Link>
            ))}
          </Nav>
          {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              input="searchInput"
              onChange={ filterProducts }
            />
            <Button variant="outline-secondary">Search</Button>
          </Form> */}
        </Navbar.Collapse>
      </Container>
      <br />
    </Navbar>

  )
}

export default Catbar;