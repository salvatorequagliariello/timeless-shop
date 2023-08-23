import Container from "@/components/ui/container";
import Image from "next/image";
import timelessLogo from "@/public/assets/images/timeless-logo.png";
import Link from "next/link";
import MainNav from "@/components/main-nav";

const Navbar = () => {

    return (
            <div className="py-7 text-primary">
                <Container>
                    <div className="flex items-center mx-auto px-10 max-w-6xl justify-between">
                        <Link href="/" className="flex-1">
                            <Image src={timelessLogo} width={170} alt="Timeless Company Logo" className="dark:filter dark:invert dark:grayscale"/>
                        </Link>
                        <div className="flex gap-8">
                            <p>
                                Watches
                            </p>
                            <Link href="about">
                                About
                            </Link>
                            <p>
                                Cart
                            </p>
                        </div>
                    </div>
                </Container>
            </div>
        );
    };

    
export default Navbar;
