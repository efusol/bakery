import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const NewArrivalBlock = styled.div`
margin: 100px auto;
  h2 {
    text-align: center;
    margin-bottom: 30px;
  }
`

const UlBlock = styled.ul`
display: flex;
flex-wrap: wrap;
`

const LiBlock = styled.li`
flex: 0 1 23%;
@media screen and (max-width: 1024px) {
  flex: 0 1 31.33%;
}
@media screen and (max-width: 767px) {
  flex: 0 1 48%;
}
border: 1px solid #ddd;
margin: 20px 1%;
position: relative;
overflow: hidden;
.imgBox {
  overflow: hidden;
  img {
    transition: all 0.3s;
    &:hover {
      transform: scale(1.2);
    }
  }
}
.infoBox {
  padding: 20px;
  line-height: 1.5em;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  color: #fff;
  background: rgba(0, 0, 0, 0.5);
  transition: all 0.5s;
}
&:hover {
  .infoBox {
    top: 50%;
  }
}
`

const NewArrival = () => {
  const products = [
    {
      image: './assets/image/new1.jpg',
      title: '제주몽생이샌드',
      description: '아주 맛있어요',
      comment: '1인당 5EA 구매 한정',
      price: 50000
    },
    {
      image: './assets/image/new2.jpg',
      title: '제주몽생이샌드',
      description: '아주 맛있어요',
      comment: '1인당 5EA 구매 한정',
      price: 50000
    },
    {
      image: './assets/image/new3.png',
      title: '제주몽생이샌드',
      description: '아주 맛있어요',
      comment: '1인당 5EA 구매 한정',
      price: 50000
    },
    {
      image: './assets/image/new4.jpg',
      title: '제주몽생이샌드',
      description: '아주 맛있어요',
      comment: '1인당 5EA 구매 한정',
      price: 50000
    },
    {
      image: './assets/image/new5.png',
      title: '제주몽생이샌드',
      description: '아주 맛있어요',
      comment: '1인당 5EA 구매 한정',
      price: 50000
    },
    {
      image: './assets/image/new6.png',
      title: '제주몽생이샌드',
      description: '아주 맛있어요',
      comment: '1인당 5EA 구매 한정',
      price: 50000
    },
    {
      image: './assets/image/new7.jpg',
      title: '제주몽생이샌드',
      description: '아주 맛있어요',
      comment: '1인당 5EA 구매 한정',
      price: 50000
    },
    {
      image: './assets/image/new1.jpg',
      title: '제주몽생이샌드',
      description: '아주 맛있어요',
      comment: '1인당 5EA 구매 한정',
      price: 50000
    },
    {
      image: './assets/image/new2.jpg',
      title: '제주몽생이샌드',
      description: '아주 맛있어요',
      comment: '1인당 5EA 구매 한정',
      price: 50000
    },
    {
      image: './assets/image/new3.png',
      title: '제주몽생이샌드',
      description: '아주 맛있어요',
      comment: '1인당 5EA 구매 한정',
      price: 50000
    },
    {
      image: './assets/image/new4.jpg',
      title: '제주몽생이샌드',
      description: '아주 맛있어요',
      comment: '1인당 5EA 구매 한정',
      price: 50000
    },
    {
      image: './assets/image/new5.png',
      title: '제주몽생이샌드',
      description: '아주 맛있어요',
      comment: '1인당 5EA 구매 한정',
      price: 50000
    },
    {
      image: './assets/image/new6.png',
      title: '제주몽생이샌드',
      description: '아주 맛있어요',
      comment: '1인당 5EA 구매 한정',
      price: 50000
    },
    {
      image: './assets/image/new7.jpg',
      title: '제주몽생이샌드',
      description: '아주 맛있어요',
      comment: '1인당 5EA 구매 한정',
      price: 50000
    }
  ]

  return (
    <NewArrivalBlock className='row'>
      <h2>New Arrival</h2>
      <UlBlock>
        {
          products.map((item, index) => (
            <LiBlock key={index}>
              <div className="imgBox">
                <Link to={`product/${index}`} state={{item, index}}><img src={item.image} alt={item.title} /></Link>
              </div>
              <div className="infoBox">
                <p style={{fontSize: '18px'}}>{item.title}</p>
                <p>{item.description}</p>
                <p>{item.comment}</p>
                <p><strong>￦{item.price.toLocaleString()}</strong></p>
              </div>
            </LiBlock>
          ))
        }
      </UlBlock>
    </NewArrivalBlock>
  );
};

export default NewArrival;