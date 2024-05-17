const MobileNav = () => {
    return (
        <nav className="w-[85%] bg-white absolute top-[17em] shadow-md rounded-sm left-1/2 transform -translate-x-1/2 -translate-y-1/2 mobile-nav sm:hidden xs:text-[1.1rem]">
            <ul className="py-[2.5em] text-dark-blue font-[600] grid gap-[2em] place-items-center">
                <li className="cursor-pointer"><a href="#about">About</a></li>
                <li className="cursor-pointer"><a href="#services">Services</a></li>
                <li className="cursor-pointer"><a href="#projects">Projects</a></li>
                <li className="font-fraunces font-[900] bg-yellow px-[2.5em] py-[1em] rounded-[5em] cursor-pointer uppercase">
                    <a href="#contact">contact</a>
                </li>
            </ul>
        </nav>
    )
}

export default MobileNav;