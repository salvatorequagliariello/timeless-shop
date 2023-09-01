import getCategory from "@/actions/get-category";
import getProducts from "@/actions/get-products";
import CategoryDescription from "@/components/category-description";
import ProductsList from "@/components/products-list";

export const revalidate = 0;

interface CategoryPageProps {
    params: {
        categoryId: string;
    }
}

const CategoryPage: React.FC<CategoryPageProps> = async ({
    params,
}) => {
    const products = await getProducts({ categoryId: params.categoryId });

    const category = await getCategory(params.categoryId);

    return (
        <div className="max-w-[1920px] pt-24 mx-auto flex flex-col gap-y-4 text-primary font-primaryb">
            <div className="w-full max-w-[1920px] flex flex-col xl:flex-row lg:h-[600px] gap-y-4">
                <div className="w-full xl:w-2/5 xl:place-self-end z-10">
                    <h1 className="font-secondary text-4xl xl:text-9xl h-full w-full">
                        {category.name} Collection
                    </h1>
                </div>
                <div className="w-full h-1/2 xl:w-3/5 xl:h-full flex">
                    <img src={category.billboard.imageUrl} className="w-full h-full rounded-l-full object-cover self-start xl:self-center" />
                </div>
            </div>
            <hr />
            <div className="w-[85%] min-[1921px]:w-full mx-auto">
                <div>
                    <CategoryDescription category={category.name} />
                </div>
                <hr className="my-4"/>
                <div>
                    <ProductsList items={products} three={true}/>
                </div>
            </div>
        </div>
    );
};

export default CategoryPage;