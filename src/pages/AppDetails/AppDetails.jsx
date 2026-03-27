import React, { useState, useEffect } from 'react';
import { useLoaderData, useParams } from 'react-router';
import downloadIcon from '../../assets/icon-downloads.png';
import ratingIcon from '../../assets/icon-ratings.png';
import reviewIcon from '../../assets/icon-review.png';
import RatingsChart from '../RatingsChart/RatingsChart';
import { addInstallApp, getInstallApp } from '../../utility/localStorage';
import { toast } from 'react-toastify';


const AppDetails = () => {

    const appData = useLoaderData()
    const { id } = useParams();
    const [isInstalled, setIsInstalled] = useState(false);


    useEffect(() => {
        const installedList = getInstallApp();

        const exists = installedList.includes(parseInt(id)) || installedList.includes(id.toString());
        if (exists) {
            setIsInstalled(true);
        }
    }, [id]);

    window.scrollTo(0, 0);

    const app = appData.find((app) => app.id === parseInt(id));

    const { image, title, companyName, size, reviews, downloads, ratingAvg, description, ratings } = app;


    const handleInstallApp = id => {
        addInstallApp(id)
        setIsInstalled(true)
        toast.success(`${title} App Install successfully!`);

    };

    return (
        <div>
            <div className="w-11/12 mx-auto py-20">

                <div className="flex lg:flex-row flex-col items-center gap-8">
                    <div className='lg:w-4/12 overflow-hidden rounded-t-2xl'>
                        <img className='object-cover scale-150' src={image} alt="appImgae" />
                    </div>
                    <div className="w-full space-y-4 flex flex-col justify-between">
                        <h2 className="text-4xl font-bold">{title}</h2>
                        <p className="text-gray-500">
                            Developed by{" "}
                            <span className="font-semibold bg-[linear-gradient(180deg,#632EE3_0%,#9F62F2_100%)] bg-clip-text text-transparent">
                                {companyName}
                            </span>
                        </p>
                        <hr className="border-[#627382]" />
                        <div className="-ml-6">
                            <div className="stats">
                                <div className="stat">
                                    <img className="mb-2" src={downloadIcon} alt="" />
                                    <div className="stat-title">Downloads</div>
                                    <div className="stat-value">
                                        {new Intl.NumberFormat("en-us", {
                                            notation: "compact",
                                        }).format(downloads)

                                        }+
                                    </div>
                                </div>
                            </div>

                            <div className="stats">
                                <div className="stat">
                                    <img className="mb-2" src={ratingIcon} alt="" />
                                    <div className="stat-title">Average Ratings</div>
                                    <div className="stat-value">{ratingAvg}</div>
                                </div>
                            </div>

                            <div className="stats">
                                <div className="stat">
                                    <img className="mb-2" src={reviewIcon} alt="" />
                                    <div className="stat-title">Total Reviews</div>
                                    <div className="stat-value">{reviews}</div>
                                </div>
                            </div>
                        </div>
                        <div>

                            {isInstalled === true ? (
                                <button
                                    disabled
                                    className='btn px-5 py-6.5 rounded-lg bg-[#627382] text-white cursor-not-allowed'
                                >
                                    Installed
                                </button>
                            ) : (
                                <button
                                    onClick={() => handleInstallApp(id)}
                                    className='skeleton btn hover:bg-[#00af78] px-5 py-6.5 rounded-lg bg-[#00D390] text-white'
                                >
                                    Install Now ({size}MB)
                                </button>
                            )}

                        </div>
                    </div>
                </div>
                <hr className="border-[#627382] my-10" />
                <div className="flex flex-col">
                    <h4 className="text-2xl font-bold mb-6">Ratings</h4>
                    <RatingsChart ratings={ratings}></RatingsChart>
                </div>
                <hr className="border-[#627382] my-10" />
                <div className="flex flex-col gap-y-6">
                    <h4 className="text-2xl font-bold mb-6 ">Description</h4>

                    {description.split('\n\n').map((des, index) => (
                        <p key={index} className="lg:text-lg text-[#627382] text-justify">
                            {des}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AppDetails;