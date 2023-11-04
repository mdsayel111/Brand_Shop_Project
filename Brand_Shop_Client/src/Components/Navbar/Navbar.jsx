import React, { useContext, useRef, useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { NavLink, Link } from "react-router-dom";
import ThemeContext from "../../Contexts/ThemeContext";
import { AuthContext } from "../../Contexts/AuthContext";
import Auth from "../../Firebase/Firebase.Config";
import "./navbar.css";
import { BsFillSunFill } from "react-icons/bs";
import { signOut } from "firebase/auth";
import { SignUPOrSignInContext } from "../../Contexts/SignUPOrSignInContext";
import { AiFillCaretDown } from "react-icons/ai";
import { BiSolidUpArrow } from "react-icons/bi";

const Navbar = () => {
  const { SignInOrSignUp, setSignInOrSignUp } = useContext(
    SignUPOrSignInContext
  );
  const [isOpenDropDown, setIsOpenDropDown] = useState(false);
  const [isOpenisSettingDropDown, setIsOpenisSettingDropDown] = useState(false);
  const { user, setUser } = useContext(AuthContext);
  const dropDownBox = useRef();
  const settingDropDown = useRef();
  const [darkThemeBtn, setdarkThemeBtn] = useState(true);
  const { theme, setTheme } = useContext(ThemeContext);

  function handleLogOut() {
    signOut(Auth)
      .then(() => {
        fetch("https://brand-shop-server-lime.vercel.app/logOut",{
          credentials: "include"
        })
        setUser(null);
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  }

  const li = (
    <>
      <li className="block p-1 items-center font-sans text-sm font-normal leading-normal text-inherit antialiased">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Home
        </NavLink>
      </li>
      {user ? (
        <>
          <li className="block p-1 font-sans text-sm items-center font-normal leading-normal text-inherit antialiased">
            <NavLink
              to="/add_product"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
              href="#"
            >
              Add Product
            </NavLink>
          </li>
          <li className="block p-1 font-sans text-sm items-center font-normal leading-normal text-inherit antialiased">
            <NavLink
              to="/my_cart"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
              href="#"
            >
              My Cart
            </NavLink>
          </li>
        </>
      ) : (
        <></>
      )}
      {user ? (
        ""
      ) : (
        <>
          <li className="block p-1 items-center font-sans text-sm font-normal leading-normal text-inherit antialiased">
            <NavLink
              to="/signUp_or_signIn"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
              onClick={() => setSignInOrSignUp("SignUp")}
            >
              SingUp Or SignIn
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  function handleDarkTheme(e) {
    setTheme(theme == "light" ? "dark" : "light");
    document
      .querySelector(":root")
      .style.setProperty("--theme", theme == "light" ? "#1D232A" : "#fff");
    document
      .querySelector(":root")
      .style.setProperty("--theme-text", theme == "light" ? "#fff" : "black");
    document
      .querySelector("body")
      .setAttribute("data-theme", theme == "light" ? "dark" : "light");
    setdarkThemeBtn(!darkThemeBtn);
  }

  function handleSettingDropDown() {
    setIsOpenisSettingDropDown(!isOpenisSettingDropDown);
  }

  function handleDropDownMenu() {
    setIsOpenDropDown(!isOpenDropDown);
    setIsOpenisSettingDropDown(false);
    console.log(isOpenDropDown);
    dropDownBox.current.className = isOpenDropDown
      ? "hidden lg:hidden absolute z-10 min-w-[180px] rounded-md  -blue-gray-50 bg-[var(--theme)] p-3 font-sans text-sm font-normal  shadow-lg shadow-blue-gray-500/10 focus:outline-none right-0 top-[52px]"
      : "lg:hidden absolute z-10 min-w-[180px] bg-[var(--theme)] rounded-md  -blue-gray-50  p-3 font-sans text-sm font-normal  shadow-lg shadow-blue-gray-500/10 focus:outline-none right-0 top-[52px]";
  }

  return (
    <>
      <nav className="sticky bg-[var(--theme)] text-[var(--theme-text)] inset-0 z-10 block h-max w-full max-w-full rounded-none bg-opacity-80 py-2 px-4 shadow-md backdrop-blur-2xl backdrop-saturate-200 lg:px-8 lg:py-4">
        <div className="flex items-center">
          <a
            href="#"
            className="mr-4 block cursor-pointer py-1.5 font-sans text-base font-medium leading-relaxed text-inherit antialiased"
          >
            <img
              className="w-60"
              src="https://i.ibb.co/nn1cdCW/logo-removebg-preview.png"
              alt=""
            />
          </a>

          {/* large device nav bar */}
          <ul className="ml-auto mr-8 hidden items-center gap-6 lg:flex bg-[var(--theme)]">
            {li}
            <li className="relative block p-1 items-center font-sans text-sm font-normal leading-normal text-inherit antialiased setting cursor-pointer">
              <a>
                Setting
                <ul
                  ref={settingDropDown}
                  role="menu"
                  data-popover="menu"
                  data-popover-placement="bottom"
                  className="hidden lg:hidden absolute z-10 min-w-[180px] rounded-md  -blue-gray-50 bg-[var(--theme)] p-3 font-sans text-sm font-normal  shadow-lg shadow-blue-gray-500/10 focus:outline-none right-0 top-[33px] space-y-4"
                >
                  {user ? (
                    <>
                      <li className="flex flex-col items-center">
                        <img
                          src={
                            user?.photoURL ||
                            "https://i.ibb.co/cc88j40/user.jpg"
                          }
                          alt=""
                          className="w-10 rounded-full"
                        />
                        <h1 className="font-body">
                          {user?.displayName || "User"}
                        </h1>
                      </li>
                      <li className="flex justify-between">
                        Dark Mode
                        <input
                          onClick={handleDarkTheme}
                          type="checkbox"
                          className="toggle"
                        />
                      </li>
                      <button
                        onClick={handleLogOut}
                        className="middle none center hidden rounded-lg bg-gradient-to-tr from-pink-600 to-pink-400 py-2 px-4 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block"
                        type="button"
                        data-ripple-light="true"
                      >
                        <span>LogOut</span>
                      </button>
                    </>
                  ) : (
                    <>
                      <li className="flex justify-between">
                        Dark Mode
                        <input
                          onClick={handleDarkTheme}
                          type="checkbox"
                          className="toggle"
                        />
                      </li>
                      <button
                        className="middle none center hidden rounded-lg bg-gradient-to-tr from-pink-600 to-pink-400 py-2 px-4 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block"
                        type="button"
                        data-ripple-light="true"
                      >
                        <span>
                          <Link
                            to="/signUp_or_signIn"
                            onClick={() => setSignInOrSignUp("SignIn")}
                          >
                            Sign In
                          </Link>
                        </span>
                      </button>
                    </>
                  )}
                </ul>
              </a>
            </li>
          </ul>

          {/* mid device navbar */}
          <button
            onClick={handleDropDownMenu}
            className="middle none relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] rounded-lg text-center font-sans text-xs font-medium uppercase  transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
            data-collapse-target="sticky-navar"
          >
            <span className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transform">
              {isOpenDropDown ? (
                <RxCross1 className="w-6 h-6" />
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              )}
            </span>
          </button>
          <ul
            ref={dropDownBox}
            role="menu"
            data-popover="menu"
            data-popover-placement="bottom"
            className="lg:hidden hidden min-w-[180px] absolute z-10 overflow-auto rounded-md -blue-gray-50 bg-[var(--theme)] text-[var(--themetext)] p-3 font-sans text-sm font-normal  shadow-lg shadow-blue-gray-500/10 focus:outline-none right-0 top-[52px]"
          >
            {user ? (
              <li className="flex flex-col items-center">
                <img
                  src={user?.photoURL || "https://i.ibb.co/cc88j40/user.jpg"}
                  alt=""
                  className="w-10 rounded-full"
                />
                <h1 className="font-body">{user?.displayName || "User"}</h1>
              </li>
            ) : (
              <></>
            )}
            {li}
            <li className="block p-1 font-sans items-center text-sm font-normal leading-normal text-inherit antialiased relative cursor-pointer">
              <a>
                <span onClick={handleSettingDropDown} className="block mb-3">
                  <div className="flex items-center">
                    {isOpenisSettingDropDown ? (
                      <AiFillCaretDown className="text-sm mr-3"/>
                    ) : (
                      <BiSolidUpArrow className="text-sm mr-3"/>
                    )}
                    Setting
                  </div>
                </span>
                <ul
                  ref={settingDropDown}
                  role="menu"
                  data-popover="menu"
                  data-popover-placement="bottom"
                  className={
                    isOpenisSettingDropDown
                      ? "lg:hidden z-10 py-3 w-[148px] rounded-md  -blue-gray-50 font-sans text-sm font-normal  shadow-lg shadow-blue-gray-500/10 focus:outline-none left-[-118%] top-[-7px] lg:top-[35px] bg-[var(--theme)] text-[var(--theme-color)]"
                      : "lg:hidden hidden py-3 w-[148px] absolute z-10 overflow-auto rounded-md  -blue-gray-50 font-sans text-sm font-normal  shadow-lg shadow-blue-gray-500/10 focus:outline-none left-[-112%] top-[-7px] lg:top-[30px] bg-[var(--theme)] text-[var(--theme-color)]"
                  }
                >
                  <li
                    onClick={handleDarkTheme}
                    className="flex justify-between w-full"
                  >
                    Dark Mode
                    <input
                      onClick={handleDarkTheme}
                      type="checkbox"
                      className="lg:hidden toggle"
                    />
                  </li>
                </ul>
              </a>
            </li>
            {user ? (
              <>
                <li>
                  <button
                    onClick={handleLogOut}
                    className="middle none center rounded-lg bg-gradient-to-tr from-pink-600 to-pink-400 py-2 px-4 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block"
                    type="button"
                    data-ripple-light="true"
                  >
                    <span>LogOut</span>
                  </button>
                </li>
              </>
            ) : (
              <button
                className="middle none center hidden rounded-lg bg-gradient-to-tr from-pink-600 to-pink-400 py-2 px-4 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block"
                type="button"
                data-ripple-light="true"
              >
                <span>
                  <Link to="/signUp_or_signIn">Sign In</Link>
                </span>
              </button>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
