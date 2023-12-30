import React, { useEffect, useState } from 'react';
import axios from "axios";
import image from '../images/signin-image.jpg';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

// Create a functional component for the signup form
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getAllUsers();
  }, []);


  const getAllUsers = async () => {
    //get all users
    await axios.get("http://localhost:8092/api/controller/all")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };



  //handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setErrorMessage('Please enter both email and password.');
      return;
    }

    const isValidLogin = verifyLogin(email, password);

    if (isValidLogin) {
      navigate("/");
    } else {
      setErrorMessage('Incorrect email or password.');
    }
  };


  //verify login from users
  const verifyLogin = (email, password) => {
    //check if user exists and put it in localstorage
    const matchedUser = users.find((user) => user.email === email && user.password === password);
    if (matchedUser) {
      localStorage.setItem("localuser", matchedUser)
    }
    return !!matchedUser;
  };

  return (
    //onSubmit={handleSubmit}
    <div className="main">
      <section className="sign-in">
        <div className="container">
          <div className="signin-content">
            <div className="signin-image">
              <figure>
                <img src={image} alt="sign up image" />
              </figure>
              <Link to="/register" className="signup-image-link">
                Create an account
              </Link>
            </div>
            <div className="signin-form">
              <h2 className="form-title">Sign in</h2>
              {errorMessage && <p className="error" align="center">{errorMessage}</p>}
              <form method="POST" className="register-form" id="login-form" onSubmit={handleFormSubmit}>

                <div className="form-group">
                  <label htmlFor="email"><i className="zmdi zmdi-email"></i></label>
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    placeholder="Your Email" />
                </div>

                <div className="form-group">
                  <label htmlFor="your_pass"><i className="zmdi zmdi-lock" /></label>
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    name="your_pass"
                    id="your_pass"
                    placeholder="Password"
                    value={password} />
                </div>
                <div className="form-group">
                  <input type="checkbox" name="remember-me" id="remember-me" className="agree-term" />
                  <label htmlFor="remember-me" className="label-agree-term"><span><span /></span>Remember me</label>
                </div>
                <div className="form-group form-button" style={{ color: '#FF8300' }}>
                  <input type="submit"
                    name="signin"
                    id="signin"
                    className="form-submit"
                    value="log in"
                    defaultValue="Log in"
                    style={{ backgroundColor: '#FF8300' }} />
                </div>
              </form>
              <div className="social-login">
                <span className="social-label">Or login with</span>
                <ul className="socials">
                  <li><a href="#"><i className="display-flex-center zmdi zmdi-facebook" /></a></li>
                  <li><a href="#"><i className="display-flex-center zmdi zmdi-twitter" /></a></li>
                  <li><a href="#"><i className="display-flex-center zmdi zmdi-google" /></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
};



export default Login;
