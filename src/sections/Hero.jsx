import mobileimgheader from "../assets/images/mobile/image-header.jpg";
import midmobileimgheader from "../assets/images/mobile/mid-image-header.jpg";
import desktopimgheader from "../assets/images/desktop/image-header.jpg";
import arrowDown from "../assets/images/icon-arrow-down.svg";

const Hero = () => {
  return (
    <div id="hero" className="max-h-screen relativ overflow-clip">
        <img className="min-w-full max-h-full aspect-auto object-cover sm:hidden" src={mobileimgheader} alt="" />
        <img className="hidden min-w-full max-h-full aspect-auto object-cover sm:block lg:hidden" src={midmobileimgheader} alt="" />
        <img className="min-w-full max-h-full object-cover hidden lg:block" src={desktopimgheader} alt="" />

        <div className="grid gap-10 place-items-center absolute top-[35%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 xs:top-[55%] xs:gap-[4em] md:gap-[6em] xl:gap-[7em] xl:top-[50%]">
            <h1 className="text-white text-[2.5rem] font-fraunces font-[900] uppercase text-center leading-[3rem] xs:text-[3.5rem] xs:leading-[4rem] md:w-max md:tracking-[0.5rem] lg:text-[4.5rem] lg:tracking-[1rem]">we are creatives</h1>
            <img className="animate-bounce" src={arrowDown} alt="arrow down" />
        </div>
    </div>
  )
}

export default Hero