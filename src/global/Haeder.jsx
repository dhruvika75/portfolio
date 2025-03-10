
// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import {
//   RiSunLine,
//   RiMoonLine,
//   RiMenuLine,
//   RiCloseLine,
//   RiHome5Line,
//   RiInformationLine,
//   RiStackLine,
//   RiMailLine,
//   RiBriefcaseLine
// } from "react-icons/ri";
// import "../assets/css/header.css";

// const Header = () => {
//   // Theme Management
//   const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
//   const [theme, setTheme] = useState(
//     localStorage.getItem("theme") || (prefersDark ? "dark" : "light")
//   );
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [activeLink, setActiveLink] = useState("home");

//   useEffect(() => {
//     document.documentElement.setAttribute("data-theme", theme);
//     localStorage.setItem("theme", theme);
//   }, [theme]);

//   const toggleTheme = () => {
//     setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
//   };

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   const handleLinkClick = (link) => {
//     setActiveLink(link);
//     setIsMobileMenuOpen(false);
//   };

//   return (
//     <nav className="premium-nav">
//       <div className="nav-container">
//         <Link to="/" className="nav-logo">
//           <span className="logo-text">DHRUVIKA</span>
//           <div className="logo-shine"></div>
//         </Link>

//         <div className={`nav-links ${isMobileMenuOpen ? "active" : ""}`}>
//           <NavLink to="/" icon={<RiHome5Line />} text="Home" active={activeLink === "home"} onClick={() => handleLinkClick("home")} />
//           <NavLink to="/about" icon={<RiInformationLine />} text="About" active={activeLink === "about"} onClick={() => handleLinkClick("about")} />
//           <NavLink to="/service" icon={<RiStackLine />} text="Services" active={activeLink === "services"} onClick={() => handleLinkClick("services")} />
//           <NavLink to="/work" icon={<RiBriefcaseLine />} text="Works" active={activeLink === "work"} onClick={() => handleLinkClick("work")} />
//           <NavLink to="/contact" icon={<RiMailLine />} text="Contact" active={activeLink === "contact"} onClick={() => handleLinkClick("contact")} />
//         </div>
        

//         <div className="nav-actions">
//           {/* Theme Toggle */}
//           <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
//             {theme === "light" ? <RiMoonLine className="moon-icon" /> : <RiSunLine className="sun-icon" />}
//           </button>

//           {/* Mobile Menu Toggle */}
//           <button className="mobile-menu" onClick={toggleMobileMenu} aria-expanded={isMobileMenuOpen} aria-label="Menu">
//             {isMobileMenuOpen ? <RiCloseLine /> : <RiMenuLine />}
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// };

// // Reusable NavLink Component
// const NavLink = ({ to, icon, text, active, onClick }) => {
//   return (
//     <Link to={to} className={`nav-link ${active ? "active" : ""}`} onClick={onClick}>
//       {icon}
//       <span>{text}</span>
//     </Link>
//   );
// };

// export default Header;


import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  RiSunLine,
  RiMoonLine,
  RiMenuLine,
  RiCloseLine,
  RiHome5Line,
  RiInformationLine,
  RiStackLine,
  RiMailLine,
  RiBriefcaseLine
} from "react-icons/ri";
import "../assets/css/header.css";

const Header = () => {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || (prefersDark ? "dark" : "light")
  );
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  

  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="premium-nav">
      <div className="nav-container">
        {/* Logo */}
        <Link to="/" className="nav-logo">
          <span className="logo-text">DHRUVIKA</span>
          <div className="logo-shine"></div>
        </Link>

        {/* Navigation Links */}
        <div className={`nav-links ${isMobileMenuOpen ? "active" : ""}`}>
          <NavLink to="/" icon={<RiHome5Line />} text="Home" active={activeLink === "home"} onClick={() => handleLinkClick("home")} />
          <NavLink to="/about" icon={<RiInformationLine />} text="About" active={activeLink === "about"} onClick={() => handleLinkClick("about")} />
          <NavLink to="/service" icon={<RiStackLine />} text="Services" active={activeLink === "services"} onClick={() => handleLinkClick("services")} />
          <NavLink to="/work" icon={<RiBriefcaseLine />} text="Works" active={activeLink === "work"} onClick={() => handleLinkClick("work")} />
          <NavLink to="/contact" icon={<RiMailLine />} text="Contact" active={activeLink === "contact"} onClick={() => handleLinkClick("contact")} />
        </div>
        
        {/* Right Side Actions */}
        <div className="nav-actions d-flex justify-content-between ">
        <button className="theme-toggle mx-3" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === "light" ? <RiMoonLine className="moon-icon" /> : <RiSunLine className="sun-icon" />}
          </button>

          {/* Let's Talk Button */}
          <Link to="/contact" className="lets-talk">
            Let’s Talk <i className="fa-solid fa-arrow-right"></i>
          </Link>

          {/* Theme Toggle */}
         

          {/* Mobile Menu Toggle */}
          <button className="mobile-menu" onClick={toggleMobileMenu} aria-expanded={isMobileMenuOpen} aria-label="Menu">
            {isMobileMenuOpen ? <RiCloseLine /> : <RiMenuLine />}
          </button>
        </div>
      </div>
    </nav>
  );
};

// Reusable NavLink Component
const NavLink = ({ to, icon, text, active, onClick }) => {
  return (
    <Link to={to} className={`nav-link ${active ? "active" : ""}`} onClick={onClick}>
      {icon}
      <span>{text}</span>
    </Link>
  );
};

export default Header;
