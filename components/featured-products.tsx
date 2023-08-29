import { Product } from "@/types";
import NoResults from "@/components/no-results";

interface FeaturedProductsProps {
    items: Product[];
}

const FeaturedProducts: React.FC<FeaturedProductsProps> = ({
    items
}) => {

    console.log(items.length)

    return (
        <div>
            <h3>Featured Products</h3>
            {items.length === 0 && <NoResults />}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {items.map((item) => (
                    <div key={item.id}>
                        {item.name}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeaturedProducts;