import GameCard from "./GameCard";
import Header from "./Header";

interface GameListProps {
    selectedCategory: string;
}
const GameList = ({ selectedCategory }: GameListProps) => {
    return (
        <div className="flex flex-col gap-15 mt-8 md:mt-0">
            <Header selectedCategory={selectedCategory} />
            <GameCard />
        </div>
    );
};

export default GameList;
