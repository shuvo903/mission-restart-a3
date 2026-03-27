import React from 'react';
import { useLoaderData } from 'react-router';
import App from '../App/App';

const AllApps = () => {
    const appsData = useLoaderData()

    window.scrollTo(0, 0);

    return (
        <div className='w-11/12 mx-auto py-20'>
            <div className="text-center">
                <h1 className='lg:text-5xl md:text-4xl text-3xl font-bold'>Our All Applications</h1>
                <p className='lg:text-lg text-[#627382] mt-5 mb-10' >Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
            <div className="mb-4 gap-5 flex lg:flex-row md:flex-row flex-col justify-between items-center">
                <div>
                    <h4 className='text-xl font-semibold'>({appsData.length}) Apps Found</h4>
                </div>
                <div >
                    <label className="input">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>
                        <input type="search" required placeholder="search Apps" />
                    </label>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {
                    appsData.map(app => (<App key={app.id} app={app}></App>))
                }
            </div>
        </div>
    );
};

export default AllApps;
