import React from 'react'
import Slider from "react-slick";
const Slidersection = () => {
  const settings = {
    dots: true,
    arrows:false,
    infinite: true,
    speed: 500,
    autoplay:true
  };
  return (
    <div className="App">
    <Slider {...settings}>
    <div><img src="./poster-1.png" class="" alt='' /></div>
    <div><img src="./poster-2.png" class="" alt='' /></div>
    <div><img src="./poster-3.png" class="" alt='' /></div>
    <div><img src="./poster-4.png" class="" alt='' /></div>
    <div><img src="./poster-5.png" class="" alt='' /></div>
    <div><img src="./poster-6.png" class="" alt='' /></div>
    </Slider>
  </div>
  )
}

export default Slidersection