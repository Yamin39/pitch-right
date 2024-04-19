import { CgMenuRightAlt } from "react-icons/cg";
import { IoClose } from "react-icons/io5";
import logo from "../../assets/images/logo.png";
import "./Navbar.css";

const Navbar = () => {
  const links = (
    <>
      <li className="nav-link">
        <a href="#">About us</a>
      </li>
      <li className="nav-link">
        <a href="#">Services</a>
      </li>
      <li className="nav-link">
        <a href="#">Why Choose us</a>
      </li>
      <li className="nav-link">
        <a href="#">Ask Away</a>
      </li>
      <li className="nav-link">
        <a href="#">Testimonials</a>
      </li>
    </>
  );
  return (
    <nav className="pt-4 lg:pt-8 pb-4 sm:pb-12">
      <div className="flex justify-between items-center">
        <div className="sm:w-auto">
          <a href="/">
            <img className="max-w-[16rem] ml-4" src={logo} alt="Graphic Digital" />
          </a>
        </div>
        <div className="hidden md:flex gap-7 justify-center items-center">{links}</div>
        <div className="md:hidden">
          <div className="drawer drawer-end">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              {/* Page content here */}
              <label htmlFor="my-drawer-4" className="drawer-button btn btn-ghost">
                <CgMenuRightAlt className="text-3xl" />
              </label>
            </div>
            <div className="drawer-side">
              <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
              <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                {/* close */}
                <div className="flex justify-end">
                  <label htmlFor="my-drawer-4" aria-label="close sidebar" className="btn btn-circle btn-error btn-sm">
                    <IoClose className="text-white text-lg" />
                  </label>
                </div>
                {/* Sidebar content here */}
                {links}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
