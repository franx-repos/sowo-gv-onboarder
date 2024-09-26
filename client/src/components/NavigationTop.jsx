const NavigationTop = ({ setCurrentLocation }) => {
  const handleNavigation = (location) => {
    setCurrentLocation(location);
  };

  return (
    <>
      <nav className="bg-pink-700 w-full">
        <div className="flex flex-wrap items-center justify-between p-2">
          <a href="#" className="flex items-center">
            <img
              src="./src/assets/Sowo-Logo.png"
              className="h-12 mr-3"
              alt="Sowo Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
          </a>
          <div className="flex md:order-2 space-x-3 md:space-x-0">
            {/* <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Get started
            </button> */}
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
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-neutral-100 rounded-lg bg-pink-700 md:space-x-8 md:flex-row md:mt-0 md:border-0 dark:border-neutral-700">
              <li>
                <a
                  onClick={() => handleNavigation("scanner")}
                  href="#"
                  className="block p-2 text-white text-2xl bg-pink-700 hover:bg-neutral-800 rounded-md"
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
                  href="#"
                  className="block p-2 text-white text-2xl bg-pink-700 hover:bg-neutral-800 rounded-md"
                >
                  <img
                    src="./src/assets/list-icon.png"
                    alt="members list"
                    className="h-12"
                  />
                </a>
              </li>
              {/* <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-neutral-900 rounded hover:bg-neutral-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-neutral-700"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-neutral-900 rounded hover:bg-neutral-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-neutral-700"
                >
                  Contact
                </a>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavigationTop;
