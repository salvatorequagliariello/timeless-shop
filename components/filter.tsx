"use client"

import { Bracelet, Case, Category, Movement } from "@/types";

interface FilterProps {
    data: (Case | Movement | Bracelet | Category)[];
    name: string;
    valueKey: string;
}

const Filter: React.FC<FilterProps> = ({
    data,
    name,
    valueKey
}) => {
    return (
        <div>
            filter
        </div>
    );
};

export default Filter;
