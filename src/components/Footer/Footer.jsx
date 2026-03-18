import React from 'react';
import logoImg from '../../assets/logo.png'
import { Link } from 'react-router';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='bg-gray-900 flex-grow'>
            <footer className="footer sm:footer-horizontal   p-10 text-white mx-auto max-w-screen-2xl px-3 lg:px-6">
                <aside>
                    <Link to='/'>
                        <div className="gap-1 flex items-center">
                            <img className='w-10 h-10' src={logoImg} alt="" />
                            <h1 className='text-xl font-bold  bg-clip-text text-transparent bg- bg-linear-to-r from-[#632EE3] to-[#9F62F2]'>HERO.IO</h1>
                        </div>
                    </Link>
                    <p className='text-sm  text-stone-300 mt-2'>
                       Empowering your digital lifestyle.<br /> Discover, install, and organize the<br />  best-in-class apps with Hero IO—the<br />  ultimate app hub for power users.
                    </p>
                </aside>
                <nav>
                    <h6 className="footer-title opacity-100 font-semibold text-white ">Quick Links</h6>

                    <Link className='text-stone-400 link link-hover' to='/'> Home</Link>
                    <Link className='text-stone-400 link link-hover' to='/apps'> Apps</Link>
                    <Link className='text-stone-400 link link-hover' to='/readList'> Installation</Link>
                </nav>
                <nav>
                    <h6 className="footer-title opacity-100 font-semibold text-white">Services</h6>
                    <Link className="link link-hover text-stone-400">Products & Services</Link>
                    <Link className="link link-hover text-stone-400">Customer Stories</Link>
                    <Link className="link link-hover text-stone-400">Download Apps</Link>

                </nav>
                <nav>

                    <h6 className="footer-title opacity-100 font-semibold text-white">Social Links</h6>
                    <div className="flex gap-2">
                        <a target='_blank' href='https://www.facebook.com/' className="flex mb-1.5 gap-2 link link-hover"> <FaFacebook size={25} /></a>
                        <a target='_blank' href='https://www.linkedin.com/' className="flex mb-1.5 gap-2 link link-hover"> <FaLinkedin size={25} /></a>
                        <a target='_blank' href='https://github.com/' className="flex mb-1.5 gap-2 link link-hover"> <FaGithub size={25} /></a>
                    </div>


                </nav>

            </footer>
            <footer className="footer sm:footer-horizontal footer-center bg-gray-900 text-base  p-4 text-white border-t-2 border-gray-500 ">
                <aside>
                    <p>© {new Date().getFullYear()} CS — Ticket System. All rights reserved.</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;