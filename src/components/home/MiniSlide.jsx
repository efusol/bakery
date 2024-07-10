import React, {useState} from 'react';
import styled from 'styled-components'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io';

const MiniSlideBlock = styled.div`
  position:relative; 
  padding:0 30px; 
  margin:50px auto;
  img { width:90%; margin:0 5%;  }
  .slick-arrow {
    position:absolute; top:50%; transform:translateY(-50%); 
    font-size:30px; color:#f00; 
    &.slick-prev { left:-30px; z-index:9999 }
    &.slick-next { right:-30px } 
  }
`

const MiniSlide = () => {
  const [currentImage, setCurrentImage] = useState(null);
  const handleMouseOver = (image2)=>{
    setCurrentImage(image2)
  }

  const sliders = [
    {image1:"./assets/image/main01.jpg", image2:"./assets/image/main02.jpg", alt:"매장판매"},
    {image1:"./assets/image/main03.jpg", image2:"./assets/image/main04.jpg", alt:"사전예약"},
    {image1:"./assets/image/main05.jpg", image2:"./assets/image/main06.jpg", alt:"특별할인"},
    {image1:"./assets/image/main07.jpg", image2:"./assets/image/main09.jpg", alt:"파리올림픽"},
    {image1:"./assets/image/main01.jpg", image2:"./assets/image/main02.jpg", alt:"매장판매"},
    {image1:"./assets/image/main03.jpg", image2:"./assets/image/main04.jpg", alt:"사전예약"},
    {image1:"./assets/image/main05.jpg", image2:"./assets/image/main06.jpg", alt:"특별할인"},
    {image1:"./assets/image/main07.jpg", image2:"./assets/image/main09.jpg", alt:"파리올림픽"}
  ]
  const options = {
    dots:false,
    autoplay:true,
    autoplaySpeed:3000,
    slidesToShow:4,
    slidesToScroll:1,
    arrows:true,
    prevArrow : <IoIosArrowDropleftCircle />,
    nextArrow : <IoIosArrowDroprightCircle />,
    responsive : [
      { breakpoint:1024,
        settings : {
          slidesToShow:2
        }
      },
      { breakpoint:767,
        settings : {
          slidesToShow:1
        }
      }
    ]
  }

  return (
    <MiniSlideBlock className="row">
      <Slider {...options}>
        {
          sliders.map((item, index)=>(
            <div key={index}>
              <img src={currentImage===index ? item.image2 : item.image1} alt={item.alt} 
              onMouseOver={ ()=>handleMouseOver(index) }
              onMouseOut={ ()=>setCurrentImage(null) }
              />
            </div>
          ))
        }
      </Slider>
    </MiniSlideBlock>
  );
};

export default MiniSlide;