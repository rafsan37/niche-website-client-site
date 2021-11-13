import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Authprovider from './Contexts/Authprovider';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Signup from './Pages/Login/Signup/Signup';
import Products from './Pages/Home/Products/Products';
import PrivateRoute from './Pages/Login/PrivateRoute/privateRoute';
import Purchase from './Pages/Login/Purchase/Purchase';
import AddProduct from './Pages/Login/AddProduct/AddProduct';
import Dashboard from './Dashboard/Dashboard';
import ManageAllOrders from './Pages/Login/ManageAllOrders/ManageAllOrders';
import MyOrder from './Pages/Login/MyOrder/MyOrder';
import Reviews from './Reviews/Reviews';


function App() {
  return (
    <div className="App">
      
     <Authprovider>
     <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/purchase/:serviceId">
                <Purchase></Purchase>
             </PrivateRoute>
          <Route path="/explore">
            <Products></Products>
          </Route>
          <Route path="/addproduct">
            <AddProduct></AddProduct>
          </Route>
          <Route path="/signup">
            <Signup></Signup>
          </Route>
          <Route path="/dashboard">
            <Dashboard></Dashboard>
          </Route>
          <Route path="/manageallorders">
            <ManageAllOrders></ManageAllOrders>
          </Route>
          <Route path="/myorder">
            <MyOrder></MyOrder>
          </Route>
          <Route path="/review">
            <Reviews></Reviews>
          </Route>
        </Switch>
      </Router>
     </Authprovider>
    </div>
  );
}

export default App;
