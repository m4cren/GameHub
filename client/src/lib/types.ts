export type GameTypes = {
    id: number;
    name: string;
    background_image: string;
    esrb_rating: {
        id: number;
        name: string;
        slig: string;
    };
    genres: {
        id: number;
        games_count: number;
        image_background: string;
        name: string;
        slug: string;
    }[];
    parent_platforms: {
        platform: {
            id: number;
            name: string;
            slug: string;
        };
    }[];
    platforms: {
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
    }[];
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
    tags: {
        games_count: number;
        id: number;
        image_background: string;
        language: string;
        name: string;
        slug: string;
    }[];
};
