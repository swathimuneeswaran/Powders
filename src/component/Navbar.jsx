import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import Company_logo from "../assets/images/Company_logo.png";
import "./Navbar.css"; // Make sure to import the CSS file
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div
        className={`${
          menuOpen ? "container-fluid menu-open" : "container-fluid"
        }`}
        id="navbar"
      >
        <Link to="/home" onClick={() => setMenuOpen(false)}>
          <img src={Company_logo} alt="Company Logo" />
        </Link>

        <nav>
          <ul className={menuOpen ? "open" : ""}>
            <li>
              <Link to="/home" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/product" onClick={() => setMenuOpen(false)}>
                Product
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setMenuOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setMenuOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <div id="hamburger" onClick={toggleMenu}>
          <div className="social-media">
            <a href="https://www.instagram.com/shreehariglobalfoods_kannada/?igsh=MTh1bmJtZG9zcG9yNg%3D%3D" target="_blank">
              <InstagramIcon />
            </a>
            <a href="https://www.youtube.com/@ShreeHariGlobalFoods" target="_blank">
              <YouTubeIcon />
            </a>
            <a href="https://wa.me/7338490894 "  target="_blank">
                <WhatsAppIcon />
              </a>
          </div>
          <div>☰</div>
        </div>
        <div className="social-media d-none d-md-inline">
          <a href="https://www.instagram.com/shreehariglobalfoods_kannada/?igsh=MTh1bmJtZG9zcG9yNg%3D%3D" target="_blank">
            <InstagramIcon />
          </a>
          <a href="https://www.youtube.com/@ShreeHariGlobalFoods" target="_blank">
            <YouTubeIcon />
          </a>
          <a href="https://wa.me/7338490894 "  target="_blank">
                <WhatsAppIcon />
          </a>
        </div>
        {menuOpen && (
          <div className="blurred-image ">
            {/* <img src="path-to-your-image.jpg" alt="Blurred" /> */}
          </div>
        )}
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
