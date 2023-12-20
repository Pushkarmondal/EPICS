// import React from "react";
// import "./Navbar.css";
// import cart_logo from "/Users/pushkarmondal/Desktop/E-Commerce/frontend/src/components/Assets/caart_logo.png";
// import logo from "/Users/pushkarmondal/Desktop/E-Commerce/frontend/src/components/Assets/logo_final.png";
// export const Navbar = () => {

//   const [menu, setMenu] = useState("shop");

//   return (
//     <div className="navbar">
//       <div className="nav-logo">
//         <img src={logo} className="new" alt="" />
//         <p>HANDICRAFTS</p>
//       </div>
//       <ul className="nav-menu">
//         <li onClick={() => { setMenu("shop") }}> Shop { menu==="shop"?<hr/>:<></>}</li>
//         <li onClick={() => { setMenu("clay") }}>Clay Store { menu==="clay"?<hr/>:<></>}</li>
//         <li onClick={() => {setMenu("jute")}}>Jute Store { menu==="jute"?<hr/>:<></>}</li>
//         <li onClick={() => {setMenu("wool")}}>Woolen Store{ menu==="wool"?<hr/>:<></>}</li>
//       </ul>
//       <div className="nav-login-cart">
//         <button>Login</button>
//         <img src={cart_logo} className="cart" alt="" />
//         <div className="nav-cart-count">0</div>
//       </div>
//     </div>
//   );
// };

import React, { useState } from "react";
import "./Navbar.css";
import cart_logo from "/Users/pushkarmondal/Desktop/E-Commerce/frontend/src/components/Assets/caart_logo.png";
import logo from "/Users/pushkarmondal/Desktop/E-Commerce/frontend/src/components/Assets/logo_final.png";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [menu, setMenu] = useState("shop");

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} className="new" alt="" />
        <p>ShilpGrah</p>
      </div>
      <ul className="nav-menu">
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/">
            Shop
          </Link>
          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("clay");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/clay">
            Clay Store
          </Link>
          {menu === "clay" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("jute");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/jute">
            Jute Store
          </Link>
          {menu === "jute" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("wool");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/wool">
            Woolen Store
          </Link>
          {menu === "wool" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/cart">
          <img src={cart_logo} className="cart" alt="" />
        </Link>
        <div className="nav-cart-count"></div>
      </div>
    </div>
  );
};
