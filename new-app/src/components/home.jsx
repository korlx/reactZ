import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'


const Home = () => {
    const[data,setDate]=useState({})
    const doApi=async ()=>{
    let url=`https://api.openweathermap.org/data/2.5/weather?q=tel%20aviv&appid=3f55a24e37304e63b483d73891af88ba`
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
            desc:data.weather.description
        },
        coord: {
            lon:data.coord.lon,
            lat:data.coord.lat
            }
        
    }
    console.log(obj);
    }

    useEffect(()=>{
        doApi();
    },[])
    
    
    return (
        <div><h1>Home site</h1></div>
    )
}

export default Home