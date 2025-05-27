import { useEffect, useState } from "react";

import create from "../../services/data-client";
import type { AxiosRequestConfig } from "axios";

export const useData = <T>(
   select: "games" | "genres" | "platforms/lists/parents",
   requestConfig?: AxiosRequestConfig,
   deps?: any[],
) => {
   const [datas, setDatas] = useState<T[]>([]);
   const [isLoading, setIsLoading] = useState<boolean>(false);
   const [errMsg, setErrMsg] = useState<string>("");

   useEffect(
      () => {
         setIsLoading(true);
         const { response, controller } = create(
            `/${select}`,
            requestConfig,
         ).getAllData();
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
      },
      deps ? [...deps] : [select],
   );

   return { datas, errMsg, isLoading };
};
