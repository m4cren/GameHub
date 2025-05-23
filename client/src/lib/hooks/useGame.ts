import { useEffect, useState } from "react";
import type { GameTypes } from "../types";

import gameService from "../../services/game-client";

export const useGame = () => {
    const [games, setGames] = useState<GameTypes[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [errMsg, setErrMsg] = useState<string>("");
    useEffect(() => {
        const { response, controller } = gameService.getAllGames();

        const fetchGames = async () => {
            try {
                const res = await response;
                setGames(res.data.results);
            } catch (error) {
                setErrMsg("There is a problem fetching data");
            } finally {
                setIsLoading(false);
            }
        };
        fetchGames();
        return () => controller.abort();
    }, []);

    return { games, errMsg, isLoading };
};
