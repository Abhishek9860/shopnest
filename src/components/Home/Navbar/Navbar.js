import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <>
    <div className="offer"><p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!  <a className="shopNow" href="/"><strong>Shop Now</strong></a></p></div>
    <nav>
      <div className="navbar">
        <div className="logo">ShopNest</div>
        <div className="tabs">
          <ul>
            <li className="nav_tab">
              <a href="/">Home</a>
            </li>
            <li className="nav_tab">
              <a href="/">About</a>
            </li>
            <li className="nav_tab">
              <a href="/">Contact</a>
            </li>
            <li className="nav_tab">
              <a href="/">Sign Up</a>
            </li>
          </ul>
        </div>
        <form>
          <input
            type="search"
            placeholder="what are you looking for?"
            aria-label="Search"
          />
          <button type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
          <button type="button"><i class="fa-regular fa-heart"></i></button>
          <button type="button"><i class="fa-solid fa-cart-shopping"></i></button>
        </form>
      </div>
    </nav>
    <hr />
    </>
  );
}
