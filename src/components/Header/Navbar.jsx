import React from 'react';
import { Link, NavLink} from 'react-router';
import logoImg from '../../assets/logo.png'
import { FaGithub } from 'react-icons/fa';

const Navbar = () => {
    const links = <>

        <div className="flex flex-col lg:flex-row py-2 gap-4 lg:gap-8 text-lg font-semibold">

            <NavLink to='/'> <li>Home</li></NavLink>
            <NavLink to='/apps'> <li>Apps</li></NavLink>
            <NavLink to='/readList'> <li>Installation</li></NavLink>

        </div>
    </>
    return (
        <div className="navbar bg-white border-none w-11/12 mx-auto">
            <div className="navbar-start">

                <Link to='/'>
                    <div className="gap-1 flex items-center">
                        <img className='w-10 h-10' src={logoImg} alt="" />
                        <h1 className='text-xl font-bold  bg-clip-text text-transparent bg-[linear-gradient(138deg,#632EE3_0%,#9F62F2_100%)]'>HERO.IO</h1>
                    </div>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex flex-col">
                <ul className="menu menu-horizontal px-1 [&_a]:hover:underline [&_a]:hover:text-purple-600">
                    {links}
                </ul>
            </div>
            <div className="dropdown  navbar-end">
                <div className=" hidden lg:flex ">
                    <button className="btn text-white font-semibold border-none bg-[linear-gradient(138deg,#632EE3_0%,#9F62F2_100%)] rounded-md"><FaGithub size={18} /> Contribute</button>
                </div>
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden ">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                </div>
                <ul
                    tabIndex="-1"
                    className=" menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-60 w-52 p-2 shadow [&_a]:hover:underline [&_a]:hover:text-purple-600">
                    {links}
                    <button className="btn text-white font-semibold border-none bg-[linear-gradient(138deg,#632EE3_0%,#9F62F2_100%)] rounded-md"><FaGithub size={18} /> Contribute</button>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;