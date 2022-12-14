
import React from 'react';

const Youtube_alt = ({ color = 'grey',strokeWidth='0', strokeColor='currentColor', size = '64', ...rest }) => {
    return (
        <svg

            xmlns="http://www.w3.org/2000/svg"

            width={size}
            height={size}
            fill={color}
            stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" 
            {...rest}

            viewBox="0 0 100 100">
            <path id="YouTube__x28_alt_x29_" d="M95,32.458C95,25.025,88.979,19,81.55,19h-63.1
	C11.021,19,5,25.025,5,32.458v36.084C5,75.975,11.021,82,18.45,82h63.1C88.979,82,95,75.975,95,68.542V32.458z M41,65.724V31.83
	l25.702,16.947L41,65.724z"/>
        </svg>

    );
};
// https://github.com/SRAKIB17/ReactCustomIconsLibrary.git

export default Youtube_alt;
    
    