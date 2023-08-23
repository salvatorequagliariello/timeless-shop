"use client";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

interface MainNavProps {
    data: any
}


const MainNav: React.FC<MainNavProps> = ({
    data
}) => {    
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
    const pathname = usePathname();

    // const routes = data.map(route => ({
    //     href: `/category${route.id}`,
    //     label: route.name,
    //     active: pathname === `/category${route.id}`
    // }))

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
                            
                            <ul className="flex flex-col items-left mt-12 text-xl">
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
            <div className={isCategoriesOpen ? "showMenuNav bg-secondary" : "hideMenuNav bg-secondary"}> 
                    <div className="w-full flex justify-between h-16 px-4 items-center">
                        <p className="w-8 h-8" onClick={() => setIsCategoriesOpen(false)}>chiudi</p>
                        <p className="w-8 h-8"
                           onClick={() => {
                            setIsCategoriesOpen(false);
                            setIsNavOpen(false);
                        }}>
                            chiudi tutto
                        </p>
                    </div>
                        
                    <ul className="flex flex-col mt-4 w-full pl-6">
                        categories
                    </ul>
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