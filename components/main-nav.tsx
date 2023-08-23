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
                <button>
                    Watches
                </button>
                <Link href="/">
                    About
                </Link>
            </div>
            <div>
                <section className="MOBILE-MENU flex md:hidden items-center">
                    <p color="black" className="HAMBURGER-ICON" onClick={() => setIsNavOpen((prev) => !prev)}>
                        apri
                    </p>

                    <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}> 
                        <div className="w-full border-b flex h-16 items-center place-content-end px-4">
                            <p className="CROSS-ICON w-8 h-8" onClick={() => setIsNavOpen(false)}>chiudi</p>
                        </div>
                        
                        <ul className="MENU-LINK-MOBILE-OPEN flex-1 flex flex-col mt-4 w-full pl-6">

                        </ul>
                    </div>
                </section>
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
                            justify-content: space-evenly;
                            align-items: center;
                        }
                    `}
                </style>
        </nav>
    );
};

export default MainNav;