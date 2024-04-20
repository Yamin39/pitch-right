import callTraceMarketingImg from "../../assets/images/Call-Trace-Marketing.png";
import googlePaidAdvertisingImg from "../../assets/images/Google-Paid-Advertising.png";
import googleSearchEngineRankingImg from "../../assets/images/Google-Search-Engine-Ranking.png";

const MoreServices = () => {
  return (
    <div className="mt-[4.188rem]">
      <div data-aos="fade-up" data-aos-once={true}>
        <p className="text-lg text-[#3c3c3c] rounded-xl bg-[#D8D8D8] px-3 py-1 w-fit">Flexible and Scalable</p>
        <h1 className="max-w-[53.5rem] text-[3rem] sm:text-[3.45rem] text-[#233831] lg:text-[3.4rem] xl:text-[3.65rem] leading-[3.7rem] sm:leading-[4.5rem] -tracking-[0.063rem] font-bold mt-3">
          More services for your business growth.
        </h1>
      </div>
      <div className="flex gap-5 flex-col md:flex-row mt-10">
        {/* card 1 */}
        <div className="bg-[#F0EEEA] md:w-[24.25rem] rounded-xl px-7 py-10" data-aos="fade-up" data-aos-once={true}>
          <div className="size-[8.5rem]">
            <img src={googlePaidAdvertisingImg} className="size-full rounded-xl" />
          </div>
          <div className="mt-4 text-[#3c3c3c]">
            <h3 className="text-3xl font-bold -tracking-[0.063rem] leading-10">
              Google <br />
              Paid Advertising
            </h3>
            <p className="text-lg leading-8 mt-2">
              This service ensures that your website is listed in a top ranking position on Google. Our SEM (search engine marketing) experts will use best
              practice techniques to ensure high sales conversions from the leads that result through paid advertising.
            </p>
          </div>
        </div>

        {/* card 2 */}
        <div className="bg-[#F0EEEA] md:w-[24.25rem] rounded-xl px-7 py-10" data-aos="fade-up" data-aos-delay="100" data-aos-once={true}>
          <div className="size-[8.5rem]">
            <img src={googleSearchEngineRankingImg} className="size-full rounded-xl" />
          </div>
          <div className="mt-4 text-[#3c3c3c]">
            <h3 className="text-3xl font-bold -tracking-[0.063rem] leading-10">
              Google Search <br />
              Engine Ranking
            </h3>
            <p className="text-lg leading-8 mt-2">
              This service ensures that your website is listed on over 600+ search engines organically. Reporting and a wide range of search engines and web
              directories included. We use the latest in SEO (search engine optimisation) technology to ensure your website&apos;s content is fully indexed and
              ranked as highly as possible by the best search engines around.We guarantee you a #1 listing.
            </p>
          </div>
        </div>

        {/* card 3 */}
        <div className="bg-[#F0EEEA] md:w-[24.25rem] rounded-xl px-7 py-10" data-aos="fade-up" data-aos-delay="200" data-aos-once={true}>
          <div className="size-[8.5rem]">
            <img src={callTraceMarketingImg} className="size-full rounded-xl" />
          </div>
          <div className="mt-4 text-[#3c3c3c]">
            <h3 className="text-3xl font-bold -tracking-[0.063rem] leading-10">
              Call Trace <br />
              Marketing
            </h3>
            <p className="text-lg leading-8 mt-2">
              This service provides you with a dedicated number, which is marketed to ensure the phones keep ringing with potential customers. Using this
              service we will actively market your business via email, search engines, and direct mailing to ensure your business a steady flow of qualified
              leads.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreServices;
