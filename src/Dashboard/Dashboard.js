import React from 'react';
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import './Dashboard.css'
import {
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";
import DashboardHome from './DashboardHome/DashboardHome';
import MyOrder from '../Pages/Login/MyOrder/MyOrder';
import AddProduct from '../Pages/Login/AddProduct/AddProduct';
import ManageAllOrders from '../Pages/Login/ManageAllOrders/ManageAllOrders';
import Reviews from '../Reviews/Reviews';
import MakeAdmin from '../Pages/Login/MakeAdmin/MakeAdmin';
import Payment from '../Pages/Login/Payment/Payment';
import useAuth from '../Hooks/useAuth';
import MangeProducts from '../Pages/Login/Login/MageProducts/MangeProducts';

const Dashboard = () => {
  const {logOut, admin} = useAuth();
  let { path, url } = useRouteMatch();
    return (
        <Row>
            <Col md={3}>
            <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
  <Container className="d-flex flex-column">
  <Navbar.Brand href="#home">Dashboard</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className=" me-auto d-flex flex-column">
      <Nav.Link as = {Link} to="/home">Home</Nav.Link>
      <Nav.Link as = {Link} to={`${url}/myorder`}>My Order</Nav.Link>
      <Nav.Link as = {Link} to={`${url}/reviews`}>Add Reviews</Nav.Link>
      <Nav.Link as = {Link} to={`${url}/pay`}>payment</Nav.Link>
     {
       admin && <div>    
      <Nav.Link as = {Link} to={`${url}/addproduct`}>Add Product</Nav.Link>
      <Nav.Link as = {Link} to={`${url}/manageallorders`}>Manage Orders</Nav.Link>
      <Nav.Link as = {Link} to={`${url}/manageallproducts`}>Manage Products</Nav.Link>
      <Nav.Link as = {Link} to={`${url}/makeadmin`}>Make Admin</Nav.Link>
       </div>
     }
      <Nav.Link as = {Link} to="/home"><button className="btn btn-danger" onClick={logOut}>logOut</button></Nav.Link>
      
      
      
      
      
      
  
    </Nav>
    
  </Navbar.Collapse>
  </Container>
</Navbar>
            </Col>
            <Col md={9}>
            <Switch>
        <Route exact path={path}>
          <DashboardHome></DashboardHome>
        </Route>
        <Route path={`${path}/myorder`}>
          <MyOrder></MyOrder>
        </Route>
        <Route path={`${path}/addproduct`}>
          <AddProduct></AddProduct>
        </Route>
        <Route path={`${path}/manageallorders`}>
          <ManageAllOrders></ManageAllOrders>
        </Route>
        <Route path={`${path}/manageallproducts`}>
          <MangeProducts></MangeProducts>
        </Route>
        <Route path={`${path}/reviews`}>
          <Reviews></Reviews>
        </Route>
        <Route path={`${path}/makeadmin`}>
          <MakeAdmin></MakeAdmin>
        </Route>
        <Route path={`${path}/pay`}>
          <Payment></Payment>
        </Route>
      </Switch>
            </Col>
        </Row>
    );
};

export default Dashboard;