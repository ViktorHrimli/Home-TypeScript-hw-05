import { FC, useEffect, useState } from "react";
import { InfoMovies } from "../InfoMovies/InfoMovies";
import { useParams, Link, Outlet } from "react-router-dom";
import { ApiMoviesDatails } from "../ApiServise/Api";
import { IResponseMoivesId } from "../Types";

const MoviesDatails: FC<{}> = () => {
  const [idMovies, setIdMovies] = useState<IResponseMoivesId>();
  const { id } = useParams();

  useEffect(() => {
    ApiMoviesDatails(Number(id)).then((data) => {
      setIdMovies(data);
    });
    return () => {};
  }, [id]);

  return (
    <div>
      <ul>
        <InfoMovies key={idMovies?.id} {...idMovies} />
      </ul>
      <Link to="cast">Cast</Link>
      <Link to="reviewe">Reviewe</Link>
      <Outlet />
    </div>
  );
};

export { MoviesDatails };
