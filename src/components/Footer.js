
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBIcon
  } from 'mdb-react-ui-kit';
  import { NavLink } from 'react-router-dom';

const Footer = () => {
    return(
        <footer style={{ backgroundColor: '#343a40', color: '#fff', padding: '30px 0' }}>
      <MDBContainer>
        <MDBRow className="text-center">
          <MDBCol md="4">
            <h5>O meni</h5>
            <p>
              <b>Dragana Petronijević</b> - Sudski tumač za engleski jezik sa više od 30 godina iskustva u prevođenju različitih vrsta tekstova i dokumenata sa crnogorskog na engleski jezik, kao i sa engleskog na crnogorski jezik
            </p>
          </MDBCol>

          <MDBCol md="4">
            <h5>Korisni linkovi</h5>
            <ul className="list-unstyled">
              <li><NavLink to="/usluge-prevodjenja" className="nav-link" style={{ color: '#fff' }}>Usluge prevođenja</NavLink></li>
              <li><NavLink to="/cjenovnik" className="nav-link" style={{ color: '#fff' }}>Cjenovnik</NavLink></li>
              <li><NavLink to="/o-meni" className="nav-link" style={{ color: '#fff' }}>O meni</NavLink></li>
            </ul>
          </MDBCol>

          <MDBCol md="4">
            <h5>Kontakt</h5>
            <a href="https://www.linkedin.com/in/dragana-petronijevic-21056331" target="_blank" className="mx-2" style={{ color: '#fff' }}>
              <MDBIcon fab icon="linkedin" size="lg" className="custom-icon" />
            </a>
            <a href="mailto:aldra@t-com.me" className="mx-2" style={{ color: '#fff' }}>
              <MDBIcon fas icon="envelope" size="lg" className="custom-icon" />
            </a>
            <a href="viber://chat?number=38269507680" target="_blank" className="mx-2" style={{ color: '#fff' }}>
              <MDBIcon fab icon="viber" size="lg" className="custom-icon" />
            </a>
            <a href="https://wa.me/38269507680" target="_blank" className="mx-2" style={{ color: '#fff' }}>
              <MDBIcon fab icon="whatsapp" size="lg" className="custom-icon" />
            </a>
            <a href="tel:+38269507680" target="_blank" className="mx-2" style={{ color: '#fff' }}>
              <MDBIcon fas icon="phone" size="lg" className="custom-icon" />
            </a>
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