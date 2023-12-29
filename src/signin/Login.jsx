import React from 'react';
import image from '../images/signin-image.jpg';
// Create a functional component for the signup form
const Login = () => {
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
              <a href="#" className="signup-image-link">Create an account</a>
            </div>
            <div className="signin-form">
              <h2 className="form-title">Sign in</h2>
              <form method="POST" className="register-form" id="login-form">
                <div className="form-group">
                  <label htmlFor="your_name"><i className="zmdi zmdi-account material-icons-name" /></label>
                  <input type="text" name="your_name" id="your_name" placeholder="Your Name" />
                </div>
                <div className="form-group">
                  <label htmlFor="your_pass"><i className="zmdi zmdi-lock" /></label>
                  <input type="password" name="your_pass" id="your_pass" placeholder="Password" />
                </div>
                <div className="form-group">
                  <input type="checkbox" name="remember-me" id="remember-me" className="agree-term" />
                  <label htmlFor="remember-me" className="label-agree-term"><span><span /></span>Remember me</label>
                </div>
                <div className="form-group form-button" style={{color: '#FF8300'}}>
                  <input type="submit" name="signin" id="signin" className="form-submit" defaultValue="Log in" style={{backgroundColor: '#FF8300'}} />
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
