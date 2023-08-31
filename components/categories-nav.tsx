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
    }));

    return (
        <div className="w-full text-primary font-primaryb">
            <h2 className="">
                Categories
            </h2>
            <nav>
                {routes.map((route) => (
                    <Link
                    key={route.href}
                    href={route.href}
                    className={cn(route.active ? "text-neutral-500" : "text-primary")}>
                        {route.label}
                    <img src={billboards[1].imageUrl} />
                    </Link>
                ))}
            </nav>
        </div>
    )
}

export default CategoriesNav;