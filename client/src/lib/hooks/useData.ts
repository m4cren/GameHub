import { useEffect, useState } from "react";

import create from "../../services/data-client";

export const useData = <T>(request: "games" | "genres") => {
   const [datas, setDatas] = useState<T[]>([]);
   const [isLoading, setIsLoading] = useState<boolean>(true);
   const [errMsg, setErrMsg] = useState<string>("");

   useEffect(() => {
      const fetchGames = async () => {
         try {
            const res = await create(`/${request}`).getAllData().response;
            setDatas(res.data.results);
         } catch (error) {
            setErrMsg("There is a problem fetching data");
         } finally {
            setTimeout(() => {
               setIsLoading(false);
            }, 3000);
         }
      };
      fetchGames();
      return () => create(`/${request}`).getAllData().controller.abort();
   }, []);

   return { datas, errMsg, isLoading };
};
