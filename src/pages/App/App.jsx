import React from 'react';
import { FaStar } from 'react-icons/fa';
import { LuDownload } from 'react-icons/lu';
import { Link } from 'react-router';

const App = ({ app }) => {

    const { title, downloads, image, ratingAvg } = app;

    return (


        <Link to={`/apps/${app.id}`}>

            <div>

                <div className="w-full h-110 card bg-base-100 shadow-sm px-4 py-4 cursor-pointer">
                    <figure className="">
                        <img
                            src={image}
                            alt=""
                            className="rounded-xl w-96 h-80 object-cover  bg-[#D9D9D9] hover:scale-110  duration-500" />
                    </figure>
                    <div className="items-centern mt-4">
                        <h2 className="text-xl text-left font-semibold">{title}</h2>
                        <div className="card-actions w-full justify-between mt-4">
                            <button className="btn border-none bg-[#F1F5E8] text-[#00D390] text-base"><LuDownload />{new Intl.NumberFormat("en-us", {
                                notation: "compact",
                            }).format(downloads)

                            }+</button>
                            <button className="btn border-none bg-[#FFF0E1] text-[#FF8811] text-base"><FaStar /> {ratingAvg}</button>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default App;