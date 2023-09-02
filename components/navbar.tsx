import Container from "@/components/ui/container";
import Image from "next/image";
import timelessLogo from "@/public/assets/images/timeless-logo.png";
import Link from "next/link";
import MainNav from "@/components/main-nav";
import getCategories from "@/actions/get-categories";
import Cart from "@/components/cart";
import getBillboards from "@/actions/get-billboards";

export const revalidate = 0;

const Navbar = async () => {
    const categories = await getCategories();
    const billboards = await getBillboards();
    const cartItems = 0;

    return (
            <div className="fixed w-full bg-secondary py-4 md:py-7 text-primary z-40">
                    <div className="flex max-w-[1920px] items-center mx-auto px-4 md:px-10 justify-between animate-fade-up animate-once animate-ease-out w-full">
                        <Link href="/" className="w-max xl:ml-24 min-[1470px]:ml-36 min-[1600px]:ml-48 min-[1900px]:ml-40">
                            <Image src={timelessLogo} width={170} alt="Timeless Company Logo" className="dark:filter dark:invert dark:grayscale"/>
                        </Link>
                        <div className="flex flex-row-reverse md:flex-row gap-4 md:gap-12 items-center xl:mr-24 min-[1470px]:mr-36 min-[1600px]:mr-48 min-[1900px]:mr-40">
                            <MainNav data={categories} billboards={billboards}/>
                            <Cart />
                        </div>
                    </div>
            </div>
        );
    };

    
export default Navbar;
