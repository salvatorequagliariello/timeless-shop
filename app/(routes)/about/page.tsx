import AboutParagraph from "@/components/about-paragraph";

const paragraphs = [
    {
        title: "A true manufacture from the start",
        text: `Since the very beginning, precision of movement and technique have been central to the mission of the Grande Maison, established in the calm and serene setting of the Vallée de Joux, also known as the “valley of horological complications”.
        With nearly 200 years of history, Timeless is a pioneer in the Swiss watchmaking industry thanks to its constant innovation and creativity that pushes the limits of watchmaking. Bringing together 180 different skills under one roof, it is one of the only true Manufactures with the capacity to produce all its luxury watches in their entirety, from design to production.`,
        imageUrl: `./assets/about/maison-close-up-meachanism.webp`
    },
    {
        title: "A tradition of innovation",
        text: `Timeless has been pursuing traditional Genevan watchmaking artistry without interruption since 1839. The manufacture benefits from full creative freedom, which allows it to design, develop, and craft watches that connoisseurs consider to be the world's finest as pledged by its founders Antoine Norbert and Adrien. In addition to exceptional skills, Timeless also nurtures a tradition of innovation that has meanwhile been crowned by over one hundred patents. Timeless is an independent manufacture with vertically integrated production. It has its own research and development department and creates and engineers all movements and external components in its own workshops. The individual parts of the movements and cases are produced, finished, and assembled in-house, from simple models and complicated timepieces to grand complications. This competence accompanies each watch during its entire lifetime from the first sketches to final assembly. Timeless services and repairs all of its watches ever made since 1839.`,
        imageUrl: `./assets/about/maison-squared-watch-close-up.webp`
    },
    {
        title: "Over 430 patents and 1300 calibres",
        text: `The Manufacture has patented over 430 inventions, most of which have become benchmarks in the watchmaking industry. Dedicated to creating the greatest interpretations of time, the Manufacture has mastered complex watch complications, including the minute repeater, multi-axis tourbillon and celestial complications. At Timeless, a dedicated research team exchanges ideas and challenges each other to develop truly cutting-edge creations. Watchmakers, engineers and designers, united by a shared passion for watchmaking, combine their expertise to craft unique complication watches. The Manufacture’s inventiveness has led to the creation of no fewer than 1,300 calibres.`,
        imageUrl: `./assets/about/maison-caliber.webp`
    }
]

const AboutPage = () => {
    return (
        <div className="pt-24 w-[85%] min-[2100px]:w-full max-w-[1920px] mx-auto flex flex-col flex-wrap gap-y-4 text-primary font-primaryb">
            <div className="max-w-[1520px] h-[400px] md:h-[450px] lg:h-[700px] flex flex-col mx-auto pt-16 text-center rounded-b-full w-full object-cover animate-fade-down animate-easy-out bg-cover bg-no-repeat bg-center brightness-90" style={{backgroundImage: "url(./assets/about/maison-watchmakers.webp)"}}>
                <h1 className="font-secondary text-5xl md:text-6xl lg:text-8xl brightness-100 text-zinc-800 max-[319px]break-all break-word drop-shadow-xl">
                    A Timeless vision.
                </h1>
                <p className="lg:w-[400px] mx-auto drop-shadow-xl max-lg:hidden text-zinc-800">
                    Since 1839, Timeless has embodied avant-garde, precision and bold style, that have marked the world history of the watch industry. We invite you to explore our legacy, through our timepieces and innovations.
                </p>
            </div>
            <p className="text-center lg:hidden">
                Since 1839, Timeless has embodied avant-garde, precision and bold style, that have marked the world history of the watch industry. We invite you to explore our legacy, through our timepieces and innovations.
            </p>
            <div className="lg:w-[70%] mt-16 lg:mt-24 mx-auto flex flex-col gap-y-16">
                <div>
                    <AboutParagraph title={paragraphs[0].title}  text={paragraphs[0].text} imageUrl={paragraphs[0].imageUrl} />
                    <hr className="mt-4"/>
                </div>
                <div>
                    <AboutParagraph title={paragraphs[1].title}  text={paragraphs[1].text} imageUrl={paragraphs[1].imageUrl} />
                    <hr className="mt-4"/>
                </div>
                <AboutParagraph title={paragraphs[2].title}  text={paragraphs[2].text} imageUrl={paragraphs[2].imageUrl} />
            </div>
        </div>
    );
};

export default AboutPage;