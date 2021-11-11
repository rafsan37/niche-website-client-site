import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Form, FormControl, InputGroup, } from 'react-bootstrap';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import "./login.css"
import logo from '../../../img/icon/logo.png'

const Login = () => {
    const {singInUsingGoogle, signInWithEmail,setUser,setError, getUserPassword, getUserEmail, error } = useAuth();
    const location = useLocation();
    const history = useHistory();

    const redirect_uri = location.state?.from || '/home';
    const handleGoogleLogin = () => {
        singInUsingGoogle()
        .then(result => {
            history.push(redirect_uri);
        });
    }
    return (



        <Container className="d-flex align-items-center justify-content-center my-5">

            <Form className="border p-5 bg-color">
                <h3 className="text-white">Welcome to <img src={logo}  className="img-3" alt="" /></h3>
                <h6 className="text-white">Please Login!</h6>
                <hr />
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1" required><FontAwesomeIcon icon={faEnvelope} ></FontAwesomeIcon></InputGroup.Text>
                    <FormControl onBlur={getUserEmail} required type="email"
                        placeholder="Enter Your Email"
                        aria-label="UserEmail"
                        aria-describedby="basic-addon1"
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1"><FontAwesomeIcon icon={faLock}></FontAwesomeIcon></InputGroup.Text>
                    <FormControl onBlur={getUserPassword} required type="password"
                        placeholder="Password"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                    />
                </InputGroup>
                <div className="text-center">
                 <Button onClick={(e)=>{
                e.preventDefault()
                signInWithEmail()
                .then(result => {
                    setUser(result.user)
                    history.push(redirect_uri);
                    setError('')
                }).catch((err) => {
                    setError(err.message)
                })
            }} type="submit" className=" ms-0 btn btn-primary login-btn btn-block w-100" variant="">Log-In</Button>
                </div>
                <div className="or-seperator"><i>or</i></div>
                <div className="text-center social-btn ">
        <button onClick={handleGoogleLogin} className=" btn btn-danger w-100"><i className="fa fa-google"></i>&nbsp; Google</button>
			
        </div>
                <div className="text-danger">
                    <p>{error}</p>
                </div>
                    <p className="text-center text-muted small">Don't have an account? <NavLink to="/signup">Sign up here!</NavLink></p>
                
            </Form>
        </Container>





//         < className="container text-center">

//             <div className="my-5">
//             <div className="login-form">
//     <form>
//         <h2 className="text-center my-3">Log in</h2>   
//         <div className="form-group">
//         	<div className="input-group my-3">
//                 <div className="input-group-prepend">
//                     <span className="input-group-text">
//                         <span className="fa fa-user py-1"></span>
//                     </span>                    
//                 </div>
//                       <input onBlur={getUserEmail} type="text" className="form-control" name="useremail" placeholder="Enter your Email" required="required"/>	
//             	</div>
//         </div>
// 		<div className="form-group">
//             <div className="input-group ">
//                 <div className="input-group-prepend">
//                     <span className="input-group-text">
//                         <i className="fa fa-lock py-1"></i>
//                     </span>                    
//                 </div>
//                 <input onBlur={getUserPassword} type="password" className="form-control" name="password" placeholder="Password" required="required"/>				
//             </div>
//         </div>        
//         <div className="form-group">
//             <button type="submit"  className="btn btn-primary login-btn btn-block">Log in</button>
//         </div>
//         <div className="clearfix">
//             <label className="float-left form-check-label"><input type="checkbox"/> Remember me</label>
//             <NavLink to="#" className="float-right">Forgot Password?</NavLink>
//         </div>
// 		<div className="or-seperator"><i>or</i></div>
//         <p className="text-center">Login with Google</p>
//         <div className="text-center social-btn">
//         <button onClick={handleGoogleLogin} className="btn btn-danger"><i className="fa fa-google"></i>&nbsp; Google</button>
			
//         </div>
//     </form>
    
// </div>
//     </div>

    );
};

export default Login;