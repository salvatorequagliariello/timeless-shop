import { Product } from "@/types"

interface ProductInfoProps {
    data: Product
}


const ProductInfo: React.FC<ProductInfoProps> = ({
    data
}) => {
    const features = data.features.split(",");

    return (
        <div className="mt-4 flex flex-col flex-wrap text-primary font-primaryb">
            <p>
                {data.description}
            </p>
            <div className="w-full flex-col gap-y-8 mt-8 flex justify-between items-start">
                <div>
                    <h3 className="font-primary text-2xl">
                        CASE
                    </h3>
                    <p style={{whiteSpace: "pre-wrap"}} className="mt-4">
                        {data.caseDescription}
                    </p>
                </div>
                <div>
                    <h3 className="font-primary text-2xl">
                        FEATURES
                    </h3>
                    <p style={{whiteSpace: "pre-wrap"}} className="mt-4">
                        {features}
                    </p>
                </div>
                <div className="flex flex-col gap-y-8">
                    <div>
                        <h3 className="font-primary text-2xl">
                            MOVEMENT TYPE
                        </h3>
                        <p style={{whiteSpace: "pre-wrap"}} className="mt-4">
                            {data.movement.name}
                        </p>
                    </div>
                    <div>
                        <h3 className="font-primary text-2xl">
                            BRACELET
                        </h3>
                        <p style={{whiteSpace: "pre-wrap"}} className="mt-4">
                            {data.bracelet.name}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductInfo;