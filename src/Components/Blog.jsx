import React from "react";
import { CContainer, CCol, CRow } from "@coreui/react";

function Blog() {
  return (
    <div className="conatiner sm-4 mt-3">
      <CContainer id="blog">
        <CRow>
          <CCol></CCol>
          <CCol xs={10}>
            <CRow className="text-center bg-info rounded-pill pt-5 pb-5">
              <CCol xs={4}>
                <h5 className="text-center text-light mt-2 ">
                  Subscribe Newsletters
                </h5>
              </CCol>
              <CCol xs={4}>
                {" "}
                <input
                  className="form-control rounded-pill"
                  type="text"
                  placeholder="Enter your email id."
                />
              </CCol>
              <CCol xs={2}>
                <button
                  type="submit"
                  className="d-grid gap-2 md-3  mx-auto btn btn-outline-light rounded-pill ml-2"
                >
                  Subscribe
                </button>
              </CCol>
            </CRow>
          </CCol>
          <CCol></CCol>
        </CRow>
      </CContainer>

      <CContainer className="mt-5">
        <CRow>
          <CCol></CCol>
          <CCol style={{ backgroundColor: "#DBFEFF" }} xs={12}>
            <CRow className="text-center mt-5 pt-4 pb-4">
              <CCol xs={3}>
                {" "}
                <img
                  className="imgctr "
                  style={{ height: "40px", width: "90px" }}
                  src="Images/brandLogo.png"
                  alt="logo"
                />
              </CCol>
              <CCol xs={3}>
                <h4>Company</h4>
                <a  class="cmpny" href="#blog"><p>Blog</p></a>
                <a  class="cmpny" href="#services"><p>Services</p></a>
                <a  class="cmpny" href="#about"><p>About us</p></a>
                <a  class="cmpny" href="#about"> <p>Conatact us</p></a>
              </CCol>
              <CCol xs={4}>
                <h4>Social</h4> <br />
                <CRow className="justify-content-center">
                  <CCol xs={2}>
                    <a href="https://www.instagram.com/tejx_31/"  target={"_blank"}>
                      <img
                        src="Images/Insta.png"
                        style={{ height: "40px", width: "40px" }}
                        alt="Insta"
                      />
                    </a>
                  </CCol>
                  <CCol xs={2}>
                    <a href="https://www.linkedin.com/in/tejxs/"  target={"_blank"}>
                      <img
                        src="Images/linkdIn.png"
                        style={{ height: "40px", width: "40px" }}
                        alt="Insta"
                      />
                    </a>
                  </CCol>
                  <CCol xs={2}>
                    <a href="https://twitter.com/__Tejas___" target={"_blank"}>
                      <img
                        src="Images/twitter.png"
                        style={{ height: "40px", width: "40px" }}
                        alt="Insta"
                      />
                    </a>
                  </CCol>
                </CRow>
              </CCol>
            </CRow>
          </CCol>
          <CCol></CCol>
        </CRow>
      </CContainer>
    </div>
  );
}

export default Blog;
