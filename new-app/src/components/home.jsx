import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useRef } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'


const Home = () => {
    const[data,setDate]=useState({})
    const [loading, setLoading] = useState(true)
    const inputRef=useRef()
    const nav=useNavigate()
    const [query]=useSearchParams()
    const doApi=async ()=>{
    setLoading(true)
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${query.get('city')}&appid=3f55a24e37304e63b483d73891af88ba&units=metric`
    const{data}=await axios(url)
    const obj={
        location:{
            city:data.name,
            country:data.sys.country,
           sunset:data.sys.sunset
        },
        weather:{
            temp:data.main.temp,
            humidity:data.main.humidity,
            wind:data.wind.speed,
            desc:data.weather[0].description
        },
        coord: {
            lon:data.coord.lon,
            lat:data.coord.lat
            }
        
    }
    console.log(obj);
    setDate(obj)
    setLoading(false)
    }

    useEffect(()=>{
        console.log(query.get('city'))
        doApi();
    },[query])
    
    
    return (
        <div className='d-flex flex-column align-items-center py-5'>
      
      <div className='d-flex'>
        <input ref={inputRef} className='form-control' type="text" />
        <button onClick={()=>{
          nav('?city='+inputRef.current.value);

        }} className='mx-2 btn btn-primary'>Search</button>
      </div>
  
        {loading ? <h1>Loading...</h1> :
          <div>
            <h1>City:{data.location.city}</h1>
            <h2>Temp:{Math.round(data.weather.temp)}</h2>
            <h2>About the sky:{data.weather.desc}</h2>
  
          </div>}
  
      </div>
    )
}

export default Home