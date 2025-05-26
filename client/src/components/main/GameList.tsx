import { useState } from "react";

import GameCard from "./GameCard";
import Header from "./Header";
import GameCardSkeleton from "./GameCardSkeleton";
import { useData } from "../../lib/hooks/useData";
import type { GameTypes } from "../../lib/types";

interface GameListProps {
   selectedCategory: string;
}
const GameList = ({ selectedCategory }: GameListProps) => {
   const { datas, errMsg, isLoading } = useData<GameTypes>("games");

   const [hoveredCard, setHoveredCard] = useState<number>(-1);

   return (
      <div className="flex flex-col gap-15 mt-8 md:mt-0">
         <Header selectedCategory={selectedCategory} />
         <ul className="grid  grid-cols-[repeat(auto-fill,minmax(300px,1fr))] pb-50 gap-6 w-[100vw] lg:w-[63vw] justify-items-center  md:px-12 lg:px-0">
            {isLoading ? (
               <GameCardSkeleton />
            ) : (
               datas.map((game, index) => (
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
