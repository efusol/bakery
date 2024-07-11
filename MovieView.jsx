import React, {useEffect, useRef, useState} from 'react';
import axios from 'axios'
import Title from '@/components/common/Title'
import MovieSearch from '@/components/movie/MovieSearch'
import MovieCategory from '@/components/movie/MovieCategory'
import MovieSection from '@/components/movie/MovieSection'
import Pagenation from './src/components/common/Pagenation';

const MovieView = () => {
  const totalItems = useRef(0)
  const itemsPerPage = 20
  const [currentPage, setCurrentPage] = useState(1)
  const onChangePage = (page) => {
    setCurrentPage(page)
  }

  const myMovieId = "0cd74736fe204a6910533848f47cd842"
  const [movies, setMovies] = useState([])
  const [changeType, setChangeType] = useState({
    name:'인기 영화', media: 'movie', type: 'popular'
  })
  
  const categoryClick = (category) => {
    setChangeType(category)
    const {media, type} = category
    axios.get(`https://api.themoviedb.org/3/${media}/${type}?api_key=${myMovieId}&language=ko-KR`)
    .then(res=>{
      console.log(res.data.results)
      setMovies(res.data.results)
    })
  }

  const onSearch = (subject)=>{
    console.log(subject)
    setChangeType({name: '', media: '', type: ''})
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${myMovieId}&language=ko-KR&query=${subject}`)
    .then(res=>{
      console.log(res.data.results)
      setMovies(res.data.results)
    })
  }
  useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${myMovieId}&language=ko-KR&page=1`)
    .then(res=>{
      console.log(res.data.results)
      setMovies(res.data.results)
      totalItems.current = res.data.total_results
    })
  }, [])
  return (
    <div className="row">
      <Title title="파바 무비" />
      <MovieSearch onSearch={onSearch} />
      <MovieCategory changeType={changeType.name} categoryClick={categoryClick} />
      <MovieSection movies={movies} />
      <Pagenation totalItems={totalItems.current} itemsPerPage={itemsPerPage} currentPage={currentPage} onChangePage={onChangePage} />
    </div>
  );
};

export default MovieView;