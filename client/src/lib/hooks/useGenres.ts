import { useEffect, useState } from "react";
import type { GenresListTypes } from "../types";
import genreService from "../../services/genres-client";

export const useGenres = () => {
   const [genres, setGenres] = useState<GenresListTypes[]>([]);
   const [isLoading, setIsLoading] = useState<boolean>(true);
   const [errMsg, setErrMsg] = useState<string>("");

   useEffect(() => {
      const { response, controller } = genreService.getAllGenres();

      const fetchGames = async () => {
         try {
            const res = await response;
            setGenres(res.data.results);
            console.log(res.data.results);
         } catch (error) {
            setErrMsg("There is a problem fetching data");
         } finally {
            setTimeout(() => {
               setIsLoading(false);
            }, 3000);
         }
      };
      fetchGames();
      return () => controller.abort();
   }, []);

   return { genres, errMsg, isLoading };
};
