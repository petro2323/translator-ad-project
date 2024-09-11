import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import HeaderLogo from '../images/entrepreneur.png'
import NavDropDown from 'react-bootstrap/NavDropdown';
import { useState } from 'react';

const Header = () => {
    
  const [showDropdown, setShowDropdown] = useState(false);

  const mouseEnter = () => setShowDropdown(true);
  const mouseLeave = () => setShowDropdown(false);
  
  return (
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/" className="d-flex align-items-center">
        <img
              src={HeaderLogo}
              width="65"
              height="65"
              className="d-inline-block align-top me-2"
            />
        <div>
          <b>Dragana Petronijević</b> <br />
          <small className="text-muted">Sudski tumač za engleski jezik</small>
        </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto text-center">
            <NavDropDown title="Usluge prevođenja" id="basic-nav-dropdown" show={showDropdown} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} className="nav-dropdown" onClick={() => window.location.href="#"}>
              <NavDropDown.Item href="#" className='nav-dropdown-item'>Konsekutivni prevod</NavDropDown.Item>
              <NavDropDown.Item href="#" className='nav-dropdown-item'>Simultani prevod</NavDropDown.Item>
              <NavDropDown.Item href="#" className='nav-dropdown-item'>Ovjereni prevod</NavDropDown.Item>
              <NavDropDown.Item href="#" className='nav-dropdown-item'>Neovjereni prevod</NavDropDown.Item>
              <NavDropDown.Item href="#" className='nav-dropdown-item'>Stručni prevodi</NavDropDown.Item>
            </NavDropDown>
            <Nav.Link href="#link">Cijenovnik</Nav.Link>
            <Nav.Link href="#link">O meni</Nav.Link>
            <Nav.Link href="#link">Kontakt</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
}

export default Header;