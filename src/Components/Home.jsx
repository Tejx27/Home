import React from "react";
import App from "./App";

function Home(props) {
  return (
    // First content
    <div id="home" class="container mt-4">
      <div class="row">
        <div class="col-sm mt-3">
          <h5  class="text-info">{props.name}</h5>
          <br />
          <p>
            {props.para1}
            <br />
            {props.para2}
            <br />
            {props.para3}
          </p>
          <br />
          <div class="row">
            <div class="col-6 mt-3 ">
              <div class="btn-group d-flex justify-content-center">
                <button class="btn btn-outline-info rounded-pill mr-2">
                  {props.btn1}
                </button>
                <button class="btn btn-outline-info rounded-pill ml-2">
                  {props.btn2}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm ml-3">
          <img
            src={props.img1}
            style={{ height: "120%", width: "50%",marginleft:"5px" }}
            alt="showing statstic"
          />
        </div>
      </div>
      <hr />
      {/* Second starts from here */}
      <h5 class="text-center text-info">{props.name2}</h5>
      <p class="text-center">{props.paragraph}</p>
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-4">
            <img
              src={props.img2}
              style={{ height: "97%", width: "50%" }}
              alt="second image"
            />
            <p>{props.secpara}</p>
          </div>
          <div class="col-md-4">
            <form>
              <div class="form-group mt-2">
                <label for="input1" >Email</label>
                <input
                  type="email"
                  class="form-control rounded-pill"
                  id="input1"
                  placeholder="Enter your email id here."
                />
              </div>
              <div class="form-group mt-2">
                <label for="input2">Problem statement</label>
                <input
                  type="text"
                  class="form-control rounded-pill"
                  id="input2"
                  placeholder="Problem  statement of your startup."
                />
              </div>
              <div class="form-group mt-2">
                <label for="input3">Solution statement</label>
                <input
                  type="text"
                  class="form-control rounded-pill"
                  id="input3"
                  placeholder="Solution statement of your problem statement."
                />
              </div>
              <div class="form-group text-center mt-2">
                <button class="d-grid gap-2 col-6 mx-auto btn btn-outline-info rounded-pill ml-2">
                  {props.btn3}
                </button>
              </div>
            </form>
          </div>
          <div class="col-md-4 d-flex align-items-center justify-content-center">
            <div class="btn-group">
            <button class="btn btn-outline-info rounded-pill dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
		Select Domain
	  </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <a class="dropdown-item" href="#">
                  Web Develoment
                </a>
                <a class="dropdown-item" href="#">
                  App Development
                </a>
                <a class="dropdown-item" href="#">
                  Machine Learning
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Home;
