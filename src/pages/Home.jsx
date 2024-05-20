import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Button2,
  Circle,
  Ellipse,
  HomeLogo1,
  HomeLogo2,
  HomeLogo3,
  HomeLogo4,
  IconDark,
  LeftArrow,
  MaskGroup,
  MaskGroup2,
  MaskGroup3,
  MaskGroupSmall,
  Path,
  PathWhite,
  RectangleMask,
  RightArrow,
  Section4,
  Section4Small,
  Vector,
  VectorSmall,
} from "../assets";

const HomeSection3Item = ({ number, text }) => (
  <div className="flex gap-2 lg:gap-4 flex-col text-left mt-6 px-2 lg:px-0 lg:mt-2 lg:p-4 w-[40%] lg:w-36">
    <h4 className="font-montserratalt font-extrabold text-5xl text-customPink">
      {number}
    </h4>
    <span className="font-montserrat text-sm font-semibold">{text}</span>
  </div>
);

const ServiceItem = ({ number, title }) => (
  <div className="flex flex-col gap-2">
    <div>
      <span className="font-semibold font-montserrat text-customPink text-base">
        {number}
      </span>
    </div>
    <div className="flex justify-between  lg:w-5/6 border-b-2 border-[#ccccccd6] group relative">
      <h4 className="font-montserrat font-extrabold text-xl leading-8">
        {title}
      </h4>
      <img src={Path} alt="path-arrow" className="w-10" />
      <div className="absolute left-0 bottom-0 w-0 h-[2px] bg-customPink group-hover:w-full transition-all duration-500"></div>
    </div>
  </div>
);

const FeedbackItem = ({ name, comment, image, date, hoverClass }) => (
  <div className="group feedback cursor-pointer bg-customPink lg:bg-[#C2278E08] rounded-md flex flex-col ml-12 lg:w-[22%]  p-6 hover:bg-customPink transition-all duration-300 transform hover:scale-105">
    <div className="text-sm flex flex-col gap-4">
      <p className="font-archiv text-left text-white lg:text-[#5E84A1] group-hover:text-white transition-colors duration-300 quote">
        {comment}
      </p>
      <div className="flex gap-3 items-center">
        <div className="bg-white lg:bg-customPink group-hover:bg-white transition-colors duration-300 p-1 rounded-full">
          <img src={image} alt="feedback" className="w-8" />
        </div>
        <div className="flex flex-col gap-0">
          <span className="font-poppins text-normal font-bold text-white lg:text-[#1E5068] group-hover:text-white transition-colors duration-300">
            {name}
          </span>
          <span className="block font-poppins text-xs text-white lg:text-gray-500 group-hover:text-white transition-colors duration-300">
            {date}
          </span>
        </div>
      </div>
    </div>
  </div>
);

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(null);
  const [hoverClass, setHoverClass] = useState("");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 440) {
        setItemsPerPage(1);
      } else if (window.innerWidth <= 768) {
        setItemsPerPage(2);
      } else if (window.innerWidth <= 968) {
        setItemsPerPage(3);
      } else {
        setItemsPerPage(4);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  //* Testimonial Data..........

  const clientFeedBack = [
    {
      name: "Aaron Boby",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
      image: IconDark,
      date: new Date().toLocaleDateString("en-US", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }),
    },
    {
      name: "Daren Axell",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
      image: IconDark,
      date: new Date().toLocaleDateString("en-US", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }),
    },
    {
      name: "Dion Channing",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
      image: IconDark,
      date: new Date().toLocaleDateString("en-US", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }),
    },
    {
      name: "Jack Hanma",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
      image: IconDark,
      date: new Date().toLocaleDateString("en-US", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }),
    },
    {
      name: "Chris Patt",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
      image: IconDark,
      date: new Date().toLocaleDateString("en-US", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }),
    },
    {
      name: "Tarun Solanki",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
      image: IconDark,
      date: new Date().toLocaleDateString("en-US", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }),
    },
    {
      name: "Robin Solanki",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
      image: IconDark,
      date: new Date().toLocaleDateString("en-US", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }),
    },
    {
      name: "Raju Solanki",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
      image: IconDark,
      date: new Date().toLocaleDateString("en-US", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }),
    },
  ];

  //* Handlers..............
  const handlePrev = () => {
    setHoverClass("hover-active");
    setTimeout(() => setHoverClass(""), 300); // remove class after 300ms
    setCurrentIndex(currentIndex > 0 ? currentIndex - 1 : 0);
  };

  const handleNext = () => {
    setHoverClass("hover-active");
    setTimeout(() => setHoverClass(""), 300); // remove class after 300ms
    setCurrentIndex(
      currentIndex < clientFeedBack.length - itemsPerPage
        ? currentIndex + 1
        : clientFeedBack.length - itemsPerPage
    );
  };

  //* CONSTANT >..........

  const hideLeftArrow = currentIndex === 0;
  const hideRightArrow = currentIndex + itemsPerPage >= clientFeedBack.length;
  const homeLogoImages = [HomeLogo3, HomeLogo4, HomeLogo1, HomeLogo2];
  const homeSection3Items = [
    { number: "150+", text: "Projects" },
    { number: "80+", text: "Clients" },
    { number: "200+", text: "Professionals" },
    { number: "97%", text: "clients" },
  ];

  return (
    <section className="home-container">
      {/* SECTION-1 */}
      <div className="relative mb-2 lg:mb-0">
        <img
          src={MaskGroup}
          alt="MaskImage"
          className="w-full hidden lg:block"
        />
        <img
          src={MaskGroupSmall}
          alt="MaskImage"
          className="w-full lg:hidden block"
        />
        <div className="absolute xxl:bottom-48 xxl:left-32 xl:bottom-40 xl:left-28 cursor-pointer">
          <Link to="/">
            <img src={Button2} alt="Button" className="hidden lg:block" />
          </Link>
        </div>
      </div>

      {/* SECTION-2 */}
      <div className="w-full h-[593px] lg:h-[563px] bg-customPink -mt-2 overflow-hidden relative">
        <div className="flex justify-center">
          <img
            src={Vector}
            alt="Vector"
            className="w-3/4 h-auto hidden lg:block"
          />

          <img
            src={VectorSmall}
            alt="Vector"
            className="w-11/12 lg:hidden block"
          />
        </div>
        <div className="absolute top-16 left-20 lg:top-28 lg:left-28 ">
          <h3 className="text-white font-plusjakarta text-3xl lg:text-2xl">
            About Olvera
          </h3>
        </div>
        <div className="absolute flex flex-col gap-4 top-36 right-1 lg:top-44 lg:right-32 lg:w-[30%] w-full">
          <div className="text-white flex flex-col text-center lg:hidden font-plusjakarta font-extrabold text-4xl">
            <span>Change is the one</span>
            <span>true constant in</span>
            <span> business</span>
          </div>
          <span className="text-white font-archivo text-lg mt-4 text-center ml-16 lg:ml-0 lg:text-left w-[72%] lg:w-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </span>
        </div>
        <div className="absolute bottom-4 lg:left-28 flex flex-wrap justify-center lg:justify-start w-full px-4 lg:px-0">
          {homeLogoImages.map((image, index) => (
            <div key={index} className="flex items-center m-2 lg:m-0">
              <img
                src={image}
                alt={`Home_logo_${index + 1}`}
                className="w-36 h-[70px] -mb-2 lg:w-4/5 lg:ml-12 lg:h-auto lg:mb-0"
              />
            </div>
          ))}
        </div>
      </div>

      {/* SECTION-3 */}
      <div className="">
        <div className="flex flex-wrap lg:flex-nowrap p-8 items-center justify-between m-auto w-full lg:w-4/5">
          {homeSection3Items.map((item, index) => (
            <HomeSection3Item key={index} {...item} />
          ))}
        </div>
      </div>

      {/* Services */}
      <div className="lg:mb-10">
        <div className="flex flex-wrap w-full h-full mt-2 lg:mt-16 relative">
          <div className="xl:w-[40%] xxl:w-[35%] sm:w-full m-auto flex flex-col gap-4 -mt-1 p-6 lg:p-0">
            <span className="text-customPink font-oswald font-semibold text-[20px] w-52 hidden lg:block">
              SERVICES
            </span>
            <h2 className="uppercase text-center lg:text-left font-montserratalt  lg:font-plusjakarta font-extrabold text-xl lg:text-4xl leading-306px] lg:leading-[46px]">
              Our services that can
              <br /> help your business
            </h2>
            <p className="font-archivo text-center lg:text-left text-sm text-[#6E6E6E] leading-7 w-full">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              <br />
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt
            </p>
          </div>
          <div className="flex p-4 lg:p-0 flex-col gap-4 xl:w-[40%] w-full  lg:mt-10 mb-16 cursor-pointer">
            <ServiceItem number="" title="Sustainability" />
            <ServiceItem number="02" title="Small Business" />
            <ServiceItem number="03" title="Forensic Services" />
            <ServiceItem number="04" title="Risk Management" />
            <ServiceItem number="05" title="CFO Advisory" />
          </div>
          <div className="absolute top-20  xxl:-top-16 xxl:left-96 xl:-top-16 xl:left-[24%] overflow-hidden hidden lg:block">
            <img src={Ellipse} alt="Ellipse_img" />
          </div>
          <div className="absolute xxl:top-[55%] xxl:-left-32 xl:top-[60%] xl:-left-36 -z-40 ">
            <img src={Ellipse} alt="Ellipse_img" />
          </div>
        </div>
      </div>

      {/* Section-4 */}
      <div className="relative lg:-mb-12 -mt-10 lg:mt-0 ">
        <div className="relative overflow-hidden">
          <img
            src={Section4}
            alt="section_img"
            className="w-full z-40  hidden lg:block"
          />

          <img
            src={Section4Small}
            alt="section_img"
            className="object-cover z-40 block lg:hidden w-full"
          />

          <img
            src={RectangleMask}
            alt="section_img"
            className="object-cover z-40 block lg:hidden absolute top-0 w-full"
          />
        </div>
        <div className="absolute top-8  lg:top-48 left-[33%] lg:left-0 z-40 cursor-pointer w-1/3">
          <h3 className="text-customPink  text-center lg:text-white font-semibold tracking-wider lg:text-2xl lg:font-normal font-oswald lg:font-plusjakarta leading-10">
            Olvera Guides
          </h3>
        </div>

        <div className="absolute top-20 left-16 z-40 cursor-pointer block lg:hidden w-2/3">
          <h3 className="text-white text-center font-montserrat text-2xl font-medium leading-6 tracking-wide">
            Careers At Olvera
          </h3>
        </div>

        <div className="absolute top-32 left-2 z-40 cursor-pointer block lg:hidden w-[97%]">
          <h3 className="text-white  text-center font-plusjakarta  text-3xl font-extrabold leading-8 tracking-wide">
            Ollie Restructuring Guide
          </h3>
        </div>
        <div className="flex items-center gap-4 absolute top-[78%] left-[25%]  lg:top-[40%] lg:left-[70%] cursor-pointer z-40">
          <h3 className="text-white text-lg font-normal font-montserrat leading-6">
            View More
          </h3>
          <div className="relative">
            <img src={Circle} alt="circle_img" className="w-20 lg:w-28" />
            <img
              src={PathWhite}
              alt="Path_img"
              className="w-9 h-10 lg:w-12 lg:h-8 absolute bottom-5 left-6 lg:bottom-10 lg:left-8"
            />
          </div>
        </div>
        <div className="absolute top-52 left-24  lg:top-96 lg:left-32 z-40 w-52 lg:w-1/3 lg:h-14 lg:text-left  text-center">
          <span className="font-archivo text-sm leading-6 font-normal text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </span>
        </div>
      </div>

      {/* Section-5 */}
      <div className="mb-4">
        <div className="flex flex-wrap w-full h-full mt-2 lg:mt-16 relative flex-col xl:flex-row">
          <div className="text-center lg:text-left flex flex-col gap-4 w-4/5 xl:w-[40%] m-auto mt-auto lg:mr-20 order-2 xl:order-1">
            <span className="text-customPink font-oswald font-semibold text-[14px] lg:text-[20px]">
              CAREERS
            </span>
            <h2 className="font-montserrat lg:font-plusjakarta font-semibold  lg:font-extrabold text-[24px] lg:text-4xl lg:leading-[46px] w-4/1">
              Careers at Olvera
            </h2>
            <p className="font-plusjakarta lg:font-archivo text-lg font-normal text-[#6E6E6E] leading-7 lg:w-4/5">
              Navigate change, develop on-demand skills. Your turnaround journey
              starts with Olvera.
            </p>
            <button className="mt-2 m-auto lg:mt-0 lg:m-0 text-center text-black text-base font-semibold p-3 bg-[#FF74D0] w-[160px] h-[50px] rounded-3xl font-plusjakarta">
              Search Careers
            </button>
          </div>
          <div className="flex flex-col gap-4 xl:w-[40%]  mt-2 mb-8 order-1 xl:order-2">
            <img src={MaskGroup2} alt="MaskIMg" className="" />
          </div>
          <div className="absolute xxl:top-24 xxl:left-96 xl:top-24 xl:left-[24%] overflow-hidden hidden lg:block">
            <img src={Ellipse} alt="Ellipse_img" className="" />
          </div>
          <div className="absolute top-[60%] -left-[10%] xxl:top-[70%] xxl:-left-52 xl:top-[70%] xl:-left-44">
            <img
              src={Ellipse}
              alt="Ellipse_img"
              className="w-2/3 -rotate-180 lg:w-full lg:-rotate-0"
            />
          </div>
        </div>
      </div>

      {/* Section-6 */}
      <div className="flex flex-col relative mt-14 lg:mt-0 mb-6">
        <div>
          <img
            src={MaskGroup3}
            alt="MaskGroup_img"
            className="w-full h-72 lg:h-full object-cover"
          />
        </div>
        <div className="absolute top-28 right-36 xxl:top-72 xxl:right-[45%] xl:top-60 xl:right-[45%] grid items-center">
          <Link
            to="/"
            className="w-[75.2px] h-[75.2px]  lg:w-28 lg:h-28 bg-white rounded-full grid place-items-center hover:bg-[#FF74D0] transition"
          >
            <span className="sr-only">Watch the video</span>
            <svg
              className="ml-1 lg:w-8 w-5 "
              viewBox="0 0 16 18"
              fill="black"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 7.26795C16.3333 8.03775 16.3333 9.96225 15 10.7321L3 17.6603C1.66667 18.4301 1.01267e-06 17.4678 1.07997e-06 15.9282L1.68565e-06 2.0718C1.75295e-06 0.532196 1.66667 -0.430054 3 0.339746L15 7.26795Z"
                fill="black"
              />
            </svg>
          </Link>
        </div>
      </div>

      {/* Section-7 */}
      <div className="py-4">
        <div className="text-center m-auto mt-8 w-4/5 lg:m-0 lg:w-full">
          <h2 className="font-plusjakarta font-bold text-3xl lg:text-5xl">
            What our clients say about us
          </h2>
        </div>
        <div className="flex justify-between py-8 space-x-6 w-full relative mt-8">
          {!hideLeftArrow && (
            <div
              className="flex items-center justify-between"
              onClick={handlePrev}
            >
              <img
                src={LeftArrow}
                alt="Arrow-Left"
                className="lg:w-10 w-[150px]"
              />
            </div>
          )}
          {clientFeedBack
            .slice(currentIndex, currentIndex + itemsPerPage)
            .map((feedback, index) => (
              <FeedbackItem key={index} {...feedback} hoverClass={hoverClass} />
            ))}
          {!hideRightArrow && (
            <div
              className="flex items-center justify-between"
              onClick={handleNext}
            >
              <img
                src={RightArrow}
                alt="Arrow-Right"
                className="lg:w-10 w-[150px]"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Home;
