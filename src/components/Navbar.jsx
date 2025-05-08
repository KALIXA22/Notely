import React, { useState, useEffect, useRef } from 'react';
import Logo from '../assets/images/image1.png';
import Profile from '../assets/images/Profile.webp';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 960);
  const navRef = useRef(null);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 960);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className="navbar" ref={navRef}>
      <div className="navbar-logo">
        <img src={Logo} alt="Logo" />
        <Link to="/">Notely</Link>
      </div>
      <div className="menu-icon" onClick={handleClick}>
        {click ? <FaTimes /> : <FaBars />}
      </div>
      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li className="nav-item">
          <Link to="/" className="nav-links" onClick={closeMobileMenu}>
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
            About Us
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/testimonials" className="nav-links" onClick={closeMobileMenu}>
            Testimonials
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/faqs" className="nav-links" onClick={closeMobileMenu}>
            FAQs
          </Link>
        </li>
          <div className="navbar-profile">
            <img src={Profile} alt="Profile" />
            <p>Kaliza</p>
          </div>
          {isMobile &&(
          <div className="navbar-logo">
        <img src={Logo} alt="Logo" />
        <Link to="/">Notely</Link>
      </div>
  )}
      </ul>
    </nav>
  );
}

export default Navbar;
