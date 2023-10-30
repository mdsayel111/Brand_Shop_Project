import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="w-full bg-[var(--theme)] text-[var(--theme-text)] p-8">
        <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-[var(--theme)] text-[var(--theme-color)] text-center md:justify-between">
          <img
            src="https://i.ibb.co/5cVxQz2/logo1-removebg-preview.png"
            alt="logo-ct"
            className="w-10"
          />
          <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
            <li>
              <a className="block hover:text-pink-500 focus:text-pink-500">
                About Us
              </a>
            </li>
            <li>
              <a className="block font-sans text-base font-normal leading-relaxed  antialiased transition-colors hover:text-pink-500 focus:text-pink-500">
                License
              </a>
            </li>
            <li>
              <a className="block font-sans text-base font-normal leading-relaxed  antialiased transition-colors hover:text-pink-500 focus:text-pink-500">
                Contribute
              </a>
            </li>
            <li>
              <a className="block font-sans text-base font-normal leading-relaxed  antialiased transition-colors hover:text-pink-500 focus:text-pink-500">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-8 border-blue-gray-50" />
        <p className="block text-center font-sans text-base font-normal leading-relaxed  antialiased">
          © 2023 <span className="text-primary font-semibold">Brand Shop</span>
        </p>
      </footer>
    </div>
  );
};

export default Footer;
