"use client";

import toast from "react-hot-toast";
import { Product } from "@/types";
import { X } from "lucide-react";
import Currency from "@/components/ui/currency";
import useCart from "@/hooks/use-cart";

interface CartItemProps {
    data: Product
};

const CartItem: React.FC<CartItemProps> = ({
    data
}) => {
    const cart = useCart();

    const onRemove = () => {
        cart.removeItem(data.id);
    }

    return (
        <div className="border-2 border-primary p-2 flex items-center justify-between gap-x-4 text-primary">
            <div className="flex gap-x-4">
                <div className="px-6 py-2 bg-secondary border-2 border-primary">
                    <img src={data.images[0].url} className="w-18 h-24 self-center"/>
                </div>
                <div className="flex flex-col h-full gap-y-4">
                    <p>
                        {data.name}
                    </p>
                    <div>
                        <p className="text-zinc-600">
                            Collection: {data.category.name}
                        </p>
                        <p className="text-zinc-600">
                            Case: {data.case.name}
                        </p>
                        <p className="text-zinc-600">
                            Bracelet: {data.bracelet.name}
                        </p>
                    </div>
                </div>
            </div>
            <div className="h-full flex flex-col justify-between items-end">
                <X onClick={onRemove} className="w-5 hover:text-hov cursor-pointer" />
                <p className="align-bottom self">
                    {<Currency value={data.price} />}
                </p>
            </div>
        </div>
    );
};

export default CartItem;