import React from "react";
import { useNavigate } from "react-router-dom";

const Brands = () => {
  const navigate = useNavigate();

  function handleBrandOnclick(car) {
    navigate(`cars/${car}`);
  }
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-8">
        <div
          data-aos="zoom-in"
          onClick={() => handleBrandOnclick("Ford")}
          className="relative mx-auto flex flex-col  bg-[var(--theme)] text-[var(--theme-text)] shadow-md rounded-xl bg-clip-border cursor-pointer"
        >
          <div className="relative  mx-4 mt-4 overflow-hidden  bg-[var(--theme)] text-[var(--theme-text)] shadow-lg h-80 rounded-xl bg-clip-border">
            <img
              src="https://i.ibb.co/QcR9xWX/ford.jpg"
              alt="profile-picture"
            />
          </div>
          <div className="p-6 text-center">
            <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal ">
              Ford
            </h4>
          </div>
          <div className="flex justify-center p-6 pt-2 gap-7">
            <a
              href="#facebook"
              className="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-gradient-to-tr from-blue-600 to-blue-400 bg-clip-text"
            >
              <i className="fab fa-facebook" aria-hidden="true"></i>
            </a>
            <a
              href="#twitter"
              className="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-gradient-to-tr from-light-blue-600 to-light-blue-400 bg-clip-text"
            >
              <i className="fab fa-twitter" aria-hidden="true"></i>
            </a>
            <a
              href="#instagram"
              className="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-gradient-to-tr from-purple-600 to-purple-400 bg-clip-text"
            >
              <i className="fab fa-instagram" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <div
          data-aos="zoom-in"
          onClick={() => handleBrandOnclick("Honda")}
          className="relative mx-auto flex flex-col  bg-[var(--theme)] text-[var(--theme-text)] shadow-md rounded-xl bg-clip-border cursor-pointer"
        >
          <div className=" relative mt-4 overflow-hidden  bg-[var(--theme)] text-[var(--theme-text)] shadow-lg h-80 rounded-xl bg-clip-border">
            <img
              className="h-full"
              src="https://i.ibb.co/fnCBgkv/honda.jpg"
              alt="profile-picture"
            />
          </div>
          <div className="p-6 text-center">
            <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal ">
              Honda
            </h4>
          </div>
          <div className="flex justify-center p-6 pt-2 gap-7">
            <a
              href="#facebook"
              className="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-gradient-to-tr from-blue-600 to-blue-400 bg-clip-text"
            >
              <i className="fab fa-facebook" aria-hidden="true"></i>
            </a>
            <a
              href="#twitter"
              className="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-gradient-to-tr from-light-blue-600 to-light-blue-400 bg-clip-text"
            >
              <i className="fab fa-twitter" aria-hidden="true"></i>
            </a>
            <a
              href="#instagram"
              className="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-gradient-to-tr from-purple-600 to-purple-400 bg-clip-text"
            >
              <i className="fab fa-instagram" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <div
          data-aos="zoom-in"
          onClick={() => handleBrandOnclick("Tesla")}
          className="relative mx-auto flex flex-col  bg-[var(--theme)] text-[var(--theme-text)] shadow-md rounded-xl bg-clip-border cursor-pointer"
        >
          <div className="relative mx-4 mt-4 overflow-hidden  bg-[var(--theme)] text-[var(--theme-text)] shadow-lg h-80 rounded-xl bg-clip-border">
            <img
              src="https://i.ibb.co/McgZnWp/tesla.jpg"
              alt="profile-picture"
            />
          </div>
          <div className="p-6 text-center">
            <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal ">
              Tesla
            </h4>
          </div>
          <div className="flex justify-center p-6 pt-2 gap-7">
            <a
              href="#facebook"
              className="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-gradient-to-tr from-blue-600 to-blue-400 bg-clip-text"
            >
              <i className="fab fa-facebook" aria-hidden="true"></i>
            </a>
            <a
              href="#twitter"
              className="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-gradient-to-tr from-light-blue-600 to-light-blue-400 bg-clip-text"
            >
              <i className="fab fa-twitter" aria-hidden="true"></i>
            </a>
            <a
              href="#instagram"
              className="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-gradient-to-tr from-purple-600 to-purple-400 bg-clip-text"
            >
              <i className="fab fa-instagram" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <div
          data-aos="zoom-in"
          onClick={() => handleBrandOnclick("Toyota")}
          className="relative mx-auto  flex flex-col  bg-[var(--theme)] text-[var(--theme-text)] shadow-md rounded-xl bg-clip-border cursor-pointer"
        >
          <div className="relative mx-4 mt-4 overflow-hidden  bg-[var(--theme)] text-[var(--theme-text)] shadow-lg h-80 rounded-xl bg-clip-border">
            <img
              src="https://i.ibb.co/S54SFg7/toyota.png"
              alt="profile-picture"
            />
          </div>
          <div className="p-6 text-center">
            <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal ">
              Toyota
            </h4>
          </div>
          <div className="flex justify-center p-6 pt-2 gap-7">
            <a
              href="#facebook"
              className="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-gradient-to-tr from-blue-600 to-blue-400 bg-clip-text"
            >
              <i className="fab fa-facebook" aria-hidden="true"></i>
            </a>
            <a
              href="#twitter"
              className="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-gradient-to-tr from-light-blue-600 to-light-blue-400 bg-clip-text"
            >
              <i className="fab fa-twitter" aria-hidden="true"></i>
            </a>
            <a
              href="#instagram"
              className="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-gradient-to-tr from-purple-600 to-purple-400 bg-clip-text"
            >
              <i className="fab fa-instagram" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <div
          data-aos="zoom-in"
          onClick={() => handleBrandOnclick("Mercedes")}
          className="relative mx-auto flex flex-col  bg-[var(--theme)] text-[var(--theme-text)] shadow-md rounded-xl bg-clip-border cursor-pointer"
        >
          <div className="relative mx-4 mt-4 overflow-hidden  bg-[var(--theme)] text-[var(--theme-text)] shadow-lg h-80 rounded-xl bg-clip-border">
            <img
              className="h-full"
              src="https://i.ibb.co/jGfQtVX/mercedes.jpg"
              alt="profile-picture"
            />
          </div>
          <div className="p-6 text-center">
            <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal ">
              Mercedes
            </h4>
          </div>
          <div className="flex justify-center p-6 pt-2 gap-7">
            <a
              href="#facebook"
              className="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-gradient-to-tr from-blue-600 to-blue-400 bg-clip-text"
            >
              <i className="fab fa-facebook" aria-hidden="true"></i>
            </a>
            <a
              href="#twitter"
              className="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-gradient-to-tr from-light-blue-600 to-light-blue-400 bg-clip-text"
            >
              <i className="fab fa-twitter" aria-hidden="true"></i>
            </a>
            <a
              href="#instagram"
              className="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-gradient-to-tr from-purple-600 to-purple-400 bg-clip-text"
            >
              <i className="fab fa-instagram" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <div
          data-aos="zoom-in"
          onClick={() => handleBrandOnclick("BMW")}
          className="relative mx-auto flex flex-col  bg-[var(--theme)] text-[var(--theme-text)] shadow-md rounded-xl bg-clip-border cursor-pointer"
        >
          <div className="relative mx-4 mt-4 overflow-hidden  bg-[var(--theme)] text-[var(--theme-text)] shadow-lg h-80 rounded-xl bg-clip-border">
            <img
              className="h-full"
              src="https://i.ibb.co/sjM7fWg/bmw.jpg"
              alt="profile-picture"
            />
          </div>
          <div className="p-6 text-center">
            <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal ">
              B M W
            </h4>
          </div>
          <div className="flex justify-center p-6 pt-2 gap-7">
            <a
              href="#facebook"
              className="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-gradient-to-tr from-blue-600 to-blue-400 bg-clip-text"
            >
              <i className="fab fa-facebook" aria-hidden="true"></i>
            </a>
            <a
              href="#twitter"
              className="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-gradient-to-tr from-light-blue-600 to-light-blue-400 bg-clip-text"
            >
              <i className="fab fa-twitter" aria-hidden="true"></i>
            </a>
            <a
              href="#instagram"
              className="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-gradient-to-tr from-purple-600 to-purple-400 bg-clip-text"
            >
              <i className="fab fa-instagram" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brands;
