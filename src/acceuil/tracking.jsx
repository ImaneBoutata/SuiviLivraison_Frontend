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
import async from "async";


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
    //useEffect(() => {
      //  fetchList();
    //}, []);

    const [value, setValue] = useState('');

    const [currentLocations, setCurrentLocations] = useState([]);
    const [destinationn, setDestinationn] = useState('');
    const [trackingNumber, setTrackingNumber] = useState('');
    const [track, setTrack] = useState('');

    const fetchList = () => {
        axios
            .get(`http://localhost:8092/api/colis/findByTrackingNumber/${trackingNumber}`)
            .then((response) => {
                setTrack(response.data);
                console.log(response.data);
                setCurrentLocations(response.data.currentLocations);
                setDestinationn(response.data.destination);
            })
            .catch((error) => {
                console.log(error);
            });
    };
     const  handleOnChange = (pageNumber) => {
        setTrackingNumber(value);
        fetchList();
        console.log(trackingNumber);
           };


    return (
        <div className="Acceuil">
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
                    <MDBBtn color="orange" style={{ backgroundColor: '#FF8300' }} onClick={handleOnChange}>Suivre</MDBBtn>
                </div>
                <MDBInput
                    value={trackingNumber}
                    label='Le numero de suivi est : '
                    id='controlledValue'
                    type='text'
                    disabled={true}
                    style={{  backgroundColor: 'rgba(255, 255, 255, 0.9)', border: '1px solid #fff' ,marginTop: '20px'}}
                />

                <div style={{ height: '350px', overflowY: 'auto' }}>
                    <MDBContainer className="py-5" style={{ textAlign: 'left', marginTop: '0.5%', backgroundColor: 'rgba(255, 255, 255, 0.9)', paddingLeft: '5%' }}>

                        <ul className="timeline">
                            {currentLocations.map((loc) => (
                                <li  className="timeline-item mb-5">
                                    <h6 className="fw-bold" style={{ color: '#FF8300', textAlign: 'left' }}>{loc.timestamp}</h6>
                                    <p className="text-muted mb-1 fw-bold" style={{ fontSize: '90%' }}>{loc.address}</p>
                                    <p className="text-muted mb-1 fw-bold" style={{ fontSize: '90%' }}>{loc.city}</p>
                                    <p className="text-muted"></p>
                                </li>
                            ))}
                        </ul>

                    </MDBContainer>
                </div>
                </div>



        </div>
    );
}

export default Tracking;
