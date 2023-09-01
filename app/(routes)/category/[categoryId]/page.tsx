import getCategory from "@/actions/get-category";
import getProducts from "@/actions/get-products";
import CategoryDescription from "@/components/category-description";
import CategoryHeader from "@/components/category-header";
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
    {category.billboard.imageUrl}
    "${category.name} Collection"

    return (
        <div className="max-w-[1920px] pt-24 mx-auto flex flex-col gap-y-4 text-primary font-primaryb">
            <CategoryHeader imgUrl={category.billboard.imageUrl} categoryName={`${category.name} Collection`} />
            <div className="w-[85%] min-[1921px]:w-full mx-auto">
                <hr className="my-4"/>
                <div>
                    <ProductsList items={products} three={true}/>
                </div>
            </div>
        </div>
    );
};

export default CategoryPage;