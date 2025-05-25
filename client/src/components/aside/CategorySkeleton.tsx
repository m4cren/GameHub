import { useTheme } from "../../contexts/ThemeContextProvider";
import { NUMBER_OF_SKELETON } from "../../lib/constants";

let arr: number[] = [];
for (let i = 0; i < NUMBER_OF_SKELETON; i++) {
   arr.push(i);
}

const CategorySkeleton = () => {
   const { themes } = useTheme();

   return arr.map((_, index) => (
      <li
         key={index}
         className={` ${themes === "dark" ? "bg-[#1C1D1E] background-animation " : "bg-[#f5f5f5] background-light-animation "}  w-[90%] py-8 h-[7rem]  rounded-md `}
      ></li>
   ));
};

export default CategorySkeleton;
