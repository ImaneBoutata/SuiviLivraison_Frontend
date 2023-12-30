import logo from './logo.svg';
import './App.css';
import Acceuil from "./acceuil/acceuil";
import Register from './register/Register';
import Login from './signin/Login';
import ColisTracking from './UserComponent/ColisTracking';
import Navbar from './Navbar/Navbar';
import { Link, Route, Routes } from 'react-router-dom';
import { MDBBtn, MDBContainer, MDBNavbar, MDBNavbarBrand, MDBNavbarItem, MDBNavbarLink, MDBNavbarNav } from "mdb-react-ui-kit";


function App() {
  return (

    <div className="Acceuil">
      <MDBNavbar dark bgColor='dark'>
        <MDBNavbarNav className="mr-auto">
          <MDBContainer fluid className="d-flex align-items-center">
            <Link to="/" className="dropdown-link">
              <MDBNavbarBrand >Delivery Track</MDBNavbarBrand>
            </Link>
            <Link to="/parcel" className="dropdown-link">
              <MDBNavbarItem>
                <MDBNavbarLink >My Parcels</MDBNavbarLink>
              </MDBNavbarItem>
            </Link>
            <div className="d-flex gap-3 ms-auto"> {/* Using ms-auto to push buttons to the right */}
              <MDBBtn color="dark" style={{ backgroundColor: "transparent", border: '1px solid #FF8300' }}>Sign In</MDBBtn>
              <MDBBtn color="orange" style={{ backgroundColor: '#FF8300' }}>Sign Up</MDBBtn>
            </div>
          </MDBContainer>
        </MDBNavbarNav>
      </MDBNavbar>

      <br />
      <br />
      <Routes>
        <Route path="/" element={<Acceuil />} />

        <Route path="/parcel" element={<ColisTracking />} />
        <Route path="/register" element={<Register />} />
      </Routes>

    </div>
  );
}

export default App;
