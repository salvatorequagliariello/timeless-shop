import getProduct from "@/actions/get-product";
import getProducts from "@/actions/get-products";
import ProductsList from "@/components/products-list";
import ProductGallery from "@/components/product-gallery";
import Link from "next/link";
import Currency from "@/components/ui/currency";

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
        <div className="pt-24 w-[85%] min-[1950px]:w-full mx-auto flex flex-col flex-wrap gap-y-4 text-primary font-primaryb">
            <div>
                <ProductGallery productName={product.name} images={product.images} />
                <div className="flex items-center justify-between">
                    <h2 className="font-primary text-2xl uppercase">
                        {product.name}
                    </h2>
                    <button className="bg-primary text-secondary transition py-4 px-8 hover:bg-hov text-sm group lg:text-md cursor-pointer">
                        <Link href="/" className="flex gap-x-4">
                            <Currency value={product.price} />
                            <p className="w-full border-l border-secondary pl-4">
                                Add to cart
                            </p>
                        </Link>
                    </button>
                </div>
            </div>
            <hr / >
            <div>
                <h3 className="text-primary text-xl">Discover the collection</h3>
                    <hr className="mt-2 bg-primary "/>
                <ProductsList items={suggestedProducts}/>
            </div>
        </div>
    );
};

export default ProductPage;