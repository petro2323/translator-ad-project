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


export const AboutMePage = () => {
    return (
      <section style={{ backgroundColor: '#eee' }}>
        <MDBContainer className="py-5">
          <MDBRow>
            <MDBCol lg="12">
              <MDBCard className="mb-4">
                <MDBCardBody className="d-flex align-items-center">
                  <MDBCardImage
                    src={UserIcon}
                    alt="Dragana Petronijević"
                    className="rounded-circle"
                    style={{ width: '150px', marginRight: '20px' }}
                    fluid
                  />
                  <div>
                    <h4 className="text-center"><b>O meni</b></h4>
                    <MDBCardText className="text-muted">
                      <b>Zovem se Dragana Petronijević.</b> Prevodilac sam i sudski tumač za engleski jezik već više od tri decenije. Diplomirala sam na Filološkom fakultetu Univerziteta u Sarajevu, gdje sam stekla stručni naziv profesora engleskog jezika i književnosti.
                    </MDBCardText>
                  </div>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
  
            <MDBCol lg="12">
              <MDBCard className="mb-4">
                <MDBCardBody>
                  <MDBRow>
                    <MDBCol sm="12" md={{ size: 9, offset: 1 }} className="mb-4">
                      <MDBCardText className="text-muted">
                        <b>Licenca za sudskog tumača za engleski jezik</b> dodijeljena mi je od strane Ministarstva pravde Crne Gore 1991. godine, od kada sam kontinuirano obnavljala svoju licencu i unapređivala svoje vještine, kako kroz rad sa klijentima, tako i kroz dodatnu obuku.
                      </MDBCardText>
                    </MDBCol>
                  </MDBRow>
  
                  <MDBRow>
                    <MDBCol sm="12" md={{ size: 9, offset: 1 }} className="mb-4">
                      <h5 className="text-center"><b>Institucije i organizacije</b></h5>
                      <MDBListGroup>
                        <MDBListGroupItem className="text-muted">
                        Članica sam <b>Udruženja sudskih tumača Crne Gore</b> i <b>Udruženja konferencijskih prevodilaca Crne Gore (AMIC)</b>.
                        </MDBListGroupItem>
                        <MDBListGroupItem className="text-muted">
                        Sarađivala sam brojnim ministarstvima Vlade Crne Gore, vladinim i nevladinim organizacijama, institucijama, agencijama i institutima, domaćim i stranim udruženjima, međunarodnim donatorskim organizacijama (USAID, OEBS, IOM, Delegacija EU u Crnoj Gori, Svjetska banka, IFC, GTZ, agencije Ujedinjenih nacija u Crnoj Gori, Svjetska zdravstvena organizacija, Svjetska carinska organizacija, Svjetska trgovinska organizacija, itd.), međunarodnim i domaćim bankama, lokalnim samoupravama, više fakulteta Univerziteta Crne Gore, organima sudske vlasti, domaćim i stranim konsultantskim kućama, domaćim i stranim privatnim preduzećima, građevinskim firmama, advokatskim kancelarijama, agencijama za nekretnine, biltenima, prevodilačkim agencijama, domaćim i stranim fizičkim licima, itd.
                        </MDBListGroupItem>
                      </MDBListGroup>
                    </MDBCol>
                  </MDBRow>
  
                  <MDBRow>
                    <MDBCol sm="12" md={{ size: 9, offset: 1 }}>
                      <MDBCardText className="text-muted">
                        Moj rad uključuje i projekte u oblasti evropskih integracija, u kojima sam učestvovala kao prevodilac i članica radne grupe Ministarstva evropskih integracija Crne Gore za izradu priručnika za prevođenje pravne tekovine Evropske unije (Acquis communautaire).
                      </MDBCardText>
                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    );
  };
  