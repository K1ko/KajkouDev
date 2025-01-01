import aboutIMG from "../assets/about.jpg";
import {ABOUT_TEXT} from "../constants/index.js";
const About = () => {
    return (
        <div className={"border-b border-neutral-900 pb-4"}>
            <h1 className={"text-4xl text-center font-thin tracking-tight"}>About Me</h1>
            <div className={"flex flex-wrap"}>
                <div className={"w-full lg:w-1/2 lg:p-8"}>
                    <div className={"flex items-center justify-center"}>
                        <img src={aboutIMG} alt={"AboutMe"} className={"rounded-2xl"}/>
                    </div>
                </div>
                <div className={"w-full lg:w-1/2"}>
                    <div className={"flex justify-center lg:justify-start"}>
                        <p className={"my-2  max-w-xl py-6"}>{ABOUT_TEXT}</p>
                    </div>
                </div>
            </div>
        </div>
    )
        ;
};

export default About;