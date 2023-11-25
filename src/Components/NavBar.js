import React from 'react'
import {
    Link
  } from "react-router-dom";

export const NavBar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top"  >
    <div class="container-fluid" >
<div className="collapse navbar-collapse" id="navbarSupportedContent" >
  <ul className="navbar-nav mr-auto" >
    <li className="nav-item active">
    <Link className="nav-link" to="/PreopOtfunbiased"> Pre-Operative and OTF Mapping</Link>
    </li>
    <li className="nav-item active">
    <Link className="nav-link" to="/PreopOtfporunbiased">Pre-Operative and POR Mappings</Link>
    </li>
  </ul>
</div>
    </div>
   
</nav>
    </>
  )
}

export default NavBar
