import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../src/assets/hill-country-camera-D4xu0ePE8KY-unsplash.jpg'
// import logo from '../../../src/assets/farhat-altaf-5oSD4tdpnWQ-unsplash.jpg'


const Navbar = () => {
  const navItems = <>
    <li ><Link to="/">Home</Link></li>
    <li><Link to="/myproduct">Add product</Link></li>
    <li><Link to="/mycart">My Cart</Link></li>
    
    
  </>
  return (
    <div>
      <div className="navbar  bg-neutral text-neutral-content text-2xl rounded-lg">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
             {navItems}
            </ul>
          </div>
          <Link className="btn btn-ghost text-xl">
            <img className='max-h-14 max-w-28 rounded-lg ' src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
           {navItems}
          </ul>
        </div>
        <div className="navbar-end">
          <button className='btn btn-active'>
          <Link to="/login">Login</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;