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

type Results = {
  results: IResponse[];
};

interface IPropsGalleryMovies {
  movie: IResponse[];
}

export type { IResponse, Results, IPropsGalleryMovies, IResponseMoivesId };
