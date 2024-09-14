import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import {
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardText,
    MDBCardBody
  } from 'mdb-react-ui-kit';

export const NotFoundPage = () => {
    const location = useLocation();
    
    useEffect(() => {
        console.error(`${window.location.origin}${location.pathname} 404 (Not Found)`);
      }, [location.pathname]);
    
    return (
        <section style={{ backgroundColor: '#eee', height: '75vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <MDBContainer className="py-5">
                <MDBRow className="justify-content-center align-items-center" style={{ height: '100%' }}>
                <MDBCol lg="4">
                    <MDBCard>
                    <MDBCardBody className="d-flex flex-column justify-content-center align-items-center" style={{ minHeight: '200px' }}>
                        <MDBRow className="text-center">
                        <MDBCol><h1>Greška 404</h1></MDBCol>
                        </MDBRow>
                        <MDBRow className="text-center mt-3">
                        <MDBCol>
                            <MDBCardText className="text-muted">Stranica nije pronađena</MDBCardText>
                        </MDBCol>
                        </MDBRow>
                        <MDBRow>
                            <MDBCol>
                            <div className="d-flex justify-content-center mt-4">
                                <a href="/" class="btn btn-outline-primary">Glavna stranica</a>
                            </div>
                            </MDBCol>
                        </MDBRow>
                    </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                </MDBRow>
            </MDBContainer>
        </section>
    );
}