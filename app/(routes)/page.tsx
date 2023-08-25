import Hero from "@/components/hero";
import HomePageContent from "@/components/homepage-content";

const HomePage = () => {
    return (
        <div className="max-w-[1920px] mx-auto">
            <div className="flex flex-col justify-center mx-auto text-primary">
                <Hero />
                <HomePageContent />
            </div>
        </div>
    )
};

export default HomePage;