import { useEffect, useState } from "react";
import { logo, logoBlack } from "../ui/images";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import { WiMoonAltNew } from "react-icons/wi";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [navToggle, setnavToggle] = useState(false);
  const [mode, setMode] = useState(String(localStorage.theme ?? "light"));
  const [toptal, setToptal] = useState(NaN);

  const [scrolled, setScrolled] = useState(0);

  const handleScroll = () => {
    setScrolled(window.scrollY); // => scroll position
  };
  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setToptal(NaN);
    }, 900);
  }, [toptal]);

  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: light)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      localStorage.theme = "dark";
    }
    if (mode === "dark") {
      setMode("light");
      localStorage.theme = "light";
    }
  };

  return (
    <>
      <header
        className={`z-50 fixed left-0  right-0 dark:bg-main/70 bg-white/90 backdrop-blur-3xl transition-all duration-100 border-b border-transparent py-2 sm:py-4  ${
          scrolled > 20 ? "drop-shadow-xl" : ""
        } `}
      >
        <div className="container">
          <div className="wrapper flex justify-between">
            <Link to="/" className="main-logo flex gap-1">
              <img
                className="max-w-[5rem] hidden dark:block exs:max-w-[5.5rem] xs:max-w-[6rem] md:max-w-[6.5rem] lg:max-w-[7rem]"
                src={logo}
                alt="banq"
              />
              <img
                className="max-w-[5rem] dark:hidden exs:max-w-[5.5rem] xs:max-w-[6rem] md:max-w-[6.5rem] lg:max-w-[7rem]"
                src={logoBlack}
                alt="banq"
              />
            </Link>

            <nav className="nav-links font-thin flex justify-center items-center">
              <ul className="hidden md:flex gap-6 justify-center items-center text-sm">
                <li>
                  <a
                    href="#"
                    className="flex border-b border-transparent dark:hover-border-white hover:border-dark transition-all duration-100 
                    relative before:absolute before:content-['Coming_soon'] before:-bottom-[200%] before:left-1/2  before:-translate-x-1/2 before:bg-primary before:px-2.5 before:py-1 before:rounded-md before:whitespace-nowrap after:absolute after:h-2.5 after:w-2.5 after:bg-primary after:left-1/2 after:-translate-x-1/2 after:-bottom-full after:rotate-45  before:opacity-0 hover:before:opacity-100 before:transform before:duration-200 after:opacity-0 hover:after:opacity-100 after:transform after:duration-100 before:text-[0.75rem] before:invisible after:invisible before:hover:visible after:hover:visible "
                  >
                    Personal
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex border-b border-transparent dark:hover-border-white hover:border-dark transition-all duration-100 relative before:absolute before:content-['Coming_soon'] before:-bottom-[200%] before:left-1/2  before:-translate-x-1/2 before:bg-primary before:px-2.5 before:py-1 before:rounded-md before:whitespace-nowrap after:absolute after:h-2.5 after:w-2.5 after:bg-primary after:left-1/2 after:-translate-x-1/2 after:-bottom-full after:rotate-45  before:opacity-0 hover:before:opacity-100 before:transform before:duration-200 after:opacity-0 hover:after:opacity-100 after:transform after:duration-100 before:text-[0.75rem] before:invisible after:invisible before:hover:visible after:hover:visible "
                  >
                    Business
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex border-b border-transparent dark:hover-border-white hover:border-dark transition-all duration-100 relative before:absolute before:content-['Coming_soon'] before:-bottom-[200%] before:left-1/2  before:-translate-x-1/2 before:bg-primary before:px-2.5 before:py-1 before:rounded-md before:whitespace-nowrap after:absolute after:h-2.5 after:w-2.5 after:bg-primary after:left-1/2 after:-translate-x-1/2 after:-bottom-full after:rotate-45  before:opacity-0 hover:before:opacity-100 before:transform before:duration-200 after:opacity-0 hover:after:opacity-100 after:transform after:duration-100 before:text-[0.75rem] before:invisible after:invisible before:hover:visible after:hover:visible "
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex border-b border-transparent dark:hover-border-white hover:border-dark transition-all duration-100 relative before:absolute before:content-['Coming_soon'] before:-bottom-[200%] before:left-1/2  before:-translate-x-1/2 before:bg-primary before:px-2.5 before:py-1 before:rounded-md before:whitespace-nowrap after:absolute after:h-2.5 after:w-2.5 after:bg-primary after:left-1/2 after:-translate-x-1/2 after:-bottom-full after:rotate-45  before:opacity-0 hover:before:opacity-100 before:transform before:duration-200 after:opacity-0 hover:after:opacity-100 after:transform after:duration-100 before:text-[0.75rem] before:invisible after:invisible before:hover:visible after:hover:visible "
                  >
                    Contact
                  </a>
                </li>

                <li className="flex justify-center items-center">
                  <div
                    onClick={toggleMode}
                    className={`relative inline-flex h-6 w-12 items-center rounded-full bg-primary cursor-pointer`}
                  >
                    <span
                      className={`${
                        mode === "light"
                          ? "translate-x-7 bg-dark"
                          : "translate-x-1 bg-white"
                      } inline-block h-4 w-4 transform rounded-full transition duration-200 relative z-40`}
                    />

                    <div className="icons">
                      <WiMoonAltNew className="h-[0.9rem] w-[0.9rem]  absolute left-1  top-1/2 transform -translate-y-1/2 text-yellow-300" />
                      <BsMoonFill className="h-[0.9rem] w-[0.9rem]  absolute right-1  top-1/2 transform -translate-y-1/2 text-slate-200 " />
                    </div>
                  </div>
                </li>

                <li>
                  <Link
                    to="/waitlist"
                    className="flex capitalize justify-center items-center text-[0.75rem] text-white bg-primary rounded-[0.7rem] py-1.5 px-8 -leading-2 "
                  >
                    join waitlist
                  </Link>
                </li>
              </ul>

              <div className="mode-toggle pr-4 flex justify-center items-center">
                <div
                  onClick={toggleMode}
                  className={` md:hidden relative inline-flex h-[1.6rem] w-[1.6rem] items-center rounded border border-dark/30 dark:border-primary/30 dark:bg-primary/70 bg-dark/70 `}
                >
                  <div className="icons">
                    <BsSunFill
                      className={`h-4 w-4 absolute left-1/2  top-1/2 transform -translate-y-1/2 -translate-x-1/2 text-yellow-300 transition-all duration-150  ${
                        mode === "light"
                          ? "opacity-0 invisible"
                          : "visible opacity-100"
                      }`}
                    />
                    <BsMoonFill
                      className={`h-4 w-4  absolute left-1/2  top-1/2 transform -translate-y-1/2 -translate-x-1/2 text-slate-200 transition-all duration-150 ${
                        mode === "dark"
                          ? "opacity-0 invisible"
                          : "visible opacity-100"
                      }`}
                    />
                  </div>
                </div>
              </div>
              <div className="menu-bar md:hidden">
                <svg
                  onClick={() => setnavToggle(!navToggle)}
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 1024 1024"
                  height="1.8em"
                  width="1.8em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"></path>
                </svg>
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* mobile version */}
      <div className="mobile-nav">
        {/* Cross */}
        <svg
          onClick={() => setnavToggle(false)}
          className={`fixed right-[5%] top-8 z-[88] transition-all duration-500 text-white ${
            navToggle ? "opacity-100 rotate-180 visible" : "opacity-0 invisible"
          }`}
          stroke="currentColor"
          fill="none"
          strokeWidth="0"
          viewBox="0 0 15 15"
          height="2.2em"
          width="2.2em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
            fill="currentColor"
          ></path>
        </svg>

        {/* Bg dark */}
        <div
          onClick={() => setnavToggle(false)}
          className={`darkbg absolute inset-0 bg-main/20 bottom-0  backdrop-blur-xl z-[77] transition-all duration-500 ${
            navToggle ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        ></div>
        <nav
          className={`mobile-nav md:hidden fixed top-0 bottom-0 w-[80%] xs:w-[70%] sm:w-[60%] dark:bg-main bg-white z-[99] transition-all duration-500 ${
            navToggle ? "left-0 opacity-100" : "-left-full opacity-0"
          }`}
        >
          <div className="wrapper">
            <Link to="/" className="logo block pt-5 px-5">
              <img
                className="w-full hidden dark:block max-w-[7rem]"
                src={logo}
                alt="logo"
              />
              <img
                className="w-full dark:hidden max-w-[7rem]"
                src={logoBlack}
                alt="logo"
              />
            </Link>

            <ul className="flex flex-col justify-start text-sm mt-6 overflow-hidden">
              <li className="">
                <div
                  onClick={() => setToptal(0)}
                  className={`flex py-3 pl-6 w-full font-semibold border-y border-primary/30 dark:border-primary/10 transition-all relative after:absolute after:right-[4rem] after:top-1/2 after:transform after:-translate-y-1/2 after:content-['coming_soon'] after:bg-primary after:p-1 after:px-2 after:flex after:justify-center after:items-center after:text-center after:rounded-md after:text-[0.7rem] duration-200 ${
                    toptal === 0
                      ? "after:opacity-100 after:visible"
                      : "after:opacity-0 After:invisible"
                  }`}
                >
                  Personal
                </div>
              </li>
              <li className="">
                <div
                  onClick={() => setToptal(1)}
                  className={`flex py-3 pl-6 w-full font-semibold border-b border-primary/30 dark:border-primary/10 transition-all relative after:absolute after:right-[4rem] after:top-1/2 after:transform after:-translate-y-1/2 after:content-['coming_soon'] after:bg-primary after:p-1 after:px-2 after:flex after:justify-center after:items-center after:text-center after:rounded-md after:text-[0.7rem] duration-200 ${
                    toptal === 1
                      ? "after:opacity-100 after:visible"
                      : "after:opacity-0 After:invisible"
                  }`}
                >
                  Business
                </div>
              </li>
              <li className="">
                <div
                  onClick={() => setToptal(2)}
                  className={`flex py-3 pl-6 w-full font-semibold border-b border-primary/30 dark:border-primary/10 transition-all relative after:absolute after:right-[4rem] after:top-1/2 after:transform after:-translate-y-1/2 after:content-['coming_soon'] after:bg-primary after:p-1 after:px-2 after:flex after:justify-center after:items-center after:text-center after:rounded-md after:text-[0.7rem] duration-200 ${
                    toptal === 2
                      ? "after:opacity-100 after:visible"
                      : "after:opacity-0 After:invisible"
                  }`}
                >
                  About Us
                </div>
              </li>
              <li className="">
                <div
                  onClick={() => setToptal(3)}
                  className={`flex py-3 pl-6 w-full font-semibold border-b border-primary/30 dark:border-primary/10 transition-all relative after:absolute after:right-[4rem] after:top-1/2 after:transform after:-translate-y-1/2 after:content-['coming_soon'] after:bg-primary after:p-1 after:px-2 after:flex after:justify-center after:items-center after:text-center after:rounded-md after:text-[0.7rem] duration-200 ${
                    toptal === 3
                      ? "after:opacity-100 after:visible"
                      : "after:opacity-0 After:invisible"
                  }`}
                >
                  Contact
                </div>
              </li>

              <li className="flex mt-4 pl-6">
                <Link
                  to="/waitlist"
                  className="flex uppercase text-[0.85rem] justify-center items-center text-white bg-primary rounded-lg w-32 h-8 -leading-2"
                >
                  Join waitlist
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}
