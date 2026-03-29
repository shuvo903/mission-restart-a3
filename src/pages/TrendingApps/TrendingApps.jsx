import React from 'react';
import App from '../App/App';
import { Link } from 'react-router';

const TrendingApps = ({ appsData }) => {

    const safeData = Array.isArray(appsData) ? appsData : [];

    const trendingApp = [...safeData]
        .sort((a, b) => b.ratingAvg - a.ratingAvg)
        .slice(0, 8);

    return (

        <div>
            <div className="w-11/12 mx-auto px-4 py-20 text-center">
                <div>
                    <h1 className='lg:text-5xl md:text-4xl text-3xl font-bold'>
                        Trending Apps
                    </h1>
                    <p className='text-lg text-[#627382] mt-5 mb-10'>
                        Explore All Trending Apps on the Market developed by us
                    </p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                    {
                        trendingApp.map(app => (
                            <App key={app.id} app={app} />
                        ))
                    }
                </div>

                <Link to='/apps'>
                    <button className='btn bg-[linear-gradient(138deg,#632EE3_0%,#9F62F2_100%)] text-white mt-8'>
                        Show All
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default TrendingApps;