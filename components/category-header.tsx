import CategoryDescription from "./category-description";

interface CategoryHeaderProps {
    imgUrl: string,
    categoryName: string,
}

const CategoryHeader: React.FC<CategoryHeaderProps> = ({
    imgUrl,
    categoryName
}) => {
    return (
        <div className="max-w-[1920px]">
            <div className="w-full flex flex-col md:flex-row gap-y-4">
                <div className="w-full md:w-2/5 md:place-self-end z-10">
                    <h1 className="font-secondary text-4xl md:text-5xl lg:text-6xl xl:text-8xl h-full w-full">
                        {categoryName}
                    </h1>
                </div>
                <div className="max-md:w-[90%] self-end h-[200px] min-[425px]:h-[250px] min-[600px]:h-[300px] lg:h-[400px] md:w-3/5 xl:h-full">
                    <img src={imgUrl} className="w-full h-full rounded-l-full object-cover self-end xl:self-center" />
                </div>
            </div>
            <div className="w-[85%] min-[1921px]:w-full mx-auto mt-8">
                <CategoryDescription category={"All watches"} />
            </div>
        </div>
    );
};

export default CategoryHeader;