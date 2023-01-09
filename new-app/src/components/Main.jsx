import React, { useState } from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react';
import Card from './card'
const Main = () => {
    const [moveis, setMoveis] = useState([])
    const [loading, setLoading] = useState(true);
    const params = useParams();

    const doApi=async()=>{
        try {
            let url=`http://www.omdbapi.com/?s=${params.search ||"list"}&apikey=a1975694`
            const {data}=await axios(url)
            console.log(data.Search)
            setMoveis(data.Search);
            setLoading(false)
        } 
        catch (error) {
            console.log(error.response)
        }
    }
    useEffect(() => {
        doApi()
    }, [params])



  return (
    <div className='bg-dark '>
        



        {moveis?(
            <div>
                {loading?(   <div>
        
        <img className=' mx-auto d-block' src='https://media0.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif?cid=ecf05e473b9zu46qtlx23dt8uma94rs26urlu0jkri55oz55&rid=giphy.gif&ct=g'></img>
        <h1 className='text-danger text-center' >Loading.....</h1>
        </div>       ):( 
        <div className=" container d-flex bg-dark text-white">
            
             <div className='d-flex flex-wrap justify-content-center'>
                    
                        {moveis.map((item,i)=>{
                            return <Card key={i} item={item}/>;
                        })}
                    </div>
                    </div>
                    

        )}
        </div>
        ) : (
          <p>Movie Not Found</p>
        )}
      </div>
  )
}

export default Main