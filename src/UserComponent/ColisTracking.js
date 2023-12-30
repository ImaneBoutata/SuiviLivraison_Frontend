import { MDBIcon } from "mdb-react-ui-kit";
import parcel from '../images/parcel.png'

import { faCopy } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import axios from "axios";
import background from '../images/backgroundLivraison.jpeg';
function ColisTracking() {
    const [colis, setColis] = useState([]);
    useEffect(() => {


        axios.get(`http://localhost:8092/api/colis/findByUserId/1`).then((response) => {
            setColis(response.data);
            console.log(response.data)

        });
    }, []);
    const handleCopyTrackingNumber = (trackingNumber) => {
        // Create a temporary textarea element to copy the text
        const textarea = document.createElement('textarea');
        textarea.value = trackingNumber;

        // Append the textarea to the document
        document.body.appendChild(textarea);

        // Select the text in the textarea
        textarea.select();
        textarea.setSelectionRange(0, 99999); // For mobile devices

        // Copy the text to the clipboard
        document.execCommand('copy');

        // Remove the temporary textarea
        document.body.removeChild(textarea);

        // Provide feedback to the user
        alert('Tracking number copied to clipboard: ' + trackingNumber);
    };
    const imageStyles = {
        width: '100vw',
        height: '100vh',
        objectFit: 'cover',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: -1,
    };

    return (





        < div className="card d-flex align-items-center mx-auto" style={{ width: '50%', backgroundColor: 'rgba(255, 255, 255, 0.7)' }} >
            <img src={background} className='img-fluid shadow-4' style={imageStyles} alt='Background' />

            <div className="card-header">
                <h4 className="card-title mb-0">Parcels Details</h4>
            </div>
            <div className="card-body p-0">
                <p className="text-muted">View all your orders .</p>
                <div id="users">
                    <div className="row mb-2">
                        <div className="col">
                            <div>
                                <input className="search form-control" placeholder="Search" />
                            </div>
                        </div>
                        <div className="col-auto">
                            <button className="btn btn-light sort" data-sort="name">
                                Sort by state
                            </button>
                        </div>
                    </div>
                    <div data-simplebar className="mx-n3">
                        <ul className="list list-group list-group-flush mb-0">
                            <li className="list-group-item  px-0 py-0" data-id={1}>
                                <div className="d-flex">
                                    <div className="flex-grow-1">
                                        <table class="table align-middle mb-0 bg-white ">
                                            <thead class="bg-light">
                                                <tr>
                                                    <th>Tracking Number</th>
                                                    <th>Destination</th>
                                                    <th>Status</th>

                                                </tr>
                                            </thead>
                                            <tbody>
                                                {colis.map((c) => (
                                                    <tr>
                                                        <td>
                                                            <div class="d-flex align-items-center">
                                                                <img
                                                                    src={parcel}
                                                                    alt=""
                                                                    style={{ width: '45px', height: '45px' }}

                                                                    class="rounded-circle"
                                                                />
                                                                <div class="ms-3">
                                                                    <p class="fw-bold mb-1">{c.trackingNumber}  <FontAwesomeIcon
                                                                        icon={faCopy}
                                                                        style={{ cursor: 'pointer' }}
                                                                        onClick={() => handleCopyTrackingNumber('#AE3245')}
                                                                    /></p>




                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <p class="fw-normal mb-1">{c.destination}</p>

                                                        </td>
                                                        <td>
                                                            <span className={`badge ${c.status ? 'badge-success' : 'badge-danger'} rounded-pill d-inline`}>
                                                                {c.status ? 'Livré' : 'En Cours'}
                                                            </span> </td>


                                                    </tr>
                                                ))}

                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </li>
                            {/* Additional list items */}
                        </ul>
                    </div>
                </div>
            </div>
        </div >



    );
};

export default ColisTracking;
