import { useTheme } from "../../contexts/ThemeContextProvider";
import { useWindowResize } from "../../contexts/WindowSizeContextProvider";
import { useGenres } from "../../lib/hooks/useGenres";
import getCroppedImgUrl from "../../services/img-url";
import CategorySkeleton from "./CategorySkeleton";

interface CategoryListProps {
   handleSelectedCategory: (category: string) => void;
   selectedCategory: string;
}

const CategoryList = ({
   handleSelectedCategory,
   selectedCategory,
}: CategoryListProps) => {
   const { screenWidth } = useWindowResize();
   const { genres, isLoading } = useGenres();
   return (
      <div className="sticky top-5 pl-6 flex flex-col gap-6">
         <h3 className="font-medium text-[1.75rem]">Genres</h3>
         <ul
            className={`${screenWidth >= 450 && "[mask-image:linear-gradient(to_top,transparent,black_60%)] [-webkit-mask-image:linear-gradient(to_top,transparent,black_90%)] min-[580px]:[mask-image:linear-gradient(to_top,transparent,black_40%)]"} flex flex-col gap-4 max-h-[75vh] overflow-y-scroll pb-80 `}
         >
            {isLoading ? (
               <CategorySkeleton />
            ) : (
               genres.map(({ id, image_background, name }) => (
                  <li
                     key={id}
                     className={`${name === selectedCategory && "font-bold underline"} cursor-pointer hover:translate-x-3 transition duration-200 list-none flex flex-row gap-2 items-center`}
                     onClick={() => handleSelectedCategory(name)}
                  >
                     <img
                        src={getCroppedImgUrl(image_background)}
                        alt=""
                        className={`  w-[3.5rem] h-[3.5rem] rounded-xl `}
                     />
                     <p className="text-[1.4rem] font-ight">{name}</p>
                  </li>
               ))
            )}
         </ul>
      </div>
   );
};

export default CategoryList;
