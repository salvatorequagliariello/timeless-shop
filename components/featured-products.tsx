import { Product } from "@/types";
import NoResults from "@/components/no-results";
import FeaturedProductCard from "@/components/featured-product-card";

interface FeaturedProductsProps {
    items: Product[];
}

const FeaturedProducts: React.FC<FeaturedProductsProps> = ({
    items
}) => {

    console.log(items.length)

    return (
        <div>
            <h3 className="text-primary font-secondary text-3xl text-center">Featured Products</h3>
            {items.length === 0 && <NoResults />}
            <div className="flex justify-center xl:w-[70%] m-auto mt-4">
                {items.map((item) => (
                    <FeaturedProductCard key={item.id} data={item} />
                ))}
            </div>
        </div>
    );
};

export default FeaturedProducts;