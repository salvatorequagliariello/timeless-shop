import { Bracelet } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/bracelets`;

const getBracelets =  async (): Promise<Bracelet[]> => {
    const res = await fetch(URL);

    return res.json();
};

export default getBracelets;