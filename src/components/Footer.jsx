import React from 'react';
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import './Footer.css';


function Footer() {
  return (
    <>
    <div className="footer-section">
        <p className='footer-socials'>Follow us on:</p>
        <div className="socials">
        <InstagramIcon/>
        <FacebookIcon/>
        <TwitterIcon/>
        <LinkedInIcon/>
        </div>
    </div>
    </>
  )
}

export default Footer;