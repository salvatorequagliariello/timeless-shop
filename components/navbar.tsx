import Container from "@/components/ui/container";
import Image from "next/image";
import timelessLogo from "@/public/assets/images/timeless-logo.png";
import Link from "next/link";
import MainNav from "@/components/main-nav";
import { ShoppingBag } from 'lucide-react';

const Navbar = () => {

    return (
            <div className="py-4 md:py-7 text-primary font-helvetica">
                <Container>
                    <div className="flex items-center mx-auto px-4 md:px-10 max-w-6xl justify-between">
                        <Link href="/" className="flex-1">
                            <Image src={timelessLogo} width={170} alt="Timeless Company Logo" className="dark:filter dark:invert dark:grayscale"/>
                        </Link>
                        <div className="flex flex-row-reverse md:flex-row gap-4 md:gap-12">
                            <MainNav />
                            <ShoppingBag className="stroke-primary hover:stroke-hov cursor-pointer" />
                        </div>
                    </div>
                </Container>
            </div>
        );
    };

    
export default Navbar;
