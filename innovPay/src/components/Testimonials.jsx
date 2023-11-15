import React from 'react';
import {feedback} from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";
const Testimonials = () => (
        <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
            {/*TODO*/}
            <div className="w-full flex justify-around items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1] ">
                <h1 className={`${styles.heading2} text-center`}>Мнение людей <br className={`sm:block md:hidden`}/> о НАС</h1>
                <div className="w-full md:mt-0 mt-6  text-center flex justify-center">
                    <p className={`${styles.paragraph} max-w-[450px]`}>Все, что вам нужно для приема
                        карточных платежей и развития вашего бизнеса в любой точке планеты.</p>
                </div>
            </div>
            <div className="flex flex-wrap">
                <h1 className={`border-2`}>Првиет</h1>
            </div>
        </section>
    );

export default Testimonials;
