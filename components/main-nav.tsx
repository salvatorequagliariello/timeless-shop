"use client";
import { usePathname } from "next/navigation";

interface MainNavProps {
    data: any
}


const MainNav: React.FC<MainNavProps> = ({
    data
}) => {
    const pathname = usePathname();

    return (
        <div>
            <p className="font-gelvetica text-primary">
                CIAO
            </p>
        </div>
    );
};

export default MainNav;