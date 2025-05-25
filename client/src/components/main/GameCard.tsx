import { Plus } from "lucide-react";

import { useTheme } from "../../contexts/ThemeContextProvider";

import PlatformIcons from "./PlatformIcons";
import type { GameTypes } from "../../lib/types";
import CritiqueScore from "./CritiqueScore";
import getCroppedImgUrl from "../../services/img-url";

interface GameCardProps {
   gameTypes: GameTypes;
   handleHover: (id: number) => void;
   hoveredCard: number;
}

const GameCard = ({ gameTypes, handleHover, hoveredCard }: GameCardProps) => {
   const { themes } = useTheme();

   return (
      <li
         onPointerEnter={() => {
            handleHover(gameTypes.id);
         }}
         onPointerLeave={() => handleHover(-1)}
         className={` ${themes === "dark" ? "bg-[#1C1D1E] " : "bg-[#f5f5f5] [box-shadow:-2px_2px_6px_rgba(0,0,0,0.2)]"}  w-[23rem] h-fit pb-8 rounded-2xl  overflow-hidden`}
      >
         <img
            src={getCroppedImgUrl(gameTypes.background_image)}
            alt={gameTypes.slug}
            className="max-h-[50%] w-full"
         />

         <div className="flex flex-row justify-between items-center">
            <PlatformIcons parent_platforms={gameTypes.parent_platforms} />
            <CritiqueScore metacritic={gameTypes.metacritic} />
         </div>

         <div className="pl-5">
            <h1 className="text-[1.75rem] font-medium">{gameTypes.name}</h1>
         </div>
         <span
            className={`${themes === "dark" ? "bg-[#373737]" : "bg-[#f5f5f5] [box-shadow:-1px_1px_3px_rgba(0,0,0,0.2)]"} flex ml-5 my-2 flex-row gap-2 items-center justify-center px-2 py-1 w-[5rem]  rounded-sm`}
         >
            <Plus size={20} />
            <p className="text-[0.9rem]">{gameTypes.ratings_count}</p>
         </span>

         {hoveredCard === gameTypes.id && (
            <div className="flex flex-col gap-3 px-5 text-[0.85rem]">
               <div className="flex flex-row justify-between border-b-1 border-white/30 py-3">
                  <h4 className="opacity-50">Release date:</h4>
                  <h4>{gameTypes.released}</h4>
               </div>
               <div className="flex flex-row justify-between border-b-1 border-white/30 py-3">
                  <h4 className="opacity-50">Genres:</h4>
                  <h4>{gameTypes.genres.map(({ name }) => name).join(", ")}</h4>
               </div>
            </div>
         )}
      </li>
   );
};

export default GameCard;
