import React from 'react';
import {stats} from "../constants";
import styles from "../style";

const Stats = () => (
    <div className={`flex justify-between  md:flex-row md:gap-[0px]  sm:mb-20 mb-6 sm:flex-col sm:items-center sm:gap-[20px]`}>
        {stats.map((stat,index) => (
                <div key={stat.id} className={`flex flex-row items-center justify-start sm:justify-start  sm:w-[320px] sm:text-left md:${index === 0 ? "ml-[50px]" : "ml-[0px]"}`}>
                    <h4 className="font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white ">{stat.value}</h4>
                    <p className="font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3">{stat.title}</p>
                </div>
            )
        )
        }

    </div>
);

export default Stats;
