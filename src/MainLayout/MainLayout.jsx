import { Outlet } from "react-router";
import HeroSection from "../Components/HeroSection";
import Navbar from "../Components/Navbar";

const MainLayout = () => {
    return (
        <div>
            <header>
                <Navbar/>
            </header>
            <main className="mx-auto p-4">
                <Outlet/>
            </main>
        </div>
    );
};

export default MainLayout;