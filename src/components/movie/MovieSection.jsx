import React from 'react';
import styled from 'styled-components';

const MovieSectionBlock = styled.ul`
display: flex;
flex-wrap: wrap;
`

const ListBlock = styled.li`
flex: 0 0 23%;
position: relative;
margin: 20px 1%;
  .title {
    padding: 5px 0;
    font-size: 20px;
    font-weight: bold;
  }
  .star {
    position: absolute;
    width: 35px;
    height: 35px;
    background: #ddd;
    top: 3%;
    right: 5%;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

const MovieSection = ({movies}) => {
  return (
    <MovieSectionBlock>
      {
        movies.map((item, index)=>(
          <ListBlock key={index}>
            <a href={`http://www.themoviedb.org/movie/${item.id}?language=ko-KR`} target='_blank'>
              <img src={`http://www.themoviedb.org/t/p/w500/${item.poster_path}`} alt={item.title} />
            </a>
            <p className='title'>{item.title}</p>
            <p className="star">{item.vote_average.toFixed(1)}</p>
          </ListBlock>
        ))
      }
    </MovieSectionBlock>
  );
};

export default MovieSection;