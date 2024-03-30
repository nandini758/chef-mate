import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faDribbble, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <div className="conatners">
    <footer className="site-footer bg-dark ">
      <hr />
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">Copyright &copy; 2017 All Rights Reserved by 
              <a href="#">Scanfcode</a>.
            </p>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li><a className="facebook" href="#"><FontAwesomeIcon icon={faFacebook} /></a></li>
              <li><a className="twitter" href="#"><FontAwesomeIcon icon={faTwitter} /></a></li>
              <li><a className="dribbble" href="#"><FontAwesomeIcon icon={faDribbble} /></a></li>
              <li><a className="linkedin" href="#"><FontAwesomeIcon icon={faLinkedin} /></a></li>   
            </ul>
          </div>
        </div>
      </div>
    </footer>
    </div>
  );
}

export default Footer;
