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
          <MDBCol lg="4">
            <MDBCard className="mb-4">
                <MDBCardBody className="text-center">
                    <MDBCardImage
                    src={UserIcon}
                    alt="Dragana Petronijević"
                    className="rounded-circle"
                    style={{ width: '150px' }}
                    fluid
                    />
                    
                    <div className="d-flex justify-content-center mb-5 mt-4">
                    <a href="mailto:aldra@t-com.me" class="btn btn-outline-primary">Pošaljite mejl</a>
                    </div>

                    <div className="d-flex justify-content-center mb-4">
                    <a href="https://www.linkedin.com/in/dragana-petronijevic-21056331" target="_blank" className="mx-2">
                        <MDBIcon fab icon="linkedin fa-lg" style={{ color: '#0077b5' }} />
                    </a>
                    <a href="viber://chat?number=38269507680" target="_blank" className="mx-2">
                        <MDBIcon fab icon="viber fa-lg" style={{ color: '#7360f2' }} />
                    </a>
                    <a href="https://wa.me/38269507680" target="_blank" className="mx-2">
                        <MDBIcon fab icon="whatsapp fa-lg" style={{ color: '#25D366' }} />
                    </a>
                    <a href="tel:+38269507680" target="_blank" className="mx-2">
                        <MDBIcon fas icon="phone fa-lg" style={{ color: '#25D366' }} />
                    </a>
                    </div>
                </MDBCardBody>
            </MDBCard>
            
          </MDBCol>
          <MDBCol lg="8">
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
                    <MDBCardText>E-mejl</MDBCardText>
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
                    <MDBCardText>Adresa</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">Orjenski Bataljon 56A, Herceg Novi</MDBCardText>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>

            <MDBRow className="justify-content-center">
              <MDBCol md="9">
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
            </MDBRow>
            
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
    );
}