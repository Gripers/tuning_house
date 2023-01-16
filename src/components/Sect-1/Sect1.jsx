import React from 'react';
import Slider from "react-slick";
import { sliderdb } from '../../sliderdb';
import { useNavigate } from 'react-router-dom';

const Sect1 = () => {
  const navigate = useNavigate()
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows:true,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
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
                  <p className="slider1__narx">{el?.narx} so'm</p>
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
//dfd