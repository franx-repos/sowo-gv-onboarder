import { useState } from "react";
import SowoLogo from "../assets/Sowo-Logo.png";
import FormIcon from "../assets/form-icon.png";
import ListIcon from "../assets/list-icon.png";
import ScanIcon from "../assets/scan-icon.png";

const NavigationTop = ({ setCurrentLocation, currentDate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigation = (location) => {
    setCurrentLocation(location);
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { name: "scanner", img: ScanIcon },
    { name: "members", img: ListIcon },
    { name: "form", img: FormIcon },
  ];

  return (
    <>
      <nav className="flex bg-pink-800 w-full ">
        <img
          src={SowoLogo}
          className="h-8 md:h-12 lg:h-12 my-2 lg:ml-3"
          alt="Sowo Logo"
        />
        <div className="flex w-full flex-wrap items-center justify-center">
          <div className="flex md:order-2 space-x-3 md:space-x-0">
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              onClick={toggleMenu}
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-neutral-500 rounded-lg md:hidden hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-200 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:ring-neutral-600"
              aria-controls="navbar-sticky"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            id="navbar-sticky"
            className={`absolute md:relative lg:relative top-0 mt-12 md:mt-0 lg:mt-0 flex items-center justify-center ${
              isMenuOpen ? "flex" : "hidden"
            } w-fit md:flex md:w-auto md:order-1 bg-pink-800 md:bg-transparent lg:bg-transparent z-50 rounded-b-lg border-t-4 md:border-t-0 lg:border-t-0 border-neutral-900`}
          >
            <ul className="flex font-medium md:space-x-8 md:flex-row md:mt-0 md:border-0">
              {menuItems.map((item) => (
                <li key={`${item.name}-item`}>
                  <a
                    onClick={() => handleNavigation(item.name)}
                    className="block p-4 md:p-2 lg:p-2 text-white text-2xl hover:bg-neutral-800 rounded-md cursor-pointer"
                  >
                    <img src={item.img} alt={item.name} className="h-12" />
                    {/* {item.name} */}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* <label className="inline-flex items-center cursor-pointer">
          <input type="checkbox" value="" className="sr-only peer" />
          <div className="relative w-11 h-6 peer-focus:outline-none rounded-full peer bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all border-gray-600 peer-checked:bg-blue-600"></div>
          <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
            online
          </span>
        </label> */}

        <p className="text-neutral-800 text-sm lg:text-lg font-semibold ml-auto h-fit self-center p-2 rounded-md ">
          {currentDate}
        </p>
      </nav>
    </>
  );
};

export default NavigationTop;
