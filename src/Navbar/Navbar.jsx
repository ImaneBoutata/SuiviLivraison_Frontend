import { MDBBtn, MDBContainer, MDBNavbar, MDBNavbarBrand } from "mdb-react-ui-kit";

function Navbar() {

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
        </div>

    )

}
export default Navbar;