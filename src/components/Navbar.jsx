import logo from "../assets/kevinRushLogo.png";
import {FaLinkedinIn} from "react-icons/fa6";
import {FaGithub} from "react-icons/fa6";
import {FaSquareXTwitter} from "react-icons/fa6";
import {FaInstagram} from "react-icons/fa6";
import { PiReadCvLogoThin } from "react-icons/pi";
import cv from "../assets/CVČervenka.pdf";


const Navbar = () => {
    return (
        <nav className="mb-20 flex items-center justify-between py-6">
            <div className={"flex flex-shrink-0 items-center"}>
                <img className={"mx-2 w-10"} src={logo} alt={"logo"}/>
            </div>
            <div className={"m-8 flex item-center justify-center gap-4 text-3xl"}>
                <a href="https://www.linkedin.com/in/kristi%C3%A1n-%C4%8Dervenka-0a0006258/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedinIn/>
                </a>
                <a href="https://github.com/K1ko" target="_blank" rel="noopener noreferrer">
                    <FaGithub/>
                </a>
                <a href="https://x.com/KikoCervenka1" target="_blank" rel="noopener noreferrer">
                    <FaSquareXTwitter/>
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <FaInstagram/>
                </a>
                <a href={cv} target="_blank" rel="noopener noreferrer">
                    <PiReadCvLogoThin/>
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
