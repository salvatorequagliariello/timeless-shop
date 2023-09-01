import getCategory from "@/actions/get-category";
import getProducts from "@/actions/get-products";
import Filter from "@/components/filter";
import CategoryDescription from "@/components/category-description";
import getCases from "@/actions/get-cases";
import ProductsList from "@/components/products-list";
import getMovements from "@/actions/get-movements";
import getBracelets from "@/actions/get-bracelets";
import getCategories from "@/actions/get-categories";
import NoResults from "@/components/no-results";

export const revalidate = 0;

interface AllWatchesPageProps {
    params: {
        categoryId: string;
    },
    searchParams: {
        caseId: string;
        braceletId: string;
        movementId: string;
        categoryId: string;
    }
}

const AllWatchesPage: React.FC<AllWatchesPageProps> = async ({
    params,
    searchParams
}) => {
    const products = await getProducts({ 
        categoryId: searchParams.categoryId,
        caseId: searchParams.caseId,
        braceletId: searchParams.braceletId,
        movementId: searchParams.movementId
    });

    const cases = await getCases();
    const movements = await getMovements();
    const bracelets = await getBracelets();
    const categories = await getCategories();

    return (
        <div className="max-w-[1920px] pt-24 mx-auto flex flex-col gap-y-4 text-primary font-primaryb">
            <div className="w-full max-w-[1920px] flex flex-col xl:flex-row lg:h-[600px] gap-y-4">
                <div className="w-full xl:w-2/5 xl:place-self-end z-10">
                    <h1 className="font-secondary text-4xl xl:text-9xl h-full w-full">
                        All Watches
                    </h1>
                </div>
                <div className="w-full h-1/2 xl:w-3/5 xl:h-full flex">
                    <img src="./assets/images/all-watches-pic.webp" className="w-full h-full rounded-l-full object-cover self-start xl:self-center" />
                </div>
            </div>
            <div className="w-[85%] min-[1921px]:w-full mx-auto mt-4">
                <div>
                    <CategoryDescription category={"All watches"} />
                </div>
                <hr className="mt-8"/>
                <div className="flex justify-between my-4">
                    <h2>
                        FILTER YOUR SEARCH
                    </h2>
                    <div className="w-max flex ml-auto gap-x-16">
                        <Filter valueKey="categoryId" name="Collections" data={categories} />
                        <Filter valueKey="caseId" name="Case Material" data={cases} />
                        <Filter valueKey="movementId" name="Movement" data={movements} />
                        <Filter valueKey="braceletId" name="Bracelet Material" data={bracelets} />
                    </div>
                </div>
                <hr />
                <div>
                    <ProductsList items={products} />
                </div>
            </div>
        </div>
    );
};

export default AllWatchesPage;