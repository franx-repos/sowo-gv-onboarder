const NavigationTop = ({ setCurrentLocation, currentDate }) => {
  const handleNavigation = (location) => {
    setCurrentLocation(location);
  };

  return (
    <>
      <nav className="flex bg-pink-800 w-full ">
        <img
          src="./src/assets/Sowo-Logo.png"
          className="h-12 mt-4 ml-3"
          alt="Sowo Logo"
        />
        <div className="flex w-full flex-wrap items-center justify-center p-2">
          <div className="flex md:order-2 space-x-3 md:space-x-0">
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-neutral-500 rounded-lg md:hidden hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-200 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:ring-neutral-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
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
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-center hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium md:space-x-8 md:flex-row md:mt-0 md:border-0">
              <li>
                <a
                  onClick={() => handleNavigation("scanner")}
                  className="block p-2 text-white text-2xl hover:bg-neutral-800 rounded-md cursor-pointer"
                  aria-current="page"
                >
                  <img
                    src="./src/assets/scan-icon.png"
                    alt="scanner"
                    className="h-12"
                  />
                </a>
              </li>
              <li>
                <a
                  onClick={() => handleNavigation("members")}
                  className="block p-2 text-white text-2xl hover:bg-neutral-800 rounded-md cursor-pointer"
                >
                  <img
                    src="./src/assets/list-icon.png"
                    alt="members list"
                    className="h-12"
                  />
                </a>
              </li>
              <li>
                <a
                  onClick={() => handleNavigation("form")}
                  className="block p-2 text-white text-2xl hover:bg-neutral-800 rounded-md cursor-pointer"
                >
                  <img
                    src="./src/assets/form-icon.png"
                    alt="input form"
                    className="h-12"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="text-white text-lg ml-auto h-fit self-center p-2 rounded-md bg-neutral-800">
          {currentDate}
        </p>
      </nav>
    </>
  );
};

export default NavigationTop;
