import React from 'react';
import { Link, NavLink } from 'react-router';
import logoImg from '../../assets/logo.png'
import { FaGithub } from 'react-icons/fa';

const Navbar = () => {
    const navStyle = ({ isActive }) =>
        `hover:underline hover:underline-offset-8 hover:decoration-2 hover:text-purple-600 transition-all duration-300 ${isActive
            ? "text-[#632EE3] font-bold underline underline-offset-8 decoration-2 decoration-[#632EE3]"
            : "text-gray-700"
        }`;

    const links = (
        <>
            <NavLink className={navStyle} to='/'>Home</NavLink>
            <NavLink className={navStyle} to='/apps'>Apps</NavLink>
            <NavLink className={navStyle} to='/readList'>Installation</NavLink>
        </>
    );

    return (
        <div className="navbar py-6 bg-white border-none w-11/12 mx-auto relative z-50">
            <div className="navbar-start">
                <Link to='/'>
                    <div className="gap-1 flex items-center">
                        <img className='w-10 h-10' src={logoImg} alt="" />
                        <h1 className='text-xl font-bold bg-clip-text text-transparent bg-[linear-gradient(138deg,#632EE3_0%,#9F62F2_100%)]'>HERO.IO</h1>
                    </div>
                </Link>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-8 font-semibold text-lg">
                    {links}
                </ul>
            </div>

            <div className="navbar-end gap-2">
                <div className="hidden lg:flex">
                    <Link target='_blank' to='https://github.com/shuvo903'>
                        <button className="btn text-white font-semibold border-none bg-[linear-gradient(138deg,#632EE3_0%,#9F62F2_100%)] rounded-md px-6">
                            <FaGithub size={18} /> Contribute
                        </button>
                    </Link>
                </div>
                <div className="dropdown dropdown-end lg:hidden">
                    <div tabIndex={0} role="button" className="btn btn-ghost p-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-4 shadow-xl border border-gray-100 right-0 space-y-3">
                        {links}
                        <div className="divider my-1"></div>
                        <Link target='_blank' to='https://github.com/shuvo903'>
                            <button className="btn w-full text-white font-semibold border-none bg-[linear-gradient(138deg,#632EE3_0%,#9F62F2_100%)] rounded-md">
                                <FaGithub size={18} /> Contribute
                            </button>
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;