import { Product } from "@/types";
import qs from "query-string";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

interface Query {
    categoryId?: string;
    caseId?: string;
    braceletId?: string;
    movementId?: string;
    isFeatured?: boolean;
}

const getProducts =  async (query: Query): Promise<Product[]> => {
    const url = qs.stringifyUrl({
        url: URL,
        query: {
            categoryId: query.categoryId,
            caseId: query.caseId,
            braceletId: query.braceletId,
            movementId: query.movementId,
            isFeatured:  query.isFeatured,
        },
    })

    const res = await fetch(url);

    return res.json();
};

export default getProducts;