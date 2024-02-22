"use client"

import { useEffect, useState } from "react";

interface NavProps {
    elements : HTMLElement[];
}

export default function Navigation({elements} : NavProps) {
    const [fill, setFill] = useState(0);

    const handleScroll = () => {
        const winScroll = document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        setFill(scrolled);
    };

    useEffect(() => {
        handleScroll();

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav className="fixed right-4 top-[12.5%] w-[1%] h-3/4 bg-white border-black border-2">
            {elements.map((element : HTMLElement, index) => {
                const elementTop = element.getBoundingClientRect().top;
                const winScroll = document.documentElement.scrollTop;
                const height = document.documentElement.scrollHeight - window.innerHeight;
                const scrolled = winScroll + elementTop;
                const scrolledPercent = (scrolled / height) * 100;
                const navname = element.getAttribute("data-navname")
                return (
                    <div key={index} style={{top: `${scrolledPercent}%`}} className="absolute left-0 z-[3] w-full h-0.5 border-b-2 border-black">
                        <p className="absolute right-4 text-[#E51A33] nav-text text-2xl cursor-pointer" onClick={() => {
                            window.scrollTo({
                                top: scrolled,
                                behavior: "smooth"
                            });
                        }}>{navname}</p>
                    </div>
                );
            })}

            <div style={{height: `${fill}%`}} className="w-full bg-[#E51A33] relative z-[2]">

            </div>      
        </nav>
    );
}