import bullsEye from "/emojies/bulls-eye.webp";
import meh from "/emojies/meh.webp";
import thumbsUp from "/emojies/thumbs-up.webp";

const Emoji = ({ ratings }: { ratings: number }) => {
   const emojiMap: { [key: number]: { src: string; alt: string } } = {
      0: { src: meh, alt: "meh" },
      1: { src: meh, alt: "meh" },
      2: { src: meh, alt: "meh" },
      3: { src: meh, alt: "meh" },
      4: { src: thumbsUp, alt: "thumbs-up" },
      5: { src: bullsEye, alt: "bulls-eye" },
   };
   return (
      <img
         className="w-[2rem] h-[2rem] object-fill"
         src={emojiMap[ratings].src}
         alt={emojiMap[ratings].alt}
      ></img>
   );
};

export default Emoji;
