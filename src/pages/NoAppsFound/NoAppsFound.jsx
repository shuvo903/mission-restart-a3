import React from 'react';

import noDataImg from '../../assets/noData.png';

const NoAppsFound = ({ search, setSearch }) => {
    return (
        <div>
            <div>
                <div className='grid justify-center items-center m-20'>
                    <img className='lg:w-4/12 md:w-8/12 w-full  mx-auto' src={noDataImg} alt="No Apps Found Image" />
                    <h2 className='lg:text-4xl md:text-3xl text-2xl font-bold mt-4 mb-2 text-center'>No Apps Found</h2>
                    <p className='text-gray-500 lg:text-lg text-sm mt-4  text-center'>We couldn't find anything matching <span className='text-black font-bold'>"{search}"</span>. Try adjusting your search term.

                    </p>

                    <div className='flex justify-center'>
                        <button onClick={() => setSearch("")} className='btn bg-[linear-gradient(138deg,#632EE3_0%,#9F62F2_100%)] text-white mt-8'>Show All Apps!</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default NoAppsFound;