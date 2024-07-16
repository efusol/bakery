import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const WeatherBlock = styled.div`

`

const Weather = () => {
  const myApiKey = '61043aaa4d86fe7a79eb6c7993496170'
  // const [temp, setTemp] = useState(0)
  // const [mainInfo, setMainInfo] = useState('')
  // const [icon, setIcon] = useState('')
  const [weather, setWeather] = useState({temp: 0, mood: '', icon: ''})
  
  useEffect(()=>{
  axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=37&lon=127&appid=${myApiKey}`)
  .then(res=>{
    console.log(res)
    let mood = res.data.weather[0].main
    if (mood=='Clear') {
      mood = '맑음'
    } else if (mood=='Mist' || mood=='Smoke' || mood=="Haze") {
      mood = '안개'
    } else if (mood=='Clouds') {
      mood = '구름'
    } else if (mood=='Rain') {
      mood = '비'
    }
    setWeather({temp: res.data.main.temp-273.15, mood: mood, icon: res.data.weather[0].icon})
  })
}, [])

  return (
    <WeatherBlock>
      <span>{weather.temp.toFixed(1)}℃</span>
      <span style={{margin: '0 10px'}}>{weather.mood}</span>
      <span><img src={`http://openweathermap.org/img/wn/${weather.icon}.png`} alt="" /></span>
    </WeatherBlock>
  );
};

export default Weather;