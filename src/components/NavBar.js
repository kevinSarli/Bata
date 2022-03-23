import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/NavBar";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartWidget from "./CartWidget";
import { BsPersonCircle,BsFillHeartFill,BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";


export const NavBar = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand ><Link to="/">Bata</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link ><Link to="productos">Productos</Link></Nav.Link>
              <NavDropdown title="Categorias" id="collasible-nav-dropdown">
                <NavDropdown.Item >
                <Link to="categoria/corseteria">
                  corseteria
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item >
                  <Link to="categoria/pijama">
                  pijamas
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item >
                <Link to="categoria/traje de baño">
                  trajedebaño
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                <Link to="categoria4">
                  cat 4
                  </Link> 
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link ><BsSearch/></Nav.Link>
              <Nav.Link eventKey={2} >
                <Link to="perfil"><BsPersonCircle/></Link>
              </Nav.Link>
              <Nav.Link eventKey={2} >
                <Link to="favoritos"><BsFillHeartFill/></Link>
              </Nav.Link>
              <Nav.Link eventKey={3} >
                <Link to="Cart">
                <CartWidget/>
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};


