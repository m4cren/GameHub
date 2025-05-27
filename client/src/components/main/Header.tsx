import type { ChangeEvent } from "react";
import { useTheme } from "../../contexts/ThemeContextProvider";
import { orderOptions } from "../../lib/constants";

import type { GameQueryType } from "../../lib/types";
import { platforms } from "../../services/platform-datas";

interface HeaderProps {
   gameQuery: GameQueryType;
   handlePlatformFilter: (filterer: string) => void;
   handleOrderBy: (orderBy: string) => void;
}

const Header = ({
   gameQuery,
   handlePlatformFilter,
   handleOrderBy,
}: HeaderProps) => {
   const { themes } = useTheme();

   const handleChangePlatforms = (e: ChangeEvent<HTMLSelectElement>) => {
      handlePlatformFilter(e.target.value);
   };
   const handleChangeOrder = (e: ChangeEvent<HTMLSelectElement>) => {
      handleOrderBy(e.target.value);
   };
   return (
      <div className="flex flex-col gap-4 px-6 md:px-10 md:py-8 lg:px-0">
         <h1 className="font-extrabold text-[3.25rem] md:text-[4rem] leading-14">
            {gameQuery.genres ? gameQuery.genres?.name : "All"}
         </h1>
         <div className="flex flex-row gap-2 md:gap-4">
            <select
               onChange={handleChangePlatforms}
               className={`${themes === "dark" ? "bg-[#212121]" : "bg-[#F7F8F3] [box-shadow:-2px_2px_6px_rgba(0,0,0,0.2)]"}   transition duration-200 flex flex-row items-center gap-2 md:gap-4 text-[0.85rem] md:text-[0.95rem] lg:text-[1rem] rounded-md px-2 md:px-4 py-1 md:py-2`}
            >
               <option value={"all"}>All Platforms</option>
               {platforms.results.map(({ name, id, slug }) => (
                  <option key={id} value={slug}>
                     {name}
                  </option>
               ))}
            </select>

            <select
               onChange={handleChangeOrder}
               className={`${themes === "dark" ? "bg-[#212121]" : "bg-[#F7F8F3] [box-shadow:-2px_2px_6px_rgba(0,0,0,0.2)]"}    transition duration-200 flex flex-row items-center gap-2 md:gap-4 text-[0.85rem] md:text-[0.95rem] lg:text-[1rem]  rounded-md px-2 md:px-4 py-1 md:py-2`}
            >
               {orderOptions.map(({ name, slug }, index) => (
                  <option key={index} value={slug}>
                     {name}
                  </option>
               ))}
            </select>
         </div>
      </div>
   );
};

export default Header;
