import React from 'react'
import './Navbar.css';
export default function Navbar() {
  return (
    <div className='navbar'>
    <nav>
      <div className='logo'>ShopNest</div>
      <ul>
        <li><a href="">Home</a></li>
        <li><a href="">About</a></li>
        <li><a href="">Contact</a></li>
        <li><a href="">Sigh Up</a></li>
      </ul>
    </nav>
    </div>
  )
}
