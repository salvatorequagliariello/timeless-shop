"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronLeft, Menu, X } from "lucide-react";
import { Billboard, Category } from "@/types";
import { usePathname } from "next/navigation";

interface MainNavProps {
    data: Category[];
    billboards: Billboard[];
}


const MainNav: React.FC<MainNavProps> = ({
    data,
    billboards
}) => {    
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

    const pathname = usePathname();

    const routes = data.map((route) => ({
        href: `/category/${route.id}`,
        label: route.name,
        active: pathname === `category/${route.id}`,
        image: billboards.filter(billboard => (billboard.label === route.name))[0].imageUrl,
    }));

    useEffect(() => {
        isCategoriesOpen && (document.body.style.overflow = 'hidden');
        !isCategoriesOpen && (document.body.style.overflow = 'unset');
     }, [isCategoriesOpen]);

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
                        <Menu className="stroke-primary hover:stroke-hov cursor-pointer" />
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
                <div className={isCategoriesOpen ? "showMenuCat bg-secondary   max-[1144px]:h-screen h-[400px] max-[1144px]:overflow-y-auto" : "hideMenuNav bg-secondary"}>
                    <div className="flex flex-col p-8 bg-secondary">
                        <div className="flex justify-between items-center min-[1145px]:w-[1070px] min-[1145px]:mx-auto">
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

                        <div className="max-w-[1070px] h-full mx-auto">
                            <div className="text-primary font-primaryb mt-8 bg-secondary mx-auto min-[1145px]:h-[400px] overflow-y-auto">
                                <h2 className="text-xl">
                                    Watches
                                </h2>
                                <nav className="mx-auto grid min-[591px]:grid-cols-2 min-[857px]:grid-cols-3 min-[1145px]:grid-cols-4 place-content-center gap-4 mt-4">
                                    <Link
                                        key="allwatches"
                                        href="/"
                                        className="w-76 h-36 text-primary relative group hover:outline-2 outline-slate-800"
                                        onClick={() => {
                                            setIsCategoriesOpen(false);
                                            setIsNavOpen(false);
                                        }}>
                                            <img src="./assets/images/all-watches-pic.webp" className="w-full h-full rounded-xl group-hover:shadow-lg shadow-primary object-cover" />
                                            <p className="absolute left-2 bottom-2 text-slate-100">
                                                All watches
                                            </p>
                                    </Link>
                                    {routes.map((route) => (
                                        <Link
                                            key={route.href}
                                            href={route.href}
                                            className="w-76 h-36 text-primary relative group hover:outline-2 outline-slate-800"
                                            onClick={() => {
                                                setIsCategoriesOpen(false);
                                                setIsNavOpen(false);
                                            }}>
                                            <div className="absolute w-full h-full bg-gradient-to-t from-gray-700 to-transparent opacity-70 rounded-xl"></div>
                                                <p className="absolute left-2 bottom-2 text-slate-100">
                                                    {route.label}
                                                </p>
                                            <img src={route.image} className="w-full h-full rounded-xl group-hover:shadow-lg shadow-primary object-cover" />
                                        </Link>
                                    ))}
                                </nav>
                            </div>                           
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
                        .showMenuCat {
                            display: block;
                            position: absolute;
                            width: 100%;
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