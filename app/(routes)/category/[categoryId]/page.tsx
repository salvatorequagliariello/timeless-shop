import getProducts from "@/actions/get-products";

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

    return (
        <div className="pt-24 w-[85%] min-[1950px]:w-full mx-auto flex flex-col flex-wrap gap-y-4 text-primary font-primaryb">
            Category
        </div>
    );
};

export default CategoryPage;