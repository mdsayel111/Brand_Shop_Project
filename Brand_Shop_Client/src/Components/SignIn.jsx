import { signInWithEmailAndPassword } from "firebase/auth";
import Auth from "../Firebase/Firebase.Config";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
import { FcGoogle } from "react-icons/fc";
import { useLocation, useNavigate } from "react-router-dom";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import Login from "../assets/LogIn.json"
import Lottie from "lottie-react";

const googleProvider = new GoogleAuthProvider();

const SignIn = ({ setSignInOrSignUp }) => {
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
        console.log("popup error");
      });
  }

  function handleSignIn(e) {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInWithEmailAndPassword(Auth, email, password)
      .then((userCredential) => {
        // axios.post('https://brand-shop-server-lime.vercel.app/token', {email: userCredential.user.email}, {withCredentials: true})
        // .then(function (response) {
        //   console.log(response.data);
        // })
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
            console.log("inside token fetch");
            Swal.fire({
              title: "success",
              text: "SignIn successful",
              icon: "success",
              confirmButtonText: "Ok",
            });
            navigate(path?.state || "/");
          });
      })
      .catch((error) => {
        console.dir(error);
        Swal.fire({
          title: "error",
          text: "Your email and password doesn't match",
          icon: "error",
          confirmButtonText: "Ok",
        });
      });
  }

  return (
    <div className="mt-8 flex justify-center flex-row-reverse items-center" data-aos="zoom-in">
      <div data-aos="fade-left" className="flex flex-col items-center space-y-4 w-full lg:w-1/2">
        <h1 className="text-3xl text-center font-bold text-primary">SignIn</h1>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body h-fit">
            <form onSubmit={handleSignIn}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <p className="mt-4">
                New in this site?{" "}
                <a
                  onClick={() => setSignInOrSignUp("SignUp")}
                  className="font-semibold text-primary cursor-pointer"
                >
                  Signup
                </a>
              </p>
              <div className="form-control mt-6">
                <button className="btn bg-primary">SignIn</button>
              </div>
              <div
                onClick={() => socialLogin(googleProvider)}
                className="flex justify-evenly mt-4 border-secondary border-2 p-2 rounded-md cursor-pointer"
              >
                <span className="text-text text-base font-bold">
                  SignIn With Google
                </span>
                <FcGoogle className="text-2xl cursor-pointer"></FcGoogle>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="w-[42%] hidden lg:block">
        <Lottie animationData={Login} className=""/>
      </div>
    </div>
  );
};

export default SignIn;
