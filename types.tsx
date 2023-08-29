
export interface Billboard {
    id: string;
    label: string;
    imageUrl: string;
};

export interface Category {
    id: string;
    name: string;
    billboard: Billboard;
}

export interface Product {
    id: string;
    category: Category;
    name: string;
    price: string;
    case: Case;
    bracelet: Bracelet;
    movement: Movement;
    images: Image[];
    description: string;
    caseDescription: string;
    features: string;
    isFeatured: boolean;
};

export interface Image {
    id: string;
    url: string;
}

export interface Case {
    id: string;
    name: string;
    value: string;
}

export interface Bracelet {
    id: string;
    name: string;
    value: string;
}

export interface Movement {
    id: string;
    name: string;
    value: string;
}