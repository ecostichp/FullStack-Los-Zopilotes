import { createBrowserRouter } from "react-router-dom";

import MainLayOut from "./layouts/mainLayout"
import AuthLayout from "./layouts/authLayout";

import Home from "./pages/home";
import Dashboard from "./pages/dashboard";
import Equipo from "./pages/equipo";
import Articulos from "./pages/articulos";
import Signin from "./pages/signin"



export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayOut />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: '/dashboard',
                element: <Dashboard />,
            },
            {
                path: '/equipo',
                element: <Equipo />,
            },
            {
                path: '/articulos',
                element: <Articulos />,
            },
        ],
    },
    {
        element: <AuthLayout />,
        children: [
            {
                path: '/signin',
                element: <Signin />
            },
        ]
    }
])
