export interface Genre {
  id: number;
  name: string;
}

// export interface Movie {
//   title: string;
//   backdrop_path: string;
//   media_type?: string;
//   release_date?: string;
//   first_air_date: string;
//   genre_ids: number[];
//   id: number;
//   name: string;
//   origin_country: string[];
//   original_language: string;
//   original_name: string;
//   overview: string;
//   popularity: number;
//   poster_path: string;
//   vote_average: number;
//   vote_count: number;
// }

export interface Movie {
  adult: boolean;
  backdrop_path: string;
  id: number;
  title?: string;
  original_language: string;
  original_title?: string;
  overview: string;
  poster_path: string;
  media_type: string;
  genre_ids: number[];
  popularity: number;
  release_date?: Date;
  video?: boolean;
  vote_average: number;
  vote_count: number;
  name?: string;
  original_name?: string;
  first_air_date?: Date;
  origin_country?: string[];
}

export interface Element {
  type:
    | "Bloopers"
    | "Featurette"
    | "Behind the Scenes"
    | "Clip"
    | "Trailer"
    | "Teaser";
}
