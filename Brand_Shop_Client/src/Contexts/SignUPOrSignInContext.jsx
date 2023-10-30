import { createContext, useState } from "react";

export const SignUPOrSignInContext = createContext()

const SignUPOrSignInProvider = ({children}) => {
    const [SignInOrSignUp, setSignInOrSignUp] = useState("SignUp")
    return (
        <SignUPOrSignInContext.Provider value={{SignInOrSignUp, setSignInOrSignUp}}>
            {
                children
            }
        </SignUPOrSignInContext.Provider>
    );
};

export default SignUPOrSignInProvider;