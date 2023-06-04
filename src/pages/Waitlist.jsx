import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { logo, logoBlack, tick, triangle } from "../ui/images";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import jsonp from "jsonp";

import { HiOutlineArrowNarrowRight, HiOutlineMail } from "react-icons/hi";
import { RxCross1 } from "react-icons/rx";
import { AiOutlineUser } from "react-icons/ai";

export default function Waitlist() {
  const [modalOpen, setModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Waitlist
  const url = import.meta.env.VITE_WAITLIST_URL;
  const handleSubmit = (e) => {
    e.preventDefault();
    jsonp(`${url}&FNAME=${name}&EMAIL=${email}`, { param: "c" }, (_, data) => {
      const { result } = data;
      // do something with response
      if (result === "success") {
        setModalOpen(true);
      }
    });
  };
  return (
    <>
      <Navbar />
      <section className="waitlist relative pt-[8rem] pb-[6rem] sm:py-[7rem] md:py-[10rem]">
        <div className="container">
          <div className="wrapper">
            <div className="heading grid gap-6 justify-center items-center text-center">
              <h2 className="font-medium text-[2.2rem] xs:text-[2.5rem] sm:text-[3rem] font-codePro tracking-tight gap-1.5 inline-block justify-center items-center">
                Join the{" "}
                <a href="#">
                  <img
                    className="w-[4.6rem] sm:w-[6.5rem] hidden dark:inline-block mt-[0.04rem] mx-[0.25rem]"
                    src={logo}
                    alt="logo"
                  />{" "}
                  <img
                    className="w-[4.6rem] sm:w-[6.5rem] dark:hidden inline-block mt-[0.04rem] mx-[0.25rem]"
                    src={logoBlack}
                    alt="logo"
                  />{" "}
                </a>
                <span className="text-primary font-medium text-[2.2rem] xs:text-[2.5rem] sm:text-[3rem] font-codePro tracking-tight gap-1.5 block justify-center items-center">
                  waitlist
                </span>
              </h2>
              {/* triangle */}
              <img
                className="triangle sm:hidden absolute -top-[5rem] -right-[60%] w-[50rem] rotate-[80deg]  opacity-[0.25]"
                src={triangle}
                alt="triangle"
              />
              {/* triangle */}
              <img
                className="triangle sm:hidden absolute top-[5rem] -left-[40%] w-[50rem] rotate-[80deg]  opacity-[0.2]"
                src={triangle}
                alt="triangle"
              />
            </div>

            {/* Form */}
            <form
              onSubmit={(e) => handleSubmit(e)}
              id="mc-embedded-subscribe-form"
              name="mc-embedded-subscribe-form"
              className="validate"
            >
              <div className=" content z-10 relative grid gap-6 max-w-[30rem] m-auto mt-12 text-main dark:text-dim-gray">
                <div className="input relative">
                  <div className="icon absolute top-1/2 left-5 transform -translate-y-1/2">
                    <AiOutlineUser className=" h-5 w-5 dark:text-dim-gray/70" />
                  </div>
                  {/* input */}
                  <input
                    id="mce-FNAME"
                    name="NAME"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="email w-full focus:outline-primary/70 border-none outline outline-2 outline-dim-gray/30  bg-transparent py-2 sm:py-2.5 md:py-3 pl-12 pr-6 rounded-md transition-all duration-200 dark:placeholder:text-dim-gray/70 placeholder:text-main"
                    type="text"
                    placeholder="Full name..."
                    required
                  />
                </div>
                {/* Email */}
                <div className="input relative">
                  <div className="icon absolute top-1/2 left-5 transform -translate-y-1/2">
                    <HiOutlineMail className=" h-5 w-5 dark:text-dim-gray/70" />
                  </div>
                  {/* input */}
                  <input
                    id="mce-EMAIL"
                    name="EMAIL"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="email w-full focus:outline-primary/70 border-none outline outline-2 outline-dim-gray/30  bg-transparent py-2 sm:py-2.5 md:py-3 pl-12 pr-6 rounded-md transition-all duration-200 dark:placeholder:text-dim-gray/70 placeholder:text-main"
                    type="email"
                    placeholder="Email address..."
                    required
                  />
                </div>
                {/* btn */}
                <div className="btn">
                  <button
                    className={`w-full py-3 rounded-md  text-light-gray   bg-primary dark:bg-primary/70  transition duration-300 relative ${
                      email && name
                        ? "opacity-100 cursor-pointer dark:hover:bg-primary hover:text-white"
                        : "opacity-50 cursor-default"
                    }`}
                  >
                    <input
                      type="submit"
                      value="Join the waitlist"
                      name="subscribe"
                      id="mc-embedded-subscribe"
                      className="button"
                    />
                    <HiOutlineArrowNarrowRight className="absolute top-1/2 transform -translate-y-1/2 right-6 w-8 h-8" />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* triangle */}
        <img
          className="triangle absolute hidden md:block top-[2%] sm:-bottom-[40%] -left-[50%] sm:-left-[15rem]  w-[50rem] rotate-[80deg] opacity-[0.2]"
          src={triangle}
          alt="triangle"
        />
        {/* triangle */}
        <img
          className="triangle absolute top-[2%] sm:-bottom-[40%] -right-[50%] sm:-right-[15rem]  w-[50rem] rotate-[80deg] opacity-[0.05]"
          src={triangle}
          alt="triangle"
        />
      </section>

      {/* Modal */}
      <div
        className={`modal fixed inset-0 z-[99] flex justify-center items-center transition-all duration-300 ${
          modalOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div
          className="bg absolute inset-0  bg-dark/90 dark:bg-dark/40 w-full h-full"
          onClick={() => setModalOpen(false)}
        ></div>

        <div
          className={`box relative m-6 min-h-[300px] max-w-[600px] w-full text-main dark:text-white bg-light-gray dark:bg-main transition-all duration-300 rounded-3xl z-[999] px-6 ${
            modalOpen ? "visible opacity-100" : "invisible opacity-0"
          }`}
        >
          {/* Tick */}
          <div className="tick pt-5 sm:pt-8 pb-5 sm:pb-8 md:pb-12 flex justify-center items-center">
            <img
              className={`max-w-[3.5rem] exs:max-w-[4rem] sm:max-w-[5rem] md:max-w-[5.5rem] transition-all duration-500 ${
                modalOpen ? "scale-100" : "scale-0"
              }`}
              src={tick}
              alt="tick"
            />
          </div>

          {/* content */}
          <div className="content grid justify-center items-center text-center gap-4 sm:gap-6 md:gap-8">
            <h2 className=" text-xl exs:text-2xl sm:text-3xl md:text-4xl">
              We&apos;ve added you to our <br /> waiting list!
            </h2>
            {/* text */}
            <em className="font-thin font-codePro text-[0.9rem]">
              We&apos;ll let you know when Banq is ready.
            </em>

            {/* Registerd email */}
            <div className="registerd rounded-xl mb-6 bg-[#545454]/[15%] dark:bg-[#302F37] py-5 px-5 w-full max-w-[30rem] m-auto">
              <div className="usermail bg-[#545454]/[25%] dark:bg-[#201F28] rounded-lg px-4 py-3 flex justify-center items-center gap-4">
                <AiOutlineUser className="h-5 w-5 opacity-40" />
                <div className="mail">
                  <em className="font-extrabold font-codeProLight text-[0.95rem] break-words dark:text-[#BFBFC3]">
                    {email}
                  </em>
                </div>
              </div>
              {/* Text */}
              <div className="text grid gap-0 mt-2 text-main dark:text-white">
                <span className="text-[0.85rem]">
                  Banq is coming soon. Stay updated with what&apos;s happening
                  behind the scenes!
                </span>
              </div>
            </div>
          </div>
          {/* cross */}
          <div className="cross" onClick={() => setModalOpen(false)}>
            <RxCross1 className="absolute cursor-pointer text-xl sm:text-2xl text-dim-gray right-4 sm:right-6 md:right-8 top-4 sm:top-6 md:top-8" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
