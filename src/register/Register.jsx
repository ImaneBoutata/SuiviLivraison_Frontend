// Import React and any additional styling libraries
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import image from '../images/signin-image.jpg';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import '../register/register.css'

// Create a functional component for the signup form
const Register = () => {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    password: "",
    password2: "",
  });

  const { nom, prenom, email, password, password2 } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      console.log("Passwords do not match");
    } else {
      // console.log(formData);
      const newUser = {
        nom,
        prenom,
        email,
        password,
      };
      try {
        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };
        const body = JSON.stringify(newUser);
        await axios.post("http://localhost:8092/api/controller/save", body, config);
        //const res = 
        // console.log(res.data);
      } catch (err) {
        console.error(err.response.data);
      }
    }
  };

  return (
    //onSubmit={handleSubmit}
    <div className="main">
      <section className="signup">
        <div className="container">
          <div className="signup-content">
            <div className="signup-form">
              <h2 className="form-title">Sign up</h2>
              <form className="register-form" id="register-form" onSubmit={(e) => onSubmit(e)}>

                <div className="form-group">
                  <label htmlFor="name"><i className="zmdi zmdi-account material-icons-name"></i></label>
                  <input
                    onChange={onChange}
                    type="text"
                    name="nom"
                    value={nom}
                    id="nom"
                    placeholder="Your Name" />
                </div>

                <div className="form-group">
                  <label htmlFor="name"><i className="zmdi zmdi-account material-icons-name"></i></label>
                  <input
                    onChange={onChange}
                    type="text"
                    name="prenom"
                    value={prenom}
                    id="prenom"
                    placeholder="Your Last Name" />
                </div>

                <div className="form-group">
                  <label htmlFor="email"><i className="zmdi zmdi-email"></i></label>
                  <input
                    onChange={onChange}
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    placeholder="Your Email" />
                </div>

                <div className="form-group">
                  <label htmlFor="pass"><i className="zmdi zmdi-lock"></i></label>
                  <input
                    onChange={onChange}
                    type='password'
                    placeholder='Password'
                    name='password'
                    minLength='6'
                    value={password} />
                </div>

                <div className="form-group">
                  <label htmlFor="re-pass"><i className="zmdi zmdi-lock-outline"></i></label>
                  <input
                    onChange={onChange}
                    type='password'
                    placeholder='Confirm Password'
                    name='password2'
                    minLength='6'
                    value={password2} />
                </div>
                <div className="form-group">
                  <input type="checkbox" name="agree-term" id="agree-term" className="agree-term" />
                  <label htmlFor="agree-term" className="label-agree-term">
                    <span><span></span></span>I agree all statements in <a href="#" className="term-service">Terms of service</a>
                  </label>
                </div>


                <div className="form-group form-button" style={{ color: '#FF8300' }}>
                  <input
                    onChange={onChange}
                    type="submit"
                    name="signup"
                    id="signup"
                    className="form-submit"
                    value="Register"
                    style={{ backgroundColor: '#FF8300' }} />
                </div>
              </form>
            </div>
            <div className="signup-image">

              <figure>
                <img src={image} alt="sign up image" />
              </figure>
              <Link to="/login" className="signup-image-link">
                I am already a member
              </Link>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
}; export default Register;