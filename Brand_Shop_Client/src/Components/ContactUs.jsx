import React from "react";

const ContactUs = () => {
  return (
    <div>
      <div>
        <div data-aos="fade-down" className="text-center w-full">
          <h1 className="text-4xl lg:text-6xl font-bold">Contact Form</h1>
        </div>
        <div className="w-full mt-8 px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-[var(--theme)] text-[var(--theme-text)]  rounded-lg shadow-lg">
          <div data-aos="fade-right" className="flex flex-col justify-between">
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold leading-tight">
                Lets talk about everything!
              </h2>
              <div className="text-gray-700 mt-8">
                Hate forms? Send us an <span className="underline">email</span>{" "}
                instead.
              </div>
            </div>
          </div>
          <div data-aos="fade-left" className="">
            <div>
              <span className="uppercase text-sm text-gray-600 font-bold">
                Full Name
              </span>
              <input
                className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder=""
              />
            </div>
            <div className="mt-8">
              <span className="uppercase text-sm text-gray-600 font-bold">
                Email
              </span>
              <input
                className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
              />
            </div>
            <div className="mt-8">
              <span className="uppercase text-sm text-gray-600 font-bold">
                Message
              </span>
              <textarea className="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
            </div>
            <div className="mt-8">
              <button className="uppercase text-sm font-bold tracking-wide bg-primary text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
