import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { Toaster } from "react-hot-toast";



const MainLayout = () => {
    return (
        <div className="max-w-[1440px] mx-auto ">
            <Navbar></Navbar>
            <div className="pt-[140px] md:pt-[180px] lg:pt:[127] pb-20 px-5">
                <Outlet></Outlet>
            </div>

            <Toaster />
        </div>
    );
};

export default MainLayout;