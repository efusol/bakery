import React, {useEffect, useState} from 'react';
import axios from 'axios'
import Title from '@/components/common/Title'
import MovieSearch from '@/components/movie/MovieSearch'
import MovieCategory from '@/components/movie/MovieCategory'
import MovieSection from '@/components/movie/MovieSection'

const MovieView = () => {
  const myMovieId = "6b5440f5531fc6b879cdf25b83b360f4"
  const [movies, setMovies] = useState([])
  const [changeType, setChangeType] = useState({ name: '인기 영화',     media: 'movie',   type: 'popular' })
  const categoryClick = (category)=>{
    setChangeType(category)
    const { media, type } = category
    axios.get(`https://api.themoviedb.org/3/${media}/${type}?api_key=${myMovieId}&language=ko-KR`)
    .then(res=>{
      console.log(res)
      setMovies(res.data.results)
    })
  }
  const onSearch = (keyword)=>{
    console.log(keyword)
    setChangeType({name:"", media:"", type:""})
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${myMovieId}&language=ko-KR&query=${keyword}`)
    .then(res=>{
      console.log(res)
      setMovies(res.data.results)
    })
  }
  useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${myMovieId}&language=ko-KR`)
    .then(res=>{
      console.log(res)
      setMovies(res.data.results)
    })
  }, [])
  return (
    <div className="row">
      <Title title="파바 무비" />
      <MovieSearch onSearch={onSearch} />
      <MovieCategory changeType={changeType.name} categoryClick={categoryClick} />
      <MovieSection movies={movies} />
    </div>
  );
};

export default MovieView;