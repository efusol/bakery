import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io';

const MainSlideBlock = styled.div`
position: relative;
  .slide {
    height: 40vw;
    background-position: center;
    background-size: cover;
    &.slide1 {background-image: url('./assets/image/main1.jpg')}
    &.slide2 {background-image: url('./assets/image/main2.jpg')}
    &.slide3 {background-image: url('./assets/image/main3.jpg')}
  }
  .slick-dots {
    position: absolute;
    bottom: 40px;
    left: 50%;
    transform: translateX(-50%);
    li {
      display: inline-block;
      margin: 0 10px;
      button {
        width: 20px;
        height: 20px;
        background: red;
        border-radius: 50%;
        text-indent: -9999px;
        overflow: hidden;
      }
      &.slick-active {
        button {
        background: #fff;
        }
      }
    }
  }
  .slick-arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-size: 50px; 
    color: #f00;
    &.slick-prev {left: 50px; z-index:3}
    &.slick-next {right: 50px}
  }
`

const MainSlide = () => {

  const option = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <IoIosArrowDropleftCircle />,
    nextArrow: <IoIosArrowDroprightCircle />
  }

  return (
    <MainSlideBlock>
      <Slider {...option}>
        <div className="slide slide1"></div>
        <div className="slide slide2"></div>
        <div className="slide slide3"></div>
      </Slider>
    </MainSlideBlock>
  );
};

export default MainSlide;