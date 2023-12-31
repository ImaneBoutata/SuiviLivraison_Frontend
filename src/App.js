import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import {
  MDBBtn,
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarNav,
} from 'mdb-react-ui-kit';

import Acceuil from './acceuil/acceuil';
import Register from './register/Register';
import Login from './signin/Login';
import ColisTracking from './UserComponent/ColisTracking';
import Tracking from "./acceuil/tracking";

function App() {
  const [authenticatedUser, setAuthenticatedUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem('localuser');
    if (storedUser) {
      setAuthenticatedUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('localuser');
    setAuthenticatedUser(null);
    navigate('/');
  };

  return (
    <div className="Acceuil">
      <MDBNavbar dark bgColor="dark">
        <MDBNavbarNav className="mr-auto">
          <MDBContainer fluid className="d-flex align-items-center">
            <Link to="/" className="dropdown-link">
              <MDBNavbarBrand>Delivery Track</MDBNavbarBrand>
            </Link>
            {authenticatedUser ? (
              <>
                <Link to={`/parcel`} className="dropdown-link">
                  <MDBNavbarItem>
                    <MDBNavbarLink>My Parcels</MDBNavbarLink>
                  </MDBNavbarItem>
                </Link>
                <div className="d-flex gap-3 ms-auto">
                  <span className="text-white">Hello, {authenticatedUser.nom}</span>
                  <MDBBtn color="dark" onClick={handleLogout} style={{ backgroundColor: 'transparent', border: '1px solid #FF8300' }}>
                    Logout
                  </MDBBtn>
                </div>
              </>
            ) : (
              <div className="d-flex gap-3 ms-auto">
                <Link to="/login" className="dropdown-link">
                  <MDBBtn color="dark" style={{ backgroundColor: 'transparent', border: '1px solid #FF8300' }}>
                    Sign In
                  </MDBBtn>
                </Link>
                <Link to="/register" className="dropdown-link">
                  <MDBBtn color="orange" style={{ backgroundColor: '#FF8300' }}>
                    Sign Up
                  </MDBBtn>
                </Link>
              </div>
            )}
          </MDBContainer>
        </MDBNavbarNav>
      </MDBNavbar>

      <Routes>
        <Route path="/" element={<Tracking />} />
        <Route path="/parcel" element={<ColisTracking />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
