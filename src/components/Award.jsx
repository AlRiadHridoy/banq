import { Link } from "react-router-dom";
import {
  lock,
  triangle,
  mobileOne,
  mobileTwo,
  logoBlack,
  whiteTriangle,
} from "../ui/images";

export default function Award() {
  return (
    <section className="award relative mt-7 sm:mt-12">
      <div className="container">
        <div className="wrapper relative z-10 grid gap-12">
          <div className="heading grid gap-6 justify-center items-center text-center">
            <h2 className="font-medium text-[1.8rem] xs:text-[2rem] sm:text-[2.1rem] tracking-tight">
              Award winning security and support when you most need it
            </h2>
          </div>

          {/* Content */}
          <div className="contents">
            {/* Two col */}
            <div className="wrapper grid md:grid-cols-2 gap-10">
              {/* pinkCard */}
              <div className="pink-card relative green-grnt sm:bg-none sm:border-4 border-primary/50 sm:border-dim-gray/50 flex flex-col gap-4 rounded-xl sm:rounded-md pt-6 px-6 overflow-hidden text-white sm:text-main dark:text-white">
                <div className="top">
                  <h2 className="font-medium text-[1.8rem] xs:text-[2rem] sm:text-[2.1rem] tracking-tight sm:mr-6">
                    Card safety and security in your hands
                  </h2>
                </div>

                {/* Bottom */}
                <div className="bottom grid sm:grid-cols-2 gap-8 sm:gap-4">
                  <p className="md:max-w-[15rem] mt-3">
                    Instantly create virtual cards for online shopping,
                    subscriptions or any one-time purchases that burn after use.
                  </p>

                  <img
                    className="max-w-[13.5rem] sm:max-w-[12.8rem] lg:max-w-[14.8rem] place-self-center"
                    src={mobileOne}
                    alt=""
                  />
                </div>
              </div>

              {/* netflix */}
              <div className="netflix bg-dim-gray/20 sm:bg-transparent sm:border-4 border-dim-gray/50 flex flex-col gap-4 rounded-xl sm:rounded-md overflow-hidden pt-6 px-6">
                <div className="top z-10">
                  <h2 className="font-medium text-[1.8rem] xs:text-[2rem] sm:text-[2.1rem] tracking-tight">
                    Human support that doesn&apos;t sleep
                  </h2>
                </div>

                {/* Bottom */}
                <div className="bottom grid sm:grid-cols-2 gap-8 sm:gap-4">
                  <p className="md:max-w-[15rem] sm:mt-3 z-10 p-0">
                    Goodbye to chat bots and automated replies. Banq chat is
                    human operated 24/7 to ensure you&apos;re covered.
                  </p>
                  <img
                    className="max-w-[13.5rem] sm:max-w-[12rem] lg:max-w-[14rem] place-self-center"
                    src={mobileTwo}
                    alt=""
                  />
                </div>
              </div>
            </div>

            {/* Card */}
            <div className="relative">
              <div className="Card w-full z-10 relative  sm:grid grid-cols-10 gap-6 border-4 rounded-xl border-white/50 text-main bg-light-gray/95 p-6">
                {/* left */}
                <div className="left col-span-6 flex flex-col justify-center items-start gap-5">
                  <h2 className="font-medium lock text-[1.8rem] xs:text-[2rem] sm:text-[2.1rem] tracking-tight">
                    <a
                      href="#"
                      className="font-medium lock text-[1.8rem] xs:text-[2rem] sm:text-[2.1rem] tracking-tight"
                    >
                      <img
                        className="inline-block w-[5rem] mr-2"
                        src={logoBlack}
                        alt=""
                      />
                    </a>
                    is fully compliant and regulated by the CBUAE
                  </h2>
                  <div className="para flex justify-start gap-5">
                    <p className="font-normal font-Montserrat text-start  text-[1.2rem] max-w-[35rem]">
                      By law, banq is fully compliant and regulated by the
                      Central Bank of the United Arab Emirates. That means your
                      money is in safe hands.
                    </p>
                  </div>
                </div>

                {/* Right content */}
                <div className="right col-span-4 flex justify-center items-center py-5">
                  <img
                    className="max-w-[13rem] md:max-w-[15rem] w-full"
                    src={lock}
                    alt="globe"
                  />
                </div>
              </div>

              {/* triangle */}
              <img
                className="triangle absolute hidden xs:block top-[2%] sm:-bottom-[40%] -left-[50%] sm:-left-[25rem]  w-[50rem] rotate-[80deg] opacity-[0.25]"
                src={triangle}
                alt="triangle"
              />

              {/* triangle */}
              <img
                className="triangle sm:hidden absolute -top-[20%]  -left-[50%]  w-[70rem] rotate-[70deg] opacity-[0.25]"
                src={whiteTriangle}
                alt="triangle"
              />
            </div>
          </div>

          {/* bottom */}
          <div className="bottom grid gap-10 my-5 xs:my-10">
            <h2 className="font-medium text-center text-[1.8rem] xs:text-[2rem] sm:text-[2.1rem] tracking-tight">
              And so much more...
            </h2>

            <div className="btn flex justify-center font-extrabold flex-shrink-0">
              <Link
                to="./waitlist"
                className="uppercase font-base flex justify-center items-center pb-1.5 pt-[0.5rem] px-6 sm:pb-[0.4rem] sm:pt-[0.52rem] sm:px-12 bg-dim-gray sm:bg-transparent text-main dark:sm:text-white sm:border-2 dark:border-white border-dark rounded-md sm:rounded-xl whitespace-nowrap font-codePro font-thin text-base text-[0.8rem]"
              >
                JOIN WAITLIST
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* triangle */}
      <img
        className="triangle absolute hidden sm:block -top-[40%] sm:-bottom-[40%] left-1/2 transform -translate-x-1/2 w-[60rem] rotate-[45deg] opacity-[0.25]"
        src={triangle}
        alt="triangle"
      />
    </section>
  );
}
