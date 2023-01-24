import React from "react";
import { CCardBody,CCard,CCardText,CCol,CRow,CCardImage} from '@coreui/react';



function Services() {
  return (
    <div class="container">
      <h5 id="services" class="text-center text-info">OUR SERVICES</h5>
      <p class="text-center">What we offer for you</p>
      <CRow className="card-container" xs={{ cols: 1, gutter: 4 }} xl={12} sm={6} md={4} lg={3}>
      <CCol xs md lg xl className="col-spacing">
    <CCard style={{borderColor:"#3C8CE7",borderRadius: '2rem',width:'35%',margin:'0 auto'}}>
      <CCardImage className="img-center bg-image1" orientation="top" style={{height:"130px",width:"70px"}} src="Images/card1.png" />
      <CCardBody>
        <CCardText className="text-center text-info">
          Laucha your product<br/>on our launchpad <br/>with huge community.
        </CCardText>
        <button class="d-grid gap-2  mx-auto btn btn-outline-info rounded-pill ml-2">Launching Soon</button>
      </CCardBody>
    </CCard>
  </CCol>
  <CCol xs md lg xl className="col-spacing" >
    <CCard id="crdbg-color" style={{borderColor:"#FFFFFF",borderRadius: '2rem',width:'35%',margin:'0 auto'}}>
      <CCardImage className="img-center bg-image2" orientation="top" style={{height:"100px",width:"90px"}} src="Images/card2.png" />
      <CCardBody>
        <CCardText className="text-center text-white">
          Validate your idea by<br/> conduction a market survey<br/> in our platform.
        </CCardText>
        <button class="d-grid gap-2 mx-auto btn btn-outline-light text-info rounded-pill ml-2">Conduct Survey </button>
      </CCardBody>
    </CCard>
  </CCol>
  <CCol xs md lg xl className="col-spacing">

    <CCard style={{borderRadius: '2rem',width:'35%',margin:'0 auto'}}>
      <CCardImage className="img-center bg-image3" style={{height:"130px",width:"80px"}} orientation="top" src="Images/card3.png" />
      <CCardBody>
        <CCardText className="text-center text-info">
          Launch your product<br/> and get your initial <br/>set of users.
        </CCardText>
        <button class="d-grid gap-2  mx-auto btn btn-outline-info rounded-pill ml-2">Comming soon</button>
      </CCardBody>
    </CCard>
  </CCol>
  </CRow>
  <hr />
  
</div>
  );
}

export default Services;
