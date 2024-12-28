import React from 'react';
import "../style/home.css";
import { Col, Container, Row } from 'reactstrap';
import heroImg from '../assets/images/hero-img01.jpg';
import heroImg02 from '../assets/images/hero-img02.jpg';
import heroVideo from '../assets/images/hero-video.mp4';
import Subtitles from '../sharedFolder/Subtitles';
import worldImg from '../assets/images/world.png';
import SearchBar from '../sharedFolder/SearchBar';
import MemoryGallery from '../components/Imagegallery/memoryGallery';
import experienceImg from '../assets/images/experience.png';
import ServiceList from '../Service/ServiceList';
import FeaturedTourList from '../components/FeatureTours/FeaturedTourList';
import Testmonials from '../components/Testimonial/Testmonials';
import NewsLetter from '../sharedFolder/NewsLetter';
function Home() {
  return (
    <div>
      {/* Hero Section Start */}
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.
                </p>
              </div>
            </Col>
            <Col lg={2}>
              <div className="hero__img-box">
                <img src={heroImg} alt="Hero 1" />
              </div>
            </Col>
            <Col lg={2}>
              <div className="hero__img-box mt-4">
                <video src={heroVideo} alt="Hero video" controls />
              </div>
            </Col>
            <Col lg={2}>
              <div className="hero__img-box mt-5">
                <img src={heroImg02} alt="Hero 2" />
              </div>
            </Col>
            <SearchBar />
          </Row>
        </Container>
      </section>
      {/* Hero Section End */}

      {/* Services Section Start */}
      <section>
        <Container>
          <Row>
            <Col lg={3}>
              <h5 className="services__subtitle">What we serve</h5>
              <h2 className="services__title">We offer our best service</h2>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>
      {/* Services Section End */}

      {/* Featured Tour Section Start */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <Subtitles subtitle={"Explore"} />
              <h2 className="featured__tour-title">Our featured tours</h2>
            </Col>
            <FeaturedTourList />
          </Row>
        </Container>
      </section>
      {/* Featured Tour Section End */}

      {/* Experience Section Start */}
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="experience__content">
                <Subtitles subtitle={'Experience'} />
                <h2>With all our experience<br />we will serve you</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem explicabo ipsum perferendis pariatur natus repellendus eum aperiam doloribus tenetur, vel, ullam in commodi? Nostrum voluptatem sapiente
                </p>
                <div className="counter_wrapper d-flex align-items-center gap-5">
                  <div className="counter_box">
                    <span>12K</span>
                    <h6>Successful Trips</h6>
                  </div>
                  <div className="counter_box">
                    <span>2K</span>
                    <h6>Regular Clients</h6>
                  </div>
                  <div className="counter_box">
                    <span>15</span>
                    <h6>Years of Experience</h6>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg="6">
              <div className="experience_img">
                <img src={experienceImg} alt="Experience" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* Experience Section End */}

      {/* Gallery Section Start */}
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitles subtitle={'Gallery'} />
              <h2 className="gallery__title">Visit our Customer tour gallery</h2>
            </Col>
            <Col lg="12">
              <MemoryGallery />
            </Col>
          </Row>
        </Container>
      </section>
      {/* Gallery Section End */}

      {/* Testimonials Section Start */}
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitles subtitle={'Fans Love'} />
              <h2 className="testimonial__title">What our fans say about us</h2>
            </Col>
            <Col lg="12">
              <Testmonials />
            </Col>
          </Row>
        </Container>
      </section>
      {/* Testimonials Section End */}

      {/* Newsletter Section Start */}
      <section>
        <Container>
          <NewsLetter />
        </Container>
      </section>
      {/* Newsletter Section End */}

    </div>
  );
}

export default Home;
