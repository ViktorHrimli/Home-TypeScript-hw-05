import { FC } from "react";
import { Link } from "react-router-dom";
import { IResponse } from "../Types";
const GalleryItems: FC<IResponse> = ({ id, original_title, backdrop_path }) => {
  return (
    <li>
      <Link to={`/movies/${id}`}>
        <img
          src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
          alt={original_title}
        />
        <p>{original_title}</p>
      </Link>
    </li>
  );
};

export { GalleryItems };
