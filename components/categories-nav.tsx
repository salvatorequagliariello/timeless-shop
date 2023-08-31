import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Billboard, Category } from "@/types";

interface CategoriesNavProps {
    data: Category[];
    billboards: Billboard[];
};

const CategoriesNav: React.FC<CategoriesNavProps> = ({
    data,
    billboards
}) => {
    const pathname = usePathname();

    const routes = data.map((route) => ({
        href: `/category/${route.id}`,
        label: route.name,
        active: pathname === `category/${route.id}`,
        image: billboards.filter(billboard => (billboard.label === route.name))[0].imageUrl,
    }));

    return (
        <div className="w-max text-primary font-primaryb mt-8 bg-secondary mx-auto lg:h-[400px]">
            <h2 className="text-xl">
                Watches
            </h2>
            <nav className="w-max mx-auto grid grid-cols-4 place-content-center gap-4 mt-4">
                <Link
                    key="allwatches"
                    href="/"
                    className="relative w-76 h-36 bg-primary rounded-xl">
                        <p className="absolute left-2 bottom-2 text-slate-100">
                            All watches
                        </p>
                </Link>
                {routes.map((route) => (
                    <Link
                        key={route.href}
                        href={route.href}
                        className="w-76 h-36 text-primary relative group hover:outline-2 outline-slate-800">
                        <div className="absolute w-full h-full bg-gradient-to-t from-gray-700 to-transparent opacity-70 rounded-xl"></div>
                            <p className="absolute left-2 bottom-2 text-slate-100">
                                {route.label}
                            </p>
                        <img src={route.image} className="w-full h-full rounded-xl group-hover:shadow-lg shadow-primary object-cover" />
                    </Link>
                ))}
            </nav>
        </div>
    )
}

export default CategoriesNav;