import React, { useState } from 'react';
import './newsletter.css';
import { Container, Row, Col } from 'reactstrap';
import maleTourist from '../assets/images/male-tourist.png';

const NewsLetter = () => {
  const [email, setEmail] = useState(''); // State to store email input
  const [error, setError] = useState(''); // State to store error message

  // Basic email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSubscribe = () => {
    if (!email) {
      setError('Email is required!');
    } else if (!emailRegex.test(email)) {
      setError('Please enter a valid email address!');
    } else {
      setError('');
      alert(`Thank you for subscribing with the email: ${email}`);
      setEmail(''); // Clear the input field after success
    }
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);

    // Clear error message as the user types
    if (newEmail === '' || emailRegex.test(newEmail)) {
      setError('');
    }
  };

  return (
    <div className="newsLetter">
      <Container>
        <Row>
          <Col lg="6">
            <div className="newsletter__content">
              <h2>Subscribe now to get useful traveling information.</h2>
              <div className="newsletter__input">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email} // Controlled input
                  onChange={handleEmailChange} // Update state on input change
                />
                <button className="btn newsletter__btn" onClick={handleSubscribe}>
                  Subscribe
                </button>
              </div>
              {error && <p className="error-message">{error}</p>} {/* Display error message if validation fails */}
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis illo nesciunt dignissimos tenetur
                nam nostrum quo doloribus sapiente praesentium, sunt, ipsa aliquid quos quam fugit mollitia! Molestias
                odio nihil rerum?
              </p>
            </div>
          </Col>
          <Col lg="6">
            <div className="newsletter__img">
              <img src={maleTourist} alt="Male tourist" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NewsLetter;
