import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const HomePageContent = () => {
    return (
        <div className="mt-32 w-[85%] min-[1950px]:w-full mx-auto flex flex-col gap-y-12 flex-wrap text-primary break-words">
            <div className="relative">
                <img src={"./assets/images/homepage-content/moonwalker-banner.webp"} alt="A watch" className="h-[450px] w-full object-cover"/>
                <div className="absolute bottom-8 left-4 flex flex-col gap-y-4">
                    <h2 className="font-secondary text-slate-50 text-6xl">The new Moonwalker Collection.</h2>
                        <Link href={"/"} className="w-min text-2xl text-zinc-900 font-primary flex items-center gap-x-2 hover:text-zinc-100">
                            Discover
                            <ArrowRight />
                        </Link>
                </div>
            </div>
        </div>
    );
};

export default HomePageContent;