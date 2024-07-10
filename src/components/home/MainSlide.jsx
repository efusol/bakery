import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io';

const MainSlideBlock = styled.div`
position: relative;
  .slide {
    position: relative;
    height: 40vw;
    background-position: center;
    background-size: cover;
    &.slide1 {background-image: url('./assets/image/main1.jpg'); color: #023586;}
    &.slide2 {background-image: url('./assets/image/main2.jpg'); color: yellow;}
    &.slide3 {background-image: url('./assets/image/main3.jpg'); color: #f00;}
    .text {
      position: absolute;
      top: 50%;
      left: 0%;
      width: 100%;
      transform: translateY(-50%);      
      h2 {
        text-align: center;
        font-size: 50px;
        @media screen and (max-width: 1024px) {
          font-size: 30px;
        }
      }
      p {
        text-align: center;
        font-size: 20px;
        margin-top: 20px;
        @media screen and (max-width: 1024px) {
          display: none;
        }
      }
    }
  }
  .slick-dots {
    position: absolute;
    bottom: 20px;
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
        @media screen and (max-width: 1024px) {
          width: 15px;
          height: 15px;
        }
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
    nextArrow: <IoIosArrowDroprightCircle />,
    responsive: [
      { breakpoint: 1024,
        settings: {
          arrows: false
        }
      }
    ]
  }

  return (
    <MainSlideBlock>
      <Slider {...option}>
        <div className="slide slide1">
          <div className="text">
            <h2>실키 롱케익</h2>
            <p>1988년 세상에 태어나 세계에서 가장 많이 팔린 실키롱케익</p>
          </div>
        </div>
        <div className="slide slide2">
          <div className="text">
            <h2>우승 축하 이벤트</h2>
            <p>파리생제르맹 프랑스 챔피언쉽</p>
          </div>
        </div>
        <div className="slide slide3">
          <div className="text">
            <h2>파리 올림픽</h2>
            <p>팀코리아 응원가자</p>
          </div>
        </div>
      </Slider>
    </MainSlideBlock>
  );
};

export default MainSlide;