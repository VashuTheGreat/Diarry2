import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='flex justify-evenly bg-purple-950 text-white items-center h-16 px-6 sticky top-0 z-10'>
       <Link to={'/'}>
       <div className="logo">
            <span className='font-extrabold text-3xl bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text'>
                Vdiary
            </span>
        </div>
       </Link>
        <ul className='flex gap-8'>
            <Link to={'/'}>
            <li className='cursor-pointer hover:font-bold transition-all duration-200 font-semibold hover:scale-105'>
                Home
            </li>
            </Link>
            <Link to={'/about'}>
            <li className='cursor-pointer hover:font-bold transition-all duration-200 font-semibold hover:scale-105'>
                Your Tasks
            </li>
            </Link>
         
        </ul>
    </nav>
  );
}

export default Navbar;
