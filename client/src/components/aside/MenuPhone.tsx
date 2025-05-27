import { LogOut } from "lucide-react";
import DarkMode from "../navbar/DarkMode";
import { useTheme } from "../../contexts/ThemeContextProvider";
import { useState } from "react";
import CategoryList from "./CategoryList";
import type { GameQueryType, GenresTypes } from "../../lib/types";

interface MenuPhoneProps {
   handleSelectedCategory: (selectedCategory: GenresTypes) => void;
   gameQuery: GameQueryType;

   handleToggle: (action: "toggle" | "untoggle") => void;
}
const MenuPhone = ({
   handleToggle,
   handleSelectedCategory,
   gameQuery,
}: MenuPhoneProps) => {
   const { themes } = useTheme();
   const [isClosing, setIsClosing] = useState<boolean>(false);

   const handleClose = () => {
      setIsClosing(true);
      setTimeout(() => {
         handleToggle("untoggle");
         setIsClosing(false);
      }, 295);
   };
   return (
      <div
         className={`${themes === "dark" ? "bg-[rgba(0,0,0,0.7)] border-1 border-[rgba(255,255,255,0.3)]" : "bg-[rgba(255,255,255,0.1)] [box-shadow:-2px_2px_5px_rgba(0,0,0,0.2)]"} ${isClosing && "untoggle-menu"} toggle-menu fixed z-1 h-[94vh] md:h-[70vh] w-[80vw] md:w-[50vw] transition durion-200  backdrop-blur-[20px] [-webkit-backdrop-filter:blur(20px)]  right-0 bottom-0 rounded-l-2xl  pointer-events-auto`}
      >
         <div className="flex flex-row justify-between px-8 py-8 items-center">
            <DarkMode />
            <LogOut onClick={handleClose} cursor={"pointer"} size={35} />
         </div>
         <hr
            className={`${themes === "dark" ? "opacity-35" : "opacity-10"} mb-8`}
         />
         <CategoryList
            handleSelectedCategory={handleSelectedCategory}
            gameQuery={gameQuery}
         />
      </div>
   );
};

export default MenuPhone;
