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
  import { Element } from 'react-scroll';
  import { Helmet } from 'react-helmet-async';

export const TranslationServicesPage = () => {
  
    return (
    <section style={{ backgroundColor: '#eee' }}>
      <Helmet>
        <title>Usluge prevođenja - Dragana Petronijević</title>

        <meta name="description" content="Dragana Petronijević - Usluge prevođenja stručnih, ovjerenih i neovjerenih prevoda, simultanog i konsekutivnog prevođenja." />
        <meta name="keywords" content="dragana petronijevic, usluge prevođenja, prevodilac, sudski tumač, tumač, engleski jezik, crnogorski jezik, stručni prevodi, ovjereni prevodi, neovjereni prevodi, simultano prevođenje, konsekutivno prevođenje" />
    </Helmet>
      <MDBContainer className="py-5">
        <MDBRow>
          <MDBCol lg="12">
                <MDBCard>
                    <MDBCardBody>
                        <MDBRow>
                                <MDBCol>
                                    <MDBCardTitle className="fs-3">
                                        <b>Usluge prevođenja</b>
                                    </MDBCardTitle>
                                </MDBCol>
                        </MDBRow>
                        <br />
                        <MDBRow>
                                <MDBCol>
                                    <MDBCardText className="text-muted">Prevodim i po potrebi ovjeravam sve vrste tekstova i dokumenata sa crnogorskog na engleski jezik i sa engleskog na crnogorski jezik, odnosno jezike u službenoj upotrebi u Crnoj Gori. Takođe radim prevode knjiga, sajtova, aplikacija, audio i video materijala, lekturu i korekturu. Vršim prevode i ovjere zvaničnih dokumenata. Po potrebi pružam usluge simultanog i konsekutivnog prevođenja.</MDBCardText>
                                </MDBCol>
                        </MDBRow>
                        <hr />
                        <MDBRow>
                                <MDBCol>
                                    <MDBCardText><b>Oblasti prevođenja</b></MDBCardText>
                                </MDBCol>
                        </MDBRow>
                        <br />
                        <Element name="strucni-prevodi" />
                        <MDBRow>
                                <MDBCol>
                                    <MDBCardText className="text-muted">Lični dokumenti, poslovna dokumentacija, prezentacije, brošure, ugovori, pravna dokumentacija, sudski sporovi, ekonomija, računovodsto, trgovina, medicina, farmacija, tehnika, elektrotehnika, industrija, poljoprivreda, energetika, prostorno planiranje, građevinarstvo, nauka, umjetnost, turizam, ugostiteljstvo, marketing, odnosi sa javnošću, nekretnine i brojne druge oblasti.</MDBCardText>
                                </MDBCol>
                        </MDBRow>
                        <hr />
                        <MDBRow>
                                <MDBCol>
                                    <h4><b><MDBIcon fas icon="file-alt" /> Stručni prevodi</b></h4>
                                </MDBCol>
                        </MDBRow>
                        <br />
                        <MDBRow>
                                <MDBCol>
                                    <MDBCardText className="text-muted">Stručni prevodi su prevodi tekstova namijenjenih čitaocima unutar određenog stručnog područja. Ovu vrstu dokumenata odlikuje visoka stručnost za određenu oblast, koju je potrebno da posjeduje prevodilac.</MDBCardText>
                                </MDBCol>
                        </MDBRow>
                        <br />
                        <MDBRow>
                                <MDBCol>
                                    <MDBCardText className="text-muted">Stručni prevodi koje radim su obično:</MDBCardText>
                                </MDBCol>
                        </MDBRow>
                        <br />
                        <MDBRow>
                                <MDBCol>
                                    <MDBListGroup>
                                        <MDBListGroupItem>•	prevodi tekstova zakona, pravnih dokumenata (pravna oblast)</MDBListGroupItem>
                                        <MDBListGroupItem>•	prevodi tehničkih materijala i uputstava za upotrebu (tehnika)</MDBListGroupItem>
                                        <MDBListGroupItem>•	prevodi medicinskih nalaza (medicina)</MDBListGroupItem>
                                        <MDBListGroupItem>•	prevodi tekstova sa područja humanističkih, prirodnih, ekonomskih i kibernetskih nauka (naučni prevodi)</MDBListGroupItem>
                                        <MDBListGroupItem>•	prevod Internet stranica (vrlo važni prevodi koji se moraju raditi sa posebnom pažnjom jer su namijenjeni širokom broju korisnika)</MDBListGroupItem>
                                        <MDBListGroupItem>•	prevodi dokumentacije, poslovne korespondencije, prezentacija, reklamnih tekstova i slično</MDBListGroupItem>
                                        <MDBListGroupItem>•	prevod reprezentativnih materijala za sajmove i izložbe</MDBListGroupItem>
                                        <MDBListGroupItem>•	prevodi marketinških tekstova</MDBListGroupItem>
                                        <Element name="ovjeren-prevod" />
                                        <MDBListGroupItem>•	prevod poslovnih pisma</MDBListGroupItem>
                                        <MDBListGroupItem>•	prevod prezentacija u PowerPoint, Excel, PDF formatu, itd.</MDBListGroupItem>
                                    </MDBListGroup>
                                </MDBCol>
                        </MDBRow>
                        <hr />
                        <MDBRow>
                                <MDBCol>
                                    <h4><b><MDBIcon fas icon="stamp" /> Ovjeren prevod</b></h4>
                                </MDBCol>
                        </MDBRow>
                        <br />
                        <MDBRow>
                                <MDBCol>
                                    <MDBCardText className="text-muted">Ovjeren prevod je prevod dokumenta koji je formalno verifikovan i može se koristiti kao zvaničan dokument. Prevod dokumenta ovjerava stalni sudski tumač potvrdom koja mora biti na jeziku na koji je dokument preveden. Ispod potvrde navodi se mjesto i datum, nakon čega slijedi svojeručni potpis i otisak pečata stalnog sudskog tumača.</MDBCardText>
                                </MDBCol>
                        </MDBRow>
                        <br />
                        <MDBRow>
                                <MDBCol>
                                    <MDBCardText className="text-muted">Najčešći dokumenti koji zahtijevaju prevod sa ovjerom sudskog tumača su:</MDBCardText>
                                </MDBCol>
                        </MDBRow>
                        <br />
                        <MDBRow>
                                <MDBCol>
                                    <MDBListGroup>
                                        <MDBListGroupItem>•	sudski prevod svjedočanstva</MDBListGroupItem>
                                        <MDBListGroupItem>•	sudski prevod diplome</MDBListGroupItem>
                                        <MDBListGroupItem>•	sudski prevod izvoda iz matične knjige rođenih</MDBListGroupItem>
                                        <MDBListGroupItem>•	sudski prevod potvrde o nekažnjavanju</MDBListGroupItem>
                                        <MDBListGroupItem>•	sudski prevod policijskog zapisnika</MDBListGroupItem>
                                        <MDBListGroupItem>•	sudski prevod potvrde o bračnom stanju</MDBListGroupItem>
                                        <MDBListGroupItem>•	sudski prevod ljekarskog nalaza</MDBListGroupItem>
                                        <MDBListGroupItem>•	sudski prevod ugovora</MDBListGroupItem>
                                        <MDBListGroupItem>•	sudski prevod sertifikata</MDBListGroupItem>
                                        <MDBListGroupItem>•	sudski prevod izvoda iz registra</MDBListGroupItem>
                                        <MDBListGroupItem>•	sudski prevod ovlašćenja</MDBListGroupItem>
                                        <Element name="neovjereni-prevod" />
                                        <MDBListGroupItem>•	sudski prevod pasoša</MDBListGroupItem>
                                        <MDBListGroupItem>•	sudski prevod punomoćja, itd.</MDBListGroupItem>
                                    </MDBListGroup>
                                </MDBCol>
                        </MDBRow>
                        <hr />
                        <MDBRow>
                                <MDBCol>
                                    <h4><b><MDBIcon fas icon="file" /> Neovjereni prevod</b></h4>
                                </MDBCol>
                        </MDBRow>
                        <br />
                        <MDBRow>
                                <MDBCol>
                                    <MDBCardText className="text-muted">Neovjereni prevod je prevod koji ne sadrži ovjeru ovlašćenog sudskog tumača. <br /> Neovjereni prevodi izdaju se u papirnom ili elektronskom formatu.</MDBCardText>
                                </MDBCol>
                        </MDBRow>
                        <br />
                        <MDBRow>
                                <MDBCol>
                                    <MDBCardText className="text-muted"><b>Prevodim:</b></MDBCardText>
                                </MDBCol>
                        </MDBRow>
                        <br />
                        <MDBRow>
                                <MDBCol>
                                    <MDBListGroup>
                                        <MDBListGroupItem>•	Prevod reprezentativnih materijala za sajmove i izložbe</MDBListGroupItem>
                                        <MDBListGroupItem>•	prevod marketinških tekstova</MDBListGroupItem>
                                        <MDBListGroupItem>•	prevod poslovnih pisama</MDBListGroupItem>
                                        <Element name="simultano-prevodjenje" />
                                        <MDBListGroupItem>•	prevod prezentacija</MDBListGroupItem>
                                        <MDBListGroupItem>•	prevod dokumenata za službene i privatne svrhe</MDBListGroupItem>
                                    </MDBListGroup>
                                </MDBCol>
                        </MDBRow>
                        <hr />
                        <MDBRow>
                                <MDBCol>
                                    <MDBCardText className="text-muted"><b>Po potrebi pružam usluge simultanog i konsekutivnog prevođenja.</b></MDBCardText>
                                </MDBCol>
                        </MDBRow>
                        <br />
                        <MDBRow>
                                <MDBCol>
                                    <h4><b><MDBIcon fas icon="microphone-alt" /> Simultano prevođenje</b></h4>
                                </MDBCol>
                        </MDBRow>
                        <br />
                        <MDBRow>
                                <MDBCol>
                                    <MDBCardText className="text-muted">Simultano prevođenje je vrsta usmenog prevođenja gdje prevodilac prevodi govor u realnom vremenu, dok govornik još uvijek govori. Ovo se obično koristi na konferencijama, sastancima i drugim događajima gdje učestvuju osobe koje govore različite jezike.</MDBCardText>
                                </MDBCol>
                        </MDBRow>
                        <br />
                        <MDBRow>
                                <MDBCol>
                                    <MDBCardText className="text-muted">Primjeri gdje i kada se koristi simultano prevođenje:</MDBCardText>
                                </MDBCol>
                        </MDBRow>
                        <br />
                        <MDBRow>
                                <MDBCol>
                                    <MDBListGroup>
                                        <MDBListGroupItem>•	Sastanci poslovnih odbora</MDBListGroupItem>
                                        <MDBListGroupItem>•	Sudnice</MDBListGroupItem>
                                        <Element name="konsekutivno-prevodjenje" />
                                        <MDBListGroupItem>•	Diplomatske konferencije</MDBListGroupItem>
                                        <MDBListGroupItem>•	Međunarodne konferencije</MDBListGroupItem>
                                        <MDBListGroupItem>•	Predavanja i prezentacije, itd.</MDBListGroupItem>
                                    </MDBListGroup>
                                </MDBCol>
                        </MDBRow>
                        <br />
                        <MDBRow>
                                <MDBCol>
                                    <h4><b><MDBIcon fas icon="comments" /> Konsekutivno prevođenje</b></h4>
                                </MDBCol>
                        </MDBRow>
                        <br />
                        <MDBRow>
                                <MDBCol>
                                    <MDBCardText className="text-muted">Pojam konsekutivno prevođenje  definiše se kao usmeno prevođenje određenog sadržaja na željeni jezik, ali tako da se prevođenje vrši tek kada govornik završi određeni segment izlaganja. Prevodilac pažljivo prati izlaganje i po potrebi bilježi kako bi mogao da na adekvatan način prenese sadržaj na određeni jezik. </MDBCardText>
                                </MDBCol>
                        </MDBRow>
                        <br />
                        <MDBRow>
                                <MDBCol>
                                    <MDBCardText className="text-muted">Primjeri gdje i kada se koristi konsekutivno prevođenje:</MDBCardText>
                                </MDBCol>
                        </MDBRow>
                        <br />
                        <MDBRow>
                                <MDBCol>
                                    <MDBListGroup>
                                        <MDBListGroupItem>•	Manji sastanci ili skupovi</MDBListGroupItem>
                                        <MDBListGroupItem>•	Sudnice</MDBListGroupItem>
                                        <MDBListGroupItem>•	Konferencije za štampu</MDBListGroupItem>
                                        <MDBListGroupItem>•	Obuke</MDBListGroupItem>
                                        <MDBListGroupItem>•	Sastanci kod advokata, notara, itd.</MDBListGroupItem>
                                    </MDBListGroup>
                                </MDBCol>
                        </MDBRow>
                        <br />
                        <MDBRow>
                                <MDBCol>
                                    <h4><b><MDBIcon fas icon="question-circle" /> Razlika između simultanog i konsekutivnog prevođenja</b></h4>
                                </MDBCol>
                        </MDBRow>
                        <br />
                        <MDBRow>
                                <MDBCol>
                                    <MDBCardText className="text-muted">Simultano prevođenje je način usmenog prevođenja u kojem govornik govori, a usmeni prevodilac istovremeno (ili simultano) reprodukuje njegov govor na jeziku koji njegovi slušaoci razumiju. Simultani prevodioci rade u kabinama, a umjesto toga mogu koristiti prenosnu opremu za simultano prevođenje (tzv. Infoport ili valiza) ili tehniku šaptanog prevođenja.</MDBCardText>
                                </MDBCol>
                        </MDBRow>
                        <br />
                        <MDBRow>
                                <MDBCol>
                                    <MDBCardText className="text-muted">Sve vještine navedene za konsekutivno prevođenje odnose se i na simultano prevođenje.</MDBCardText>
                                </MDBCol>
                        </MDBRow>
                        <br />
                        <MDBRow>
                                <MDBCol>
                                    <MDBCardText className="text-muted">Tri glavne radnje takođe su u osnovi jednake:</MDBCardText>
                                </MDBCol>
                        </MDBRow>
                        <br />
                        <MDBRow>
                                <MDBCol>
                                    <MDBListGroup>
                                        <MDBListGroupItem>1) aktivno slušanje (razumijevanje)</MDBListGroupItem>
                                        <MDBListGroupItem>2) analiziranje (strukturiranje poruke)</MDBListGroupItem>
                                        <MDBListGroupItem>3) reprodukovanje (prenošenje poruke).</MDBListGroupItem>
                                    </MDBListGroup>
                                </MDBCol>
                        </MDBRow>
                        <br />
                        <MDBRow>
                                <MDBCol>
                                    <MDBCardText className="text-muted">Razlika u odnosu na konsekutivno prevođenje je u tome što se kod simultanog prevođenja sve te radnje moraju odvijati istovremeno (ili simultano).</MDBCardText>
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
