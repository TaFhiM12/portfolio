import { createBrowserRouter } from "react-router";
import MainLayout from './../MainLayout/MainLayout';
import HeroSection from "../Components/HeroSection";
import AboutSection from "../Components/AboutSection";
import SkillSection from "../Components/SkillSection";
import Projects from "../Components/Projects";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <HeroSection />
            },
            {
                path: "about",
                element: <AboutSection/>
            },
            {
                path: 'skills',
                element: <SkillSection/>
            },
            {
                path: '/projects',
                element: <Projects/>
            }
        ]
    }
])