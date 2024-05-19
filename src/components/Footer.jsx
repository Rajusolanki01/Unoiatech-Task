import React from "react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  footerLogo1,
  footerLogo2,
  footerMobile1,
  footerMobile2,
  footerMobile3,
  footerMobile4,
} from "../assets";

const Footer = () => {
  return (
    <>
      <div className="footer bg-[#1C1C1C] py-4 mt-10">
        <div className="flex flex-col items-center gap-8 mt-12 lg:gap-10 lg:mt-36">
          <div className="flex flex-col text-white font-montserrat font-semibold leading-7 text-lg text-center  lg:gap-6 lg:leading-10 lg:text-6xl">
            <span>We are open and accepting to all.</span>
            <span>Come work with us</span>
          </div>
          <div className="text-gray-200 font-plusjakarta text-xs font-normal p-4 text-center -mt-8 -mb-6 lg:w-2/5  lg:mt-4 lg:p-0 lg:text-md lg:font-medium lg:mb-0">
            <p>
              Experts teach you everything from the comfort of your own home.
              Improve your career today by enrolling in excellent courses at
              affordable prices.
            </p>
          </div>
          <div>
            <button className="px-6 py-3 text-center text-black text-sm tracking-normal  font-semibold bg-[#FF74D0] rounded-3xl font-plusjakarta  lg:bg-customPink lg:text-base lg:px-10 lg:py-3">
              Get Started
            </button>
          </div>
        </div>

        {/* For Mobile View  */}

        <div className="block lg:hidden w-4/5 h-auto mt-12 mb-24 m-auto">
          <div className="flex flex-wrap gap-8">
            <img src={footerMobile1} alt="Logo" />
            <img src={footerMobile2} alt="Logo" />
            <img src={footerMobile3} alt="Logo" />
            <img src={footerMobile4} alt="Logo" />
          </div>
        </div>

        <div className="mt-9 flex flex-col md:flex-row gap-10 mb-14">
          <div className="flex flex-col gap-6 m-auto lg:w-5/6">
            <div>
              <img
                src={footerLogo1}
                alt="Brand-logo"
                loading="lazy"
                className="hidden lg:block"
              />
            </div>
            <div className="flex flex-col md:flex-row lg:justify-between">
              <div className="mb-8">
                <img
                  src={footerLogo2}
                  alt="Brand-logo"
                  loading="lazy"
                  className="hidden lg:block"
                />
                <p className="font-plusjakarta font-normal text-normal text-gray-200 mt-4 text-center">
                  Turning Uncertainty Into Your Advantage
                </p>
              </div>
              <div className="flex flex-col md:flex-row gap-10 lg:justify-between w-full md:w-80 h-auto md:h-44">
                <div className="flex flex-col gap-4 lg:text-left text-center">
                  <span className="font-plusjakarta font-normal lg:font-bold text-white lg:text-base text-[27px]">
                    Resources
                  </span>
                  <ul className="flex flex-col gap-3 font-plusjakarta font-normal text-[23px] lg:text-sm text-gray-200">
                    <li>Home</li>
                    <li>Articles</li>
                    <li>Videos &amp; Guides</li>
                    <li>About Us</li>
                  </ul>
                </div>
                <div className="flex flex-col gap-4 lg:text-left text-center">
                  <span className="font-plusjakarta font-normal lg:font-bold text-white text-[27px] lg:text-base">
                    Careers
                  </span>
                  <ul className="flex flex-col gap-3 font-plusjakarta font-normal text-[23px] lg:text-sm text-gray-200">
                    <li>Olevera academy</li>
                    <li>Privacy Policy</li>
                    <li>Cookies</li>
                  </ul>
                </div>
              </div>
              <div className="mt-14 text-white flex flex-col text-center m-auto gap-3 w-3/5 font-montserrat text-xs lg:m-0 lg:w-64 lg:mt-0 lg:text-left ">
                <span>
                  Liability Limited By A Scheme Approved Under Professional
                  Services Scheme
                </span>
                <div className="flex flex-col gap-3 text-gray-300">
                  <p>Phone: (64) 09 973 4905</p>
                  <p>Email: ezibuyenquiries@olveraadvisors.com</p>
                  <p>Website: olvera.co.nz/ezibuy</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t-2 border-gray-400  flex items-center justify-center">
          <div className="mt-2 flex flex-col lg:flex-row justify-between p-4 gap-6 lg:w-5/6 lg:mt-5">
            <p className="font-plusjakarta font-normal text-xs lg:text-sm text-gray-200">
              ©2023 olevra advisors. All rights reserved
            </p>
            <div className="flex justify-between m-auto w-48  lg:m-0 lg:w-64">
              <img
                src={Facebook}
                alt="Facebook"
                className="invert"
                loading="lazy"
              />
              <img
                src={Instagram}
                alt="Instagram"
                className="invert"
                loading="lazy"
              />
              <img src={Twitter} alt="Twitter" loading="lazy" />
              <img
                src={Linkedin}
                alt="Linkedin"
                className="invert"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
