import React, { useState } from 'react'
import './Navbar.css'
import ec from '../../assets/ec.png'

const Navbar = () => {

  const [sticky, setSticky] = useState(false);

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  });

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={ec} alt="" className='logo' />
     
      <ul>
        <li>Home</li>
        <li>Program</li>
        <li>About us</li>
        <li>Campus</li>
        <li>Testimonials</li>
        <li><button className='btn'>Contact us</button></li>
      </ul>
    </nav>
  )
}

export default Navbar;