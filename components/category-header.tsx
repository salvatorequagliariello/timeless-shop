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
        <div className="max-w-[1920px] ">
            <div className="w-full flex flex-col xl:flex-row lg:h-[600px] gap-y-4">
                <div className="w-full xl:w-2/5 xl:place-self-end z-10">
                    <h1 className="font-secondary text-4xl xl:text-9xl h-full w-full">
                        {categoryName}
                    </h1>
                </div>
                <div className="w-full h-1/2 xl:w-3/5 xl:h-full flex">
                    <img src={imgUrl} className="w-full h-full rounded-l-full object-cover self-start xl:self-center" />
                </div>
            </div>
            <div className="w-[85%] min-[1921px]:w-full mx-auto mt-4">
                <CategoryDescription category={"All watches"} />
            </div>
        </div>
    );
};

export default CategoryHeader;