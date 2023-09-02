"use client"

import { Bracelet, Case, Category, Movement } from "@/types";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import qs from "query-string";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface FilterProps {
    data: (Case | Movement | Bracelet | Category)[];
    name: string;
    valueKey: string;
};

const Filter: React.FC<FilterProps> = ({
    data,
    name,
    valueKey
}) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
      setOpen(!open);
    };

    const searchParams = useSearchParams();
    const router = useRouter();
  
    const selectedValue = searchParams.get(valueKey);
    
    const onClick = (id: string) => {
      const current = qs.parse(searchParams.toString());
  
      const query = {
        ...current,
        [valueKey]: id
      };
  
      if (current[valueKey] === id) {
        query[valueKey] = null;
      }
  
      const url = qs.stringifyUrl({
        url: window.location.href,
        query,
      }, { skipNull: true });
  
      router.push(url);
    }

    return (
        <div>                    
            <div className="w-[150px] dropdown">
                <button onClick={handleOpen} className="w-full flex pb-1 border-b-2 border-primary justify-between">
                    {name}
                    {!open && <ChevronDownIcon  />}
                    {open && <ChevronUpIcon  />}
                </button>
                {open ? (
                    <div className="mt-2 flex flex-col gap-y-2">
                        {data.map(filter => (
                            <div className="flex justify-between" key={filter.id}>
                                <button 
                                className={cn("border-2 border-primary w-6", selectedValue === filter.id && "bg-primary")}
                                onClick={() => {onClick(filter.id)}}
                                >
                                </button>
                                {filter.name}
                            </div>
                        ))}
                    </div>
                ) : null}
            </div>
        </div>
    );
};

export default Filter;
