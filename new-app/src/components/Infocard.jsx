import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Infocard = () => {
 const[descp,setDescp]=useState([])
 const[loading,setLoading]=useState(true)
const params=useParams()
const nav=useNavigate()
 const doApi=async()=>{
    try {
    let url =`https://www.omdbapi.com/?i=${params.id}&apikey=a1975694`
    const{data}=await axios(url)
    console.log(data)
    setDescp(data);
    setLoading(false)
    } 
   catch (error) {
    console.log(error.response)
        
    }
 }

useEffect(()=>{
    doApi()
},[])




return  (

 <div >
            {loading ? (<div>
        
        <img className='pt-5 mx-auto d-block' src='https://media0.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif?cid=ecf05e473b9zu46qtlx23dt8uma94rs26urlu0jkri55oz55&rid=giphy.gif&ct=g'></img>
        <h1 className='text-danger text-center' >Loading.....</h1>
        </div>       ):
                <div className='container-fluid bg-dark text-white'>
                    <div className="container pt-4 pb-5">

                        <div className="row mt-2 justify-center">

                            <div className='col-lg-4 col-md-5  pt-4 mb-3 '>
                                <img src={descp.Poster} alt="" className='w-100' />
                            </div>
                            <div className='mt-5 pt-5 col-lg-8 col-md-7   text-lg-start text-md-end '>
                                <h2 className='font-bold mt-5'><i>{descp.Title}</i></h2>
                                <p className='mt-3'><i>{descp.Plot}</i></p>
                                <h6 className='mt-1'><em>Gener :</em> <i>{descp.Genre}</i></h6>
                                <h6 className='mt-2'><em>Actors :</em> <i>{descp.Actors}</i></h6 >
                                <div className='d-flex mt-3'>
                                    
                                </div>
                                <div className=' mt-5 align-items-center'>
                                <button onClick={() =>{
                                    nav(-1)
                                }} className='btn col-3 btn-secondary  '  >Back</button>
                                </div>

                            </div>



                        </div>
                    </div>
                </div>
            }
         
        </div>
    )
}


export default Infocard