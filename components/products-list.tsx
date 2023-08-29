import { Product } from "@/types";
import NoResults from "@/components/no-results";
import ProductCard from "./product-card";

interface ProductsListProps {
    items: Product[];
}

const ProductsList: React.FC<ProductsListProps> = ({
    items
}) => {
    return (
        <div>
            <div className="hidden md:block">
                <h3 className="text-primary font-secondary text-3xl text-center">Best Sellers</h3>
                {items.length === 0 && <NoResults />}
                <div className="flex justify-center xl:w-[70%] m-auto mt-4">
                    {items.map((item) => (
                        <ProductCard key={item.id} data={item} />
                        ))}
                </div>
            </div>
        </div>
    );
};

export default ProductsList;