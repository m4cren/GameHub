import SearchBar from "./SearchBar";
import DarkMode from "./DarkMode";
import { useState, type ChangeEvent } from "react";
import { Menu } from "lucide-react";
import MenuPhone from "../aside/MenuPhone";
import { useWindowResize } from "../../contexts/WindowSizeContextProvider";
import type { GameQueryType, GenresTypes } from "../../lib/types";

interface NavBarProps {
   handleSelectedCategory: (selectedCategory: GenresTypes) => void;
   handleSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
   gameQuery: GameQueryType;
}

const NavBar = ({
   handleSelectedCategory,
   gameQuery,
   handleSearchChange,
}: NavBarProps) => {
   const { screenWidth } = useWindowResize();
   const [isMenu, setIsMenu] = useState<boolean>(false);

   const handleToggle = (action: "toggle" | "untoggle") => {
      if (action === "toggle") {
         setIsMenu(true);
      } else {
         setIsMenu(false);
      }
   };

   return (
      <div className="flex flex-row items-center px-5 md:px-10 lg:px-20 py-8 justify-between ">
         {isMenu && screenWidth <= 850 && (
            <MenuPhone
               handleToggle={handleToggle}
               handleSelectedCategory={handleSelectedCategory}
               gameQuery={gameQuery}
            />
         )}
         <div
            className={`flex flex-row gap-4 lg:gap-8 w-[100%] lg:w-[70%] items-center ${screenWidth <= 850 && "justify-between "}`}
         >
            <h1 className="text-[1.75rem] md:text-[2rem] lg:text-[2.25rem] font-bold ">
               {screenWidth <= 450 ? "GHub" : "GameHub"}
            </h1>
            <SearchBar
               handleSearchChange={handleSearchChange}
               gameQuery={gameQuery}
            />
            {screenWidth <= 850 && (
               <Menu
                  size={40}
                  className="sticky top-0"
                  cursor={"pointer"}
                  onClick={() => {
                     handleToggle("toggle");
                  }}
               />
            )}
         </div>
         {screenWidth >= 850 && <DarkMode />}
      </div>
   );
};

export default NavBar;
