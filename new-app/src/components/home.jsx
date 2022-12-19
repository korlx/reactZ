import React, { useState } from 'react'
import { Configuration, OpenAIApi } from 'openai'
import { useNavigate, useParams } from 'react-router-dom';
import { useRef } from 'react';
import { useEffect } from 'react';

const configuration = new Configuration({
  apiKey: `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`,
});
const openai = new OpenAIApi(configuration);

const Home = () => {
  const params = useParams()
  const inputRef = useRef()
  const nav = useNavigate()
  const [image,setImage]= useState("")
  const [loading,setLoading] = useState(false)
  console.log(params)

  const doApi = async () => {

    if(params.searchImg){
      setLoading(true)
      const {data} = await openai.createImage({
        prompt: params.searchImg,
        n: 1,
        size: "1024x1024",
      
      });
      setImage(data.data[0].url)
      // console.log(data)
      setLoading(false)
    }
  

  }

  useEffect(()=>{
    doApi()
  },[params])

  return (
    <div>
      <div className="container d-flex flex-column align-items-center">
        <div className='col-lg-4 col-md-5 col-6'>
          <label>Search Image:</label>
          <input onKeyDown={(e)=>{
            if(e.key == 'Enter'){
              nav('/'+inputRef.current.value)
            }
          }} ref={inputRef} type="search" className='form-control' />
        </div>

          {!loading && !image.length ? <p>Input somthing...</p>  :

        <div>
        {loading ? <img src='https://media3.giphy.com/media/ZO9b1ntYVJmjZlsWlm/giphy.gif' alt='loading' />:
        <img className='mt-5' src={image} width={'60%'} alt={params.searchImg} />}
        </div>
 }
      </div>
    </div>
  )
}

export default Home

// apikey
//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