import { FaCheck } from "react-icons/fa6";

const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row gap-10 justify-between items-center bg-[#131514] rounded-xl px-[3.2rem] sm:px-[4.875rem] py-[4rem] sm:py-[5.6rem] sm:mt-4">
      <div className="text-white">
        <p className="text-lg rounded-xl bg-[#3F403F] px-3 py-1 w-fit">Flexible and Scalable</p>
        <h1 className="text-[3rem] sm:text-[3.45rem] lg:text-[3.4rem] xl:text-[3.65rem] leading-[3.7rem] sm:leading-[4.5rem] -tracking-[0.063rem] font-bold mt-4">
          <span className="text-[#0000f3]">Boost</span> Your Sales <br />
          with Pitch Right Today
        </h1>
        <p className="max-w-[31.875rem] text-lg leading-8 mt-2">Unlock Your Business Potential with Pitch Right&apos;s Tailored Sales Support Services</p>
        <label
          htmlFor="name"
          className="btn leading-[1.5rem] sm:leading-none font-normal min-h-0 h-auto text-white border-none bg-[#0000f3] hover:bg-[#0000f3] hover:brightness-90 mt-10 w-full sm:w-fit px-3 sm:px-10 py-4 rounded-xl"
        >
          Complete the form and let Pitch Right Ltd help
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
        <div className="w-full sm:max-w-[27.125rem] p-7 sm:p-12 pt-[1.6rem] sm:pt-[3.75rem] rounded-[0.875rem] bg-white">
          <h2 className="text-[2.063rem] text-[#1d2b26] font-bold">Get Free Preview</h2>
          <p className="pt-1 max-w-[20.688rem] text-[#1d2b26] leading-8">
            Unlock Your Business Potential with Pitch Right Ltd&apos;s Tailored Sales Support Services
          </p>
          <form className="mt-6 space-y-5">
            {/* name */}
            <input
              type="text"
              id="name"
              placeholder="Your name*"
              className="input bg-[#f0eeea] text-lg text-[#1d2b26] placeholder:text-lg placeholder:text-[#1d2b26] w-full"
            />

            {/* email */}
            <input
              type="email"
              placeholder="Phone number*"
              className="input bg-[#f0eeea] text-lg text-[#1d2b26] placeholder:text-lg placeholder:text-[#1d2b26] w-full"
            />

            {/* password */}
            <input
              type="text"
              placeholder="eMail address*"
              className="input bg-[#f0eeea] text-lg text-[#1d2b26] placeholder:text-lg placeholder:text-[#1d2b26] w-full"
            />
            <div className="flex items-center gap-2">
              <input type="checkbox" id="checkbox" className="checkbox  checkbox-xs rounded-sm" />
              <label htmlFor="checkbox" className="text-[#1d2b26]">
                I agree to the privacy policy
              </label>
            </div>
            <button className="btn font-normal min-h-0 w-full h-auto text-white border-none bg-[#0000f3] hover:bg-[#0000f3] hover:brightness-90 mt-10 px-10 py-4 rounded-xl">
              Get Free Preview
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Banner;
