import React from 'react';
import { Whirl, WhirlPreset } from 'react-loader-spinner/beta';



const Loader = () => {
    return (
<div className="flex items-center">
            <Whirl

            preset={WhirlPreset.sunset}
        />
</div>
)

        
};

export default Loader;