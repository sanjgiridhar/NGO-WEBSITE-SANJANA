import React from "react";
import "./Navbar.css";
import "../index.css";
import {Link} from "react-scroll";
const Navbar = () => {
  
  return (
    <>
      <nav className='container'>
        <ul>
          <li><Link to="hero" smooth={true} duration={500}>Home</Link></li>
          <li><Link to="about" smooth={true} duration={500}>About Us</Link></li>
          <li><Link to="projects" smooth={true} duration={500}>Projects</Link></li>
          <li><Link to="getinvolved" smooth={true} duration={500}>Get Involved</Link></li>
          <li><Link to="events" smooth={true} duration={500}>Events</Link></li>
          <li><Link to="blogs" smooth={true} duration={500}>Blogs</Link></li>
          <li><Link to="contact" smooth={true} duration={500}>
            <button className="btn">Contact Us</button>
          </Link></li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
