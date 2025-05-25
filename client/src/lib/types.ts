export type EsbrRatingTypes = {
   id: number;
   name: string;
   slig: string;
};

export type GenresTypes = {
   id: number;
   games_count: number;
   image_background: string;
   name: string;
   slug: string;
};

export type ParentPlatformTypes = {
   platform: {
      id: number;
      name: string;
      slug: string;
   };
};

export type PlatformTypes = {
   platform: {
      games_count: number;
      id: number;
      image_background: string;
      name: string;
      slug: string;
   };
   released_at: string;
   requirements_en: {
      minimum: string;
      recommended: string;
   };
};

export type TagTypes = {
   games_count: number;
   id: number;
   image_background: string;
   language: string;
   name: string;
   slug: string;
};

export type GameTypes = {
   id: number;
   name: string;
   background_image: string;
   metacritic: number;
   esrb_rating: EsbrRatingTypes;
   genres: GenresTypes[];
   parent_platforms: ParentPlatformTypes[];
   platforms: PlatformTypes[];
   playtime: number;
   rating: number;
   rating_top: 5;
   ratings: {
      id: number;
      title: string;
      percent: number;
      count: number;
   }[];
   ratings_count: number;
   released: string;
   reviews_count: number;
   reviews_text_count: number;
   short_screenshots: {
      id: number;
      image: string;
   }[];
   slug: string;
   suggestions_count: number;
   tags: TagTypes[];
};
