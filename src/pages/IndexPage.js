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
import UserIcon from '../images/04-Dragana-Petronijevic.jpg'

export const IndexPage = () => {
  return (
    <section style={{ backgroundColor: '#eee' }}>
      <MDBContainer className="py-5">
        <MDBRow className="justify-content-center align-items-center text-center mb-5" style={{ height: '40vh' }}>
          <MDBCol lg="8">
            <h1>Profesionalne Usluge Prevođenja</h1>
            <p className="lead text-muted">
              Prevodim i ovjeravam sve vrste tekstova, sa dugogodišnjim iskustvom kao sudski tumač za engleski jezik.
            </p>

            <div className="d-flex justify-content-center">
              <a href="/kontakt" className="btn btn-outline-primary">Kontaktirajte me</a>
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
                  Brze i precizne usluge prevođenja svih vrsta tekstova, dokumenata i audio materijala.
                </MDBCardText>
                <div className="d-flex justify-content-center">
                  <a href="/usluge-prevodjenja" className="btn btn-outline-primary">Saznajte više</a>
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
                  Pristupačne cene i fleksibilni paketi za različite potrebe prevodilačkih usluga.
                </MDBCardText>
                <div className="d-flex justify-content-center">
                  <a href="/cjenovnik" className="btn btn-outline-primary">Saznajte više</a>
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
                  Iskusan sudski tumač sa više od 30 godina iskustva u prevođenju i sudskim uslugama.
                </MDBCardText>
                <div className="d-flex justify-content-center">
                  <a href="/o-meni" className="btn btn-outline-primary">Saznajte više</a>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
};
