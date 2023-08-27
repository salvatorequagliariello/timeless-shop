import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const HomePageContent = () => {
    return (
        <div className="mt-32 w-[85%] min-[1950px]:w-full mx-auto flex flex-col gap-y-16 flex-wrap text-primary break-words">
            <div className="relative">
                <img src={"./assets/images/homepage-content/moonwalker-banner.webp"} alt="A watch" className="h-[300px] lg:h-[400px] w-full object-cover"/>
                <div className="absolute bottom-8 left-4 flex flex-col gap-y-4">
                    <h2 className="font-secondary text-slate-50 text-4xl lg:text-6xl px-2">The new Moonwalker Collection.</h2>
                        <Link href={"/"} className="w-min text-xl px-2 lg:text-2xl text-zinc-900 font-primary flex items-center gap-x-2 hover:text-zinc-100">
                            Discover
                            <ArrowRight />
                        </Link>
                </div>
            </div>
                <div className="flex flex-col gap-y-4 min-[830px]:flex-row w-full lg:h-[400px] gap-x-8">
                    <img src="./assets/images/homepage-content/starfinder-s01.png" className="w-full h-[250px] min-[670px]:h-[300px] lg:h-full min-[830px]:w-[50%] object-cover animate-fadeInLeft"/>
                    <div className="flex-1 flex flex-col items-center text-center place-content-center animate-fadeInRight break-words">
                        <h2 className="font-secondary text-3xl lg:text-5xl">Starfinder S01</h2>
                        <p>The perfect blend of tradition and performance for a sporty-elegant style.</p>
                        <button className="font-primaryb mt-4 text-md xl:text-xl text-secondary bg-primary py-2 px-8 hover:bg-hov text-center place-self-center">
                            <Link href={"/"}>
                                    Discover
                            </Link>
                        </button>
                    </div>
                </div>
        </div>
    );
};

export default HomePageContent;