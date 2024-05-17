import { useState, useEffect } from "react";
import hamburger from "../assets/images/icon-hamburger.svg";
import MobileNav from "./MobileNav";

const NavBar = () => {
  const [navbarStyle, setNavBarStyle] = useState("");
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const threshold = window.innerHeight;

      setNavBarStyle(scrollPosition >= threshold ? "bg-soft-red" : "");
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleNav = () => {
    setShowNav((prev) => !prev);
  };

  return (
    <header className={`font-barlow ${navbarStyle} w-full fixed top-0 z-10 transition duration-500 ease-in-out`}>
      <div className="px-7 py-10 flex justify-between items-center relative xs:px-[3em] xs">
        <a className="font-barlow text-white font-[900] text-[1.5rem] xs:text-[2rem]" href="#hero" >sunnyside</a>

        <nav className="hidden sm:block">
          <ul className="text-white flex font-[500] justify-between items-center gap-4 md:gap-14 md:text-lg">
                <li className="cursor-pointer"><a href="#about">About</a></li>
                <li className="cursor-pointer"><a href="#services">Services</a></li>
                <li className="cursor-pointer"><a href="#projects">Projects</a></li>
                <li className="text-dark-blue font-fraunces font-[900] bg-white px-[2em] py-[1em] rounded-[5em] cursor-pointer uppercase">
                  <a href="#contact">contact</a>
                </li>
          </ul>
        </nav>

        {showNav && <MobileNav />}

        <button className="cursor-pointer sm:hidden" onClick={toggleNav}>
          <img src={hamburger} alt="icon-menu" />
        </button>
      </div>
    </header>
  );
};

export default NavBar;
