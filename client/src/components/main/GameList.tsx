import { memo, useState } from "react";

import GameCard from "./GameCard";
import Header from "./Header";
import GameCardSkeleton from "./GameCardSkeleton";
import { useData } from "../../lib/hooks/useData";
import type { GameTypes } from "../../lib/types";

interface GameListProps {
   selectedCategory: string;
}
const GameList = ({ selectedCategory }: GameListProps) => {
   const { datas, isLoading } = useData<GameTypes>("games");

   const [hoveredCard, setHoveredCard] = useState<number>(-1);

   const filteredGames = datas.filter(({ genres }) =>
      genres
         .map(({ name }) => {
            return name;
         })
         .includes(selectedCategory),
   );

   return (
      <div className="flex flex-col gap-15 mt-8 md:mt-0">
         <Header selectedCategory={selectedCategory} />
         <ul className="grid  grid-cols-[repeat(auto-fill,minmax(300px,1fr))] pb-50 gap-6 w-[100vw] lg:w-[63vw] justify-items-center  md:px-12 lg:px-0">
            {isLoading ? (
               <GameCardSkeleton />
            ) : filteredGames.length === 0 && !isLoading ? (
               <h1 className="font-medium text-3xl text-center">No Data</h1>
            ) : (
               filteredGames.map((game, index) => (
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

export default memo(GameList);
