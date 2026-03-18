import React from 'react';
import googlePlayImg from '../../assets/googlePlay.png';
import appStoreImg from '../../assets/appStore.png';

const Banner = () => {
    return (
        <div className="text-center items-center mx-auto mt-20">
            <div className="text-8xl font-bold  ">
                <h1>We Build <br /> <span className='bg-clip-text text-transparent bg- bg-linear-to-r from-[#632EE3] to-[#9F62F2]'>Productive</span> Apps</h1>
 </div>
               <div className="text-xl mt-4 mb-10 font-normal text-[#627382]">
                 <p>AtHERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting <br />.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
               </div>
           
            <div className=" flex text-center gap-4 justify-center items-center">
                <button className='btn text-center items-center bg-white py-6 px-6 text-black text-lg font-semibold border-2 hover:drop-shadow-lg'><span className='gap-1'><img  src={googlePlayImg} alt="" /></span> Google Play</button>

                <button className='btn text-center items-center bg-white py-6 px-6 text-black text-lg font-semibold border-2 hover:drop-shadow-lg'><span className='gap-1'><img  src={appStoreImg} alt="" /></span> App Store</button>
                
            </div>
        </div>
    );
};

export default Banner;