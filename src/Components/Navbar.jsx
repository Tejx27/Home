
import React from "react";

function Navbar(){
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary flex-column flex-sm-row">
        <div class="container-fluid">
        <a class="navbar-brand" href="#">
      <img src="Images/brandLogo.png" alt="BrandLogo" height="20" /></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
            <li class="nav-item">
                <a class="nav-link" href="#home">
                  Home
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#services">
                  Services
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#about">
                  About
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">
                  Blog
                </a>
            </li>
        </ul>
            
          </div>
        </div>
      </nav>
      );
}

export default Navbar;