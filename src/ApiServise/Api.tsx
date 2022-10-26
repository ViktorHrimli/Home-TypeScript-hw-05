import axios from "axios";
import { Results, IResponseMoivesId, ICastRewievs } from "../Types";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";
const KEY: string = "4568c047ac29c58c34b8c5ba81189d61";

const ApiTrending = async () => {
  try {
    const {
      data: { results },
    } = await axios.get<Results>(`trending/movie/week?api_key=${KEY}`);

    return results;
  } catch (error) {
    throw new Error("Response error");
  }
};

const ApiMoviesDatails = async (id: number) => {
  try {
    const { data } = await axios.get<IResponseMoivesId>(
      `movie/${id}?api_key=${KEY}`
    );

    return data;
  } catch (error) {
    throw new Error("Response error");
  }
};

const ApiMoviesQuery = async (query: string) => {
  try {
    const {
      data: { results },
    } = await axios.get<Results>(
      `search/movie?api_key=${KEY}&language=en-US&page=1&query=${query}&include_adult=false`
    );

    return results;
  } catch (error) {
    throw new Error("Response error");
  }
};

const ApiCastRewieMovies = async (id: number, query: string) => {
  try {
    const {
      data: { cast },
    } = await axios.get<ICastRewievs>(
      `movie/${id}/${query}?api_key=${KEY}&language=en-US`
    );
    return cast;
  } catch (error) {
    throw new Error("Response error");
  }
};

export { ApiTrending, ApiMoviesDatails, ApiMoviesQuery, ApiCastRewieMovies };

// https://api.themoviedb.org/3/movie/{movie_id}/reviews?api_key=<<api_key>>&language=en-US&page=
