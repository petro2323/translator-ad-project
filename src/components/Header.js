import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import HeaderLogo from '../images/entrepreneur.png'
import NavDropDown from 'react-bootstrap/NavDropdown';
import { useState } from 'react';
import { useNavigate, useLocation, NavLink } from 'react-router-dom';
import { scroller } from 'react-scroll';

const Header = () => {
  
  const navigate = useNavigate();
  const location = useLocation();

  const handleScrollToSection = (section) => {
    if (location.pathname !== "/usluge-prevodjenja") {
      navigate("/usluge-prevodjenja");
      setTimeout(() => {
        scroller.scrollTo(section, {
          duration: 800,
          delay: 0,
          smooth: "easeInOutQuart",
        });
      }, 100);
    } else {
      scroller.scrollTo(section, {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
      });
    }
  };

  const handleNavigateToServices = () => {
    if (location.pathname !== "/usluge-prevodjenja") {
      navigate("/usluge-prevodjenja");
    } else {
      window.scrollTo({
          top: 0,
          behavior: "smooth"
      });
    }
  };

  const [showDropdown, setShowDropdown] = useState(false);

  const mouseEnter = () => setShowDropdown(true);
  const mouseLeave = () => setShowDropdown(false);
  
  return (
        <Navbar expand="lg" className="bg-body-tertiary sticky-top">
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
            <Nav.Link href="/">Početna</Nav.Link>
            <NavDropDown title="Usluge prevođenja" id="basic-nav-dropdown" show={showDropdown} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} className="nav-dropdown" onClick={handleNavigateToServices}>
              <NavDropDown.Item onClick={() => handleScrollToSection("konsekutivno-prevodjenje")} className='nav-dropdown-item'>Konsekutivno prevođenje</NavDropDown.Item>
              <NavDropDown.Item onClick={() => handleScrollToSection("simultano-prevodjenje")} className='nav-dropdown-item'>Simultano prevođenje</NavDropDown.Item>
              <NavDropDown.Item onClick={() => handleScrollToSection("ovjeren-prevod")} className='nav-dropdown-item'>Ovjeren prevod</NavDropDown.Item>
              <NavDropDown.Item onClick={() => handleScrollToSection("neovjereni-prevod")} className='nav-dropdown-item'>Neovjereni prevod</NavDropDown.Item>
              <NavDropDown.Item onClick={() => handleScrollToSection("strucni-prevodi")} className='nav-dropdown-item'>Stručni prevodi</NavDropDown.Item>
            </NavDropDown>
            <Nav.Link as={NavLink} to="/cjenovnik">Cjenovnik</Nav.Link>
            <Nav.Link as={NavLink} to="/o-meni">O meni</Nav.Link>
            <Nav.Link as={NavLink} to="/kontakt">Kontakt</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
}

export default Header;