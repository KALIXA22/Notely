import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faYoutube, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <p>Follow us On:</p>
      <div>
        <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
        <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
        <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
        <a href="#"><FontAwesomeIcon icon={faYoutube} /></a>
        <a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a>
      </div>
      <nav>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Testimonials</a>
        <a href="#">Faqs</a>
      </nav>
      <p>Copyright © 2025: Designed by The Notely-Team</p>
    </footer>
  );
};

export default Footer;
