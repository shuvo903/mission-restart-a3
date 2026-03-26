import React from 'react';
import googlePlayImg from '../../assets/googlePlay.png';
import appStoreImg from '../../assets/appStore.png';
import bannerImage from '../../assets/hero.png'
import { Link } from 'react-router';

const Banner = () => {
    return (
        <div className="text-center items-center mx-auto mt-20">
            <div className="lg:text-8xl md:text-6xl text-4xl font-bold  ">
                <h1>We Build <br /> <span className='bg-clip-text text-transparent bg-[linear-gradient(138deg,#632EE3_0%,#9F62F2_100%)]'>Productive</span> Apps</h1>
            </div>
            <div className="lg:text-xl text-sm mt-4 mb-10 font-normal text-[#627382]">
                <p>At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.<br />Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
            </div>

            <div className="flex lg:flex-row md:flex-row flex-col text-center lg:gap-6 md:gap-5 gap-4 justify-center items-center">
                <Link target='_blank' to='https://play.google.com/store'>
                    <button className='btn rounded-xl border-[#D2D2D2] text-center items-center bg-white py-6 lg:px-6 text-black text-lg font-semibold border-2 hover:drop-shadow-lg hover:bg-[#D2D2D2]'><span className='gap-1 w-2.5/12'><img src={googlePlayImg} alt="" /></span> Google Play</button>
                </Link>

                <Link target='_blank' to='https://apps.apple.com/us/iphone' >
                    <button className='btn rounded-xl border-[#D2D2D2] text-center items-center bg-white py-6 px-6 text-black text-lg font-semibold border-2 hover:drop-shadow-lg hover:bg-[#D2D2D2]'><span className='gap-1 w-2.5/12'><img src={appStoreImg} alt="" /></span> App Store</button>
                </Link>

            </div>
            <img className="w-auto mx-auto mt-8" src={bannerImage} alt="" />
        </div>
    );
};

export default Banner;