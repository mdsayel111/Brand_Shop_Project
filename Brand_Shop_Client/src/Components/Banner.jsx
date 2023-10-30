import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div>
      <div className="lg:h-[70vh] h-[50vh] w-full bg-banner-img">
        <div className="flex flex-col items-center justify-center w-full lg:w-1/2 h-full mx-auto text-center space-y-8">
          <div>
            <h2 className="text-2xl text-white font-semibold">
              {" "}
              <span className="text-primary">GET </span>YOUR
            </h2>
            <h1 className="text-3xl text-white font-bold">
              DREAM <span className="text-primary">CAR</span>
            </h1>
          </div>
          <p className="text-white">
            In our shop, we take your automotive dreams and make them a reality.
            With a passion for cars and a commitment to top-notch service, we've
            become a trusted destination for all your automotive needs.
          </p>
          <Link to='/cars'><button className="mb-2 block rounded-lg bg-gradient-to-tr from-pink-600 to-pink-400 py-2 px-4 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
            view all car
          </button></Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
