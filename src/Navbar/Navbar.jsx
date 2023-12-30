import { MDBBtn, MDBContainer, MDBNavbar, MDBNavbarBrand, MDBNavbarItem, MDBNavbarLink, MDBNavbarNav } from "mdb-react-ui-kit";

function Navbar() {
    return (
        <div className="Acceuil">
            <MDBNavbar dark bgColor='dark'>
                <MDBNavbarNav className="mr-auto">
                    <MDBContainer fluid className="d-flex align-items-center">
                        <MDBNavbarBrand href='#'>Delivery Track</MDBNavbarBrand>

                        <MDBNavbarItem>
                            <MDBNavbarLink to="/parcel">My Parcels</MDBNavbarLink>
                        </MDBNavbarItem>

                        <div className="d-flex gap-3 ms-auto"> {/* Using ms-auto to push buttons to the right */}
                            <MDBBtn color="dark" style={{ backgroundColor: "transparent", border: '1px solid #FF8300' }}>Sign In</MDBBtn>
                            <MDBBtn color="orange" style={{ backgroundColor: '#FF8300' }}>Sign Up</MDBBtn>
                        </div>
                    </MDBContainer>
                </MDBNavbarNav>
            </MDBNavbar>
        </div>
    );
}

export default Navbar;
