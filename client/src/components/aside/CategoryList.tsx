import { useState } from "react";
import { useWindowResize } from "../../contexts/WindowSizeContextProvider";

import type { GameQueryType, GenresTypes } from "../../lib/types";

import getCroppedImgUrl from "../../services/img-url";

import { genres } from "../../services/genre-datas";

interface CategoryListProps {
   handleSelectedCategory: (selectedCategory: GenresTypes) => void;
   gameQuery: GameQueryType;
}

const CategoryList = ({
   handleSelectedCategory,
   gameQuery,
}: CategoryListProps) => {
   const { screenWidth } = useWindowResize();
   const [datas] = useState<GenresTypes[]>(genres.results);
   return (
      <div className="sticky top-5 pl-6 flex flex-col gap-6">
         <h3 className="font-medium text-[1.75rem]">Genres</h3>
         <ul
            className={`${screenWidth >= 450 && "[mask-image:linear-gradient(to_top,transparent,black_60%)] [-webkit-mask-image:linear-gradient(to_top,transparent,black_90%)] min-[580px]:[mask-image:linear-gradient(to_top,transparent,black_40%)]"} flex flex-col gap-4 max-h-[75vh] overflow-y-scroll pb-80 `}
         >
            {datas.map((data) => (
               <li
                  key={data.id}
                  className={`${data.id === gameQuery.genres?.id && "font-bold underline"} cursor-pointer hover:translate-x-3 transition duration-200 list-none flex flex-row gap-2 items-center`}
                  onClick={() => handleSelectedCategory(data)}
               >
                  <img
                     src={getCroppedImgUrl(data.image_background)}
                     alt=""
                     className={`  w-[3.5rem] h-[3.5rem] rounded-xl `}
                  />
                  <p className="text-[1.4rem] font-ight">{data.name}</p>
               </li>
            ))}
         </ul>
      </div>
   );
};

export default CategoryList;
