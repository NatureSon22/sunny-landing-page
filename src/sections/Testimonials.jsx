import person1 from "../assets/images/image-emily.jpg";
import person2 from "../assets/images/image-jennie.jpg";
import person3 from "../assets/images/image-thomas.jpg";

const Testimonials = () => {
  return (
    <div className="font-barlow px-6 py-[5rem] text-center xs:py-[6.5rem] grid place-items-center md:py-[10rem]">
        <p className="mb-[5rem] text-dark-grayish-blue font-fraunces font-[900] tracking-[0.3em] uppercase xs:text-[1.4rem] xs:mb-[6rem]">client testimonials</p>

        <div className="grid gap-[5em] sm:grid-cols-2 xl:grid-cols-3">
            <div className="grid place-items-center borde xl:w-fit">
                <div className="mb-[2rem] xs:mb-[3.5rem]">
                    <img className="w-[5em] rounded-[50%] xs:w-[5.5em]" src={person1} alt="" />
                </div>

                <p className="max-w-[20em] text-very-dark-desaturated-blue font-[500] xs:text-[1.1rem]">We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.</p>
                <p className="text-very-dark-desaturated-blue text-[1.1rem] font-fraunces font-[900] mt-[2rem] mb-[0.5rem] xs:mt-[4rem]">Emily R.</p>
                <p className="text-[0.9rem] font-[500] text-dark-grayish-blue">Marketing Director</p>
            </div>

            <div className="grid place-items-center xl:w-fit">
                <div className="mb-[2rem] xs:mb-[3.5rem]">
                    <img className="w-[5em] rounded-[50%] xs:w-[5.5em]" src={person3} alt="" />
                </div>

                <p className="max-w-[20em] text-very-dark-desaturated-blue font-[500] xs:text-[1.1rem]">Sunnyside&rsquo;s enthusiasm coupled with their keen interest in our brand&rsquo;s success made it a satisfying and enjoyable experience.</p>
                <p className="text-very-dark-desaturated-blue text-[1.1rem] font-fraunces font-[900] mt-[2rem] mb-[0.5rem] xs:mt-[4rem]">Thomas S.</p>
                <p className="text-[0.9rem] font-[500] text-dark-grayish-blue">Chief Operating Officer</p>
            </div>

            <div className="grid place-items-center sm:col-span-2 xl:col-span-1 xl:w-fit">
                <div className="mb-[2rem] xs:mb-[3.5rem]">
                    <img className="w-[5em] rounded-[50%] xs:w-[5.5em]" src={person2} alt="" />
                </div>

                <p className="max-w-[20em] text-very-dark-desaturated-blue font-[500] xs:text-[1.1rem]">Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!</p>
                <p className="text-very-dark-desaturated-blue text-[1.1rem] font-fraunces font-[900] mt-[2rem] mb-[0.5rem] xs:mt-[4rem]">Jennie F.</p>
                <p className="text-[0.9rem] font-[500] text-dark-grayish-blue">Business Owner</p>
            </div>
        </div>
    </div>
  )
}

export default Testimonials;