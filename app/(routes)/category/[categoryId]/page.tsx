import getCategory from "@/actions/get-category";
import getProducts from "@/actions/get-products";
import Filter from "@/components/filter";

export const revalidate = 0;

interface CategoryPageProps {
    params: {
        categoryId: string;
    },
    searchParams: {
        caseId: string;
        braceletId: string;
        movementId: string;
    }
}

const CategoryPage: React.FC<CategoryPageProps> = async ({
    params,
    searchParams
}) => {
    const products = await getProducts({ 
        categoryId: params.categoryId,
        caseId: searchParams.caseId,
        braceletId: searchParams.braceletId,
        movementId: searchParams.movementId
    });

    const category = await getCategory(params.categoryId);

    return (
        <div className="min-[1950px]:w-full max-w-[1980px] pt-24 mx-auto flex flex-col flex-wrap gap-y-4 text-primary font-primaryb">
            <div className="flex overflow-hidden">
                <h1 className="-bottom-4 left-0 font-secondary text-9xl place-self-end">
                    {category.name} Collection
                </h1>
                <img src={category.billboard.imageUrl} className="rounded-l-full ml-auto lg:h-[700px]"/>
            </div>
            <div className="w-[85%]">

            </div>
            <hr />
            <Filter />
        </div>
    );
};

export default CategoryPage;