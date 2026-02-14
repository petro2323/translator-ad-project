import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBListGroup,
  MDBListGroupItem
} from 'mdb-react-ui-kit';
import UserIcon from '../images/04-Dragana-Petronijevic.jpg';
import { Helmet } from 'react-helmet-async';

export const AboutMePage = () => {
  return (
    <section className="py-5 bg-light">
      <Helmet>
        <title>O meni - Dragana Petronijević</title>
        <meta
          name="description"
          content="Saznajte više o Dragani Petronijević, sudskom tumaču i prevodiocu za engleski jezik sa više od 30 godina iskustva u stručnim, ovjerenim i konferencijskim prevodima."
        />
      </Helmet>

      <MDBContainer>

        {/* HERO SEKCIJA */}
        <MDBCard className="mb-5 shadow-sm border-0">
          <MDBCardBody className="d-flex flex-column flex-md-row align-items-center text-center text-md-start p-4">
            <MDBCardImage
              src={UserIcon}
              alt="Dragana Petronijević"
              className="rounded-circle mb-3 mb-md-0 me-md-4"
              style={{ width: '170px', height: '170px', objectFit: 'cover' }}
              fluid
            />
            <div>
              <h2 className="fw-bold mb-2">Dragana Petronijević</h2>
              <p className="text-muted mb-3 fs-5">
                Sudski tumač i prevodilac za engleski jezik sa više od 30 godina iskustva.
              </p>
              <MDBCardText className="about-text">
                Diplomirala sam na Filološkom fakultetu Univerziteta u Sarajevu,
                gdje sam stekla stručni naziv profesora engleskog jezika i književnosti.
              </MDBCardText>
            </div>
          </MDBCardBody>
        </MDBCard>

        {/* LICENCA */}
        <MDBCard className="mb-5 shadow-sm border-0">
          <MDBCardBody className="p-4">
            <h3 className="fw-bold text-center mb-4">
              Profesionalna licenca
            </h3>

            <MDBCardText className="about-text text-muted text-center">
              Licenca za sudskog tumača za engleski jezik dodijeljena mi je od
              strane Ministarstva pravde Crne Gore 1991. godine, od kada
              kontinuirano obnavljam svoju licencu i unapređujem svoje vještine
              kroz rad sa klijentima i dodatnu stručnu obuku.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>

        {/* INSTITUCIJE */}
        <MDBCard className="shadow-sm border-0">
          <MDBCardBody className="p-4">
            <h3 className="fw-bold text-center mb-4">
              Institucije i organizacije
            </h3>

            <MDBListGroup flush>
              <MDBListGroupItem className="about-text text-muted">
                ✓ Članica Udruženja sudskih tumača Crne Gore i
                Udruženja konferencijskih prevodilaca Crne Gore (AMIC)
              </MDBListGroupItem>

              <MDBListGroupItem className="about-text text-muted">
                ✓ Saradnja sa ministarstvima, državnim institucijama i
                organima sudske vlasti
              </MDBListGroupItem>

              <MDBListGroupItem className="about-text text-muted">
                ✓ Rad sa međunarodnim organizacijama (EU, USAID, OEBS, IOM,
                Svjetska banka, UN agencije i dr.)
              </MDBListGroupItem>

              <MDBListGroupItem className="about-text text-muted">
                ✓ Saradnja sa bankama, univerzitetima, advokatskim
                kancelarijama i privatnim kompanijama
              </MDBListGroupItem>
            </MDBListGroup>

            <MDBCardText className="about-text text-muted mt-4 text-center">
              Učestvovala sam i u projektima evropskih integracija kao
              prevodilac i članica radne grupe za izradu priručnika za
              prevođenje pravne tekovine Evropske unije (Acquis communautaire).
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>

      </MDBContainer>
    </section>
  );
};
