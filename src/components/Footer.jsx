import { Link } from "react-router-dom";

import { useState, useEffect } from "react";
import {
  logo,
  countryOne,
  countryTwo,
  triangle,
  whiteTriangle,
  logoBlack,
} from "../ui/images";

import { BsTwitter } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

export default function Footer() {
  // Coming soon

  const [toptal, setToptal] = useState(NaN);

  useEffect(() => {
    setTimeout(() => {
      setToptal(NaN);
    }, 900);
  }, [toptal]);

  return (
    <footer className="footer relative pt-12 pb-16">
      <div className="top max-w-[77rem] w-[85%] sm:w-[95%] m-auto flex justify-between items-center pb-3 border-dim-gray border-b">
        {/* left */}
        <Link to="/" className="left">
          <img
            className="max-w-[6rem] sm:max-w-[7rem] hidden dark:block"
            src={logo}
            alt="logo"
          />
          <img
            className="max-w-[6rem] sm:max-w-[7rem] dark:hidden"
            src={logoBlack}
            alt="logo"
          />
        </Link>

        {/* Right */}
        <div className="icons relative z-10 flex gap-2 xs:gap-4">
          {/* icon */}
          <a
            href="#"
            className="icon flex justify-center items-center transition-all duration-200 dark:bg-white bg-main hover:bg-primary dark:hover:bg-primary dark:hover:text-white hover:text-white dark:text-main text-white h-8 w-8 rounded-full "
          >
            <FaFacebookF />
          </a>
          {/* icon */}

          <a
            href="https://instagram.com/banq.ae?igshid=NTc4MTIwNjQ2YQ=="
            target="__blank"
            className="icon flex justify-center items-center transition-all duration-200 dark:bg-white bg-main hover:bg-primary dark:hover:bg-primary dark:hover:text-white hover:text-white dark:text-main text-white h-8 w-8 rounded-full"
          >
            <FaInstagram className="-mt-[0.15rem]" />
          </a>
          {/* icon */}
          <a
            href="https://twitter.com/banq_ae?s=21&t=xmWauINtygMbmqeSDEGPGg"
            target="__blank"
            className="icon flex justify-center items-center transition-all duration-200 dark:bg-white bg-main hover:bg-primary dark:hover:bg-primary dark:hover:text-white hover:text-white dark:text-main text-white h-8 w-8 rounded-full"
          >
            <BsTwitter />
          </a>
        </div>
      </div>
      {/* Bottom */}
      <div className="container">
        <div className="wrapper relative z-10 grid gap-10 sm:gap-12 md:gap-16 pt-12">
          <div className="top flex flex-col sm:flex-row gap-10 sm:gap-24 md:gap-28 lg:gap-32">
            {/* Country logo */}
            <div className="countrys flex gap-4">
              <a href="#" className="">
                <img
                  className="w-10 h-10 sm:min-w-[2.5rem] sm:min-h-[2.5rem]"
                  src={countryOne}
                  alt="country"
                />
              </a>
              <div
                onClick={() => setToptal(1)}
                className={`flex cursor-pointer relative before:absolute before:content-['Coming_soon'] sm:before:-top-[80%] sm:before:left-1/2  sm:before:-translate-x-1/2 before:bg-primary before:px-2.5 before:py-1 before:rounded-md before:whitespace-nowrap  before:opacity-0 hover:before:opacity-100 before:transform before:duration-200 before:text-[0.75rem] before:invisible sm:before:hover:visible after:absolute after:-right-[7rem] after:top-1/2 after:transform after:-translate-y-1/2 after:content-['coming_soon'] after:bg-primary after:p-1 after:px-2 after:flex after:justify-center after:items-center after:text-center after:rounded-md after:text-[0.7rem] duration-200 after:whitespace-nowrap ${
                  toptal === 1
                    ? "after:opacity-100 after:visible"
                    : "after:opacity-0 After:invisible"
                }`}
              >
                <img
                  className={`w-10 h-10 sm:min-w-[2.5rem] sm:min-h-[2.5rem] relative`}
                  src={countryTwo}
                  alt="country"
                />
              </div>
            </div>

            {/* links */}
            <div className="links w-full z-10 relative flex justify-start items-center">
              <ul className="flex gap-2 flex-wrap max-w-[50rem]">
                <li>
                  <a href="#" className="underline flex whitespace-nowrap">
                    Website terms
                  </a>
                </li>
                <li>
                  <a href="#" className="underline flex whitespace-nowrap">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="underline flex whitespace-nowrap">
                    Contact us
                  </a>
                </li>
                <li>
                  <a href="#" className="underline flex whitespace-nowrap">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="paras grid gap-4">
            <span className="font-codePro text-[0.9rem]">
              © Banq EU LTD 2023
            </span>
            <p className="font-codePro text-[0.85rem]">
              If you would like to find out more about which Banq entity you
              receive services from, or if you have any other questions, please
              reach out to us via email at:{" "}
              <a href="mailto: info@banq.ae" className="text-primary">
                {" "}
                info@banq.ae
              </a>{" "}
              <br />
              Banq EU LTD is only authorized to collecting data
              from individuals for the only scope of whitelisting them for a
              launch of our services with a fully regulated company in the
              United Arab Emirates. Please note that Banq EU LTD does not offer
              any financial service in the UAE at the moment.
            </p>
          </div>
        </div>
      </div>

      {/* triangle */}
      <img
        className="triangle absolute hidden sm:block -top-[50%] sm:-bottom-[40%] -right-[50%]  w-[70rem] rotate-[55deg] opacity-[0.15]"
        src={triangle}
        alt="triangle"
      />
      <img
        className="triangle absolute sm:hidden -top-[50%] sm:-bottom-[40%] -right-[50%]  w-[70rem] rotate-[70deg] opacity-[0.17]"
        src={whiteTriangle}
        alt="triangle"
      />

      {/* White */}
      {/* triangle */}
      <img
        className="triangle sm:hidden absolute bottom-0  -right-[65%]  w-[70rem] rotate-[55deg] opacity-[0.22]"
        src={whiteTriangle}
        alt="triangle"
      />
      {/* triangle */}
      <img
        className="triangle sm:hidden absolute -top-[20%]  -left-[55%]  w-[70rem] rotate-[70deg] opacity-[0.2]"
        src={whiteTriangle}
        alt="triangle"
      />
    </footer>
  );
}
