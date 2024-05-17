import fbicon from "../assets/images/icon-facebook.svg";
import instagramicon from "../assets/images/icon-instagram.svg";
import twittericon from "../assets/images/icon-twitter.svg";
import pinteresticon from "../assets/images/icon-pinterest.svg";

const Footer = () => {
  return (
    <footer className="px-[2em] py-[4em] text-dark-desaturated-cyan bg-moderate-cyan grid place-items-center" id="contact" >
        <p className="text-[2rem] font-[900]" >sunnyside</p>

        <ul className="mt-[2.5em] mb-[4.5em] flex gap-[4em] font-[500]" >
            <li className="cursor-pointer" >About</li>
            <li className="cursor-pointer">Services</li>
            <li className="cursor-pointer">Projects</li>
        </ul>

        <div className="flex gap-[1.5em]">
            <img className="cursor-pointer" src={fbicon} alt="" />
            <img className="cursor-pointer" src={instagramicon} alt="" />
            <img className="cursor-pointer" src={twittericon} alt="" />
            <img className="cursor-pointer" src={pinteresticon} alt="" />
        </div>
    </footer>
  )
}

export default Footer;