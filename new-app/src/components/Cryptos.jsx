import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import axios from 'axios'
import Coin from './Coin';

const Cryptos = () => {
  const [cryptos, setCrypto] = useState([]);
  const doApi = async () => {
    try {
      let url ='http://fs1.co.il/bus/bitcoin.php'
     const{data}=await axios(url)
     console.log(data)
     setCrypto(data);
    }
    catch(err){
      console.log(err.response)
    }
  }
  useEffect(()=>{
    doApi()
  },[])
  return (
    <Coin key={i} props={car}/>
  )
}

export default Cryptos