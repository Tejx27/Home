import React from "react";
import {
  CCol,
  CRow,
  CContainer,
} from "@coreui/react";

function About() {
  return (
    <div>
      <h4  id="about" className="text-center text-info">About us</h4>
      <img
        className="imgctr mt-3"
        style={{ height: "20px", width: "70px" }}
        src="Images/brandLogo.png"
        alt="logo"
      />
      <p className="fontchg text-center mt-3">
        We're SaaS company that's dedicated to empowering entrepreneurship by
        <br />
        making it easier and more relible to start up a Business.
      </p>
      <CContainer>
        <CRow xs={{ cols: 3 }}>
          <CCol>
            <img
              style={{
                marginTop: "23%",
                marginLeft: "90%",
                height: "30px",
                width: "40px",
              }}
              src="Images/about2.png"
              class="img-fluid"
              alt="image1"
            />
          </CCol>
          <CCol>
            <img
              style={{ marginLeft: "20px", height: "120%", width: "120%" }}
              src="Images/about.png"
              class="img-fluid"
              alt="about1"
            />
          </CCol>
          <CCol>
            <img
              style={{
                marginTop: "23%",
                marginLeft: "15%",
                height: "40px",
                width: "50px",
              }}
              src="Images/about1.png"
              alt=""
            />
            <CCol>
              <img
                style={{
                  marginTop: "5%",
                  marginRight: "50%",
                  height: "40px",
                  width: "50px",
                }}
                src="Images/about3.png"
                alt="about3"
              />
            </CCol>
          </CCol>
          <CCol>
            <img
              style={{
                marginTop: "-35%",
                marginLeft: "65%",
                height: "40px",
                width: "80px",
              }}
              src="Images/about1.png"
              alt=""
            />
          </CCol>
        </CRow>
      </CContainer>
      {/* why us section started */}
      <CContainer>
        <CRow xs={{ cols: 12 }}>
          <CCol xs={4}>
            <img
              style={{
                marginTop: "15%",
                marginLeft: "70%",
                height: "25px",
                width: "30px",
              }}
              src="Images/about2.png"
              class="img-fluid"
              alt="image1"
            />
          </CCol>
          <CCol xs={4}>
            <h3 className="text-center mt-5">Why us</h3>
            <img
              className="imgctr mt-3"
              style={{ height: "20px", width: "70px" }}
              src="Images/brandLogo.png"
              alt="logo"
            />
            <p
              className="text-center mt-3"
              style={{ fontFamily: "'Athiti', sans-serif", fontSize: "19px" }}
            >
              Our platform lats you validate your concept, and launch your
              product
              <br />
              through our launch pad with the exprianced <br />
              founders and start up community.
            </p>
          </CCol>
          <CCol xs={4}>
            <img
              style={{
                marginTop: "20%",
                marginLeft: "40%",
                height: "30px",
                width: "30px",
              }}
              src="Images/about3.png"
              alt=""
            />
          </CCol>
        </CRow>
      </CContainer>
      {/* Our work section start here */}

      <CContainer>
        <CRow xs={{ cols: 3 }}>
          <CCol>
            <img
              style={{
                marginTop: "2%",
                marginLeft: "60%",
                height: "40px",
                width: "50px",
              }}
              src="Images/about1.png"
              class="img-fluid"
              alt="image1"
            />
          </CCol>
          <CCol className="mt-3">
            <h3 className="text-center">Our work</h3>
            <p className="text-center" style={{ fontFamily: "'Athiti', sans-serif", fontSize: "19px" }}>We're building an ecosystem with our technology, helping you<br/>
            start at an affordale cost while streamlining the process of <br/>
            starting your Startup.</p>
          </CCol>
          <CCol xs={4}>
            <img
              style={{
                marginTop: "23%",
                marginLeft: "25%",
                height: "40px",
                width: "50px",
              }}
              src="Images/about2.png"
              alt=""
            />
            <CCol xs={4}>
              <img
                style={{
                  marginTop: "5%",
                  marginRight: "60%",
                  height: "40px",
                  width: "50px",
                }}
                src="Images/about1.png"
                alt="about3"
              />
            </CCol>
          </CCol>
          <CCol xs={4}>
            <img
              style={{
                marginTop: "-60%",
                marginLeft: "70%",
                height: "33px",
                width: "80px",
              }}
              src="Images/about3.png"
              alt=""
            />
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
}

export default About;
