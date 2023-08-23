"use client";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

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
        <nav>
            <div className="hidden md:flex md:gap-5">
                <button onClick={() => setIsCategoriesOpen(true)}>
                    Watches
                </button>
                <Link href="/">
                    About
                </Link>
            </div>
            <div>
                <section className="flex md:hidden items-center">
                    <p color="black" className="HAMBURGER-ICON" onClick={() => setIsNavOpen((prev) => !prev)}>
                        apri
                    </p>

                    <div className={isNavOpen ? "showMenuNav bg-secondary" : "hideMenuNav bg-secondary"}> 
                        <div className="w-full flex h-16 items-center place-content-end px-4">
                            <p className="w-8 h-8" onClick={() => setIsNavOpen(false)}>chiudi</p>
                        </div>
                        
                        <ul className="flex flex-col justify-start items-left mt-4 w-full pl-6">
                            <button onClick={() => setIsCategoriesOpen(true)} className="">
                                Watches
                            </button>
                            <Link href="/">
                                About
                            </Link>
                        </ul>
                    </div>
                </section>
            </div>


            <div className={isCategoriesOpen ? "showMenuNav bg-secondary" : "hideMenuNav bg-secondary"}> 
                    <div className="w-full flex justify-between h-16 px-4">
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
                            display: flex;
                            flex-direction: column;
                        }
                    `}
                </style>
        </nav>
    );
};

export default MainNav;