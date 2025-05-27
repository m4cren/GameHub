import { Search } from "lucide-react";
import { useTheme } from "../../contexts/ThemeContextProvider";
import { useWindowResize } from "../../contexts/WindowSizeContextProvider";
import type { ChangeEvent } from "react";
import type { GameQueryType } from "../../lib/types";

interface SearchBarProps {
   handleSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
   gameQuery: GameQueryType;
}

const SearchBar = ({ handleSearchChange, gameQuery }: SearchBarProps) => {
   const { themes } = useTheme();
   const { screenWidth } = useWindowResize();
   return (
      <>
         <form
            action=""
            className={`relative flex flex-row items-center w-[70%]`}
         >
            <span className={`absolute left-3 lg:left-5`}>
               <Search />
            </span>
            <input
               onChange={handleSearchChange}
               type="text"
               name="searchBy"
               value={gameQuery.searchBy}
               className={`${
                  themes === "dark"
                     ? "bg-[#3B3B3B]"
                     : "bg-[#f5f5f5] [box-shadow:-1px_1px_3px_rgba(0,0,0,0.2)]"
               } rounded-full w-full h-[2.5rem] lg:h-[3rem] pl-12 lg:pl-15 outline-none`}
               placeholder={`${screenWidth <= 450 ? "Search..." : "Search games..."}`}
            />
         </form>
      </>
   );
};

export default SearchBar;
