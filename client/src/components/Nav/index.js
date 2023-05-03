import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import auth from "../../utils/auth";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../images/translogo.png'
import Image from 'react-bootstrap/Image'


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
        // <div style={{ backgroundColor: "black" }}>
          <Navbar className="nav" collapseOnSelect expand="lg" style={{ paddingLeft: "20px", paddingRight: "20px" }}>
            <Container fluid >
              <Navbar.Brand href="/" style={{ fontSize: "24pt", fontFamily: "Inknut Antiqua" }}> <img src={logo}/> </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav sticky="top" className="me-auto">
                  <Nav.Link href="/products" style={{ fontSize: "20pt", color:"#f0f0f0", fontFamily: "Inknut Antiqua" }} > Privileged Pieces </Nav.Link>
                  <Nav.Link href="/about" style={{ fontSize: "20pt", color:"#f0f0f0", fontFamily: "Inknut Antiqua" }} > About Us </Nav.Link>

                  {/* <NavDropdown title ="About Us" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1" style={{  fontFamily: "Inknut Antiqua" }}> Our Story </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2" style={{  fontFamily: "Inknut Antiqua" }}> Our Jewelry </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/contact">
                    Contact Us
                  </NavDropdown.Item>
                </NavDropdown> */}
                </Nav>
                <Nav>
                  {/* <Nav.Link href="/profile/:id">Profile</Nav.Link>
                <Nav.Link eventKey={2} href="/cart"> Shopping Cart </Nav.Link>
                <Nav.Link eventKey={3} href="/wishlist"> Wishlist </Nav.Link> */}
                  {/* <Nav.Link eventkey={4} href="#useridwishlist" style={{ fontSize:"16pt", fontFamily: "Inknut Antiqua" }}>  Wishlist </Nav.Link> */}
                  <NavDropdown style={{ fontSize: "20pt", fontFamily: "Inknut Antiqua" }} title="Account" id="collasible-nav-dropdown">
                    <NavDropdown.Item style={{ fontSize: "14pt", color:"#f0f0f0", fontFamily: "Inknut Antiqua" }} href="/profile"> Profile  </NavDropdown.Item>
                    <NavDropdown.Item style={{ fontSize: "14pt", color:"#f0f0f0", fontFamily: "Inknut Antiqua" }} href="/orderhistory"> Orders </NavDropdown.Item>
                    {/* <NavDropdown.Item style={{ fontSize: "14pt", fontFamily: "Inknut Antiqua" }} href="/wishlist"> Wishlist </NavDropdown.Item> */}
                    <NavDropdown.Divider />
                    <NavDropdown.Item eventKey={5} href="/" style={{ fontSize: "14pt", color:"#f0f0f0", fontFamily: "Inknut Antiqua" }} onClick={() => Auth.logout()}> Logout </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="/contact" style={{ fontSize: "20pt", color:"#f0f0f0", fontFamily: "Inknut Antiqua" }}> Contact Us </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        // </div>
      )
    } else {
      return (
        <Navbar className="nav" collapseOnSelect expand="lg" style={{ paddingLeft: "20px", paddingRight: "20px" }}>
          <Container fluid>
            <Navbar.Brand href="/"> <img src={logo} style={{ maxHeight:"50px", width:"auto"}} /> </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                {/* <Nav.Link href="/" style={{ fontSize: "16pt", fontFamily: "Inknut Antiqua" }} > Home </Nav.Link> */}
                <Nav.Link href="/products" style={{ fontSize: "20pt", color:"#f0f0f0", fontFamily: "Inknut Antiqua" }} > Privileged Pieces </Nav.Link>
                <Nav.Link href="/about" style={{ fontSize: "20pt", color:"#f0f0f0", fontFamily: "Inknut Antiqua" }} > About Us </Nav.Link>
                {/* <NavDropdown title="About Us" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1"> Our Story </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                Our Jewelry
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Contact Us
                </NavDropdown.Item>
              </NavDropdown> */}
              </Nav>
              <Nav>
                <Nav.Link href="/login" style={{ fontSize: "20pt", color:"#f0f0f0", fontFamily: "Inknut Antiqua" }}> Login </Nav.Link>
                <Nav.Link eventKey={2} href="/signup" style={{ fontSize: "20pt", color:"#f0f0f0", fontFamily: "Inknut Antiqua" }}> Sign Up </Nav.Link>
                <Nav.Link href="/contact" style={{ fontSize: "20pt", color:"#f0f0f0", fontFamily: "Inknut Antiqua" }} > Contact Us </Nav.Link>
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
