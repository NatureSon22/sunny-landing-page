import imgegg from "../assets/images/mobile/image-transform.jpg";
import imgcup from "../assets/images/mobile/image-stand-out.jpg";
import desktopimgegg from "../assets/images/desktop/image-transform.jpg";
import desktopimgcup from "../assets/images/desktop/image-stand-out.jpg";

const Feature = () => {
  return (
    <div id="about">
        <div className="font-barlow text-center md:flex md:flex-row-reverse">
            <div className="md:flex-1">
                <img className="w-full h-full object-cover md:hidden" src={imgegg} alt="" />
                <img className="hidden w-full h-full object-cover md:block" src={desktopimgegg} alt="" />
            </div>
            
            <div className="px-[2rem] py-[4.5rem] xs:py-[6rem] md:flex-1 md:text-left md:grid md:place-items-center md:px-[0]">
                <div className="md:w-[90%] xl:w-fit">
                    <p className="font-fraunces font-[900] text-[2rem] leading-[2.5rem] text-very-dark-desaturated-blue xs:text-[3rem] xs:leading-[3.5rem] lg:max-w-[10em]">Transform your brand</p>
                    <p className="font-[500] text-dark-blue my-7 xs:my-[3rem] xs:text-lg lg:max-w-[30em] md:text-[1.2rem]">
                        We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you. 
                    </p>

                    <a className="font-fraunces font-[900] text-very-dark-desaturated-blue relative border-overlay yellow uppercase xs:text-xl" href="#">learn more</a>
                </div>
            </div>
        </div>

        <div className="font-barlow text-center md:flex">
            <div className="md:flex-1">
                <img className="w-full h-full object-cover md:hidden" src={imgcup} alt="" />
                <img className="hidden w-full h-full object-cover md:block" src={desktopimgcup} alt="" />
            </div>
            
            <div className="px-[2rem] py-[4.5rem] xs:py-[6rem] md:flex-1 md:text-left md:grid md:place-items-center md:px-[0]">
                <div className="md:w-[90%] xl:w-fit">
                    <p className="font-fraunces font-[900] text-[2rem] leading-[2.5rem] text-very-dark-desaturated-blue xs:text-[3rem] xs:leading-[3.5rem] lg:max-w-[10em]">Stand out to the right audience</p>
                    <p className="font-[500] text-dark-blue my-7 xs:my-[3rem] xs:text-lg lg:max-w-[30em] md:text-[1.2rem]">
                        Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.
                    </p>

                    <a className="font-fraunces font-[900] text-very-dark-desaturated-blue relative border-overlay red uppercase xs:text-xl" href="#">learn more</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Feature;