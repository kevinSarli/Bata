import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/NavBar";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartWidget from "./CartWidget";
import { BsPersonCircle,BsFillHeartFill,BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { startLogout } from "../actions/auth";
import { getAuth, onAuthStateChanged } from "firebase/auth";


export const NavBar = () => {

  const dispatch = useDispatch()
  const {name}= useSelector(state=>state.auth)
  const handleLogout = ()=>{
    dispatch(startLogout())
  }



  const [isLoggedAdmin,setIsLoggedAdmin] =useState(false)

  useEffect(()=>{

    onAuthStateChanged(getAuth(),user=>{
      if(user?.uid === "yhwuxw2gBEMMq2TalSnmcDj4ghm1"){
        setIsLoggedAdmin(true)
      }else{
        setIsLoggedAdmin(false)
      }
    })
  },[isLoggedAdmin])
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand ><Link to="/">Bata</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
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
                  traje de baño
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link ><BsSearch/></Nav.Link>
              <Nav.Link eventKey={2} >
                <Link to="auth/login"><BsPersonCircle/><spam>{name}</spam></Link>
              </Nav.Link>
              <Nav.Link eventKey={2} >
                <Link to="favoritos"><BsFillHeartFill/></Link>
              </Nav.Link>
              <Nav.Link eventKey={3} >
                <Link to="Cart">
                <CartWidget/>
                </Link>
              </Nav.Link>

              {isLoggedAdmin &&  <Nav.Link eventKey={5} >
                <Link to="admin"><BsPersonCircle/><spam>admin</spam></Link>
              </Nav.Link> }
             
              <button className="buttons__btn" onClick={handleLogout}>Salir</button>


            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};


