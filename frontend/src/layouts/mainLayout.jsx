import { Outlet } from "react-router-dom";

import Navbar from "../components/navBar";


export default function MainLayout() {
    return (
        <>
            <Navbar />
            <div className="container mx-auto px-4">
                <Outlet />
            </div>
        </>
    )
};
