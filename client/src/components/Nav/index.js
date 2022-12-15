import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import auth from "../../utils/auth";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



// function Nav() {

//   function showNavigation() {
//     if (Auth.loggedIn()) {
//       return (
//         <ul className="flex-row">
//           <li className="mx-1">
//             <Link to="/orderHistory">
//               Order History
//             </Link>
//           </li>
//           <li className="mx-1">
//             {/* this is not using the Link component to logout or user and then refresh the application to the start */}
//             <a href="/" onClick={() => Auth.logout()}>
//               Logout
//             </a>
//           </li>
//         </ul>
//       );
//     } else {
//       return (
//         <ul className="flex-row">
//           <li className="mx-1">
//             <Link to="/signup">
//               Signup
//             </Link>
//           </li>
//           <li className="mx-1">
//             <Link to="/login">
//               Login
//             </Link>
//           </li>
//         </ul>
//       );
//     }
//   }

//   return (
//     <header className="flex-row px-1">
//       <h1>
//         <Link to="/">
//           <span role="img" aria-label="shopping bag">🛍️</span>
//           -Shop-Shop
//         </Link>
//       </h1>

//       <nav>
//         {showNavigation()}
//       </nav>
//     </header>
//   );
// }
function NavTabs() {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{ paddingLeft:"20px", paddingRight:"20px" }}>
          <Container fluid>
            <Navbar.Brand href="/"> Privileged Pieces </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav sticky="top" className="me-auto">
                <Nav.Link href="/"> Home </Nav.Link>
                <Nav.Link href="/products"> Products </Nav.Link>
                <NavDropdown title="About Us" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1"> Our Story </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2"> Our Jewelry </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/contact">
                    Contact Us
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav>
                <Nav.Link href="/profile/:id">Profile</Nav.Link>
                <Nav.Link eventKey={2} href="/cart"> Shopping Cart </Nav.Link>
                <Nav.Link eventKey={3} href="/wishlist"> Wishlist </Nav.Link>
                <Nav.Link eventKey={4} href="/" onClick={() => Auth.logout()}> Logout </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      )
    } else {
      return ( 
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{ paddingLeft:"20px", paddingRight:"20px" }}>
        <Container fluid>
          <Navbar.Brand href="/"> Privileged Pieces </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/"> Home </Nav.Link>
              <Nav.Link href="/products"> Products </Nav.Link>
              <NavDropdown title="About Us" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1"> Our Story </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                Our Jewelry
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Contact Us
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="/login"> Login</Nav.Link>
              <Nav.Link eventKey={2} href="/signup"> Sign Up </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
        )
    }
  }

  return (
    showNavigation()
  )
}

export default NavTabs;
