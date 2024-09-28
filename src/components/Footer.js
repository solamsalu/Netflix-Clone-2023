import React from 'react';
import '../styles/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__logo">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" 
          alt="Netflix Logo" 
        />
      </div>
      <div className="footer__links">
        <ul>
          <li><a href="https://www.netflix.com/">Audio and Subtitles</a></li>
          <li><a href="https://help.netflix.com/">Help Center</a></li>
          <li><a href="https://www.netflix.com/">Gift Cards</a></li>
          <li><a href="https://media.netflix.com/">Media Center</a></li>
          <li><a href="https://ir.netflix.net/">Investor Relations</a></li>
          <li><a href="https://jobs.netflix.com/">Jobs</a></li>
          <li><a href="https://www.netflix.com/terms">Terms of Use</a></li>
          <li><a href="https://www.netflix.com/privacy">Privacy</a></li>
          <li><a href="https://www.netflix.com/legal">Legal Notices</a></li>
          <li><a href="https://www.netflix.com/corpinfo">Corporate Information</a></li>
          <li><a href="https://help.netflix.com/contactus">Contact Us</a></li>
        </ul>
      </div>
      <div className="footer__socials">
        <a href="https://www.facebook.com/netflix" aria-label="Facebook">
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
        <a href="https://www.instagram.com/netflix/" aria-label="Instagram">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://twitter.com/netflix" aria-label="Twitter">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="https://www.youtube.com/user/NewOnNetflix" aria-label="YouTube">
          <FontAwesomeIcon icon={faYoutube} />
        </a>
      </div>
      <div className="footer__copyright">
        © 2024 Netflix, Inc.
      </div>
    </footer>
  );
}

export default Footer;
