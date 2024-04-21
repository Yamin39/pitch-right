import brainIcon from "../../assets/images/brain.png";
import clockIcon from "../../assets/images/clock.png";

const AboutUs = () => {
  return (
    <div id="AboutUs" className="mt-[5.625rem] mb-10">
      <div className="ml-4" data-aos="fade-up" data-aos-delay="100" data-aos-once={true}>
        <p className="text-lg text-[#3c3c3c] rounded-xl bg-[#f0eeea] px-3 py-1 w-fit">Flexible and Scalable</p>
        <h1 className="mt-2 text-[3rem] sm:text-[3.45rem] text-[#233831] lg:text-[3.4rem] xl:text-[3.65rem] leading-[3.7rem] sm:leading-[4.5rem] -tracking-[0.063rem] font-bold">
          Pitch Right <span className="text-[#0000F3]">Culture</span>
        </h1>
        <p className="max-w-[43.625rem] text-lg leading-8 mt-2">
          The culture of sales is changing in today&apos;s modern market. Position your business at the forefront with Pitch Right Ltd and see the benefits.
          <br />
          <br />
          New: Pitch Right Automated Sales Platform. We are now offering a new service capable of turning your website visitors into actual sales. With this
          service it&apos;s possible to identify the businesses browsing your website, gauge their interest in your products and/or services, and approach
          prospects for orders. Click here to find out more...
        </p>
      </div>

      <div className="flex gap-[3.313rem] flex-col md:flex-row mt-[4.188rem]">
        {/* card 1 */}
        <div className="bg-[#F0EEEA] md:w-[36rem] rounded-xl px-7 py-10" data-aos="fade-up" data-aos-once={true}>
          <div className="h-[8.375rem] max-w-[9.688rem]">
            <img src={clockIcon} className="size-full rounded-xl" />
          </div>
          <div className="mt-[3rem] text-[#3c3c3c]">
            <h3 className="text-3xl font-bold -tracking-[0.063rem] leading-10">The Time is Right</h3>
            <p className="max-w-[22rem] sm:max-w-full md:max-w-[22rem] text-lg leading-8 mt-2">
              An increasing number of companies are deriving significant benefit from partnering with independent sales organisations.
            </p>
          </div>
        </div>

        {/* card 2 */}
        <div className="bg-[#F0EEEA] md:w-[36rem] rounded-xl px-7 py-10" data-aos="fade-up" data-aos-delay="100" data-aos-once={true}>
          <div className="h-[8.375rem] max-w-[9.688rem]">
            <img src={brainIcon} className="size-full rounded-xl" />
          </div>
          <div className="mt-[3rem] text-[#3c3c3c]">
            <h3 className="text-3xl font-bold -tracking-[0.063rem] leading-10">Your Passion, Our Desire</h3>
            <p className="max-w-[22rem] sm:max-w-full md:max-w-[22rem] text-lg leading-8 mt-2">
              We will provide you with a dedicated account manager, who understands the need to stay ahead of the competition, and will work in direct
              partnership with you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
