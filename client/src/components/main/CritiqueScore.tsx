const CritiqueScore = ({ metacritic }: { metacritic: number }) => {
   return (
      <span
         className={`${metacritic >= 88 ? "bg-green-400/30" : metacritic >= 60 ? "bg-yellow-400/30" : "bg-red-400/30"} rounded-sm  mr-5 px-4 text-[0.87rem] font-bold text-white/85`}
      >
         {metacritic}
      </span>
   );
};

export default CritiqueScore;
