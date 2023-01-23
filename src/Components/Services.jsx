import React from "react";
import { CCardBody,CCard,CCardFooter,CCardImage,CCardText,CCardTitle,CCol,CRow } from '@coreui/react';



function Services() {
  return (
    <div class="container">
      <h5 class="text-center text-info">OUR SERVICES</h5>
      <p class="text-center">What we offer for you</p>
      <CRow className="card-container" xs={{ cols: 1, gutter: 4 }} xs={12} sm={6} md={4} lg={3}>
      <CCol xs md lg xl className="col-spacing">
    <CCard style={{borderRadius: '2rem',width:'35%',margin:'0 auto'}}>
      <CCardImage className="img-center bg-image" orientation="top" style={{height:"80px",width:"80px"}} src="Images/card1.png" />
      <CCardBody>
        <CCardText className="text-center">
          Laucha your product<br/>on our launchpad <br/>with huge community.
        </CCardText>
        <button class="d-grid gap-2  mx-auto btn btn-outline-info rounded-pill ml-2">Launching Soon</button>
      </CCardBody>
    </CCard>
  </CCol>
  <CCol xs md lg xl className="col-spacing">

    <CCard style={{borderRadius: '2rem',width:'35%',margin:'0 auto'}}>
      <CCardImage className="img-center bg-image" orientation="top" style={{height:"80px",width:"80px"}} src="Images/card2.png" />
      <CCardBody>
        <CCardText className="text-center">
          Validate your idea by<br/> conduction a market survey<br/> in our platform.
        </CCardText>
        <button class="d-grid gap-2  mx-auto btn btn-outline-info rounded-pill ml-2">Conduct Survey </button>
      </CCardBody>
    </CCard>
  </CCol>
  <CCol xs md lg xl className="col-spacing">

    <CCard style={{borderRadius: '2rem',width:'35%',margin:'0 auto'}}>
      <CCardImage className="img-center bg-image" style={{height:"80px",width:"80px"}} orientation="top" src="Images/card3.png" />
      <CCardBody>
        <CCardText className="text-center">
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
