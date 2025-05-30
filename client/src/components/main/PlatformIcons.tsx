import {
   FaWindows,
   FaPlaystation,
   FaXbox,
   FaApple,
   FaLinux,
   FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import type { ParentPlatformTypes } from "../../lib/types";
import type { IconType } from "react-icons/lib";

const PlatformIcons = ({
   parent_platforms,
}: {
   parent_platforms: ParentPlatformTypes[];
}) => {
   const iconMaps: { [key: string]: IconType } = {
      pc: FaWindows,
      playstation: FaPlaystation,
      xbox: FaXbox,
      mac: FaApple,
      linux: FaLinux,
      android: FaAndroid,
      nintendo: SiNintendo,
      ios: MdPhoneIphone,
      web: BsGlobe,
   };

   return (
      <div className="flex flex-row pl-5 gap-2  py-6">
         {parent_platforms.map(({ id, slug, name }) => {
            const IconComponent = iconMaps[slug];

            return IconComponent ? (
               <IconComponent key={id} size={16} opacity={0.65} />
            ) : (
               <h1>{name}</h1>
            );
         })}
      </div>
   );
};

export default PlatformIcons;
