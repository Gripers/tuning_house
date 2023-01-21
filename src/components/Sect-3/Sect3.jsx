import React from "react";
import "../Sect-3/Sect3.css";
import Slider from "react-slick";
import { ommabop } from "../../ommabop";

const Sect3 = () => {
  let settings = {
    dots: false,
    infinite: false,
    speed: 500,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 4000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1216,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          arrows: false,
          dots: true,
        },
      },
    ],
  };
  return (
    <>
      <div className="ommabop">
        <div className="container">
          <h1 className="slider__title">Ommabop</h1>
          <div className="slider__parent">
            <Slider {...settings}>
              {ommabop?.map((el) => {
                return (
                  <div className="slider1" key={el?.id}>
                    <img src={el?.img} alt="" />
                    <h4>{el?.title}</h4>
                    <p className="slider1__desc">{el?.desc.slice(0, 140)}{"..."}</p>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sect3;
