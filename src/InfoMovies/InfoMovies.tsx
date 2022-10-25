import { FC } from "react";
import { IResponseMoivesId } from "../Types";

const InfoMovies: FC<IResponseMoivesId> = ({
  backdrop_path,
  overview,
  original_title,
  genres,
}) => {
  return (
    <div>
      <li>
        <img
          src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
          alt={original_title}
        />
        <p>{original_title}</p>
        <p>{overview}</p>
        <ul>
          {genres?.map(({ id, name }) => {
            return (
              <li key={id}>
                <p>{name}</p>
              </li>
            );
          })}
        </ul>
      </li>
    </div>
  );
};

export { InfoMovies };
