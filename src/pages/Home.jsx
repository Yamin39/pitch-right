import Banner from "../components/Banner/Banner";
import FacebookBranding from "../components/FacebookBranding/FacebookBranding";
import MoreServices from "../components/MoreServices/MoreServices";
import Navbar from "../components/Navbar/Navbar";
import Services from "../components/Services/Services";

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
    </>
  );
};

export default Home;
