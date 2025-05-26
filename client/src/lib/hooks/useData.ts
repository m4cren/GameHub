import { useEffect, useState } from "react";

import create from "../../services/data-client";

export const useData = <T>(request: "games" | "genres") => {
   const [datas, setDatas] = useState<T[]>([]);
   const [isLoading, setIsLoading] = useState<boolean>(true);
   const [errMsg, setErrMsg] = useState<string>("");

   useEffect(() => {
      const { response, controller } = create(`/${request}`).getAllData();
      const fetchGames = async () => {
         try {
            const res = await response;
            setDatas(res.data.results);
         } catch (error: any) {
            setErrMsg("There is a problem fetching data");
         } finally {
            setIsLoading(false);
         }
      };
      fetchGames();
      return () => controller.abort();
   }, [request]);

   return { datas, errMsg, isLoading };
};
