import { Outlet, ScrollRestoration } from "react-router";
import Navbar from "../Components/Navbar";

const MainLayout = () => {
    return (
        <div>
            <ScrollRestoration/>
            <header>
                <Navbar/>
            </header>
            <main className="mx-auto mt-20">
                <Outlet/>
            </main>
        </div>
    );
};

export default MainLayout;