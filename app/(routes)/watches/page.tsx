import getProducts from "@/actions/get-products";
import Filter from "@/components/filter";
import CategoryDescription from "@/components/category-description";
import getCases from "@/actions/get-cases";
import ProductsList from "@/components/products-list";
import getMovements from "@/actions/get-movements";
import getBracelets from "@/actions/get-bracelets";
import getCategories from "@/actions/get-categories";
import CategoryHeader from "@/components/category-header";

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
            <CategoryHeader imgUrl="./assets/images/all-watches-hero-img.webp" categoryName="All Watches" />
            <div className="w-[85%] min-[1921px]:w-full mx-auto mt-4">
                <hr />
                <div className="flex flex-col gap-y-8 text-center justify-center xl:flex-row xl:justify-between my-4">
                    <h2>
                        FILTER YOUR SEARCH
                    </h2>
                    <div className="flex flex-col gap-y-4 place-content-center md:justify-between md:w-full xl:w-auto max-lg:mx-auto md:flex-row xl:ml-auto xl:gap-x-16">
                        <Filter key="categoryId" valueKey="categoryId" name="Collections" data={categories} />
                        <Filter key="caseId" valueKey="caseId" name="Case Material" data={cases} />
                        <Filter key="movementId" valueKey="movementId" name="Movement" data={movements} />
                        <Filter key="braceletId" valueKey="braceletId" name="Bracelet Material" data={bracelets} />
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