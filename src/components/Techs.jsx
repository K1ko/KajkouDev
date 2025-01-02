import { FaPython } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import {SiMongodb} from "react-icons/si";
import { FaDatabase } from "react-icons/fa6";
import { FaNode } from "react-icons/fa";


const Techs = () => {
    return (
        <div className={"border-b border-neutral-900 pb-24"}>
            <h1 className={"my-20 text-center text-4xl"}>Techs</h1>
            <div className={"flex flex-wrap items-center justify-center gap-4"}>
                <div className={"rounded-2xl border-4 border-neutral-800 p-4"}>
                    <FaPython className={"text-7xl text-yellow-300"}/>
                </div>
                <div className={"rounded-2xl border-4 border-neutral-800 p-4"}>
                    <RiReactjsLine className={"text-7xl text-cyan-400"}/>
                </div>
                <div className={"rounded-2xl border-4 border-neutral-800 p-4"}>
                    <SiMongodb className={"text-7xl text-green-500"}/>
                </div>
                <div className={"rounded-2xl border-4 border-neutral-800 p-4"}>
                    <FaNode className={"text-7xl text-green-500"}/>
                </div>
                <div className={"rounded-2xl border-4 border-neutral-800 p-4"}>
                    <FaDatabase className={"text-7xl text-neutral-700"}/>
                </div>
            </div>
        </div>
    );
};

export default Techs;