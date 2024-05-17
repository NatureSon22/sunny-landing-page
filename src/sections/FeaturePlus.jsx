import mobileimgcherry from "../assets/images/mobile/image-graphic-design.jpg";
import mobileimgorange from "../assets/images/mobile/image-photography.jpg";
import desktopimgcherry from "../assets/images/desktop/image-graphic-design.jpg";
import desktopimgorange from "../assets/images/desktop/image-photography.jpg";


const FeaturePlus = () => {
  return (
    <div className="font-barlow relative md:flex" id="services">
        <div className="relative md:flex-1">
            <div>
                <img className="w-full h-full object-cover xl:hidden" src={mobileimgcherry} alt="" />
                <img className="hidden w-full h-full object-cover xl:block" src={desktopimgcherry} alt="" />
            </div>

            <div className="text-dark-desaturated-cyan px-8 py-[3.5rem] text-center absolute bottom-0 xs:py-[5rem] xl:p-0 xl:max-w-[30em] xl:left-1/2 xl:transform xl:-translate-x-1/2 xl:-translate-y-1/2">
                <p className="mb-5 text-[1.5rem] font-fraunces font-[900] xs:text-[2rem] xs:mb-8">Graphic design</p>
                <p className="text-[0.95rem] font-[500] xs:text-[1.2rem]">
                    Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.
                </p>
            </div>
        </div>

        <div className="relative md:flex-1">
            <div>
                <img className="w-full h-full object-cover xl:hidden" src={mobileimgorange} alt="" />
                <img className="hidden w-full h-full object-cover xl:block" src={desktopimgorange} alt="" />
            </div>

            <div className="text-dark-desaturated-cyan px-8 py-[3.5rem] text-center absolute bottom-0 xs:py-[5rem] xl:p-0 xl:max-w-[25em] xl:left-1/2 xl:transform xl:-translate-x-1/2 xl:-translate-y-1/2">
                <p className="mb-5 text-[1.5rem] font-fraunces font-[900] xs:text-[2rem] xs:mb-8">Photography</p>
                <p className="text-[0.95rem] font-[500] xs:text-[1.2rem]">
                    Increase your credibility by getting the most stunning, high-quality photos that improve your business image.
                </p>
            </div>
        </div>
    </div>
  )
}

export default FeaturePlus