import ratingImg from "../../assets/images/rating.png";
import reviewerLogo from "../../assets/images/reviewer-logo.png";

const Testimonials = () => {
  return (
    <div id="Testimonials" className="flex flex-col md:flex-row gap-4 justify-between">
      <div data-aos="fade-up" data-aos-once={true}>
        <div className="md:sticky md:top-[3.409rem] lg:top-[6.063rem] pt-[5.25rem]">
          <p className="text-lg text-[#3c3c3c] rounded-xl bg-white px-3 py-1 w-fit">Flexible and Scalable</p>
          <h1 className="max-w-[36.313rem] text-[3rem] sm:text-[3.95rem] text-[#3c3c3c] lg:text-[3.4rem] xl:text-[4.063rem] leading-[3.7rem] sm:leading-[4.5rem] -tracking-[0.063rem] font-bold mt-3">
            Rave <span className="text-[#0000F3]">reviews</span> from thousands
          </h1>
          <p className="max-w-[22.813rem] text-[1.188rem] leading-8 mt-2">
            Hear from our satisfied clients about their experience with our marketing solutions.
          </p>
          <button className="btn h-auto min-h-0 rounded-xl mt-10 p-5 text-[1.188rem] text-white bg-[#3c3c3c] hover:bg-[#3c3c3c] hover:brightness-90">
            Leave a Review
          </button>
        </div>
      </div>

      <div className="pt-[5.25rem] space-y-6">
        {/* review 1 */}
        <div className="md:w-[36.125rem] px-6 py-8 bg-white rounded-xl" data-aos="fade-up" data-aos-delay="100" data-aos-once={true}>
          <div className="max-w-[9.375rem]">
            <img className="w-full" src={ratingImg} />
          </div>
          <p className="text-[1.063rem] leading-8 text-[#3c3c3c] mt-8 mb-[3.875rem]">
            &quot;Working with Pitch Right Limited was a pleasure. Shaun and his team took the time to understand our products and services and how it could
            appeal to clients. The whole process was quick and very professionally managed. PR arranged telephone and face to face meetings and maintained a
            qualified pipeline of prospects. I would have no hesitation in recommending Pitch Right Limited for generating new business.&quot;
          </p>
          <div className="flex gap-5 items-center">
            <div className="size-[4.375rem]">
              <img className="size-full" src={reviewerLogo} />
            </div>
            <div className="text-xl leading-7 text-[#3c3c3c]">
              <h5 className="font-bold">IT Reseller</h5>
              <h5 className="font-light">Professionally Managed</h5>
            </div>
          </div>
        </div>

        {/* review 2 */}
        <div className="md:w-[36.125rem] px-6 py-8 bg-white rounded-xl" data-aos="fade-up" data-aos-delay="100" data-aos-once={true}>
          <div className="max-w-[9.375rem]">
            <img className="w-full" src={ratingImg} />
          </div>
          <p className="text-[1.063rem] leading-8 text-[#3c3c3c] mt-8 mb-[3.875rem]">
            &quot;We have been working with Pitch Right Limited for the past nine months during which time they have provided a professional, flexible approach
            to our sales requirements and have generated some good business for our company. Our campaign is managed and reviewed frequently to see if
            improvements can be made. I would recommend Pitch Right to anyone who is looking to increase their sales in a cost effective way.&quot;
          </p>
          <div className="flex gap-5 items-center">
            <div className="size-[4.375rem]">
              <img className="size-full" src={reviewerLogo} />
            </div>
            <div className="text-xl leading-7 text-[#3c3c3c]">
              <h5 className="font-bold">IT Service Provider</h5>
              <h5 className="font-light">Professionally Managed</h5>
            </div>
          </div>
        </div>

        {/* review 3 */}
        <div className="md:w-[36.125rem] px-6 py-8 bg-white rounded-xl" data-aos="fade-up" data-aos-delay="100" data-aos-once={true}>
          <div className="max-w-[9.375rem]">
            <img className="w-full" src={ratingImg} />
          </div>
          <p className="text-[1.063rem] leading-8 text-[#3c3c3c] mt-8 mb-[3.875rem]">
            &quot;Where do I start?
            <br /> <br />
            I came across Shaun from Pitch Right sales via a blog and at first I was a bit uncertain as to whether this was going to be the right thing for our
            business, however I was very wrong.
            <br /> <br />
            Working with Pitch Right sales has been brilliant and the results are fantastic. They are not just cold calling but generating new business, every
            meeting we went to was spot on.
            <br /> <br />
            In a weird twist they have generated too much business for us meaning that we have had to ask them to stop temporarily just so we can get our
            thinking back.
            <br /> <br />
            We would highly recommend Gareth at Pitch Right Limited, he has been a breath of fresh air and we will definitely be using them again in the
            future.&quot;
          </p>
          <div className="flex gap-5 items-center">
            <div className="size-[4.375rem]">
              <img className="size-full" src={reviewerLogo} />
            </div>
            <div className="text-xl leading-7 text-[#3c3c3c]">
              <h5 className="font-bold">IT Service Provider</h5>
              <h5 className="font-light">Professionally Managed</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
