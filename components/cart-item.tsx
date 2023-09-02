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
        <div>

            <div className="border-2 border-primary p-2 items-center justify-between gap-x-4 text-primary hidden min-[501px]:flex">
                <div className="h-full flex gap-x-4">
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
                <div className="h-full flex flex-col gap-y-16 items-end">
                    <X onClick={onRemove} className="w-5 hover:text-hov cursor-pointer" />
                    <p>
                        {<Currency value={data.price} />}
                    </p>
                </div>
            </div>

            <div className="border-2 border-primary p-2 text-primary flex flex-col min-[501px]:hidden">
                <X onClick={onRemove} className="w-5 hover:text-hov cursor-pointer self-end" />
                <hr />
                <div className="flex justify-between min-[320px]:justify-center gap-x-4 mt-2">
                    <div className="px-6 py-2 bg-secondary border-2 border-primary items-center">
                        <img src={data.images[0].url} className="w-16 h-18 self-center"/>
                    </div>
                    <div className="flex flex-col h-full gap-y-4">
                        <div>
                            <p>
                                {data.name}
                            </p>
                            <p className="text-zinc-600">
                                Case: {data.case.name}
                            </p>
                            <p className="text-zinc-600">
                                Bracelet: {data.bracelet.name}
                            </p>
                        </div>
                            <p>
                                {<Currency value={data.price} />}
                            </p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CartItem;