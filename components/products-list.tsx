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
            <div>
                <h3 className="text-primary text-xl">Discover the collection</h3>
                <hr className="mt-2 bg-primary"/>
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