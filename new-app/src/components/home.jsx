import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useRef } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'


const Home = () => {
  const [data, setDate] = useState({})
  const [loading, setLoading] = useState(true)
  const inputRef = useRef()
  const nav = useNavigate()
  const [query] = useSearchParams()
  const doApi = async () => {
    setLoading(true)
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${query.get('city')}&appid=3f55a24e37304e63b483d73891af88ba&units=metric`
    const { data } = await axios(url)
    const obj = {
      location: {
        city: data.name,
        country: data.sys.country,
        sunset: data.sys.sunset
      },
      weather: {
        temp_min: data.main.temp_min,
        temp: data.main.temp,
        humidity: data.main.humidity,
        wind: data.wind.speed,
        main: data.weather[0].main,
        desc: data.weather[0].description
      },
      coord: {
        lon: data.coord.lon,
        lat: data.coord.lat
      }

    }
    console.log(obj);
    setDate(obj)
    setLoading(false)
  }

  useEffect(() => {
    console.log(query.get('city'))
    doApi();
  }, [query])


  return (
    <div className='d-flex justify-content-center' style={{
      backgroundImage: `url("https://png.pngtree.com/thumb_back/fh260/back_our/20190625/ourmid/pngtree-rainy-weather-with-bad-weather-image_260457.jpg")`,
      backgroundSize: 'cover'
    }} >
    <div className=''>

      <div className='d-flex   py-5'>
        <input placeholder='Example: New York' ref={inputRef} className='form-control' type="text" />
        <button onClick={() => {
          nav('?city=' + inputRef.current.value);

        }} className='mx-2 btn btn-dark'>Search</button>
      </div >

      {loading ? <div className='d-flex flex-column align-items-center'>
        <h1 className='py-1'> Loading.... Wait few seconds.... </h1>

        <img width={400} src="https://media2.giphy.com/media/OUH5FTK3tAE3l3T01j/giphy.gif?cid=ecf05e47jhtrjx37hszocplcig3hex902ps1jmm1jvufy4dz&rid=giphy.gif&ct=g" alt="loading image" />
      </div> :
        <div className='pt-2'>
          <h1 className='py-3'>Location:{data.location.city},{data.location.country}</h1>
          <h2 className='py-3'>Temp: {Math.round(data.weather.temp)}°C</h2>
          <h2 className='py-3'>Temp minimum today: {Math.floor(data.weather.temp_min)}°C</h2>
          <h2 className='py-3'>Humidity: {data.weather.humidity} %</h2>
          <h2 className='py-3'>About the sky: {data.weather.main}</h2>
          <h2 className='py-3'>Desc: {data.weather.desc}</h2>

        </div>}

    </div>
    </div>
  )
}

export default Home