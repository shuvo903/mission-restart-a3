import React from 'react';
import { Link } from 'react-router';
import noDataImg from '../../assets/noData.png';

const AppsError = () => {
    return (
        <div>
            <div className='grid justify-center items-center m-20'>
                <img className='lg:w-4/12 md:w-8/12 w-full mx-auto' src={noDataImg} alt="No apps installed yet Image" />
                <h2 className='lg:text-4xl md:text-3xl text-2xl  font-bold mt-4 mb-2 text-center'>No apps installed yet!</h2>
                <p className='text-gray-500 mt-4 lg:text-lg text-sm  text-center'>If you need apps please install apps from apps section first.

                </p>

                <div className='flex justify-center'>
                    <Link to='/apps'><button className='btn bg-[linear-gradient(138deg,#632EE3_0%,#9F62F2_100%)] text-white mt-8'>Show All Apps !</button></Link>
                </div>

            </div>
        </div>
    );
};

export default AppsError;