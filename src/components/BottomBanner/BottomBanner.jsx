import { FaCheck } from "react-icons/fa6";
import BottomBannerImg from "../../assets/images/BottomBanner.png";
import bottomBannerBg from "../../assets/images/bottom-banner-bg.png";

const BottomBanner = () => {
  return (
    <div className="relative flex flex-col md:flex-row gap-10 justify-between items-center bg-[#131514] rounded-xl px-[3.2rem] sm:px-[4.875rem] py-[4rem] sm:py-[5.6rem] my-24">
      <div className="text-white" data-aos="fade-up" data-aos-delay="100" data-aos-once={true}>
        <p className="text-lg rounded-xl bg-[#3F403F] px-3 py-1 w-fit">Last Call</p>
        <h1 className="text-[3rem] sm:text-[3.45rem] lg:text-[3.4rem] xl:text-[3.65rem] leading-[3.7rem] sm:leading-[4.5rem] -tracking-[0.063rem] font-bold mt-4">
          Ready to <span className="text-[#0000f3]">elevate</span>
          <br />
          your marketing?
        </h1>
        <p className="max-w-[31.875rem] text-lg leading-8 mt-2">Unlock Your Business Potential with Pitch Right&apos;s Tailored Sales Support Services</p>
        <label
          htmlFor="name"
          className="btn leading-[1.5rem] sm:leading-none font-normal min-h-0 h-auto text-white border-none bg-[#0000f3] hover:bg-[#0000f3] hover:brightness-90 mt-10 w-full sm:w-fit px-3 sm:px-10 py-4 rounded-xl"
        >
          Get Started
        </label>
        <div className="flex flex-col sm:flex-row gap-4 mt-10">
          <div className="flex gap-2 items-center">
            <FaCheck className="text-xl text-[#0000f3]" />
            <p className="text-lg">No Credit Card</p>
          </div>
          <div className="flex gap-2 items-center">
            <FaCheck className="text-xl text-[#0000f3]" />
            <p className="text-lg">Free Support</p>
          </div>
        </div>
      </div>
      <div>
        <div className="max-w-[32.938rem]">
          <img className="relative z-[2] w-full" src={BottomBannerImg} data-aos="fade-up" data-aos-delay="100" data-aos-once={true} />
        </div>
      </div>
      <div className="hidden md:block absolute w-[31.25rem] h-[28.125rem] top-0 right-0" data-aos="zoom-in" data-aos-delay="50" data-aos-once={true}>
        <img className="w-full h-full" src={bottomBannerBg} />
      </div>
    </div>
  );
};

export default BottomBanner;
