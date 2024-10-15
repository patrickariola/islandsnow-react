'use client';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Container } from "react-bootstrap";
import '../style.css';

const TopMenu = () => (
  <nav className="navbar navbar-expand-sm navbar-light bg-light">
    <div className="container">
      <ul className="navbar-nav">
        <li className="nav-item"><i className="bi bi-facebook p-1"></i></li>
        <li className="nav-item"><i className="bi bi-twitter p-1"></i></li>
        <li className="nav-item"><i className="bi bi-pinterest p-1"></i></li>
        <li className="nav-item"><i className="bi bi-instagram p-1"></i></li>
      </ul>
      <ul className="navbar-nav ms-auto">
        <li className="nav-item"><i className="bi bi-house-fill p-1"></i></li>
        <li className="nav-item"><i className="bi bi-search p-1"></i></li>
        <li className="nav-item"><i className="bi bi-person-fill p-1"></i></li>
        <div className="nav-item dropdown">
          <div className="dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <i className="bi bi-cart"></i> 0
          </div>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li>Your cart is empty.</li>
          </ul>
        </div>
      </ul>
    </div>
  </nav>
);

const IslandSnowLogo = () => (
  <div className="row">
    <div className="col">
      <img 
        src="https://courses.ics.hawaii.edu/ics314f24/morea/ui-frameworks/experience-islandsnow-bootstrap-logo.png" 
        alt="Island Snow Logo" 
        className="img-fluid rounded mx-auto d-block py-3" 
      />
    </div>
  </div>
);

const MiddleMenu = () => (
  <div className="row justify-content-center pt-4">
    {/* Men Dropdown */}
    <div className="col-1">
      <div className="dropdown">
        <div className="dropdown-toggle"><strong>MEN</strong></div>
      </div>    
    </div>
    {/* Women Dropdown */}
    <div className="col-1">
      <div className="dropdown">
        <div className="dropdown-toggle"><strong>WOMEN</strong></div>
      </div>    
    </div> 
    {/* Kids Dropdown */}
    <div className="col-1">
      <div className="dropdown">
        <div className="dropdown-toggle"><strong>KIDS</strong></div>
      </div>   
    </div>
    {/* Brands Dropdown */}
    <div className="col-1">
      <div className="dropdown">
        <div className="dropdown-toggle"><strong>BRANDS</strong></div>
      </div>     
    </div>
    <div className="col-1">
      <strong>SEARCH</strong>
    </div>
  </div>
);

const FullWidthImage = () => (
  
  <div className="row justify-content-center"> 
    <div className="col text-center">
      <img 
        src="https://courses.ics.hawaii.edu/ics314f24/morea/ui-frameworks/experience-islandsnow-bootstrap-main.png" 
        alt="Middle Page Photo" 
        className="img-fluid pt-3" 
      />
    </div>
  </div>
);

const FooterMenu = () => (
  <footer>
    <div className="container">
      <div className="row pt-3 pb-3">
        <div className="col">
          NAVIGATION
          <hr />
          About Us <br />
          Employment <br />
          Videos
        </div>
        <div className="col">
          MAIN MENU
          <hr />
          Men <br />
          Women <br />
          Kids <br />
        </div>
        <div className="col">
          CONNECT
          <hr />
          Sign up for the latest updates<br />
          <input className="bg-white text-dark" type="text" placeholder="Enter Email Address" />
          <div className="btn btn-dark">Join</div>
        </div>
      </div>
    </div>
  </footer>
);

export default function Home() {
  return (
    <main>
  
        <TopMenu />
        <IslandSnowLogo />
        <MiddleMenu />
        <FullWidthImage />
        <FooterMenu />
    </main>
  );
}
