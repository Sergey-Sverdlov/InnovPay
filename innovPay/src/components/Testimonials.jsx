import React from 'react';
import {feedback} from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => (
        <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
            <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient" />
            <div className="w-full flex justify-around items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1] ">
                <h1 className={`${styles.heading2} text-center`}>Мнение людей <br className={`sm:block md:hidden`}/> о НАС</h1>
                <div className="w-full md:mt-0 mt-6  text-center flex justify-center">
                    <p className={`${styles.paragraph} max-w-[450px]`}>Все, что вам нужно для приема
                        карточных платежей и развития вашего бизнеса в любой точке планеты.</p>
                </div>
            </div>
            <div className="flex flex-wrap sm:justify-start md:justify-center w-full feedback-container relative z-[1]">
                {feedback.map((card ) => (
                    <FeedbackCard key = {card.id} {...card} />
                ))}
            </div>
        </section>
    );

export default Testimonials;
