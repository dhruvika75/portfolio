

// import React from 'react';
// import { Link } from 'react-router-dom';
// import '../assets/css/header.css';
// import { RiHome5Line, RiInformationLine, RiStackLine, RiBriefcaseLine, RiMailLine } from 'react-icons/ri';

// function Header() {
//   return (
//     <nav className="navbar navbar-expand-lg bg-body-tertiary">
//       <div className="container-fluid">
//         {/* Logo */}
//         <Link className="navbar-brand logo" to="/">
//           <b>DHRUVIKA</b>
//         </Link>
        
//         {/* Toggle Button */}
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarSupportedContent"
//           aria-controls="navbarSupportedContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
        
//         {/* Menu Items */}
//         <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
//           <ul className="navbar-nav">
//             <li><Link to="/" className="nav-link" style={{color:"black",fontWeight:"700",fontSize:"16px"}}><RiHome5Line /> Home</Link></li>
//             <li><Link to="/about" className="nav-link" style={{color:"black",fontWeight:"700",fontSize:"16px"}} ><RiInformationLine /> About</Link></li>
//             <li><Link to="/service" className="nav-link"  style={{color:"black",fontWeight:"700",fontSize:"16px"}}><RiStackLine /> Services</Link></li>
//             <li><Link to="/work" className="nav-link"  style={{color:"black",fontWeight:"700",fontSize:"16px"}}><RiBriefcaseLine /> Work</Link></li>
//             <li><Link to="/contact" className="nav-link"  style={{color:"black",fontWeight:"700",fontSize:"16px"}}><RiMailLine /> Contact</Link></li>
//           </ul>
//         </div>
        
//         {/* Let's Talk Button */}
//         <div className="nav-actions">
//           <Link to="/contact" className="lets-talk">
//             Let’s Talk <i className="fa-solid fa-arrow-right"></i>
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Header;


import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/header.css";
import {
  RiHome5Line,
  RiInformationLine,
  RiStackLine,
  RiBriefcaseLine,
  RiMailLine,
} from "react-icons/ri";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        {/* Logo */}
        <Link className="navbar-brand logo" to="/">
          <b>DHRUVIKA</b>
        </Link>

        {/* Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu Items */}
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link" style={{color:"black",fontWeight:"700",fontSize:"16px"}}>
                <RiHome5Line /> Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link" style={{color:"black",fontWeight:"700",fontSize:"16px"}}>
                <RiInformationLine /> About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/service" className="nav-link" style={{color:"black",fontWeight:"700",fontSize:"16px"}}>
                <RiStackLine /> Services
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/work" className="nav-link" style={{color:"black",fontWeight:"700",fontSize:"16px"}}>
                <RiBriefcaseLine /> Work
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link" style={{color:"black",fontWeight:"700",fontSize:"16px"}}>
                <RiMailLine /> Contact
              </Link>
            </li>
          </ul>

          <div className="nav-actions2">
          <Link to="/contact" className="lets-talk">
            Let’s Talk <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </div>
        </div>

        {/* Let's Talk Button */}
        <div className="nav-actions">
          <Link to="/contact" className="lets-talk">
            Let’s Talk <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;
