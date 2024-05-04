import React from 'react';

const WhiteContainer = ({ info, css }) => {
    return (
        <div className={`${css} bg-white w-fit shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-md`}>
            {info}
        </div>
    );
};

export default WhiteContainer;
