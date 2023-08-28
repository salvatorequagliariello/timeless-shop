import Container from "@/components/ui/container";
import Image from "next/image";
import timelessLogo from "@/public/assets/images/timeless-logo.png";
import Link from "next/link";
import MainNav from "@/components/main-nav";
import { ShoppingBag } from 'lucide-react';
import getCategories from "@/actions/get-categories";
import { cn } from "@/lib/utils";

export const revalidate = 0;

const Navbar = async () => {
    const categories = await getCategories();
    const cartItems = 0;

    return (
            <div className="fixed w-full bg-secondary py-4 md:py-7 text-primary font-helvetica z-20">
                <Container>
                    <div className="flex items-center mx-auto px-4 md:px-10 max-w-6xl justify-between animate-fadeInUp">
                        <Link href="/" className="flex-1">
                            <Image src={timelessLogo} width={170} alt="Timeless Company Logo" className="dark:filter dark:invert dark:grayscale"/>
                        </Link>
                        <div className="flex flex-row-reverse md:flex-row gap-4 md:gap-12 items-center">
                            <MainNav data={categories}/>
                            <button>
                                <div className="relative flex items-end gap-x-1">
                                    <ShoppingBag size={20} className={cn("stroke-primary hover:stroke-hov cursor-pointer")} />
                                    <span 
                                    className={cn("-top-2 -right-[7px] text-[12px] text-slate-50 bg-blue-800 font-primary px-1 py-[0.5px]", 
                                    cartItems >= 1 ? "absolute" : "hidden")}>
                                        {cartItems}
                                    </span>
                                </div>
                            </button>
                        </div>
                    </div>
                </Container>
            </div>
        );
    };

    
export default Navbar;
