import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import FeaturedProducts from "./featured-products";
import getProducts from "@/actions/get-products";

const HomePageContent = async () => {
    const featuredProducts =  await getProducts({ isFeatured: true });

    return (
        <div className="mt-24 lg:mt-32 w-[85%] min-[2100px]:w-full mx-auto flex flex-col gap-y-16 flex-wrap text-primary break-words">
            <div className="relative">
                <img src={"./assets/images/homepage-content/moonwalker-banner.webp"} alt="A watch" className="relative h-[300px] lg:h-[400px] w-full object-cover"/>
                <div className="absolute bottom-8 left-4 flex flex-col gap-y-4">
                    <h2 className="font-secondary text-slate-50 text-4xl lg:text-6xl px-2">The new Moonwalker Collection.</h2>
                        <Link href="/category/6205b908-c527-4c50-a6ce-beddc4947109" className="w-min text-xl px-2 lg:text-2xl text-zinc-900 font-primary flex items-center transition gap-x-2 hover:text-zinc-100">
                            Discover
                            <ArrowRight />
                        </Link>
                </div>
            </div>
            <FeaturedProducts items={featuredProducts}/>
            <div className="flex flex-col gap-y-4 min-[830px]:flex-row w-full lg:h-[450px] gap-x-8">
                <img src="./assets/images/homepage-content/starfinder-s01.png" className="relative w-full h-[250px] min-[670px]:h-[300px] lg:h-full min-[830px]:w-[50%] object-cover"/>
                <div className="flex-1 flex flex-col items-center text-center place-content-center animate-fadeInRight break-words">
                    <h2 className="font-secondary text-primary text-3xl lg:text-5xl">Starfinder S01</h2>
                    <p className="text-primary">The perfect blend of tradition and performance for a sporty-elegant style.</p>
                    <button className="font-primaryb mt-4 text-md xl:text-xl text-secondary bg-primary py-2 px-8 hover:bg-hov text-center place-self-center transition">
                        <Link href={"/product/501b894b-489f-4486-8353-e613f1dfe93e"}>
                                Discover
                        </Link>
                    </button>
                </div>
            </div>
            <div className="flex flex-col gap-y-4 min-[830px]:flex-row-reverse w-full lg:h-[450px] gap-x-8">
                <img key={1} src="./assets/images/homepage-content/planetocean-p97.webp" className="w-full h-[250px] min-[670px]:h-[300px] lg:h-full min-[830px]:w-[50%] object-cover"/>
                <div className="flex-1 flex flex-col items-center text-center place-content-center break-words">
                    <h2 className="font-secondary text-primary text-3xl lg:text-5xl">Planetocean P97</h2>
                    <p className="text-primary lg:w-[70%]">Inspired by the unique requirements of this sport, Planetocean timepieces preserve the traditional style of diving watches.</p>
                    <button className="font-primaryb mt-4 text-md xl:text-xl text-secondary bg-primary py-2 px-8 hover:bg-hov text-center place-self-center transition">
                        <Link href={"/product/17fd17d1-12d9-49dd-bc4e-c019f5f7f3fe"}>
                                Discover
                        </Link>
                    </button>
                </div>
            </div>
            <div className="relative">
                <video
                    muted 
                    autoPlay
                    playsInline  
                    loop 
                    className="h-[350px] lg:h-[450px] w-full object-cover animate-fadeIn animate-slower">
                        <source src="./assets/images/homepage-content/rolling-watches.webm" type="video/webm" aria-label="Some watches" />
                </video>
                <h2 className="absolute bottom-8 left-4 font-secondary text-slate-50 text-4xl lg:text-6xl px-2">Beautifully crafted Timepieces.</h2>
            </div>
        </div>
    );
};

export default HomePageContent;