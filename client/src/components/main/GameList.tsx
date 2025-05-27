import { useState } from "react";

import GameCard from "./GameCard";
import Header from "./Header";
import GameCardSkeleton from "./GameCardSkeleton";
import { useData } from "../../lib/hooks/useData";
import type { GameQueryType, GameTypes } from "../../lib/types";

interface GameListProps {
   handlePlatformFilter: (filterer: string) => void;
   handleOrderBy: (orderBy: string) => void;
   gameQuery: GameQueryType;
}
const GameList = ({
   gameQuery,
   handlePlatformFilter,
   handleOrderBy,
}: GameListProps) => {
   const { datas, isLoading } = useData<GameTypes>(
      "games",
      {
         params: {
            genres: gameQuery.genres?.id,
            page_size: 300,
            ordering: gameQuery.orderBy,
            search: gameQuery.searchBy,
         },
      },
      [gameQuery],
   );

   const [hoveredCard, setHoveredCard] = useState<number>(-1);

   const filteredGamesByPlatform =
      gameQuery.platformFilter !== "all"
         ? datas.filter(({ parent_platforms }) =>
              parent_platforms
                 .map(({ platform }) => {
                    return platform.slug;
                 })
                 .includes(gameQuery.platformFilter),
           )
         : datas;
   console.log(
      "Render: isLoading =",
      isLoading,
      "datas.length =",
      datas.length,
   );

   return (
      <div className="flex flex-col gap-15 mt-8 md:mt-0">
         <Header
            handleOrderBy={handleOrderBy}
            gameQuery={gameQuery}
            handlePlatformFilter={handlePlatformFilter}
         />
         <ul className="grid  grid-cols-[repeat(auto-fill,minmax(300px,1fr))] pb-50 gap-6 w-[100vw] lg:w-[63vw] justify-items-center  md:px-12 lg:px-0">
            {isLoading ? (
               <GameCardSkeleton />
            ) : (
               filteredGamesByPlatform.map((game, index) => (
                  <GameCard
                     key={index}
                     gameTypes={game}
                     handleHover={(id: number) => {
                        setHoveredCard(id);
                     }}
                     hoveredCard={hoveredCard}
                  />
               ))
            )}
         </ul>
      </div>
   );
};

export default GameList;
