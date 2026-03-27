
import { Link, useLoaderData } from 'react-router';

import Installation from '../Installation/Installation';


import { ChevronDown } from 'lucide-react';
import AppsError from '../AppsError/AppsError';
import { useState } from 'react';

const MyInstallation = () => {



    const appData = useLoaderData()
    const [sort, setSort] = useState("");
    const [installApp, setInstallApp] = useState(appData); 



    window.scrollTo(0, 0);







    const handleSort = (type) => {

        setSort(type)

        if (type === "High-Low") {

            const sortedByHighToLow = [...installApp].sort((a, b) => b.downloads - a.downloads)

            setInstallApp(sortedByHighToLow)

        }
        if (type === "Low-High") {
            const sortedByLowToHigh = [...installApp].sort((a, b) => a.downloads - b.downloads)

            setInstallApp(sortedByLowToHigh)
        }

    };


    return (
        <div className='w-11/12 mx-auto py-20'>
            <div className="text-center">
                <h1 className='lg:text-5xl md:text-4xl text-3xl font-bold'>Your Installed Apps</h1>
                <p className='lg:text-lg text-[#627382] mt-5 mb-10' >Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className="mb-4 gap-5 flex lg:flex-row md:flex-row flex-col justify-between items-center">
                <div>
                    <h4 className='text-xl font-semibold'>{installApp.length} Apps Found</h4>
                </div>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn m-1 w-60 justify-between bg-white text-[#627382] select-neutral">
                        {sort ? sort : "Sort By Downloads"}
                        <ChevronDown />
                    </div>


                    <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-white rounded-box w-60 border border-gray-200 text-[#627382]">
                        <li>
                            <a onClick={() => handleSort("High-Low")}>High to Low</a>
                        </li>
                        <li>
                            <a onClick={() => handleSort("Low-High")}>Low to High</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-4">
                {
                    installApp.length === 0
                        ? <AppsError />
                        : installApp.map(app => (
                            <Installation key={app.id} app={app} installApp={installApp} setInstallApp={setInstallApp} />
                        ))
                }
            </div>
        </div>
    );
};

export default MyInstallation;