import React from 'react'
import Slider from 'react-slick'
import ava01 from '../../assets/images/ava-1.jpg'
import ava02 from '../../assets/images/ava-2.jpg'
import ava03 from '../../assets/images/ava-3.jpg'
// Slick slider settings with responsive breakpoints
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1024, // Tablets
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768, // Mobile devices
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480, // Small mobile devices
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Testimonials = () => {
  return (
    <Slider {...settings}>
        <div className="testimonial py-4 px-3">
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta molestiae voluptatibus quasi, numquam dolor voluptate. Impedit 
                distinctio accusantium, beatae, nisi amet sit sed corrupti odit, minus vitae reiciendis neque aliquid?
            </p>
            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava01} className="w-25 h-25 rounded-2" alt=""/>
                <div className="mb-0 mt-3">
                  <h5>Jhon Doe</h5>
                  <p>Customer</p>
                </div>
            </div>
        </div>

        {/* Add more testimonials if needed */}
        <div className="testimonial py-4 px-3">
            <p>
                Praesentium nobis ab, atque voluptas repellendus. Dolores mollitia eaque eligendi pariatur impedit, magni quibusdam iusto doloribus?
            </p>
            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava02} className="w-25 h-25 rounded-2" alt=""/>
                <div className="mb-0 mt-3">
                  <h5>Jane Smith</h5>
                  <p>Customer</p>
                </div>
            </div>
        </div>

        <div className="testimonial py-4 px-3">
            <p>
                Ut libero facere voluptatem aut voluptas magnam quod minus, eius ad ipsum, iusto nobis doloremque deserunt.
            </p>
            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava03} className="w-25 h-25 rounded-2" alt=""/>
                <div className="mb-0 mt-3">
                  <h5>Michael Brown</h5>
                  <p>Customer</p>
                </div>
            </div>
        </div>
    </Slider>
  )
}

export default Testimonials
