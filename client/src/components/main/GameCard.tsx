import { Plus } from "lucide-react";
import { useGame } from "../../lib/hooks/useGame";
import { useTheme } from "../../contexts/ThemeContextProvider";
import { useState } from "react";

const GameCard = () => {
   const { games, errMsg, isLoading } = useGame();
   const { themes } = useTheme();
   const [isImgLoading, setIsImgLoading] = useState(true);
   const [hoveredCard, setHoveredCard] = useState<number>(-1);

   return (
      <ul className="grid  grid-cols-[repeat(auto-fill,minmax(300px,1fr))] pb-50 gap-6 w-[100vw] lg:w-[63vw] justify-items-center  md:px-12 lg:px-0">
         {errMsg.toString().length >= 0 && !isLoading && !games ? (
            <h4>{errMsg as string}</h4>
         ) : isLoading ? (
            <p className="text-3xl">Loading...</p>
         ) : (
            games.map(
               (
                  {
                     id,
                     slug,
                     name,
                     background_image,
                     ratings_count,
                     parent_platforms,
                     released,
                     genres,
                  },
                  index,
               ) => (
                  <li
                     onPointerEnter={() => setHoveredCard(id)}
                     onPointerLeave={() => setHoveredCard(-1)}
                     key={index}
                     className={` ${themes === "dark" ? "bg-[#1C1D1E] " : "bg-[#f5f5f5] [box-shadow:-2px_2px_6px_rgba(0,0,0,0.2)]"} w-[23rem] h-fit pb-8 rounded-2xl  overflow-hidden`}
                  >
                     {isImgLoading && (
                        <div
                           className={`${isImgLoading && "background-animation"} w-full h-full`}
                        ></div>
                     )}
                     <img
                        src={background_image}
                        alt={slug}
                        className="max-h-[50%] w-full"
                        onLoad={() => setIsImgLoading(false)}
                     />
                     <div className="flex flex-row gap-3 items-center py-5 pl-5 opacity-60">
                        {parent_platforms.map(({ platform }, index) => (
                           <img
                              key={index}
                              src={`/icons/${platform.slug}.png`}
                              className={`w-[1.2rem] h-[1.2rem] ${themes === "light" && "invert"}`}
                           />
                        ))}
                     </div>
                     <div className="pl-5">
                        <h1 className="text-[1.75rem] font-medium">{name}</h1>
                     </div>
                     <span
                        className={`${themes === "dark" ? "bg-[#373737]" : "bg-[#f5f5f5] [box-shadow:-1px_1px_3px_rgba(0,0,0,0.2)]"} flex ml-5 my-2 flex-row gap-2 items-center justify-center px-2 py-1 w-[4rem]  rounded-sm`}
                     >
                        <Plus size={20} />
                        <p className="text-[0.9rem]">{ratings_count}</p>
                     </span>

                     {hoveredCard === id && (
                        <div className="flex flex-col gap-3 px-5 text-[0.85rem]">
                           <div className="flex flex-row justify-between border-b-1 border-white/30 py-3">
                              <h4 className="opacity-50">Release date:</h4>
                              <h4>{released}</h4>
                           </div>
                           <div className="flex flex-row justify-between border-b-1 border-white/30 py-3">
                              <h4 className="opacity-50">Genres:</h4>
                              <h4>
                                 {genres.map(({ name }) => name).join(", ")}
                              </h4>
                           </div>
                        </div>
                     )}
                  </li>
               ),
            )
         )}
      </ul>
   );
};

export default GameCard;
