import React from 'react';
import '../style/home.css'
import { Col, Container,Row,col } from 'reactstrap';
import heroImg from '../assets/images/hero-img01.jpg'
import heroImg02 from '../assets/images/hero-img02.jpg'
import heroVideo from '../assets/images/hero-video.mp4'
import Subtitles from '../sharedFolder/Subtitles';
import worldImg from'../assets/images/world.png';
function Home() {
  return (
    <div>
        {/*hero SesctionStart*/}
        <section className="hero">
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <div className="hero__content">
              <div className="hero__subtitle d-flex align-items-center">
                <Subtitles subtitle={'Know Before You Go'} />
                <img src={worldImg} alt="World map" width={50} height={50} />
              </div>
              <h1>
                Travelling opens the door to creating{" "}
                <span className="highlight">memories</span>
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
                pharetra adipiscing ultrices vulputate posuere tristique. In sed
                odio nec aliquet eu proin mauris et.
              </p>
              <button className="btn primary__btn mt-4">Explore Now</button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
        {/*hero SesctionEnd*/}
    </div>
  )
}

export default Home
