import React, { useState } from 'react';
import { Container, Row, Button } from 'reactstrap';
import { NavLink, Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import './header.css';

const nav__links = [
  { path: '/home', display: 'Home' },
  { path: '/about', display: 'About' },
  { path: '/tour', display: 'Tours' }
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className='header'>
      <Container>
        <Row>
          <div className="nav_wrapper d-flex align-items-center justify-content-between">
            {/* Logo */}
            <div className="logo">
              <img src={logo} alt="Site Logo" />
            </div>

            {/* Navigation Menu */}
            <div className={`navigation ${isMenuOpen ? 'menu_open' : ''}`}>
              <ul className='menu d-flex align-items-center gap-5'>
                {nav__links.map((item, index) => (
                  <li className='nav_item' key={index}>
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive ? 'active__link' : ''
                      }
                      onClick={() => setIsMenuOpen(false)} // Close menu on link click
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Section */}
            <div className="nav__right d-flex align-items-center gap-4">
              <div className='nav__btns d-flex align-items-center gap-4'>
                <Button className="btn secondary_btn">
                  <Link to='/login'>Login</Link>
                </Button>
                <Button className="btn primary_btn">
                  <Link to='/register'>Register</Link>
                </Button>
              </div>
              {/* Mobile Menu Icon */}
              <span className='mobile_menu' onClick={toggleMenu}>
                <i className="ri-menu-line"></i>
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
