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
            <h1>Profesionalne prevodilačke usluge</h1>
            <p className="lead text-muted">
            Kao sudski tumač za engleski jezik sa dugogodišnjim iskustvom, prevodim i ovjeravam sve vrste tekstova i dokumenata
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
                Brze i precizne usluge prevođenja svih vrsta tekstova, dokumenata i audio materijala
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
                Pristupačne cijene i fleksibilni paketi za širok spektar prevodilačkih usluga  
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
                Iskusan prevodilac i sudski tumač za engleski jezik sa više od 30 godina iskustva
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
