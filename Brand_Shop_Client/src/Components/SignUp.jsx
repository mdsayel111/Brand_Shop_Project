import { FcGoogle } from "react-icons/fc";
import Auth from "../Firebase/Firebase.Config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {
  GoogleAuthProvider,
  signInWithPopup,
  GithubAuthProvider,
} from "firebase/auth";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2/dist/sweetalert2.js";
import { useContext, useState } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import Login from "../assets/SignUp.json";
import Lottie from "lottie-react";
import ReactCapcha from "./CapchaComponent/ReactCapcha/ReactCapcha";
import CapchaValidateBtn from "./CapchaComponent/CapchaValidateBtn/CapchaValidateBtn";

const googleProvider = new GoogleAuthProvider();

const SignUp = ({ setSignInOrSignUp }) => {
  const [isSubmitBtnDisable, setIsSubmitBtnDisable] = useState(true);
  const { user, setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const path = useLocation();

  function socialLogin(provider) {
    signInWithPopup(Auth, provider)
      .then((result) => {
        const userId = result.user.uid;

        fetch(`https://brand-shop-server-lime.vercel.app/user/${userId}`)
          .then((res) => res.json())
          .then((data) => {
            fetch("https://brand-shop-server-lime.vercel.app/token", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              credentials: "include",
              body: JSON.stringify({ uid: userId }),
            })
              .then((res) => res.json())
              .then((data) => {
                console.log(data);
                Swal.fire({
                  title: "success",
                  text: "SignIn successful",
                  icon: "success",
                  confirmButtonText: "Ok",
                });
                navigate(path?.state || "/");
              });
          })
          .catch((err) => {
            fetch("https://brand-shop-server-lime.vercel.app/user", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(result.user),
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.acknowledged) {
                  fetch("https://brand-shop-server-lime.vercel.app/token", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    credentials: "include",
                    body: JSON.stringify({ uid: userId }),
                  })
                    .then((res) => res.json())
                    .then((data) => {
                      console.log(data);
                      Swal.fire({
                        title: "success",
                        text: "SignIn successful",
                        icon: "success",
                        confirmButtonText: "Ok",
                      });
                      navigate(path?.state || "/");
                    });
                }
              });
          });
      })
      .catch((error) => {
        console.log("popup error");
      });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (
      /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+])[a-zA-Z!@#$%^&*()_+0-9]{6,}$/.test(
        password
      )
    ) {
      createUserWithEmailAndPassword(Auth, email, password)
        .then((userCredential) => {
          updateProfile(Auth.currentUser, {
            displayName: name,
          }).then(() => {
            setUser({ ...Auth.currentUser });
            fetch("https://brand-shop-server-lime.vercel.app/user", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(userCredential.user),
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.acknowledged) {
                  fetch("https://brand-shop-server-lime.vercel.app/token", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    credentials: "include",
                    body: JSON.stringify({ uid: userCredential.user.uid }),
                  })
                    .then((res) => res.json())
                    .then((data) => {
                      console.log(data);
                      Swal.fire({
                        title: "success",
                        text: "SignIn successful",
                        icon: "success",
                        confirmButtonText: "Ok",
                      });
                      navigate(path?.state || "/");
                    });
                }
              });
          });
        })
        .catch((error) => {
          Swal.fire({
            title: "error",
            text: "This email already use",
            icon: "error",
            confirmButtonText: "Ok",
          });
        });
    } else {
      Swal.fire({
        title: "error",
        text: "Password must be : more than 6 characters, have a capital letter, have a special character",
        icon: "error",
        confirmButtonText: "Ok",
      });
    }
  }

  return (
    <div className="mt-8 flex justify-center flex-row-reverse items-center">
      <div
        data-aos="fade-left"
        className="flex flex-col items-center space-y-4 w-full lg:w-1/2"
      >
        <h1 className="text-3xl text-center bg-transparent font-bold text-primary">
          Signup
        </h1>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body h-fit">
            <form onSubmit={handleSubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  required
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  required
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
              </div>
              <ReactCapcha />
              <div className="flex gap-4">
                <div className="relative h-11 w-full min-w-[200px]">
                  <input
                    required
                    id="user_captcha_input"
                    name="capchaInput"
                    type="text"
                    className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    placeholder=" "
                  />
                  <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    Capcha
                  </label>
                </div>
                <CapchaValidateBtn
                  setIsSubmitBtnDisable={setIsSubmitBtnDisable}
                />
              </div>
              <p className="mt-4">
                already have an account?
                <a
                  onClick={() => setSignInOrSignUp("SignIn")}
                  className="font-semibold text-primary cursor-pointer"
                >
                  SignIn
                </a>
              </p>
              <div className="form-control mt-6">
                <button
                  disabled={isSubmitBtnDisable}
                  className="btn bg-primary"
                >
                  Signup
                </button>
              </div>
            </form>
            <div
              onClick={() => socialLogin(googleProvider)}
              className="flex justify-evenly mt-4 border-secondary border-2 p-2 rounded-md cursor-pointer"
            >
              <span className="text-text text-base font-bold">
                SignUp With Google
              </span>{" "}
              <FcGoogle className="text-2xl cursor-pointer"></FcGoogle>
            </div>
          </div>
        </div>
      </div>
      <div data-aos="fade-right" className="w-[42%] hidden lg:block">
        <Lottie animationData={Login} className="" />
      </div>
    </div>
  );
};

export default SignUp;
