import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Navbar = () => {


    const select = useSelector((state)=>state.cart);

  return (
    <>
    <div className='navbar'>
        <div>
        <span style={{color:'blue'}}>MALL</span>
        </div>
        <div className='menus'>
            <Link to="/" className='links'>Home</Link>
            <Link to="/cart" className='links'>Cart</Link>
            <Link to="about" className='links'>About</Link>
        </div>
        <h4>Booked : {select.length}</h4>   
    </div>
    <hr />
    </>
  )
}

export default Navbar
