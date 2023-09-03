
interface AboutParagraphProps {
    title: string,
    text: string,
    imageUrl: string
}

const AboutParagraph: React.FC<AboutParagraphProps> = ({
    title,
    text,
    imageUrl
}) => {
    return (
        <div>
            <h2 className="font-secondary text-3xl text-center">
                {title}
            </h2>
            <p className="mt-4">
                {text}
            </p>
            <img src={imageUrl} className="mt-6 w-[90%] mx-auto h-[200px] sm:h-[250px] lg:h-[320px] xl:h-[400px] rounded-l-full rounded-r-full object-cover" />
        </div>
        );
    };
    
export default AboutParagraph;