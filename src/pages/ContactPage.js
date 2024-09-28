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
import { Helmet } from 'react-helmet-async';

export const ContactPage = () => {
    return(
        <section style={{ backgroundColor: '#eee' }}>
          <Helmet>
            <title>Kontakt - Dragana Petronijević</title>

            <meta name="description" content="Kontaktirajte Draganu Petronijević, sudskog tumača i prevodioca za engleski jezik. Preko 30 godina iskustva u prevođenju i ovjeri dokumenata. Nalazimo se u Herceg Novom i Podgorici." />
            <meta name="keywords" content="kontakt, dragana petronijevic, sudski tumač, prevodilac, engleski jezik, prevođenje, ovjereni prevodi, neovjereni prevodi, strucni prevodi, simultano prevođenje, konsekutivno prevođenje, Herceg Novi, Podgorica" />
        </Helmet>

      <MDBContainer className="py-5">

        <MDBRow>
          <MDBCol lg="3">
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
            <MDBCard className="mb-4 mt-5">
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
                    <MDBCardText>Grad</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">Herceg Novi</MDBCardText>
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