import React from 'react'
import { Link } from 'react-router-dom'


const Card = (props) => {
  let item = props.item
  return (

    <div className='mb-5 px-5 col-xl-3 col-lg-4 col-md-6 '>
      <Link  to={"/movieinfo/" + item.imdbID}>
        <img
          className="h-100 w-100 rounded-5"
          src={item.Poster}
          alt=""
        />
       <p className='text-center' >About the film</p>
     </Link>
      
      
    </div>
    

  )
}

export default Card