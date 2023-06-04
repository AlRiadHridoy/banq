import { Link } from "react-router-dom";
import { card, triangle } from "../ui/images";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <main className="main relative pt-28 md:pt-32  py-[2.5rem] md:pb-0">
      <div className="container">
        <div className="wrapper flex sm:grid grid-cols-7 justify-center gap-0  relative">
          {/* Left content */}
          <div className="left-content w-full col-span-5 z-10 relative flex flex-col gap-6 md:gap-8">
            <div className="heading grid gap-2 sm:justify-end items-center md:text-center font-medium text-end">
              {/* Desktop */}
              <h1 className="text-3xl exs:text-4xl xs:text-[3.5rem] xs:leading-[0.95] md:text-[4rem] lg:text-[5rem] md:leading-[110%] font-codePro tracking-tighter text-start md:text-center">
                Everyday money <br className="sm:hidden" /> made{" "}
                <TypeAnimation
                  className="text-animation text-primary text-3xl exs:text-4xl xs:text-[3.5rem] xs:leading-[0.95] md:text-[4rem] lg:text-[5rem] md:leading-[110%] font-codePro tracking-tighter text-start md:text-center"
                  sequence={[
                    500,
                    "easy.",
                    1700,
                    "fast.",
                    1700,
                    "effortless.",
                    1700,
                  ]}
                  wrapper="span"
                  cursor={true}
                  repeat={Infinity}
                />
              </h1>
            </div>

            <div className="botton-content font-Montserrat grid md:justify-center w-full gap-10 max-w-4xl md:text-center">
              <p className="font-normal font-Montserrat max-w-[70%] sm:max-w-[30rem]">
                From sending money instantly worldwide, to splitting bills and
                improving your spending habits, banq makes finance a breeze.
              </p>

              <div className="btn flex justify-center font-extrabold flex-shrink-0">
                <Link
                  to="./waitlist"
                  className="uppercase flex justify-center items-center pb-1.5 pt-[0.5rem] px-6 sm:pb-[0.4rem] sm:pt-[0.52rem] sm:px-12 bg-primary text-white rounded-xl whitespace-nowrap font-codePro font-thin text-[0.8rem] sm:text-[0.9rem] "
                >
                  JOIN WAITLIST
                </Link>
              </div>
            </div>
          </div>
          {/* Right content */}
          <div className="right-content  col-span-2 ml-4">
            <div className="card-img flex justify-center">
              <img
                className="max-w-[14rem] exs:max-w-[15rem] xs:max-w-[17rem] sm:max-w-[22rem] md:min-w-[25rem] lg:min-w-[28rem] -mr-12 sm:-mr-16 md:-mr-20 w-full globe-rotate absolute md:static top-12 xs:top-[2rem] sm:top-0 -right-[5rem] sm:-right-[5rem]"
                src={card}
                alt="globe"
              />
            </div>
          </div>
        </div>
      </div>

      {/* triangle */}
      <img
        className="triangle absolute top-[2%] sm:-bottom-[40%] -left-[50%] sm:-left-[15rem]  w-[50rem] rotate-[80deg] opacity-[0.25]"
        src={triangle}
        alt="triangle"
      />
    </main>
  );
}
