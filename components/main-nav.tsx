"use client";
import { useState } from "react";
import Link from "next/link";
import { ChevronLeft, Menu, X } from "lucide-react";
import CategoriesNav from "./categories-nav";
import { Category } from "@/types";

interface MainNavProps {
    data: Category[];
}


const MainNav: React.FC<MainNavProps> = ({
    data
}) => {    
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

    return (
        <nav className="text-primary">
            <div className="hidden md:flex md:gap-5">
                <button onClick={() => setIsCategoriesOpen(true)} className="hover:text-hov cursor-pointer">
                    Watches
                </button>
                <Link href="/" className="hover:text-hov cursor-pointer">
                    About
                </Link>
            </div>

            {/* MOBILE MENU */}
            <div>
                <section className="flex md:hidden items-center">
                    <button onClick={() => setIsNavOpen((prev) => !prev)} >
                        <Menu className="stroke-primary hover:stroke-hov cursor-pointer"  />
                    </button>

                    <div className={isNavOpen ? "showMenuNav bg-secondary" : "hideMenuNav bg-secondary"}>
                        <div className="flex flex-col p-8">
                            <button 
                                onClick={() => setIsNavOpen(false)} 
                                className="p-2 border rounded-full border-primary max-w-max hover:border-hov ">
                                <X className="h-5 w-5 hover:stroke-hov cursor-pointer"/>
                            </button>
                            
                            <ul className="flex flex-col gap-3 items-left mt-12 text-2xl">
                                <button onClick={() => setIsCategoriesOpen(true)} className="text-left hover:text-hov cursor-pointer">
                                    Watches
                                </button>
                                <Link href="/" className="text-left hover:text-hov cursor-pointer">
                                    About
                                </Link>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>

            {/* CATEGORIES MENU */}
            <div>
                <div className={isCategoriesOpen ? "showMenuNav bg-secondary" : "hideMenuNav bg-secondary"}>
                    <div className="flex flex-col p-8">
                        <div className="w-full flex justify-between items-center">
                            <button 
                                onClick={() => setIsCategoriesOpen(false)}
                                className="p-2 border rounded-full border-primary max-w-max hover:border-hov ">
                                <ChevronLeft className="h-5 w-5 hover:stroke-hov cursor-pointer" />
                            </button>
                            <button 
                                onClick={() => {
                                    setIsCategoriesOpen(false);
                                    setIsNavOpen(false);
                                }}
                                className="md:hidden p-2 border rounded-full border-primary max-w-max hover:border-hov ">
                                    <X className="h-5 w-5 hover:stroke-hov cursor-pointer"/>
                            </button>
                        </div>
                        <div>
                            <CategoriesNav data={data}/>
                        </div>           
                    </div>
                </div>
            </div>

                <style>
                    {`
                        .hideMenuNav {
                            display: none;
                        }
                        .showMenuNav {
                            display: block;
                            position: absolute;
                            width: 100%;
                            height: 100vh;
                            top: 0;
                            left: 0;
                            z-index: 90;
                        }
                    `}
                </style>
        </nav>
    );
};

export default MainNav;