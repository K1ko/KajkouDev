import '../index.css';
import {HERO_CONTENT} from "../constants/index.js";
import profile from "../assets/IMG_4449.png";

const Me = () => {
    return (
        <div className={"border-b border-neutral-900 pb-4 lg:mb-35"}>
            <div className={"flex flex-wrap"}>
                <div className={"w-full lg:w-1/2"}>
                    <div className={"flex flex-col items-center lg:items-start"}>
                        <h1 className={"pb-16 text-6xl font-thin tracking-tight lg:mt-16"}>Kristián Červenka</h1>
                        <span className="gradient_background text-4xl tracking-tight">Data Scientist</span>
                        <p className={"my-2 max-w-xl py-6 font-light"}>{HERO_CONTENT}</p>
                    </div>
                </div>
                <div className={"w-full lg:w-1/2 lg:p-8"}>
                    <div className={"flex justify-center"}>
                        <img src={profile} alt={"profile"} className={"rounded-2xl"}/>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default Me;