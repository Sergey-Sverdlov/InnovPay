import React from 'react';

import {close, logo, menu} from "../assets"
import {navLinks} from "../constants";

const Navbar = () => {
    const [toggle, setToggle] = React.useState(false)
    return (
        <nav className="w-full flex py-6 justify-between items-center navbar">
            <img src={logo} alt="hookbank" className="w-[124px] h-[32px]"/>
            <ul className="list-none sm:flex hidden justify-end items-center flex-1">
                {navLinks.map((navLink, index) => (
                    <li
                        key={navLink.id}
                        className={`font-poppins font-normal cursor-pointer text-[16px] ${index + 1 === navLinks.length ? "mr-0" : "mr-10"} text-white`}
                    >
                        <a href={`#${navLink.id}`}>
                            {navLink.title}
                        </a>
                    </li>
                ))}
            </ul>


            <div className="sm:hidden flex flex-1 justify-end items-center"
            style={{border: "5px solid red"}}>
                <img
                    src={toggle ? close : menu}
                    alt="menu"
                    className="w-[28px] h-[28px] object-contain"
                    onClick={() => setToggle((prev) => !prev)}
                />
                <div
                    className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
                    style={{border: '3px solid black'}}
                >
                    <ul className="list-none font-poppins flex flex-col justify-end items-center flex-1">
                        {navLinks.map((navLink, index) => (
                            <li
                                key={navLink.id}
                                className={`font-poppins font-normal cursor-pointer text-[16px] ${index + 1 === navLinks.length ? "mr-0" : "mb-4"} text-white`}
                            >
                                <a href={`#${navLink.id}`}>
                                    {navLink.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
