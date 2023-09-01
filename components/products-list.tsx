import { Product } from "@/types";
import NoResults from "@/components/no-results";
import ProductCard from "./product-card";
import { cn } from "@/lib/utils";

interface ProductsListProps {
    items: Product[];
    className?: string;
}

const ProductsList: React.FC<ProductsListProps> = ({
    items,
    className
}) => {
    return (
        <div>
            <div>
                {items.length === 0 && <NoResults />}
                {/* <div className="flex flex-col sm:flex-row justify-center xl:w-[70%] h-auto mx-auto mt-4"> */}
                <div className={cn(className ? className : "xl:grid-cols-4", "grid grid-cols-1 gap-y-8 place-content-between h-auto mx-auto mt-4")}>
                    {items.map((item) => (
                        <ProductCard key={item.id} data={item} />
                        ))}
                </div>
            </div>
        </div>
    );
};

export default ProductsList;