import React, { useContext, useState } from "react";
import SignUp from "../Components/SignUp";
import SignIn from "../Components/SignIn";
import { SignUPOrSignInContext } from "../Contexts/SignUPOrSignInContext";

const SignUpOrSignIn = () => {
  const { SignInOrSignUp, setSignInOrSignUp } = useContext(
    SignUPOrSignInContext
  );

  return (
    <div>
      {SignInOrSignUp == "SignUp" ? (
        <SignUp setSignInOrSignUp={setSignInOrSignUp} />
      ) : (
        <SignIn setSignInOrSignUp={setSignInOrSignUp} />
      )}
    </div>
  );
};

export default SignUpOrSignIn;
