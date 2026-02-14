
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBIcon
  } from 'mdb-react-ui-kit';

const Footer = () => {
    return(
        <footer style={{ backgroundColor: '#343a40', color: '#fff', padding: '30px 0px 0px 0px' }}>
      <MDBContainer>
        <MDBRow className="justify-content-between">
          <MDBCol md="4" className="text-start">
            <h5 className="text-center">O meni</h5>
            <p>
              <b>Dragana Petronijević</b> - Sudski tumač za engleski jezik sa više od 30 godina iskustva u prevođenju različitih vrsta tekstova i dokumenata sa crnogorskog na engleski jezik, kao i sa engleskog na crnogorski jezik
            </p>
          </MDBCol>

          <MDBCol md="4" className="text-end">
            <h5 className="text-center">Kontakt</h5>

            <div className="d-flex justify-content-center gap-3 mt-3">
              <a href="https://www.linkedin.com/in/dragana-petronijevic-21056331"
                target="_blank"
                rel="noreferrer"
                style={{ color: '#fff' }}>
                <MDBIcon fab icon="linkedin" size="lg" />
              </a>

              <a href="mailto:aldra@t-com.me"
                style={{ color: '#fff' }}>
                <MDBIcon fas icon="envelope" size="lg" />
              </a>

              <a href="viber://chat?number=38269507680"
                target="_blank"
                rel="noreferrer"
                style={{ color: '#fff' }}>
                <MDBIcon fab icon="viber" size="lg" />
              </a>

              <a href="https://wa.me/38269507680"
                target="_blank"
                rel="noreferrer"
                style={{ color: '#fff' }}>
                <MDBIcon fab icon="whatsapp" size="lg" />
              </a>

              <a href="tel:+38269507680"
                style={{ color: '#fff' }}>
                <MDBIcon fas icon="phone" size="lg" />
              </a>
            </div>
            </MDBCol>
        </MDBRow>

        <MDBRow className="mt-4">
          <MDBCol className="text-center">
            <p>© {new Date().getFullYear()} Dragana Petronijević</p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </footer>
    );
}

export default Footer;