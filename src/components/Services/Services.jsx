import { FaCheck } from "react-icons/fa6";
import servicesImg1 from "../../assets/images/service-1.jpg";
import servicesImg2 from "../../assets/images/service-2.jpg";

const Services = () => {
  return (
    <div id="services">
      {/* Monthly Sales Support */}
      <div className="flex flex-col-reverse md:flex-row justify-between md:items-center mt-[6.25rem]">
        <div className="mt-10 md:mt-0" data-aos="fade-up" data-aos-once={true}>
          <h1 className="text-[3rem] sm:text-[3.45rem] text-[#233831] lg:text-[3.4rem] xl:text-[3.65rem] leading-[3.7rem] sm:leading-[4.5rem] -tracking-[0.063rem] font-bold">
            Monthly Sales <br /> Support
          </h1>
          <p className="max-w-[31.875rem] text-[#233831] text-lg leading-8 mt-2">
            Not only providing you with a pipeline of qualified/targeted potentials and appointments, we will work in partnership with you to close every
            opportunity we present. No long contracts, no hassle, simple to implement. This module is best suited for small to medium size businesses
            irrespective of industry.
          </p>
          <div className="w-fit">
            <label
              htmlFor="name"
              className="btn font-normal min-h-0 w-fit h-auto text-white border-none bg-[#0000f3] hover:bg-[#0000f3] hover:brightness-90 mt-9 px-10 py-4 rounded-xl"
            >
              Contact us for a quote today
            </label>
          </div>
        </div>
        <div>
          <div className="md:max-w-[37.288rem] sm:h-[29.938rem]" data-aos="fade-up" data-aos-delay={window.innerWidth > 768 ? 100 : 0} data-aos-once={true}>
            <img className="size-full object-cover md:object-fill rounded-2xl" src={servicesImg1} alt="About Image 1" />
          </div>
        </div>
      </div>

      {/* Email Marketing */}
      <div className="flex flex-col-reverse md:flex-row-reverse justify-between md:items-center mt-[2.25rem]">
        <div className="mt-10 md:mt-0" data-aos="fade-up" data-aos-once={true}>
          <h1 className="text-[3rem] sm:text-[3.45rem] text-[#233831] lg:text-[3.4rem] xl:text-[3.65rem] leading-[3.7rem] sm:leading-[4.5rem] -tracking-[0.063rem] font-bold">
            Email Marketing
          </h1>
          <p className="max-w-[29.188rem] text-[#233831] text-lg leading-8 mt-2">
            This service ensures that your database of contacts and customers are marketed to on a daily basis. Benefits of this service include:
          </p>
          <ul className="mt-5">
            <li className="flex gap-2 items-center">
              <FaCheck className="text-xl text-[#0000f3]" />
              <p className="text-lg">Custom E-Flyer design</p>
            </li>
            <li className="flex gap-2">
              <FaCheck className="text-xl mt-1 text-[#0000f3]" />
              <p className="text-lg">
                We target your contacts and/or our database of 2M <br className="hidden sm:block" /> UK businesses.
              </p>
            </li>
            <li className="flex gap-2 items-center">
              <FaCheck className="text-xl text-[#0000f3]" />
              <p className="text-lg">Link to your website</p>
            </li>
            <li className="flex gap-2 items-center">
              <FaCheck className="text-xl text-[#0000f3]" />
              <p className="text-lg">Daily newsletters to your target audience</p>
            </li>
            <li className="flex gap-2 items-center">
              <FaCheck className="text-xl text-[#0000f3]" />
              <p className="text-lg">Fully managed and automated solution</p>
            </li>
          </ul>
          <div className="flex md:justify-end pr-4">
            <label
              htmlFor="name"
              className="btn font-normal min-h-0 w-fit h-auto text-white border-none bg-[#0000f3] hover:bg-[#0000f3] hover:brightness-90 mt-9 px-10 py-4 rounded-xl"
            >
              Contact us for a quote today
            </label>
          </div>
        </div>
        <div>
          <div
            className="md:max-w-[37.288rem] xl:w-[38rem] sm:h-[29.938rem]"
            data-aos="fade-up"
            data-aos-delay={window.innerWidth > 768 ? 100 : 0}
            data-aos-once={true}
          >
            <img className="size-full object-cover rounded-2xl" src={servicesImg2} alt="About Image 1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
