import React from 'react';
import Slider from "react-slick";
import { sliderdb } from '../../sliderdb';
import { useNavigate } from 'react-router-dom';
import "../Sect-1/Sect1.css"

const Sect1 = () => {
  const navigate = useNavigate()
  let settings = {
    dots: false,
    infinite: false,
    speed: 500,
    arrows:true,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1216,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          arrows:false,
          dots:true
        }
      }
    ]
  };
  return (
    <>
    <div className="container">
        <h1 className="slider__title">Yangi mahsulotlar</h1>
        <div className="slider__parent">
          <Slider {...settings}>
            {sliderdb?.map((el) => {
              return (
                <div className="slider1" key={el?.id}>
                  <img src={el?.img} alt="" />
                  <h4>{el?.title}</h4>
                  <p className="slider1__desc">{el?.desc}</p>
                </div>
              );
            })}
          </Slider>
        </div>
        <div className="more">
          <button onClick={() => navigate("/")}>Ko'proq</button>
        </div>
      </div>
    </>
  )
}

export default Sect1;
