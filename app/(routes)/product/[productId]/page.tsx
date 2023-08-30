import getProduct from "@/actions/get-product";
import getProducts from "@/actions/get-products";
import ProductsList from "@/components/products-list";
import ProductGallery from "@/components/product-gallery";

interface ProductPageProps {
    params: {
        productId: string;
    }
};

const ProductPage: React.FC<ProductPageProps> = async ({
    params
}) => {
    const product = await getProduct(params.productId);
    const suggestedProducts = await getProducts({
        categoryId: product?.category?.id
    });


    return (
        <div className="pt-24 w-[85%] min-[1950px]:w-full mx-auto flex flex-col flex-wrap text-primary font-primaryb">
            <div>
                <ProductGallery productName={product.name} images={product.images} />
            </div>
            <ProductsList items={suggestedProducts}/>
        </div>
    );
};

export default ProductPage;