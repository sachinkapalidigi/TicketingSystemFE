import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="bg-white shadow fixed z-10 mx-auto inset-x-0 top-0 flex justify-between items-center">
      <div className="font-extrabold m-3 uppercase inline-flex hover:text-pink-700 transition-all duration-500">
        Raise your voice
      </div>
      <button
        id="mobileMenuButton"
        className="p-3 focus:outline-none md:hidden"
        title="Open side menu"
      >
        <svg
          id="mobileMenuButtonClose"
          onClick={() => {}}
          className="w-6 h-6 hidden"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>

        <svg
          id="mobileMenuButtonOpen"
          onClick={() => {}}
          className="w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      <div
        id="sideMenuHideOnMobile"
        className="bg-white font-semibold z-10 rounded-bl-md flex absolute top-0 right-0 transition-all duration-500 transform translate-x-0
                                              w-1/2 md:w-auto
                                              px-3 md:px-0
                                              flex-col md:flex-row
                                              -translate-y-full md:translate-y-0
                                              md:mt-1 md:items-center md:mx-1 md:uppercase"
      >
        <div className="mx-0 sm:mx-2 my-2 border-b-2 border-transparent hover:border-pink-600 hover:text-pink-700 transition-all duration-500 py-1 sm:p-0">
          <span className="mr-1">Bengaluru</span>
          <Image
            src="/location-svg.svg"
            alt="Location"
            width={16}
            height={20}
          />
        </div>
        <button className="mx-0 sm:mx-2 my-2 border-b-2 border-transparent hover:border-pink-600 hover:text-pink-700 transition-all duration-500 py-1 sm:p-0">
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
