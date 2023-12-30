import React, { useState } from 'react';
import {
    MDBBtn, MDBCollapse,
    MDBContainer, MDBDropdown, MDBDropdownItem, MDBDropdownMenu, MDBDropdownToggle, MDBIcon, MDBInput,
    MDBNavbar,
    MDBNavbarBrand, MDBNavbarItem, MDBNavbarLink, MDBNavbarNav, MDBNavbarToggler
} from 'mdb-react-ui-kit';
import background from '../images/backgroundLivraison.jpeg';
import Navbar from '../Navbar/Navbar';
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

            <Navbar />
            <img src={background} className='img-fluid shadow-4' style={imageStyles} alt='Background' />

            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', width: '60%', minHeigh: '30rem' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <MDBInput
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        label='Entrer la réference de votre colis'
                        id='controlledValue'
                        type='text'
                        style={{ color: '#fff', backgroundColor: 'rgba(255, 255, 255, 0.9)', border: '1px solid #fff' }}
                    />
                    <MDBBtn color="orange" style={{ backgroundColor: '#FF8300' }}>Suivre</MDBBtn>

                </div>


            </div>
        </div>
    );
}

export default Acceuil;
