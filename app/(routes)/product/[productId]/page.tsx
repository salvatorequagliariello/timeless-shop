import getProduct from "@/actions/get-product";
import getProducts from "@/actions/get-products";
import ProductsList from "@/components/products-list";
import ProductGallery from "@/components/product-gallery";
import Link from "next/link";
import Currency from "@/components/ui/currency";
import ProductInfo from "@/components/product-info";

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
        <div className="pt-24 w-[85%] min-[1950px]:w-full max-w-[1920px] mx-auto flex flex-col flex-wrap gap-y-4 text-primary font-primaryb">
            <div>
                <ProductGallery productName={product.name} images={product.images} />
                <div className="flex flex-col gap-y-2 md:flex-row items-center justify-between">
                    <h2 className="font-primary text-xl lg:text-2xl uppercase">
                        {product.name}
                    </h2>
                    <button className="bg-primary text-secondary transition py-2 px-2 md:py-4 md:px-4 hover:bg-hov text-sm group lg:text-md cursor-pointer">
                        <Link href="/" className="flex md:gap-x-4 gap-x-2 items-center">
                            <p className="cursor-pointer">
                                <Currency value={product.price} />
                            </p>
                            <p className="w-full border-l border-secondary pl-2 md:pl-4">
                                Add to cart
                            </p>
                        </Link>
                    </button>
                </div>
            </div>
            <hr / >
            <div>
                <ProductInfo data={product} />
            </div>
            <div className="mt-16">
                <h3 className="text-primary text-md md:text-xl">Discover the collection</h3>
                    <hr className="mt-2 bg-primary "/>
                <ProductsList items={suggestedProducts}/>
            </div>
        </div>
    );
};

export default ProductPage;