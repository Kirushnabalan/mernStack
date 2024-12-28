import React from 'react';
import '../style/home.css'
import { Col, Container,Row } from 'reactstrap';
import heroImg from '../assets/images/hero-img01.jpg'
import heroImg02 from '../assets/images/hero-img02.jpg'
import heroVideo from '../assets/images/hero-video.mp4'
import Subtitles from '../sharedFolder/Subtitles';
import worldImg from'../assets/images/world.png';
import SearchBar from '../sharedFolder/SearchBar';

import ServiceList from '../Service/ServiceList';
import FeaturedTourList from '../components/FeatureTours/FeaturedTourList';
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
            </div>
          </Col>
          <Col lg='2'>
        <div className="hero__img-box">
            <img src={heroImg} alt=""/>
        </div>
          </Col>
          <Col lg='2'>
        <div className="hero__img-box mt-4">
            <video src={heroVideo} alt="" controls/>
        </div>
          </Col>
          <Col lg='2'>
        <div className="hero__img-box mt-5">
            <img src={heroImg02} alt=""/>
        </div>
          </Col>
          <SearchBar/>
        </Row>
      </Container>
    </section>
        {/*hero SesctionEnd*/}
        <section>
            <Container>
                <Row>
                    <Col lg='3'>
                    <h5 className="services__subtitle">
                        What we serve
                    </h5>
                    <h2 className="services__title">
                        We offer our best service
                    </h2>
                    </Col>
                    <ServiceList/>
                </Row>
            </Container>
        </section>

        {/* featured tour section start */}
        <section>
          <Container>
            <Row>
              <Col lg="12" className="mb-5">
                <Subtitles subtitle={"Explore"}/>
                <h2 className="featured__tour-title">Our featured tours</h2>
              </Col>
              <FeaturedTourList/>
            </Row>
          </Container>
        </section>
        {/* featured tour section end */}
    </div>
  )
}

export default Home
