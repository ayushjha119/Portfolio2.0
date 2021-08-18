import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import './my-Carousel.style.css'
import Slide1 from '../../assets/img/carousal/slide1.webp'
import ScrollDown from '../scroll-down/scroll-down.component'


const MyCarousel = () => {
    return (
        <div id="home">
            <Carousel >
              <img
              className="d-block w-100 custom-img"
              src={Slide1}
              alt="First slide"
              />
            </Carousel>
              <ScrollDown/>
        </div>
    );
}

export default MyCarousel
