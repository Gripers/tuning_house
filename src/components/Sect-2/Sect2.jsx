import React from "react";
import "../Sect-2/Sect2.css";
import Slider from "react-slick";
import { turkumlar } from "../../turkumlar";

const Sect2 = () => {
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
      <div className="sect2__black">
        <div className="container">
          <h1 className="slider__title">Turkumlar</h1>
          <div className="slider__parent">
            <Slider {...settings}>
              {turkumlar?.map((el) => {
                return (
                  <div className="slider1" key={el?.id}>
                    <img src={el?.img} alt="" />
                    <h4>{el?.title}</h4>
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

export default Sect2;
