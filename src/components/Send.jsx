import { Link } from "react-router-dom";
import {
  globe,
  triangle,
  amalfi,
  slitBill,
  cardPay,
  blackCard,
  logo,
  logoBlack,
  premium,
} from "../ui/images";

export default function Send() {
  return (
    <section className="send relative exs:mt-8 xs:mt-10 sm:mt-12 md:mt-0">
      <div className="container">
        <div className="wrapper relative z-10 grid gap-12">
          <div className="heading grid gap-6 justify-center items-center text-center">
            <h2 className="font-medium text-[1.8rem] xs:text-[2rem] sm:text-[2.1rem] font-codePro tracking-tight gap-1.5 inline-block justify-center items-center">
              Send, spend and save the{" "}
              <a href="#">
                <img
                  className="w-[4.6rem] sm:w-[5.1rem] hidden dark:inline-block mt-[0.04rem] mx-[0.25rem]"
                  src={logo}
                  alt="logo"
                />{" "}
                <img
                  className="w-[4.6rem] sm:w-[5.1rem] inline-block dark:hidden mt-[0.04rem] mx-[0.25rem]"
                  src={logoBlack}
                  alt="logo"
                />{" "}
              </a>
              way
            </h2>

            <p className="max-w-[45rem]">
              Keep a grip on your spending and stop losing money on unnecessary
              fees, banq is what you&apos;ve been missing.
            </p>

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
          {/* Content */}
          <div className="contents">
            {/* Globe */}
            <div className="green-grnt globe w-full lg:h-[25rem] relative z-10 flex flex-col-reverse sm:flex-row justify-between gap-6 border sm:border-4 rounded-xl border-primary/10 sm:border-primary/50 overflow-hidden text-white">
              {/* left */}
              <div className="left flex flex-col p-6 justify-center items-start gap-5">
                <h2 className="font-medium text-[1.8rem] xs:text-[2rem] sm:text-[2.1rem] font-codePro tracking-tight">
                  Send internationally in a flash
                </h2>

                <div className="para flex justify-start">
                  <p className=" font-normal font-Montserrat text-start  max-w-[30rem]">
                    From sending money instantly worldwide, to splitting bills
                    and improving your spending habits, banq makes finance a
                    breeze.
                  </p>
                </div>

                <div className="btn hidden sm:flex w-full font-extrabold flex-shrink-0 mt-2">
                  <Link
                    to="./waitlist"
                    className=" uppercaseont-base justify-center items-center pb-[0.4rem] pt-[0.5rem] px-12 border-2 border-white rounded-xl whitespace-nowrap font-codePro font-thin  text-[0.8rem] sm:text-[0.85rem]"
                  >
                    JOIN WAITLIST
                  </Link>
                </div>
              </div>

              {/* Right content */}
              <div className="right">
                <img
                  className="max-w-[22rem] sm:max-w-[24rme] md:max-w-[25rem] lg:max-w-[28rem] opacity-60 sm:opacity-100 -mr-10 -mt-6 md:-mt-5 md:-mb-5"
                  src={globe}
                  alt="globe"
                />
              </div>
            </div>

            {/* Two col */}
            <div className="wrapper grid md:grid-cols-2 gap-10 relative z-10">
              {/* Split */}
              <div className="split sm:border-4 relative z-10 bg-dim-gray/20 sm:bg-transparent border-dim-gray/50 flex flex-col gap-5 sm:gap-8 rounded-xl sm:rounded-md p-6 sm:pl-6 sm:pr-0">
                <div className="top relative z-10">
                  <h2 className=" font-medium text-[1.8rem] xs:text-[2rem] sm:text-[2.1rem] font-codePro tracking-tight mr-6">
                    <span className="font-medium text-primary text-[1.8rem] xs:text-[2rem] sm:text-[2.1rem] font-codePro tracking-tight">
                      Split bills
                    </span>{" "}
                    and payments without the stress
                  </h2>
                </div>

                {/* Bottom */}
                <div className="bottom grid xs:grid-cols-2 gap-8 sm:gap-4">
                  <p className="md:max-w-[15rem] lg:place-self-center">
                    From restaurant cheques to everyday purchases, split any
                    payment with anyone, even if they’re not on banq.
                  </p>
                  <img
                    className="max-w-[18rem] md:max-w-[14rem] sm:place-self-end lg:max-w-[17rem] transform sm:-mb-[2rem] md:-mb-[6rem] translate-x-5"
                    src={slitBill}
                    alt=""
                  />
                </div>
              </div>

              {/* amalfi */}
              <div className="split relative z-10 bg-dim-gray/20 sm:bg-transparent sm:border-4 border-dim-gray/50 flex flex-col gap-5 sm:gap-8 rounded-xl sm:rounded-md py-6 pl-6 pr-0">
                <div className="top xs:pr-8">
                  <h2 className="font-medium text-[1.8rem] xs:text-[2rem] sm:text-[2.1rem] font-codePro tracking-tight pr-6 sm:pr-0">
                    Set and save towards a goal with banq{" "}
                    <span className="font-medium text-primary text-[1.8rem] xs:text-[2rem] sm:text-[2.1rem] font-codePro tracking-tight">
                      vaults
                    </span>
                  </h2>
                </div>

                {/* Bottom */}
                <div className="bottom grid grid-cols-2 gap-4">
                  <p className="md:max-w-[15rem] md:place-self-center sm:pr-0">
                    Saving up for holiday with friends or buying that new car?
                    Get there faster thanks to vaults. Set a goal, add members
                    and keep track of your saving progress.
                  </p>
                  <img
                    className="max-w-[20rme] -ml-32 sm:max-w-[15rem] md:max-w-[13rem] lg:max-w-[14rem] transform md:-mt-[10rem] sm:-mb-[3rem] md:-mb-[5rem] justify-self-end place-self-center sm:place-self-end"
                    src={amalfi}
                    alt=""
                  />
                </div>

                {/* triangle */}
                <img
                  className="triangle sm:hidden absolute -top-[55%] -left-[65%] w-[50rem] rotate-[45deg]  opacity-[0.2]"
                  src={triangle}
                  alt="triangle"
                />
              </div>

              {/* triangle */}
              <img
                className="triangle sm:hidden absolute -top-[13rem] -right-[80%] w-[50rem] rotate-[45deg]  opacity-[0.35]"
                src={triangle}
                alt="triangle"
              />
            </div>

            {/* Card */}
            <div className="statement relative sm:mt-3">
              <div className="Card relative w-full z-10 grid sm:flex gap-8 sm:gap-10 border sm:border-4 rounded-xl border-white/50 px-6 sm:mt-8 text-main bg-light-gray/95">
                {/* left */}
                <div className="left relative flex flex-col justify-center items-start gap-5 pt-6 sm:pb-6">
                  <h2 className="font-medium text-[1.8rem] xs:text-[2rem] sm:text-[2.1rem] font-codePro tracking-tight">
                    Premium card design that makes a statement
                  </h2>

                  <div className="para flex justify-start">
                    <p className="font-normal font-Montserrat text-start   max-w-[30rem]">
                      Pay in style with banq&apos;s exclusive range of debit
                      cards uniquely designed by world renowned artists. Stay
                      tuned for banq gold and metal cards launching soon.
                    </p>
                  </div>

                  <div className="btn hidden sm:flex w-full font-extrabold flex-shrink-0 mt-2">
                    <Link
                      to="/waitlist"
                      className="uppercase  font-base flex justify-center items-center pb-[0.4rem] pt-[0.5rem] px-12 bg-primary  rounded-xl whitespace-nowrap font-codePro font-thin text-[0.8rem] sm:text-[0.85rem]"
                    >
                      JOIN WAITLIST
                    </Link>
                  </div>
                </div>

                {/* Right content */}
                <div className="right flex justify-center sm:justify-start items-end sm:pt-6">
                  <img
                    className="max-w-[12.5rem] md:max-w-[15rem] -mb-[1px] sm:-mb-[5px]"
                    src={premium}
                    alt="card"
                  />
                </div>
              </div>
            </div>

            {/* Two col */}
            <div className="wrapper grid md:grid-cols-2 gap-10">
              {/* Spend */}
              <div className="spend relative green-grnt sm:border-4 border-primary md:border-dim-gray/50 flex flex-col gap-4 rounded-xl sm:rounded-md p-6 text-white">
                <div className="top">
                  <h2 className=" font-medium text-[1.8rem] xs:text-[2rem] sm:text-[2.1rem] font-codePro tracking-tight">
                    Spend with{" "}
                    <span className="font-medium text-main text-[1.8rem] xs:text-[2rem] sm:text-[2.1rem] font-codePro tracking-tight">
                      Apple
                    </span>{" "}
                    or{" "}
                    <span className="font-medium text-main text-[1.8rem] xs:text-[2rem] sm:text-[2.1rem] font-codePro tracking-tight">
                      Google
                    </span>{" "}
                    Pay in a tap
                  </h2>
                </div>

                {/* Bottom */}
                <div className="bottom grid sm:grid-cols-2 gap-8 sm:gap-10">
                  <p className="md:max-w-[15rem] md:place-self-center">
                    Link your physical or virtual banq card straight away to tap
                    and pay with your smartphone. Spending has never been so
                    easy.
                  </p>

                  <img
                    className="self-center justify-self-center max-w-[20rem] place-self-center transform sm:-ml-12 lg:-ml-5 md:mt-10 lg:mt-0 -mb-[1rem] sm:-mb-[6rem] md:-mb-[7.5rem] translate-x-5 sm:translate-x-14"
                    src={cardPay}
                    alt=""
                  />
                </div>

                {/* triangle */}
                <img
                  className="triangle sm:hidden absolute -top-[15rem] -right-[72%] w-[60rem] rotate-[45deg]  opacity-[0.35]"
                  src={triangle}
                  alt="triangle"
                />
              </div>
              {/*  Black car */}
              <div className="Black-card relative mt-0 bg-dim-gray/20 sm:bg-transparent sm:border-4 border-dim-gray/50 flex flex-col gap-4 rounded-xl sm:rounded-md p-6 sm:py-6 sm:pl-6 sm:pr-0">
                <div className="top">
                  <h2 className="font-medium text-[1.8rem] xs:text-[2rem] sm:text-[2.1rem] font-codePro tracking-tight sm:mr-6">
                    Peace of mind online with{" "}
                    <span className="font-medium text-primary text-[1.8rem] xs:text-[2rem] sm:text-[2.1rem] font-codePro tracking-tight">
                      virtual cards
                    </span>
                  </h2>
                </div>

                {/* Bottom */}
                <div className="bottom grid sm:grid-cols-2 gap-8 sm:gap-4">
                  <p className="md:max-w-[15rem] md:place-self-center">
                    Saving up for holiday with friends or buying that new car?
                    Get there faster thanks to vaults. Set a goal, add members
                    and keep track of your saving progress.
                  </p>

                  <img
                    className="max-w-[17rem] sm:max-w-[14rem] transform  md:-mt-[15rem] -mb-[3rem] lg:-mb-[4.5rem] place-self-center sm:place-self-end"
                    src={blackCard}
                    alt=""
                  />
                </div>

                {/* triangle */}
                <img
                  className="triangle sm:hidden absolute -top-[15rem] -right-[72%] w-[60rem] rotate-[45deg]  opacity-[0.45]"
                  src={triangle}
                  alt="triangle"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* triangle */}
      <img
        className="triangle absolute -top-[24rem] sm:-top-[20rem] -left-[20%] sm:-left-[20rem]  w-[70rem] rotate-[80deg] opacity-10 md:opacity-[0.1]"
        src={triangle}
        alt="triangle"
      />
      {/* Right */}
      <img
        className="triangle absolute top-[10rem] -right-[35rem]  w-[70rem] rotate-[180deg] opacity-[0.18]"
        src={triangle}
        alt="triangle"
      />
      <img
        className="triangle md:hidden absolute bottom-0 -right-[10%]  w-[70rem] rotate-[180deg] opacity-[0.1]"
        src={triangle}
        alt="triangle"
      />
    </section>
  );
}
