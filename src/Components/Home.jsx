import React from "react";
import App from "./App";

function Home(props) {
  return (
    // First content
    <div class="container mt-4">
      <div class="row">
        <div class="col-sm">
          <h5>{props.name}</h5>
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
            <div class="col-6 ">
              <div class="btn-group d-flex justify-content-center">
                <button class="btn btn-outline-info rounded mr-2">
                  {props.btn1}
                </button>
                <button class="btn btn-outline-info rounded ml-2">
                  {props.btn2}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm ml-3">
          <img
            src={props.img1}
            style={{ height: "90%", width: "50%" }}
            alt="showing statstic"
          />
        </div>
      </div>
      <hr />
      {/* Second starts from here */}
      <h5 class="text-center">{props.name2}</h5>
      <p class="text-center">{props.paragraph}</p>
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-4">
            <img
              src={props.img2}
              style={{ height: "90%", width: "50%" }}
              alt="second image"
            />
          </div>
          <div class="col-md-4">
            <form>
              <div class="form-group">
                <label for="input1">Input 1</label>
                <input type="text" class="form-control" id="input1" />
              </div>
              <div class="form-group">
                <label for="input2">Input 2</label>
                <input type="text" class="form-control" id="input2" />
              </div>
              <div class="form-group">
                <label for="input3">Input 3</label>
                <input type="text" class="form-control" id="input3" />
              </div>
              <div class="form-group text-center">
                <button type="submit" class="btn btn-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div class="col-md-4 d-flex align-items-center justify-content-center">
            <div class="btn-group">
  <button type="button" class="btn btn-outline-info rounded dropdown-toggle" aria-labelledby="dropdownMenuButton1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Select Domain
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <a class="dropdown-item" href="#">Domain1</a>
    <a class="dropdown-item" href="#">Domain2</a>
    <a class="dropdown-item" href="#">Domain2</a>
  </div>
</div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
