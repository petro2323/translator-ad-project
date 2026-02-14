import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBIcon,
} from 'mdb-react-ui-kit';
import UserIcon from '../images/04-Dragana-Petronijevic.jpg';
import { Helmet } from 'react-helmet-async';

export const ContactPage = () => {
  return (
    <section className="py-5 bg-light">
      <Helmet>
        <title>Kontakt - Dragana Petronijević</title>
        <meta
          name="description"
          content="Kontaktirajte Draganu Petronijević, sudskog tumača i prevodioca za engleski jezik sa preko 30 godina iskustva."
        />
      </Helmet>

      <MDBContainer style={{ minHeight: '60vh' }}>

        <MDBRow className="justify-content-center">

          {/* LIJEVA STRANA */}
          <MDBCol lg="4" className="mb-4">
            <MDBCard className="shadow-sm border-0 text-center p-4 h-100">
              <MDBCardImage
                src={UserIcon}
                alt="Dragana Petronijević"
                className="rounded-circle mx-auto mb-4"
                style={{ width: '170px', height: '170px', objectFit: 'cover' }}
                fluid
              />

              <h4 className="fw-bold mb-3">Dragana Petronijević</h4>
              <p className="text-muted mb-4">
                Sudski tumač za engleski jezik
              </p>

              <a
                href="mailto:aldra@t-com.me"
                className="btn btn-primary mb-4"
              >
                Pošaljite e-poštu
              </a>

              <div className="d-flex justify-content-center gap-3">
                <a
                  href="https://www.linkedin.com/in/dragana-petronijevic-21056331"
                  target="_blank"
                  rel="noreferrer"
                >
                  <MDBIcon fab icon="linkedin fa-lg" />
                </a>

                <a
                  href="viber://chat?number=38269507680"
                  target="_blank"
                  rel="noreferrer"
                >
                  <MDBIcon fab icon="viber fa-lg" />
                </a>

                <a
                  href="https://wa.me/38269507680"
                  target="_blank"
                  rel="noreferrer"
                >
                  <MDBIcon fab icon="whatsapp fa-lg" />
                </a>

                <a href="tel:+38269507680">
                  <MDBIcon fas icon="phone fa-lg" />
                </a>
              </div>
            </MDBCard>
          </MDBCol>

          {/* DESNA STRANA */}
          <MDBCol lg="6">
            <MDBCard className="shadow-sm border-0 p-4 h-100">
              <MDBCardBody>

                <h3 className="fw-bold mb-4 text-center">
                  Kontakt informacije
                </h3>

                <div className="contact-item mb-4 d-flex align-items-center">
                  <MDBIcon fas icon="envelope" className="me-3 text-primary" />
                  <div>
                    <div className="fw-semibold">E-pošta</div>
                    <div className="text-muted">aldra@t-com.me</div>
                  </div>
                </div>

                <div className="contact-item mb-4 d-flex align-items-center">
                  <MDBIcon fas icon="phone" className="me-3 text-primary" />
                  <div>
                    <div className="fw-semibold">Telefon</div>
                    <div className="text-muted">+382 69 507 680</div>
                  </div>
                </div>

                <div className="contact-item mb-4 d-flex align-items-center">
                  <MDBIcon fas icon="map-marker-alt" className="me-3 text-primary" />
                  <div>
                    <div className="fw-semibold">Grad</div>
                    <div className="text-muted">Herceg Novi</div>
                  </div>
                </div>

                <div className="contact-item mb-4 d-flex align-items-center">
                  <MDBIcon fas icon="map-marker-alt" className="me-3 text-primary" />
                  <div>
                    <div className="fw-semibold">Država</div>
                    <div className="text-muted">Crna Gora</div>
                  </div>
                </div>

              </MDBCardBody>
            </MDBCard>
          </MDBCol>

        </MDBRow>

      </MDBContainer>
    </section>
  );
};
