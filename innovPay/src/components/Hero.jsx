import React from 'react';
import styles from "../style";
import {discount, robot} from "../assets"

const Hero = () => (
    <div>
        <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
            <div className={`flex-1 ${styles.flexStart} flex-col x1:px-0 sm:px-16 px-6`}>
                <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
                    <img src={discount} alt="discount" className="w-[32px] h-[32px]"/>
                    <p className={`ml-2 flex flex-column`}>
                        <div className="text-white">20% Скидка</div>
                        <div className="text-white"> для аккаунта на 1 месяц</div>
                    </p>
                </div>
                <div className="flex flex-row justify-between items-center w-full gap-12">
                    <div className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] border-2">
                        Следующий способ  оплаты</div>
                    <div className={"flex-1 border-2 text-white"}>При данном способе оплаты можно</div>
                </div>
            </div>
        </section>

    </div>
);

export default Hero;
