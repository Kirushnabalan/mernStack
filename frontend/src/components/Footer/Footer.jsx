import React from 'react'
import './Footer.css'
import { Container,Row,Col,ListGroup,ListGroupItem } from 'reactstrap'
import {Link} from "react-router-dom"
import logo from "../../assets/images/logo.png"
const quick_link = [
  { path: '/home', display: 'Home' },
  { path: '/about', display: 'About' },
  { path: '/tour', display: 'Tours' }
];
const quick_link2 = [
  { path: '/home', display: 'Home' },
  { path: '/about', display: 'About' },
  { path: '/tour', display: 'Tours' }
];

function Footer() {
  return (
    <Footer>
      <Container>
        <Row>
          <Col lg="3">
            <img src={logo} alt=""/>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam, enim veniam doloremque debitis autem pariatur! Optio, itaque. Consequuntur unde est ducimus totam, deleniti sunt possimus mollitia
               quisquam laudantium, expedita suscipit!</p>
               <div className="social__links d-flex align-items-center gap-4">
                <span>
                  <Link to='#'>
                  <i class="ri-youtube-fill"></i>
                  </Link>
                </span>
                <span>
                  <Link to='#'>
                  <i class="ri-facebook-fill"></i>
                  </Link>
                </span>
                <span>
                  <Link to='#'>
                  <i class="ri-instagram-fill"></i>
                  </Link>
                </span>
                <span>
                  <Link to='#'>
                  <i class="ri-twitter-x-line"></i>
                  </Link>
                </span>
               </div>
          </Col>
          <Col lg="3">
            <h5 className='footer__link-title'> Discover</h5>
            <ListGroup className="footer__quick-links">
              {
                quick_link.map((item,index)=>(
                  <ListGroupItem key={index} className="ps-0 footer">
                    <link to={item.path}>{item.display}</link>
                  </ListGroupItem>
                ))
              }
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </Footer>
  )
}

export default Footer