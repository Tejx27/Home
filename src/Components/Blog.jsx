import React from "react";
import {CContainer,CCol,CRow} from '@coreui/react';

function Blog() {
  return (
    <div className="conatiner sm-4 mt-3">
      <CContainer>
  <CRow>
    <CCol></CCol>
    <CCol xs={10}>
    <CRow className="text-center bg-info rounded-pill pt-5 pb-5">
    <CCol  xs={4}> <h5 className="text-center text-light ">Subscribe Newsletters</h5></CCol>
    <CCol  xs={4}> <input className="form-control rounded-pill" type="text" placeholder="Enter your email id." /></CCol>
    <CCol  xs={2}><button type="submit" className="d-grid gap-2 md-3  mx-auto btn btn-outline-light rounded-pill ml-2">Subscribe</button></CCol>
    </CRow>
    </CCol>
    <CCol></CCol>
  </CRow>

</CContainer>

    </div>
  );
}

export default Blog;
