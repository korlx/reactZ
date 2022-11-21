import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import axios from 'axios'
import Coin from './Coin'

const Cryptos = () => {
  const [cryptos, setCrypto] = useState([]);
  const doApi = async () => {
    try {
      let url = 'http://fs1.co.il/bus/bitcoin.php'
      const { data } = await axios(url)
      console.log(data)
      setCrypto(data);
    }
    catch (err) {
      console.log(err.response)
    }
  }
  useEffect(() => {
    doApi()
  }, [])
  return (
    <div style={{background:`url(
      "data:image/jpeg;base64,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")`}}>
      <h1 style={{color:'white'}} className='display-1 text-center'>Top-10 Crypto coins</h1>
      <div style={{ color: 'white' }} className='container'>
        <div className='row'>
          {cryptos?.map((item, i) => {
            return (
              <Coin key={i} coin={item} />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Cryptos