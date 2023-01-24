import React from "react";
import {CContainer,CCol,CRow} from '@coreui/react';

function Blog() {
  return (
    <div className="conatiner sm-4">
      <CContainer className="cctr rounded-pill" style={{paddingTop:"5%",paddingBottom:"5%",marginLeft:""}}>
        <CRow>
          <CCol>Subscribe Newsletters</CCol>
          <CCol><input class="rounded-pill" type="text" /></CCol>
          <CCol><button class="d-grid gap-2 mx-auto btn btn-outline-info rounded-pill ml-2">Subscribe</button></CCol>
        </CRow>
        
      </CContainer>
    </div>
  );
}

export default Blog;
