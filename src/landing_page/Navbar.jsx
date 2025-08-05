import React from "react";
import logo from '../assets/logo.svg';
import '../index.css'
import { Link } from "react-router-dom";
function Navbar() {
    return ( 
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
        <img src={logo} style={{height : "20px"}}/>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/signup">Signup</Link>
        </li>
       
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/about">About</Link>
        </li>
       
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/products">Product</Link>
        </li>
       
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="pricing">Pricing</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="support">Support</Link>
        </li>
       
       
       
      </ul>
      <form class="d-flex" role="search">
        
      </form>
    </div>
  </div>
</nav>
       
     );
}

export default Navbar;