"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import { TrendingCard } from "./TrendingCard";

export const Carousels = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    spaceBetween: 20,
  };
  return (
    <Slider {...settings}>
      <div>
        <TrendingCard title="One piece" ranking={1} image="https://via.placeholder.com/100x200" />
      </div>
      <div>
        <TrendingCard title="One piece" ranking={1} image="https://via.placeholder.com/100x200" />
      </div>
      <div>
        <TrendingCard title="One piece" ranking={1} image="https://via.placeholder.com/100x200" />
      </div>
      <div>
        <TrendingCard title="One piece" ranking={1} image="https://via.placeholder.com/100x200" />
      </div>
      <div>
        <TrendingCard title="One piece" ranking={1} image="https://via.placeholder.com/100x200" />
      </div>
      <div>
        <TrendingCard title="One piece" ranking={1} image="https://via.placeholder.com/100x200" />
      </div>
    </Slider>
  );
};
