import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import auth from "../../utils/auth";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';
// import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
import { FaInstagram } from 'react-icons/fa';


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
function Footer() {

  // function Footer() {
    // if (Auth.loggedIn()) {
    //   return (
    //     <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{ paddingLeft: "20px", paddingRight: "20px" }}>
    //       <Container fluid>
    //         {/* <Navbar.Brand href="/"> Privileged Pieces </Navbar.Brand> */}
    //         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    //         <Navbar.Collapse id="responsive-navbar-nav">
    //           <Nav className="m-auto">
    //             <Nav.Link href="https://instagram.com/privileged_pieces?igshid=MDM4ZDc5MmU=" target="_blank" rel="noopener noreferrer"> Instagram Link </Nav.Link>
    //             <Nav.Link href="/#otherlink"> Facebook Link </Nav.Link>
    //           </Nav>
    //         </Navbar.Collapse>
    //       </Container>
    //     </Navbar>
    //   )
    // } else {
      return (

          <Navbar className="footer" collapseOnSelect expand="lg" bg="" style={{ paddingLeft: "20px", paddingRight: "20px" }}>
            <Container fluid>
              {/* <Navbar.Brand href="/"> Privileged Pieces </Navbar.Brand> */}
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="m-auto">
                  <Nav.Link href="https://instagram.com/privileged_pieces" target="_blank" rel="noopener noreferrer">
                    <FaInstagram style={{ color:"white", height:"36pt", width:"36pt"}} />
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>

      )
    }
  // }

  // return (
  //   Footer()
  // )

export default Footer;
