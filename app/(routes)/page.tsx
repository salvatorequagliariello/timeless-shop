import Hero from "@/components/hero";

const HomePage = () => {
    return (
        <div className="max-w-[1920px] mx-auto">
            <div className="flex flex-col justify-center mx-auto text-primary">
                <Hero />
            </div>
        </div>
    )
};

export default HomePage;