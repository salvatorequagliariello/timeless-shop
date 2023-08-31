import Container from "@/components/ui/container";
import Image from "next/image";
import timelessLogo from "@/public/assets/images/timeless-logo.png";
import Link from "next/link";
import MainNav from "@/components/main-nav";
import { ShoppingBag } from 'lucide-react';
import getCategories from "@/actions/get-categories";
import { cn } from "@/lib/utils";
import Cart from "@/components/cart";
import getBillboard from "@/actions/get-billboard";
import getBillboards from "@/actions/get-billboards";

export const revalidate = 0;

const Navbar = async () => {
    const categories = await getCategories();
    const billboards = await getBillboards();
    const cartItems = 0;
    console.log(billboards);

    return (
            <div className="fixed w-full bg-secondary py-4 md:py-7 text-primary font-helvetica z-20">
                <Container>
                    <div className="flex items-center mx-auto px-4 md:px-10 max-w-6xl justify-between animate-fadeInUp w-full">
                        <Link href="/" className="flex-1">
                            <Image src={timelessLogo} width={170} alt="Timeless Company Logo" className="dark:filter dark:invert dark:grayscale"/>
                        </Link>
                        <div className="flex flex-row-reverse md:flex-row gap-4 md:gap-12 items-center">
                            <MainNav data={categories} billboards={billboards}/>
                            <Cart />
                        </div>
                    </div>
                </Container>
            </div>
        );
    };

    
export default Navbar;
