import React from 'react';
import { FaStar } from 'react-icons/fa';
import { LuDownload } from 'react-icons/lu';
import { removeInstallApp } from '../../utility/localStorage';
import { toast } from 'react-toastify';

const Installation = ({ app, setInstallApp, installApp }) => {

    window.scrollTo(0, 0);

    const { title, downloads, image, ratingAvg, size } = app;

    const handleUninstallApp = (id) => {

        const remaining = installApp.filter(app => app.id !== id);
        setInstallApp([...remaining]);


        removeInstallApp(id);

        toast.success(`${title} App uninstalled successfully!`);

    };


    return (

        <div>



            <div className="flex flex-col lg:flex-row p-4 bg-white rounded-xl lg:items-left items-center gap-4">
                <div className='lg:w-1/12 md:w-4/12 rounded-lg overflow-hidden'>
                    <img className='object-cover scale-170' src={image} alt="appImgae" />
                </div>
                <div className="w-full flex flex-col justify-center">
                    <h2 className="text-2xl font-bold">{title}</h2>
                    <div className="flex gap-4 mt-4">
                        <div className="  flex gap-1 items-center text-[#00D390] text-base"><LuDownload /> {new Intl.NumberFormat("en-us", {
                            notation: "compact",
                        }).format(downloads)

                        }+
                        </div>
                        <div className=" flex gap-1 items-center text-[#FF8811] text-base"><FaStar /> {ratingAvg}
                        </div>
                        <div className="text-[#627382]">
                            {size} MB
                        </div>

                    </div>

                </div>
                <div className='mx-auto lg:w-60 w-full'>
                    <button onClick={() => handleUninstallApp(app.id)} className='hover:bg-[#00af78] btn text-xl py-6.5 rounded-lg w-full bg-[#00D390] text-white'>Uninstall</button>
                </div>
            </div>
        </div>

    );
};

export default Installation;