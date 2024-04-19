import Banner from "../components/Banner/Banner";
import Navbar from "../components/Navbar/Navbar";

const Home = () => {
  return (
    <div className="max-w-[1201px] w-11/12 mx-auto font-hanken">
      <Navbar></Navbar>
      <Banner></Banner>
    </div>
  );
};

export default Home;
