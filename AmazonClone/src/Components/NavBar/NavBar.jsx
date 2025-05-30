import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import './NavBar.css'
import { Link, useNavigate } from 'react-router-dom';
const NavBar = () => {
    const Arr = ['fresh','Amazon miniT','Best Sellers', "Today's Deals","Mobiles","Electronics","Prime","Custom Service","Fashion","Home & Kitchen"]
    const handleNavigate = ()=>{

    }
  return (
    <div className="NavBar">
      <div id="All">
        <MenuIcon />
        <span id="allSpan">All</span>
      </div>
        {Arr.map((item, ind) => {

          return (
              <Link className = "Link" to={'/products'}>
                <div  className="NavBar_item"><center>{item}</center></div>
              </Link>
          );
        })}
    </div>
  );
}

export default NavBar
