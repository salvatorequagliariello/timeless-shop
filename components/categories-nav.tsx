import { usePathname } from "next/navigation";
import Link from "next/link";

interface CategoriesNavProps {
    data: any
};

const CategoriesNav: React.FC<CategoriesNavProps> = ({
    data
}) => {
    const pathname = usePathname();

    const routes = data.map((route) => ({
        href: `/category/${route.id}`,
        label: route.name,
        active: pathname === `category/${route.id}`
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
                    href={route.href}>
                    </Link>
                ))}
            </nav>
        </div>
    )
}

export default CategoriesNav;