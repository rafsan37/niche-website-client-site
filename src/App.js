import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Authprovider from './Contexts/Authprovider';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import Signup from './Pages/Login/Signup/Signup';
import Products from './Pages/Home/Products/Products';
import PrivateRoute from './Pages/Login/PrivateRoute/privateRoute';
import Purchase from './Pages/Login/Purchase/Purchase';


function App() {
  return (
    <div className="App">
      
     <Authprovider>
     <Router>
       <Header></Header>
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
          <PrivateRoute path="/details/:serviceId">
                <Purchase></Purchase>
             </PrivateRoute>
          <Route path="/explore">
            <Products></Products>
          </Route>
          <Route path="/signup">
            <Signup></Signup>
          </Route>
        </Switch>
      </Router>
      <Footer></Footer>
     </Authprovider>
    </div>
  );
}

export default App;
