import React from 'react';
import img1 from '.././../assets/hill-country-camera-D4xu0ePE8KY-unsplash.jpg'
import img2 from '.././../assets/markus-spiske-PsRUMc7vilg-unsplash.jpg'
import img3 from '.././../assets/scott-graham-5fNmWej4tAA-unsplash.jpg'

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full h-[600px] mt-5">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={img1} className="w-full rounded-lg" />
    <div className="absolute flex  transform -translate-y-1/2 left-5 right-5 bottom-0">
      
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide4" className="btn btn-circle mr-7">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={img2} className="w-full rounded-lg" />
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide1" className="btn btn-circle  mr-7 ">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
 
  <div id="slide4" className="carousel-item relative w-full">
    <img src={img3} className="w-full rounded-lg" />
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide2" className="btn btn-circle  mr-7">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;