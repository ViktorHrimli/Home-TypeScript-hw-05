import { FC } from "react";
import { GalleryItems } from "../GalleryItems/GalleryItems";
import { IPropsGalleryMovies } from "../Types";

const Gallery: FC<IPropsGalleryMovies> = ({ movie }) => {
  return (
    <div>
      <ul>
        {movie.map((items) => (
          <GalleryItems key={items.id} {...items} />
        ))}
      </ul>
    </div>
  );
};
export { Gallery };
