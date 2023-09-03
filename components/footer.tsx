import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import Link from "next/link";


const Footer = () => {


    return (
        <footer className="mt-24 pt-8 pb-4 border-t border-primary border-opacity-70 font-rpimary text-primary">
            <div className="w-[85%] min-[1920px]:w-full max-w-[1920px] mx-auto flex-col">
                <div className="my-4 flex justify-center items-center gap-x-32">
                    <ul className="font-primary text-xl flex flex-col gap-y-2">
                        <li className="hover:text-hov">
                            <Link href="/watches">
                                Watches
                            </Link>
                        </li>
                        <li className="hover:text-hov">
                            <Link href="/about">
                                Our Maison
                            </Link>
                        </li>
                        <li className="hover:text-hov">
                            <Link href="/cart">
                                My basket
                            </Link>
                        </li>
                    </ul>
                    <ul className="flex flex-col gap-y-2">
                        <li className="cursor-pointer hover:text-hov">Watchmaking Tradition</li>
                        <li className="cursor-pointer hover:text-hov">Sustainability</li>
                        <li className="cursor-pointer hover:text-hov">Press Corner</li>
                        <li className="cursor-pointer hover:text-hov">Our Story</li>
                    </ul>
                    <ul className="flex flex-col gap-y-2">
                        <li className="cursor-pointer hover:text-hov">Store Locator</li>
                        <li className="cursor-pointer hover:text-hov">Customer Service</li>
                        <li className="cursor-pointer hover:text-hov">Contact Us</li>
                        <li className="cursor-pointer hover:text-hov">FAQ</li>
                    </ul>
                    <ul className="flex flex-col gap-y-2">
                        <li className="cursor-pointer hover:text-hov">Legal Terms</li>
                        <li className="cursor-pointer hover:text-hov">Careers</li>
                        <li className="cursor-pointer hover:text-hov">Media Center</li>
                        <li className="cursor-pointer hover:text-hov">Newsletter</li>
                    </ul>
                </div>
                <hr />
                <div className="pt-4 flex justify-between">
                    <p className="text-sm font-light text-center">
                        &copy; {new Date().getFullYear()} Timeless Watch Co., All rights reserved.
                    </p>
                    <div className="flex gap-x-2">
                        <Facebook className="text-secondary bg-primary p-1 hover:bg-hov cursor-pointer" />
                        <Instagram className="text-secondary bg-primary p-1 hover:bg-hov cursor-pointer" />
                        <Twitter className="text-secondary bg-primary p-1 hover:bg-hov cursor-pointer" />
                        <Linkedin className="text-secondary bg-primary p-1 hover:bg-hov cursor-pointer" />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;