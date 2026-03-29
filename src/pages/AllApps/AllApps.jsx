import React, { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router';
import App from '../App/App';
import { Search } from 'lucide-react';
import NoAppsFound from '../NoAppsFound/NoAppsFound';

const AllApps = () => {
    const data = useLoaderData();
    const appsData = Array.isArray(data) ? data : [];

    const [search, setSearch] = useState('');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const filteredApps = appsData.filter((app) =>
        app.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className='w-11/12 mx-auto py-20'>
            <div className="text-center">
                <h1 className='lg:text-5xl md:text-4xl text-3xl font-bold'>
                    Our All Applications
                </h1>
                <p className='lg:text-lg text-[#627382] mt-5 mb-10'>
                    Explore All Apps on the Market developed by us. We code for Millions
                </p>
            </div>

            <div className="mb-4 gap-5 flex lg:flex-row md:flex-row flex-col justify-between items-center">
                <div>
                    <h4 className='text-xl font-semibold'>
                        ({filteredApps.length}) Apps Found
                    </h4>
                </div>

                <div>
                    <label className="input text-[#627382]">
                        <Search />
                        <input
                            onChange={(e) => setSearch(e.target.value)}
                            value={search}
                            type="search"
                            placeholder="search Apps"
                        />
                    </label>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {
                    filteredApps.length === 0 ? (
                        <div className="col-span-4 flex items-center justify-center">
                            <NoAppsFound setSearch={setSearch} search={search} />
                        </div>
                    ) : (
                        filteredApps.map(app => (
                            <App key={app.id} app={app} />
                        ))
                    )
                }
            </div>
        </div>
    );
};

export default AllApps;