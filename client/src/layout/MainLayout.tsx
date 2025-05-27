import { useState, type ChangeEvent } from "react";
import CategoryList from "../components/aside/CategoryList";
import GameList from "../components/main/GameList";
import NavBar from "../components/navbar/NavBar";
import layout from "./main.module.css";
import type { GameQueryType, GenresTypes } from "../lib/types";

const MainLayout = () => {
   const [gameQuery, setGameQuery] = useState<GameQueryType>({
      genres: null,
      platformFilter: "all",
      orderBy: "default",
      searchBy: "",
   });

   const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
      console.log(e.target.value);
      if (e.target) {
         setGameQuery({ ...gameQuery, [e.target.name]: e.target.value });
      }
   };

   const handlePlatformFilterer = (filterer: string) => {
      setGameQuery({ ...gameQuery, platformFilter: filterer });
   };

   const handleSelectedCategory = (selectedGenre: GenresTypes) => {
      setGameQuery({ ...gameQuery, genres: selectedGenre });
   };

   const handleOrderBy = (orderBy: string) => {
      setGameQuery({ ...gameQuery, orderBy: orderBy });
   };
   return (
      <div className={layout.main}>
         <nav className="">
            <NavBar
               handleSelectedCategory={handleSelectedCategory}
               gameQuery={gameQuery}
               handleSearchChange={handleSearchChange}
            />
         </nav>
         <main className="">
            <GameList
               handleOrderBy={handleOrderBy}
               handlePlatformFilter={handlePlatformFilterer}
               gameQuery={gameQuery}
            />
         </main>
         <aside className=" ">
            <CategoryList
               handleSelectedCategory={handleSelectedCategory}
               gameQuery={gameQuery}
            />
         </aside>
         <footer className="flex flex-row gap-2 justify-center items-center">
            <h1>@m4cren</h1>
         </footer>
      </div>
   );
};

export default MainLayout;
