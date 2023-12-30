import logo from './logo.svg';
import './App.css';
import Acceuil from "./acceuil/acceuil";
import Register from './register/Register';
import Login from './signin/Login';
import ColisTracking from './UserComponent/ColisTracking';
import Navbar from './Navbar/Navbar';
import Tracking from "./acceuil/tracking";
import { Link, Route, Routes } from 'react-router-dom';
import { MDBBtn, MDBContainer, MDBNavbar, MDBNavbarBrand, MDBNavbarItem, MDBNavbarLink, MDBNavbarNav } from "mdb-react-ui-kit";


function App() {
  return (
    <div className="App">

      <Navbar />
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
