import {
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardText,
    MDBCardBody,
    MDBIcon,
    MDBListGroup,
    MDBListGroupItem,
    MDBCardTitle
  } from 'mdb-react-ui-kit';
import { Helmet } from 'react-helmet-async';
import Logo from '../images/logo-dragana-petronijevic.png';

export const PricePage = () => {
    return(
        <section style={{ backgroundColor: '#eee' }}>
            <Helmet>
                <title>Cjenovnik - Dragana Petronijević</title>

                <meta name="description" content="Cjenovnik usluga prevođenja Dragane Petronijević, sudskog tumača za engleski jezik. Pronađite cijene za stručne prevode, ovjerene i neovjerene prevode, simultano i konsekutivno prevođenje." />
                <meta name="keywords" content="dragana petronijevic, cjenovnik, cijene prevođenja, prevodilac, sudski tumač, ovjereni prevodi, neovjereni prevodi, simultano prevođenje, konsekutivno prevođenje, cjenovnik prevoda, sudski tumač" />

                <meta property="og:url" content="https://www.draganapetronijevic.com/cjenovnik" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Cjenovnik - Dragana Petronijević, Sudski tumač za engleski jezik" />
                <meta property="og:description" content="Pregled cjenovnika usluga prevođenja. Saznajte cijene za stručne prevode, ovjerene i neovjerene prevode, simultano i konsekutivno prevođenje." />
                <meta property="og:image" content={Logo} />
            </Helmet>
      <MDBContainer className="py-5">
        <MDBRow>
          <MDBCol lg="12">
                <MDBCard>
                    <MDBCardBody>
                        <MDBRow>
                                <MDBCol>
                                    <MDBCardTitle className="fs-3">
                                        <b><MDBIcon fas icon="coins" /> Cjenovnik</b>
                                    </MDBCardTitle>
                                </MDBCol>
                        </MDBRow>
                        <br />
                        <MDBRow>
                                <MDBCol>
                                    <MDBCardText><b>Nagrada za pismeno prevođenje</b></MDBCardText>
                                </MDBCol>
                        </MDBRow>
                        <br />
                        <MDBRow>
                                <MDBCol>
                                    <MDBCardText className="text-muted">Za prevod pisanog teksta tumaču pripada nagrada koja se obračunava po prevodilačkoj strani. Jedna prevodilačka strana sadrži 1800 slovnih znaka sa razmakom. <br /> Određivanje cijene zavisi od sljedećih faktora:</MDBCardText>
                                </MDBCol>
                        </MDBRow>
                        <br />
                        <MDBRow>
                                <MDBCol>
                                <MDBListGroup>
                                        <MDBListGroupItem>•	oblast prevođenja</MDBListGroupItem>
                                        <MDBListGroupItem>•	koliko prevedeni tekst ima prevodilačkih strana</MDBListGroupItem>
                                        <MDBListGroupItem>•	da li je za prevod potrebna ovjera sudskog tumača</MDBListGroupItem>
                                        <MDBListGroupItem>•	hitnost, odnosno u kom roku je potrebno završiti prevod</MDBListGroupItem>
                                    </MDBListGroup>
                                </MDBCol>
                        </MDBRow>
                        <br />
                        <MDBRow>
                                <MDBCol>
                                    <MDBCardText className="text-muted">Za prevod:</MDBCardText>
                                </MDBCol>
                        </MDBRow>
                        <br />
                        <MDBRow>
                                <MDBCol>
                                    <MDBListGroup>
                                        <MDBListGroupItem>•	sa crnogorskog jezika ili drugog jezika koji je u službenoj upotrebi u Crnoj Gori na engleski jezik.</MDBListGroupItem>
                                        <MDBListGroupItem>•	sa engleskog jezika na crnogorski jezik ili drugi jezik koji je u službenoj upotrebi u Crnoj Gori.</MDBListGroupItem>
                                    </MDBListGroup>
                                </MDBCol>
                        </MDBRow>
                        <hr />
                        <MDBRow>
                                <MDBCol>
                                    <MDBCardText><b>Nagrada za usmeno prevođenje</b></MDBCardText>
                                </MDBCol>
                        </MDBRow>
                        <br />
                        <MDBRow>
                                <MDBCol>
                                    <MDBCardText className="text-muted">Nagrada za usmeno prevođenje koja pripada prevodiocu, odnosno tumaču, obračunava se za svaki započeti sat usmenog prevođenja, konsekutivnog ili simultanog.</MDBCardText>
                                </MDBCol>
                        </MDBRow>
                        <MDBRow>
                            <MDBCol>
                                <MDBCardText className="text-muted">U vrijeme utrošeno za prevođenje iz stava 1 ovog člana računa se cjelokupno vrijeme od dolaska tumača u dogovoreno vrijeme na mjesto pružanja usluga usmenog prevođenja do prestanka potreba za njegovim angažovanjem.</MDBCardText>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow>
                            <MDBCol>
                                <MDBCardText className="text-muted">Tumač ima pravo na naknadu putnih troškova i drugih izdataka i naknadu izgubljene zarade u skladu sa propisom o naknadi troškova u sudskim postupcima.</MDBCardText>
                            </MDBCol>
                        </MDBRow>
                        <br />
                        <MDBRow>
                            <MDBCol>
                                <MDBCardText className="text-muted"><b>Za visinu nagrade u konkretnom slučaju, obratite se <a href="/kontakt">telefonom ili putem e-pošte.</a></b></MDBCardText>
                            </MDBCol>
                        </MDBRow>
                    </MDBCardBody>
                </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      </section>
    );
}