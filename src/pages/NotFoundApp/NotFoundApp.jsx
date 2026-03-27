import React from 'react';
import notFoundAppImg from '../../assets/App-Error.png';
import { Link } from 'react-router';

const NotFoundApp = () => {
    return (
        <div>
            <div className='grid justify-center items-center m-20'>
                <img className='w-6/12 mx-auto' src={notFoundAppImg} alt="" />
                <h2 className='text-4xl font-bold mt-4 mb-2 text-center'>OPPS!! APP NOT FOUND</h2>
                <p className='text-gray-500 mt-4  text-center'>The App you are requesting is not found on our system.  please try another apps

                </p>

                <div className='flex justify-center'>
                    <Link to='/'><button className='btn bg-[linear-gradient(138deg,#632EE3_0%,#9F62F2_100%)] text-white mt-8'>Go Back!</button></Link>
                </div>

            </div>
        </div>
    );
};

export default NotFoundApp;