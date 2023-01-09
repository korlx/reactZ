import React from 'react'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

const Search = () => {
  const inputRef = useRef();
  const nav = useNavigate();
  return (
    <div>
      <h1 className='text-white' onClick={() => {
        nav(-1)
      }}>
        LOLOLO
      </h1>
      <div className='d-flex'>
        <div className="form-outline flex">
          <input onKeyDown={(e) => {
            if (e.key === "Enter") {
              nav("/" + inputRef.current.value);
            }
          }}
            ref={inputRef} type="search" className="form-control" />
          <label className="form-label" for="form1">Search</label>
        </div>
        <button type="button" className=" btn  btn-primary">
          <i className="fas fa-search">Search</i>
        </button>

      </div>
    </div>

  )
}

export default Search