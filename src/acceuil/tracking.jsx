import React, {useEffect, useState} from 'react';
import {
    MDBBtn, MDBCard, MDBCardBody, MDBCardText, MDBCardTitle, MDBCollapse,
    MDBContainer, MDBDropdown, MDBDropdownItem, MDBDropdownMenu, MDBDropdownToggle, MDBIcon, MDBInput,
    MDBNavbar,
    MDBNavbarBrand, MDBNavbarItem, MDBNavbarLink, MDBNavbarNav, MDBNavbarToggler, MDBTable, MDBTableBody, MDBTableHead
} from 'mdb-react-ui-kit';
import background from '../images/backgroundLivraison.jpeg';
import '../acceuil/tracking.css';
import axios from "axios";


function Tracking() {

    const imageStyles = {
        width: '100vw',
        height: '100vh',
        objectFit: 'cover',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: -1,
    };
    useEffect(() => {
        fetchList();
    }, []);

    const [value, setValue] = useState('');

    const [track, setTrack] = useState([]);
    const fetchList = () => {
        axios
            .get("http://localhost:8092/api/colis/findByTrackingNumber/G3245")
            .then((response) => {
                setTrack(response.data);
                console.log(response.data);
                console.log(track);
            })
            .catch((error) => {
                console.log(error);
            });
    };



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

            <img src={background} className='img-fluid shadow-4' style={imageStyles} alt='Background' />

            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', width: '60%', minHeigh: '30rem' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <MDBInput
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        label='Entrer la réference de votre colis'
                        id='controlledValue'
                        type='text'
                        style={{  backgroundColor: 'rgba(255, 255, 255, 0.9)', border: '1px solid #fff' }}
                    />
                    <MDBBtn color="orange" style={{ backgroundColor: '#FF8300' }}>Suivre</MDBBtn>
                </div>
                <MDBInput
                    value={value}
                    label='Le numero de suivi est : '
                    id='controlledValue'
                    type='text'
                    disabled={true}
                    style={{ color: '#fff', backgroundColor: 'rgba(255, 255, 255, 0.9)', border: '1px solid #fff' ,marginTop: '20px'}}
                />

                <div style={{ height: '350px', overflowY: 'auto' }}>
                    <MDBContainer className="py-5" style={{ textAlign: 'left', marginTop: '0.5%', backgroundColor: 'rgba(255, 255, 255, 0.9)', paddingLeft: '5%' }}>
                        {track.map((item) => (
                        <ul className="timeline">
                                <li  className="timeline-item mb-5">
                                    <h5 className="fw-bold" style={{ color: '#FF8300', textAlign: 'left' }}>{item.destination}</h5>
                                    <p className="text-muted mb-2 fw-bold">{item.trackingNumber}</p>
                                    <p className="text-muted"></p>
                                </li>
                        </ul>
                        ))}
                    </MDBContainer>
                </div>
                </div>



        </div>
    );
}

export default Tracking;
