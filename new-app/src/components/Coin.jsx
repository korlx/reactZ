import React from 'react'

const Coin = (props) => {
  const coin = props.coin;
  console.log(props);
  return (
    <div className="col-12 col-md-6 col-lg-6 p-5 ">
      <div className="row border border-5 border-light">
        <div>
          <h1>Title:{coin.name}</h1>
          <h6>USD:{coin.price_usd}$</h6>
          <h3>Symbol:{coin.symbol}</h3>
        </div>
      </div>
    </div>
  )
}

export default Coin