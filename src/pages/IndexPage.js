import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBIcon,
  MDBCardImage
} from 'mdb-react-ui-kit';
import UserIcon from '../images/04-Dragana-Petronijevic.jpg';
import { Helmet } from 'react-helmet-async';
import { NavLink } from 'react-router-dom';

export const IndexPage = () => {
  return (
    <section style={{ backgroundColor: '#eee' }}>
      <Helmet>
        <title>Dragana Petronijević - Sudski tumač za engleski jezik</title>

        <meta name="description" content="Dragana Petronijević - Iskusan sudski tumač i prevodilac za engleski jezik sa više od 30 godina iskustva, specijalizovana za ovjerene i neovjerene prevode, kao i simultano i konsekutivno prevođenje." />
        <meta name="keywords" content="dragana petronijevic, prevodilac, sudski tumač, tumač, engleski jezik, crnogorski jezik, prevođenje, ovjereni prevodi, neovjereni prevodi, prevodilac Herceg Novi, prevodilac Podgorica, prevodilac Crna Gora, sudski tumač Herceg Novi, sudski tumač Podgorica, sudski tumač Crna Gora, prevodi, prevodioci, simultano prevođenje, konsekutivno prevođenje, stručni prevodi" />
      </Helmet>
      <MDBContainer className="py-5">
        <MDBRow className="justify-content-center align-items-center text-center mb-5" style={{ height: '40vh' }}>
          <MDBCol lg="8">
            <h1>Profesionalne prevodilačke usluge</h1>
            <p className="lead text-muted">
            Kao sudski tumač za engleski jezik sa dugogodišnjim iskustvom, prevodim i ovjeravam sve vrste tekstova i dokumenata
            </p>

            <div className="d-flex justify-content-center">
                <NavLink to="/kontakt" className="btn btn-outline-primary">Kontaktirajte me</NavLink>
            </div>
          </MDBCol>
        </MDBRow>

        <MDBRow className="text-center mb-5">
          <MDBCol md="4">
            <MDBCard>
              <MDBCardBody>
                <MDBIcon fas icon="globe" size="3x" className="mb-3" />
                <MDBCardTitle>Usluge prevođenja</MDBCardTitle>
                <MDBCardText>
                Brze i precizne usluge prevođenja svih vrsta tekstova, dokumenata i audio materijala
                </MDBCardText>
                <div className="d-flex justify-content-center">
                <NavLink to="/usluge-prevodjenja" className="btn btn-outline-primary">Saznajte više</NavLink>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol md="4">
            <MDBCard>
              <MDBCardBody>
                <MDBIcon fas icon="coins" size="3x" className="mb-3" />
                <MDBCardTitle>Cjenovnik</MDBCardTitle>
                <MDBCardText>
                Pristupačne cijene i fleksibilni paketi za širok spektar prevodilačkih usluga  
                </MDBCardText>
                <div className="d-flex justify-content-center">
                <NavLink to="/cjenovnik" className="btn btn-outline-primary">Saznajte više</NavLink>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol md="4">
            <MDBCard>
              <MDBCardBody>
              <MDBCardImage
                src={UserIcon}
                alt="Dragana Petronijević"
                className="mb-2 rounded-circle"
                style={{ width: '55px' }}
              />
                <MDBCardTitle>O meni</MDBCardTitle>
                <MDBCardText>
                Iskusan prevodilac i sudski tumač za engleski jezik sa više od 30 godina iskustva
                </MDBCardText>
                <div className="d-flex justify-content-center">
                <NavLink to="/o-meni" className="btn btn-outline-primary">Saznajte više</NavLink>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
};
