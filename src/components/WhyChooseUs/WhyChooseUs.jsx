import handIcon from "../../assets/images/hand.png";

const WhyChooseUs = () => {
  return (
    <div
      id="WhyChooseUs"
      className="flex gap-8 md:gap-0 flex-col md:flex-row items-center justify-between text-white bg-[#3c3c3c] rounded-xl pt-[8.75rem] pb-[7.75rem]"
    >
      <div className="pl-8 pr-8 md:pr-0" data-aos="fade-up" data-aos-delay="100" data-aos-once={true} data-aos-duration="600">
        <h2 className="text-[2.875rem] -tracking-[1px] leading-[4.125rem] font-bold">Our Pledge to You</h2>
        <p className="max-w-[32.375rem] sm:max-w-full md:max-w-[32.375rem] text-lg leading-8 mt-5">
          The Director has over a decade of experience in the industry. Pitch Right Ltd delivers professional sales support.
          <br />
          <br />
          With a suite of flexible and scalable services to suit you, we deploy the best of breed sales team to generate new substantial business on a monthly
          basis. Clients benefit because they no longer have to pay or source in-house methods, which include; staff salaries, commissions, employer&apos;s
          contributions, workstations, National Insurance etc. Just simply outsource to us, with no long term contracts (30 days notice to terminate service)
          for a fraction of the overheads mentioned.
        </p>
      </div>

      <div className="px-5 sm:px-0">
        <div
          className="max-w-[37rem]"
          data-aos={window.innerWidth > 768 ? "fade-left" : "fade-up"}
          data-aos-delay="100"
          data-aos-once={true}
          data-aos-duration="800"
        >
          <img className="w-full" src={handIcon} />
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
