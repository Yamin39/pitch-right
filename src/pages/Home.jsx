import AboutUs from "../components/AboutUs/AboutUs";
import Banner from "../components/Banner/Banner";
import FacebookBranding from "../components/FacebookBranding/FacebookBranding";
import MoreServices from "../components/MoreServices/MoreServices";
import Navbar from "../components/Navbar/Navbar";
import Services from "../components/Services/Services";
import Testimonials from "../components/Testimonials/Testimonials";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";

const Home = () => {
  return (
    <>
      <div className="font-hanken bg-white sticky top-0 z-50">
        <div className="max-w-[1201px] w-11/12 mx-auto">
          <Navbar></Navbar>
        </div>
      </div>
      <div className="max-w-[1201px] w-11/12 mx-auto font-hanken">
        <Banner></Banner>
        <Services></Services>
        <MoreServices></MoreServices>
        <FacebookBranding></FacebookBranding>
      </div>
      <div className="relative bg-[#EFEDE9] pb-[5.938rem]">
        <div className="max-w-[1201px] w-11/12 mx-auto font-hanken">
          <Testimonials></Testimonials>
        </div>
      </div>
      <div className="max-w-[1201px] w-11/12 mx-auto font-hanken">
        <AboutUs></AboutUs>
        <WhyChooseUs></WhyChooseUs>
      </div>
    </>
  );
};

export default Home;
