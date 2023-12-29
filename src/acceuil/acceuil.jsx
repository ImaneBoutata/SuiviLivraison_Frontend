import React, {useState} from 'react';
import {
    MDBBtn, MDBCollapse,
    MDBContainer, MDBDropdown, MDBDropdownItem, MDBDropdownMenu, MDBDropdownToggle, MDBIcon, MDBInput,
    MDBNavbar,
    MDBNavbarBrand, MDBNavbarItem, MDBNavbarLink, MDBNavbarNav, MDBNavbarToggler
} from 'mdb-react-ui-kit';
import background from '../images/backgroundLivraison.jpeg';
function Acceuil() {
    const imageStyles = {
        width: '100vw',
        height: '100vh',
        objectFit: 'cover',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: -1,
    };

    const [value, setValue] = useState('');
    return (
        <div className="Acceuil">
            <MDBNavbar dark bgColor='dark'>
                <MDBContainer fluid className="d-flex justify-content-between align-items-center">
                    <MDBNavbarBrand href='#'>Delivery Track</MDBNavbarBrand>
                    <div className="d-flex gap-3"> {/* Adding gap between buttons */}
                        <MDBBtn color="dark" style={{ backgroundColor: "transparent", border: '1px solid #FF8300' }}>Sign In</MDBBtn>
                        <MDBBtn color="orange" style={{ backgroundColor: '#FF8300' }}>Sign Up</MDBBtn>

                    </div>
                </MDBContainer>
            </MDBNavbar>

            <img src={background} className='img-fluid shadow-4' style={imageStyles} alt='...' />
            <MDBInput
                value={value}
                onChange={(e) => setValue(e.target.value)}
                label='Controlled value'
                id='controlledValue'
                type='text'
            />
        </div>
    );
}

export default Acceuil;
