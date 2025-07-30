import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import SignupForm from "../components/signup.jsx";
import { LoginForm } from "../components/login-form.jsx";
import Layout from "../components/layout/Layout.jsx";
import Landing from "../components/Landing.jsx";
const router = createBrowserRouter([
    { path:"/", element: <Layout /> ,
        children: [
            { index: true, element: <Landing /> },
            { path:"/signup", element: <SignupForm /> },
            { path: "/login", element: <LoginForm /> }
        ]
    }
]);

export default router;