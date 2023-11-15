import React from 'react';

const Button = ({styles}) => {
    return (
        <div>
            <button type="button" className={`py-4 px-6 bg-blue-gradient font-poppins 
            font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px]`}>Приступай к работе</button>
        </div>
    );
};

export default Button;
