import React from 'react';
import './Footer.css';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { RiMapPinFill, RiPhoneFill, RiMailFill } from "react-icons/ri";

// Define quick links and resources with fallback to blank if no path
const quickLinks = [
  { path: '/home', display: 'Home' },
  { path: '/about', display: 'About' },
  { path: '/tours', display: 'Tours' }
];

const resources = [
  { path: '/privacy', display: 'Privacy Policy' },
  { path: '/terms', display: 'Terms of Service' },
  { path: '/faq', display: 'FAQ' }
];

// Helper function to fallback to a blank route if path is missing
const safeLink = (path) => {
  return path ? path : '/'; // Fallback to the home or blank route
};

// Safe fallback for social media links (using # as placeholder)
const safeSocialLink = (path) => {
  return path ? path : '#'; // Fallback to # if no social link provided
};

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row>
          {/* Logo and Description */}
          <Col lg="3" md="6" sm="12" className="mb-4">
            <div className="footer__logo">
              <img src={logo} alt="Company Logo" className="mb-3" />
            </div>
            <p>
              Explore the world with our premium tours and travel packages. Your adventure starts here.
            </p>
            <div className="social__links d-flex align-items-center gap-3">
              <span>
                <Link to={safeSocialLink('#')}>
                  <i className="ri-youtube-fill"></i>
                </Link>
              </span>
              <span>
                <Link to={safeSocialLink('#')}>
                  <i className="ri-facebook-fill"></i>
                </Link>
              </span>
              <span>
                <Link to={safeSocialLink('#')}>
                  <i className="ri-instagram-fill"></i>
                </Link>
              </span>
              <span>
                <Link to={safeSocialLink('#')}>
                  <i className="ri-twitter-line"></i>
                </Link>
              </span>
            </div>
          </Col>

          {/* Quick Links */}
          <Col lg="3" md="6" sm="12" className="mb-4">
            <h5 className='footer__link-title'>Quick Links</h5>
            <ListGroup className="footer__quick-links">
              {quickLinks.map((item, index) => (
                <ListGroupItem key={index} className="ps-0 border-0">
                  <Link to={safeLink(item.path)}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          {/* Resources */}
          <Col lg="3" md="6" sm="12" className="mb-4">
            <h5 className='footer__link-title'>Resources</h5>
            <ListGroup className="footer__quick-links">
              {resources.map((item, index) => (
                <ListGroupItem key={index} className="ps-0 border-0">
                  <Link to={safeLink(item.path)}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          {/* Contact Information */}
          <Col lg="3" md="6" sm="12" className="mb-4">
            <h5 className='footer__link-title'>Contact Us</h5>
            <p className="mb-2">
              <RiMapPinFill className="footer__icon" /> Address: 123 Travel Street, Adventure City
            </p>
            <p className="mb-2">
              <RiPhoneFill className="footer__icon" /> Phone: +1 (555) 123-4567
            </p>
            <p>
              <RiMailFill className="footer__icon" /> Email: support@explorglobel.com
            </p>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col lg="12" className="text-center">
            <p className="footer__copyright">&copy; {new Date().getFullYear()} ExplorGlobel. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
