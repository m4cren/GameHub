import { Plus } from "lucide-react";
import { useGame } from "../../lib/hooks/useGame";
import { useTheme } from "../../contexts/ThemeContextProvider";
import { useState } from "react";

const icon_links = [
    "windows-brands",
    "playstation-brands",
    "apple-brands",
    "linux-brands",
    "xbox-brands",
];

const GameCard = () => {
    const { games, errMsg, isLoading } = useGame();
    const { themes } = useTheme();
    const [isImgLoading, setIsImgLoading] = useState(true);
    return (
        <ul className="grid  grid-cols-[repeat(auto-fill,minmax(300px,1fr))] pb-50 gap-6 w-[100vw] lg:w-[63vw] justify-items-center  md:px-12 lg:px-0">
            {errMsg.toString().length >= 0 && !isLoading && !games ? (
                <h4>{errMsg as string}</h4>
            ) : isLoading ? (
                <p className="text-3xl">Loading...</p>
            ) : (
                games.map(
                    (
                        { slug, name, background_image, ratings_count },
                        index,
                    ) => (
                        <li
                            key={index}
                            className={` ${themes === "dark" ? "bg-[#1C1D1E] " : "bg-[#f5f5f5] [box-shadow:-2px_2px_6px_rgba(0,0,0,0.2)]"} w-[23rem] h-[25rem] rounded-2xl  overflow-hidden`}
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
                                {icon_links.map((icons, index) => (
                                    <img
                                        key={index}
                                        src={`/icons/${icons}.png`}
                                        className={`w-[1.2rem] h-[1.2rem] ${themes === "light" && "invert"}`}
                                    />
                                ))}
                            </div>
                            <div className="pl-5">
                                <h1 className="text-[1.75rem] font-medium">
                                    {name}
                                </h1>
                            </div>
                            <span
                                className={`${themes === "dark" ? "bg-[#373737]" : "bg-[#f5f5f5] [box-shadow:-1px_1px_3px_rgba(0,0,0,0.2)]"} flex ml-5 mt-2 flex-row gap-2 items-center justify-center px-2 py-1 w-[4rem]  rounded-sm`}
                            >
                                <Plus size={20} />
                                <p className="text-[0.9rem]">{ratings_count}</p>
                            </span>
                        </li>
                    ),
                )
            )}
        </ul>
    );
};

export default GameCard;
