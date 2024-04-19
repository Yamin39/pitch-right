import { CgMenuRightAlt } from "react-icons/cg";
import { IoClose } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import logo from "../../../../assets/logo-full-black.png";

const Navbar = () => {
  const links = (
    <>
      <li className="text-[#fe4117]">
        <NavLink to="/host">Host Ads for us</NavLink>
      </li>
      <li>
        <NavLink to="/app">Graphic Workshop</NavLink>
      </li>
      <li>
        <NavLink to="/app">Web Design</NavLink>
      </li>
    </>
  );
  return (
    <nav className="pt-4 lg:pt-8 pb-4 sm:pb-8 bg-[#F5F5F5]">
      <div className="flex justify-between items-center">
        <div className="sm:w-auto">
          <a href="/">
            <img className="w-[11.625rem]" src={logo} alt="Graphic Digital" />
          </a>
        </div>
        <ul className="hidden md:flex gap-7 justify-center items-center text-lg text-[#1b2426] font-light font-poppins">{links}</ul>
        <div className="md:hidden">
          <div className="drawer drawer-end">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              {/* Page content here */}
              <label htmlFor="my-drawer-4" className="drawer-button btn">
                <CgMenuRightAlt className="text-2xl" />
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
                </div>{" "}
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
