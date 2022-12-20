import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { useStoreContext } from '../../utils/GlobalState';
import {
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
} from '../../utils/actions';
import { QUERY_CATEGORIES } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import ProductItem from '../ProductItem';
import { UPDATE_PRODUCTS } from '../../utils/actions';
import { QUERY_PRODUCTS } from '../../utils/queries';
import spinner from '../../assets/spinner.gif';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

function CategoryMenu() {
  const [state, dispatch] = useStoreContext();

  const { currentCategory } = state;

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

{/* <div>
  <br />
  <br/>
  <h2 style={{ display: "flex", justifyContent: "center" }}>Pieces</h2>
  <br />
  <br/>
  {/* <br/> */}
//   <br/>

//   <Navbar sticky='top' bg={'white'} expand="lg" id='navbar' style={{ paddingLeft:"20px", paddingRight:"20px" }}>
//   <Container fluid>
//     <Navbar.Brand href="#navbar"> All Pieces </Navbar.Brand>
//     <Navbar.Toggle aria-controls="navbarScroll" />
//     <Navbar.Collapse id="navbarScroll">
//       <Nav
//         className="me-auto my-2 my-lg-0"
//         style={{ maxHeight: '100px' }}
//         navbarScroll
//       >
//         <Nav.Link href="#action1"> Necklace </Nav.Link>
//         <Nav.Link href="#action2"> Rings </Nav.Link>
//         <NavDropdown title="Categories" id="navbarScrollingDropdown">
//           <NavDropdown.Item href="#action3"> Other </NavDropdown.Item>
//           <NavDropdown.Item href="#action4">
//             Rings 
//           </NavDropdown.Item>
//           <NavDropdown.Divider />
//           <NavDropdown.Item href="#action5">
//             Other
//           </NavDropdown.Item>
//         </NavDropdown>
//         <Nav.Link href="#" disabled>
//           Other 
//         </Nav.Link>
//       </Nav>
//       <Form className="d-flex">
//         <Form.Control
//           type="search"
//           placeholder="**Icebox**"
//           className="me-2"
//           aria-label="Search"
//         />
//         <Button variant="outline-secondary">Search</Button>
//       </Form>
//     </Navbar.Collapse>
//   </Container>
//   <br/>
// </Navbar>
// <br/>
// <br/>
// <br/>

//   {state.products.length ? (
//     <div className="flex-row">
//       {filterProducts().map((product) => (
//         <ProductItem
//           key={product._id}
//           _id={product._id}
//           image={product.image}
//           name={product.name}
//           price={product.price}
//           quantity={product.quantity}
//           description={product.description}
//         />
//       ))}

//     </div>
//   ) : (
//     <h3>No products yet, check back soon!</h3>
//   )}
//   {loading ? <img src={spinner} alt="loading" /> : null}
// </ div> */}






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














      // {/* CHOOSE A CATEGORY DIV */}
      // {/* <h2>Choose a Category:</h2>
      // {categories.map((item) => (
      //   <button
      //     key={item._id}
      //     onClick={() => {
      //       handleClick(item._id);
      //     }}
      //   >
      //     {item.name}
      //   </button>
      // ))} */}
  )
}

export default CategoryMenu;
