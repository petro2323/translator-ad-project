import {
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBIcon,
  } from 'mdb-react-ui-kit';
import UserIcon from '../images/04-Dragana-Petronijevic.jpg';
import '@fortawesome/fontawesome-free/css/all.min.css';

export const ContactPage = () => {
    return(
        <section style={{ backgroundColor: '#eee' }}>
      <MDBContainer className="py-5">

        <MDBRow>
          <MDBCol lg="3">
            <MDBCard className="mb-4 mt-5">
                <MDBCardBody className="text-center">
                    <MDBCardImage
                    src={UserIcon}
                    alt="Dragana Petronijević"
                    className="rounded-circle"
                    style={{ width: '150px' }}
                    fluid
                    />
                    
                    <div className="d-flex justify-content-center mb-5 mt-4">
                    <a href="mailto:aldra@t-com.me" className="btn btn-outline-primary">Pošaljite e-poštu</a>
                    </div>

                    <div className="d-flex justify-content-center mb-4">
                    <a href="https://www.linkedin.com/in/dragana-petronijevic-21056331" target="_blank" className="mx-2 custom-icon">
                        <MDBIcon fab icon="linkedin fa-lg" style={{ color: '#0077b5' }} />
                    </a>
                    <a href="viber://chat?number=38269507680" target="_blank" className="mx-2 custom-icon">
                        <MDBIcon fab icon="viber fa-lg" style={{ color: '#7360f2' }} />
                    </a>
                    <a href="https://wa.me/38269507680" target="_blank" className="mx-2 custom-icon">
                        <MDBIcon fab icon="whatsapp fa-lg" style={{ color: '#25D366' }} />
                    </a>
                    <a href="tel:+38269507680" target="_blank" className="mx-2 custom-icon">
                        <MDBIcon fas icon="phone fa-lg" style={{ color: '#25D366' }} />
                    </a>
                    </div>
                </MDBCardBody>
            </MDBCard>
            
          </MDBCol>
          <MDBCol lg="9">
            <MDBCard className="mb-4">
              <MDBCardBody>
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Ime i prezime</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">Dragana Petronijević</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>E-pošta</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">aldra@t-com.me</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Broj telefona</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">+382 69 507 680</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Adresa 1</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">Orjenski Bataljon 56A, Herceg Novi</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Adresa 2</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">Gavra Vukovića bb, Podgorica</MDBCardText>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>

            <MDBRow className="justify-content-center">
              <MDBCol md="6">
              <h5 className="text-center mt-4">Orjenski Bataljon 56A</h5>
                <MDBCard className="mb-4 mb-md-0">
                  <MDBCardBody className="d-flex justify-content-center">
                    <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, width: '100%', overflow: 'hidden', maxWidth: '100%' }}>
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d183.9770595453906!2d18.53094198167317!3d42.456825150113374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDLCsDI3JzI0LjMiTiAxOMKwMzEnNTIuMiJF!5e0!3m2!1sen!2s!4v1726168729002!5m2!1sen!2s"
                        width="100%"
                        height="100%"
                        style={{ border: 0, position: 'absolute', top: 0, left: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      />
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>

              <MDBCol md="6">
              <h5 className="text-center mt-4">Gavra Vukovića bb</h5>
                <MDBCard className="mb-4 mb-md-0">
                  <MDBCardBody className="d-flex justify-content-center">
                    <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, width: '100%', overflow: 'hidden', maxWidth: '100%' }}>
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d309.4274788028898!2d19.260359914047655!3d42.453550548329225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134d95006be3577b%3A0x66ba31a13bd6f9c2!2sZgrada%20TRUDBENIK!5e0!3m2!1sen!2s!4v1726223795695!5m2!1sen!2s"
                        width="100%"
                        height="100%"
                        style={{ border: 0, position: 'absolute', top: 0, left: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      />
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
    );
}