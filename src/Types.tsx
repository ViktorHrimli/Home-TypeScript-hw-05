interface IResponse {
  backdrop_path: string;
  genre_ids: Array<number>;
  id: number;
  original_title: string;
  overview: string;
}
interface IResponseMoivesId {
  backdrop_path?: string;
  id?: number;
  original_title?: string;
  overview?: string;
  genres?: Array<{ id: number; name: string }>;
  release_date?: string;
  original_language?: string;
  popularity?: number;
}

interface ICast {
  character: string;
  credit_id: string;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  order: number;
  original_name: string;
  popularity: number;
  profile_path: string;
}

interface IReviews {
  author: string;
  author_details: {
    name: string;
    username: string;
    avatar_path: string;
    rating: null | number;
  };
  content: string;
  created_at: string;
  id: string;
  updated_at: string;
  url: string;
}

type Results = {
  results: IResponse[] | IReviews[];
};

type ICastRewievs = {
  cast: ICast[];
};

interface IPropsGalleryMovies {
  movie: IResponse[];
}

export type {
  IResponse,
  Results,
  IPropsGalleryMovies,
  IResponseMoivesId,
  ICastRewievs,
  ICast,
};
