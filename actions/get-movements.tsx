import { Movement } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/movements`;

const getMovements =  async (): Promise<Movement[]> => {
    const res = await fetch(URL);

    return res.json();
};

export default getMovements;