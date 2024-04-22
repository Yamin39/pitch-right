import { useRef, useState } from "react";

const Faq = () => {
  const [toggleQ1, setToggleQ1] = useState(false);
  const [toggleQ2, setToggleQ2] = useState(true);
  const [toggleQ3, setToggleQ3] = useState(true);
  const [toggleQ4, setToggleQ4] = useState(true);
  const inputRefQ1 = useRef(null);
  const inputRefQ2 = useRef(null);
  const inputRefQ3 = useRef(null);
  const inputRefQ4 = useRef(null);
  return (
    <div className="flex gap-8 md:gap-0 flex-col md:flex-row justify-between mt-[9.8rem]">
      <div className="md:sticky md:top-[5.409rem] lg:top-[8.063rem] h-fit pl-5" data-aos="fade-up" data-aos-delay="100" data-aos-once={true}>
        <p className="text-lg text-[#3c3c3c] rounded-xl bg-[#f0eeea] px-3 py-1 w-fit">FAQs</p>
        <h1 className="mt-2 text-[3rem] sm:text-[3.45rem] text-[#233831] lg:text-[3.4rem] xl:text-[3.65rem] leading-[3.7rem] sm:leading-[4.5rem] -tracking-[0.063rem] font-bold">
          <span className="text-[#0000F3]">Questions?</span> We&apos;re
          <br /> glad you asked.
        </h1>
        <p className="max-w-[24.313rem] text-lg leading-8 mt-3">
          If you&apos;re new or looking for answers to your questions, find solutions to common inquiries.
        </p>
      </div>

      <div className="md:max-w-[35rem] space-y-2" data-aos="fade-in" data-aos-delay="100" data-aos-once={true}>
        {/* Q 1 */}
        <div className={`collapse collapse-plus duration-500 px-8 pt-4 pb-5 ${toggleQ1 ? "bg-white" : "bg-[#f0eeea]"}`}>
          <input
            onClick={() => {
              setToggleQ1(!toggleQ1);
              inputRefQ1.current.checked = toggleQ1;
            }}
            ref={inputRefQ1}
            type="checkbox"
            className="cursor-pointer"
            name="my-accordion-3"
            defaultChecked
          />
          <div className="collapse-title after:text-[2rem] text-lg text-[#233831] font-medium">1. Why outsource sales?</div>
          <div className="collapse-content">
            <p className="leading-8 text-[#233831] font-light">
              Sales are the life blood of any organisation, you however might not be a natural sales person. An in-house sales team may not be an option due to
              associated costs such as salary, phone bill, insurance, C/Workstation, and training which makes the viability of business restrictive.
            </p>
          </div>
        </div>

        {/* Q 2 */}
        <div className={`collapse collapse-plus duration-500 px-8 py-5 ${toggleQ2 ? "bg-white" : "bg-[#f0eeea]"}`}>
          <input
            onClick={() => {
              setToggleQ2(!toggleQ2);
              inputRefQ2.current.checked = toggleQ2;
            }}
            ref={inputRefQ2}
            type="checkbox"
            className="cursor-pointer"
            name="my-accordion-3"
          />
          <div className="collapse-title after:text-[2rem] text-lg text-[#233831] font-medium">2. What are the risks?</div>
          <div className="collapse-content">
            <p className="leading-8 text-[#233831] font-light">
              Trust, domain expertise and cost. However, experience has taught us that these rarely prove to be real issues. Pitch Right offer a transparent,
              clear and comprehensive service.
            </p>
          </div>
        </div>

        {/* Q 3 */}
        <div className={`collapse collapse-plus duration-500 px-8 py-5 ${toggleQ3 ? "bg-white" : "bg-[#f0eeea]"}`}>
          <input
            onClick={() => {
              setToggleQ3(!toggleQ3);
              inputRefQ3.current.checked = toggleQ3;
            }}
            ref={inputRefQ3}
            type="checkbox"
            className="cursor-pointer"
            name="my-accordion-3"
          />
          <div className="collapse-title after:text-[2rem] text-lg text-[#233831] font-medium">3. What are the benefits?</div>
          <div className="collapse-content">
            <p className="leading-8 text-[#233831] font-light">
              Opt to partner with Pitch Right, we offer a wealth of experience; we can hit the ground running, offering a real value add service with no red
              tape. For a cost perspective call us today and you will be surprised with what you can save and gain.
            </p>
          </div>
        </div>

        {/* Q 4 */}
        <div className={`collapse collapse-plus duration-500 px-8 py-5 ${toggleQ4 ? "bg-white" : "bg-[#f0eeea]"}`}>
          <input
            onClick={() => {
              setToggleQ4(!toggleQ4);
              inputRefQ4.current.checked = toggleQ4;
            }}
            ref={inputRefQ4}
            type="checkbox"
            className="cursor-pointer"
            name="my-accordion-3"
          />
          <div className="collapse-title after:text-[2rem] text-lg text-[#233831] font-medium">4. What makes Pitch Right different?</div>
          <div className="collapse-content">
            <p className="leading-8 text-[#233831] font-light">
              We are an affable company, maintaining a high level of professionalism with our clients. Pitch Right bring a refreshing vibe making engaging with
              clients an enjoyable and enlightening experience. Unlike traditional telemarketing companies, we work in partnership with you to close every
              opportunity we present. No crippling day rate charges or long term contracts, our approach is simple and transparent.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
