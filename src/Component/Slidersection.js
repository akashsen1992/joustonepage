import React from 'react'
import Slider from "react-slick";
const Slidersection = () => {
  const settings = {
    dots: true,
    arrows:false,
    infinite: true,
    speed: 500
  };
  return (
    <div className="App">
    <Slider {...settings}>
    <div><img src="./hero-mob.png" class="" alt='' /></div>
    <div><img src="./hero-mob.png" class="" alt='' /></div>
    <div><img src="./hero-mob.png" class="" alt='' /></div>
    <div><img src="./hero-mob.png" class="" alt='' /></div>
    </Slider>
  </div>
  )
}

export default Slidersection