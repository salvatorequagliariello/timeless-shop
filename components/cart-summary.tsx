"use client";

import axios from "axios";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import toast from "react-hot-toast/headless";
import Currency from "@/components/ui/currency";
import useCart from "@/hooks/use-cart";
import { Check } from "lucide-react";

const CartSummary = () => {
    const searcParams = useSearchParams();
    const items = useCart((state) => state.items);
    const removeAll = useCart((state) => state.removeAll);

    const itemsPrice = items.reduce((total, item) => {
        return total + Number(item.price)
    }, 0);
    const vat = (itemsPrice / 100 * 20);
    const totalPrice = vat +  itemsPrice;

    return (
        <div className="w-full flex flex-col border-2 border-primary text-primary p-6 gap-y-6">
            <div>
                <h2 className="text-2xl">
                    Summary
                </h2>
                <div className="mt-4 flex flex-col gap-y-2 border-b-2 border-primary border-opacity-70">
                    <div className="flex justify-between opacity-80">
                        <p>
                            Subtotal
                        </p>
                        <p>
                            <Currency value={itemsPrice} />
                        </p>
                    </div>
                    <div className="flex justify-between opacity-80">
                        <p>
                            Shipping
                        </p>
                        <p>
                            Free
                        </p>
                    </div>
                    <div className="flex justify-between opacity-80">
                        <p>
                            VAT
                        </p>
                        <p>
                            <Currency value={vat} />
                        </p>
                    </div>
                    <div className="flex justify-between font-primary">
                        <p>
                            Total
                        </p>
                        <p>
                            <Currency value={totalPrice} />
                        </p>
                    </div>
                </div>
            </div>
            <button className="w-full font-primaryb text-xl text-secondary bg-primary py-2 hover:bg-hov text-center place-self-center">
                Checkout
            </button>
            <div className="mt-4">
                <p className="font-primary">
                    Delivery Time:
                </p>
                <p>
                    2 to 5 working days - Bracelet & calf leather strap references.
                    <br />
                    5 to 10 working days - Alligator leather strap references.
                </p>
            </div>
            <div>
                <div className="flex gap-x-2">
                    <Check className="w-4 inline"/>
                    <p>
                        Swiss Made Watches
                    </p>
                </div>
                <div className="flex gap-x-2">
                    <Check className="w-4 inline"/>
                    <p>
                        Free Shipping & Returns
                    </p>
                </div>
                <div className="flex gap-x-2">
                    <Check className="w-4 inline"/>
                    <p>
                        Timeless Warranty
                    </p>
                </div>
                <div className="flex gap-x-2">
                    <Check className="w-4 inline"/>
                    <p>
                        Secure Payment
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CartSummary;