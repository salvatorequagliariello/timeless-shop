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
        <div className="max-w-[1920px] pt-24 mx-auto flex flex-col gap-y-4 text-primary font-primaryb">
            <div className="w-full max-w-[1920px] flex flex-col xl:flex-row h-[600px]">
                <div className="w-2/5 place-self-end">
                    <h1 className="font-secondary text-9xl h-full w-full">
                        {category.name} Collection
                    </h1>
                </div>
                <div className="w-3/5 h-full">
                    <img src={category.billboard.imageUrl} className="w-full h-full rounded-l-full object-cover" />
                </div>
            </div>
            <hr />
            <div className="w-[85%] min-[1921px]:w-full mx-auto">
                <div>
                    <p  className="text-center">
                        Founded in 1832, the famous Swiss watch brand Timeless can boast a long tradition characterised by the elegance and performance of its products. Those values are perfectly represented by the Planetocean Collection. This line is dedicated to men and women looking for a high performance timepiece that combines technical innovation and elegance.
                    </p>
                </div>
            <hr className="my-4"/>
            </div>
        </div>
    );
};

export default CategoryPage;