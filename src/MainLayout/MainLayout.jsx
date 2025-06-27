import { Outlet, ScrollRestoration } from "react-router";
import Navbar from "../Components/Navbar";

const MainLayout = () => {
    return (
        <div>
            <ScrollRestoration/>
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