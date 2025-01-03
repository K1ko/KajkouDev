import '../index.css';
import {HERO_CONTENT} from "../constants/index.js";
import profile from "../assets/IMG_4449.png";
import { motion } from "motion/react"

const container = (delay) => ({
    hidden : {x: -100, opacity: 0},
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            delay: delay,
        }
    }
});

const Me = () => {
    return (
        <div className={"border-b border-neutral-900 pb-4 lg:mb-35"}>
            <div className={"flex flex-wrap"}>
                <div className={"w-full lg:w-1/2"}>
                    <div className={"flex flex-col items-center lg:items-start"}>
                        <motion.h1 variants={container(0)} initial={"hidden"} animate={"visible"}

                                   className={"pb-16 text-6xl font-thin tracking-tight lg:mt-16"}>Kristián Červenka</motion.h1>
                        <motion.span variants={container(0.5)} initial={"hidden"} animate={"visible"}

                            className="gradient_background text-4xl tracking-tight">Data Scientist</motion.span>
                        <motion.p
                            variants={container(1)} initial={"hidden"} animate={"visible"}
                            className={"my-2 max-w-xl py-6 font-light"}>{HERO_CONTENT}</motion.p>

                        <motion.p variants={container(1.5)} initial={"hidden"} animate={"visible"}
                            className={"text-base font-semibold text-neutral-600"}>At a glance ... a chill guy that likes working out, development and snooker ッ  </motion.p>

                    </div>
                </div>
                <div className={"w-full lg:w-1/2 lg:p-8"}>
                    <div className={"flex justify-center"}>
                        <motion.img initial={{x: 100, opacity: 0}}
                                    animate={{x: 0, opacity: 1}}
                                    transition={{duration: 1, delay: 1.2}}
                                    src={profile} alt={"profile"} className={"rounded-2xl"}/>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default Me;