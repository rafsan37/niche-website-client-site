import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import logo from '../../../img/icon/logo.png'
import './Header.css'

const Header = () => {
  const activeStyle = {
    fontWeight: 'bold',
    color: 'red',
    backgroundColor: 'white',
    borderRadius: '5px',

}
    const {user, logOut} = useAuth();
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home"><img src={logo} alt="" className="img-2" /></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link as={Link} to="/home" activeStyle={activeStyle}>Home</Nav.Link>
      <Nav.Link as={Link} to="/explore" activeStyle={activeStyle}>Explore</Nav.Link>
    </Nav>
    <Navbar/>
    <Navbar.Collapse className="justify-content-end">
    { user?.email?<>
        <Nav.Link as={Link} to="/dashboard" className="text-white">Dashboard</Nav.Link>
        <Navbar.Text className="text-white nav-a1">
            <a className=" nav-a me-2" href="#login">{user?.displayName}</a>
         </Navbar.Text>
        <Navbar.Text className="content">
            <img src={user?.photoURL} alt="" className="rounded-circle img-size2" />
         </Navbar.Text>
         <Button onClick={logOut} variant="dark" className="ms-1 btn text-white">LogOut</Button></>:
       <Nav.Link as={Link} to="/login" className="nav-style me-2 text-white fs-5 fw-bold">Login</Nav.Link> }   
    </Navbar.Collapse>
  </Navbar.Collapse>
  </Container>
</Navbar>
  
        </div>
    );
};

export default Header;