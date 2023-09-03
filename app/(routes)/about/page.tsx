
const AboutPage = () => {
    return (
        <div className="pt-24 w-[85%] min-[1920px]:w-full max-w-[1920px] mx-auto flex flex-col flex-wrap gap-y-4 text-primary font-primaryb">
            <div className="max-w-[1520px] h-[700px] flex flex-col mx-auto pt-16 text-center rounded-b-full w-full object-cover animate-fade animate-easy-out bg-cover bg-no-repeat bg-center brightness-90" style={{backgroundImage: "url(./assets/about/maison-watchmakers.webp)"}}>
                <h1 className="font-secondary text-8xl brightness-100 text-zinc-800 break-all drop-shadow-xl">
                    A Timeless vision.
                </h1>
                <p className="w-[400px] mx-auto">
                    Since 1839, Timeless has embodied avant-garde, precision and bold style, that have marked the world history of the watch industry. We invite you to explore our legacy, through our timepieces and innovations.
                </p>
            </div>
            <div className="w-[70%] mt-24 mx-auto flex flex-col gap-y-8">
                <div>
                    <h2 className="font-secondary text-3xl text-center">
                        A true manufacture from the start
                    </h2>
                    <p className="mt-4">
                        Since the very beginning, precision of movement and technique have been central to the mission of the Grande Maison, established in the calm and serene setting of the Vallée de Joux, also known as the “valley of horological complications”.
                        With nearly 200 years of history, Timeless is a pioneer in the Swiss watchmaking industry thanks to its constant innovation and creativity that pushes the limits of watchmaking. Bringing together 180 different skills under one roof, it is one of the only true Manufactures with the capacity to produce all its luxury watches in their entirety, from design to production.
                    </p>
                    <img src="./assets/about/maison-close-up-meachanism.webp" className="mt-6 w-[90%] mx-auto h-[400px] rounded-l-full rounded-r-full object-cover" />
                    <hr className="mt-4"/>
                </div>
                
            </div>
        </div>
    );
};

export default AboutPage;