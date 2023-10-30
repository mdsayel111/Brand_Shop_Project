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
import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import Login from "../assets/SignUp.json"
import Lottie from "lottie-react";


const googleProvider = new GoogleAuthProvider();

const SignUp = ({ setSignInOrSignUp }) => {
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
      <div data-aos="fade-left" className="flex flex-col items-center space-y-4 w-full lg:w-1/2">
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
                <button className="btn bg-primary">Signup</button>
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
        <Lottie animationData={Login} className=""/>
      </div>
    </div>
  );
};

export default SignUp;
