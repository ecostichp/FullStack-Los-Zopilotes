import { Outlet } from "react-router-dom";

import Navbar from "../components/navigation/navbar/navbar";
import Sidebar from "../components/navigation/sidebar/sidebar";


export default function MainLayout() {
    return (
        <div className="grid_mainlayout">
            <Navbar />
            <Sidebar />
            <div id='mi_outlet' className="container mx-auto p-4" >
                <Outlet />
            </div>
        </div>
    )
};
