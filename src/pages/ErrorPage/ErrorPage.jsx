import React from 'react';
import errorImage from '../../assets/error-404.png';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div>
            <div className='grid justify-center items-center m-20'>
                <img src={errorImage} alt="Error 404 Image" />
                <h2 className='lg:text-4xl md:text-3xl text-2xl  font-bold mt-4 mb-2 text-center'>Oops, page not found!</h2>
                <p className='text-gray-500 mt-4 lg:text-lg text-sm text-center'>The page you are looking for is not available.</p>

                <div className='flex justify-center'>
                    <Link to='/'><button className='btn bg-[linear-gradient(138deg,#632EE3_0%,#9F62F2_100%)] text-white mt-8'>Go Back!</button></Link>
                </div>

            </div>
        </div>

    );
};

export default ErrorPage;