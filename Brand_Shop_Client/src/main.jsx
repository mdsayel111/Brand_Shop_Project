import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Router from "./Routes/Router.jsx";
import { ThemeProvider } from "./Contexts/ThemeContext";
import { RouterProvider } from "react-router-dom";
import AuthProvitder from "./Contexts/AuthContext";
import SignUPOrSignInProvider from "./Contexts/SignUPOrSignInContext";
import { QueryClient, QueryClientProvider } from "react-query";


const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvitder>
        <ThemeProvider>
          <SignUPOrSignInProvider>
            <RouterProvider router={Router} />
          </SignUPOrSignInProvider>
        </ThemeProvider>
      </AuthProvitder>
    </QueryClientProvider>
  </React.StrictMode>
);
