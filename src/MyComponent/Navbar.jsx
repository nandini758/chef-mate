import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate=useNavigate()
  const [input,setInput]=useState('')
  const handleSubmit=(e)=>{
    e.preventDefault();
    navigate(`/Search/${input}`)
  }
  return (
    <>
    <div className="Nav">
    <div className="left">
      <Link to='/' className='Link' >
    <h1>React Recipe App</h1>
    </Link>
    </div>
    <div className='searchbox'>
      <form onSubmit={handleSubmit}>
      <input
      onChange={(e)=>setInput(e.target.value)}
      type="text" />
      </form>
      </div>
    <div className="right">
      <Link to={`/categary/indian`} className='Link' >
        <div>Indian</div>
        </Link >
        <Link to={`/categary/american`}  className='Link' >
        <div>American</div>
        </Link>
        <Link to={`/categary/british`} className='Link'>
        <div>British</div>
        </Link>
        <Link to={`/categary/chinese`} className='Link'>
        <div>Chinese</div>
        </Link>
        <Link to={`/categary/thai`} className='Link'>
        <div>Thai</div>
        </Link>
    </div>


    </div>
    
    </>
  )
}

export default Navbar
