import { FC } from "react";
import { ICast } from "../Types";

const CastReviewItems: FC<ICast> = ({
  character,
  name,
  original_name,
  profile_path,
  popularity,
}) => {
  return (
    <li>
      <img src={`https://image.tmdb.org/t/p/w200${profile_path}`} alt={name} />
      <p>{character}</p>
      <p>{name}</p>
      <p>{original_name}</p>
      <p>{popularity}</p>
    </li>
  );
};

export { CastReviewItems };
