import AOS from "aos";
import "aos/dist/aos.css";
import Home from "../pages/Home";

AOS.init();

const Root = () => {
  return (
    <div>
      <Home></Home>
    </div>
  );
};

export default Root;
