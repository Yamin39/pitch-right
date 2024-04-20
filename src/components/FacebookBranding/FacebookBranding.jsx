import facebookImg from "../../assets/images/facebook.png";

const FacebookBranding = () => {
  return (
    <div className="flex justify-between items-center gap-4 mt-[5.563rem] pl-5 mb-[3.688rem]" data-aos="fade-up" data-aos-once={true}>
      <div>
        <h1 className="max-w-[53.5rem] text-[3rem] sm:text-[3.45rem] text-[#233831] lg:text-[3.4rem] xl:text-[3.65rem] leading-[3.7rem] sm:leading-[4.5rem] -tracking-[0.063rem] font-bold">
          Facebook Branding
        </h1>
        <p className="max-w-[51.875rem] text-lg leading-8 mt-2">
          This service ensures that your website is listed on social networking sites and is attracting followers. Using Facebook and other social media sites
          we build a brand around your business which will long be remembered and ultimately result in more sales.
        </p>
      </div>
      <div className="hidden md:block">
        <div className="max-w-[11.625rem] h-[11.438rem]">
          <img className="size-full" src={facebookImg} />
        </div>
      </div>
    </div>
  );
};

export default FacebookBranding;
