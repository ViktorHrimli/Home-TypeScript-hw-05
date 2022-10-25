import { FC, useEffect, useState } from "react";
import { Gallery } from "../Gallery/Gallery";
import { Forms } from "../Form/Form";
import { useSearchParams } from "react-router-dom";
import { IResponse } from "../Types";
import { ApiMoviesQuery } from "../ApiServise/Api";

const Movies: FC<{}> = () => {
  const [serchParams] = useSearchParams();
  const [queryMovies, setQueryMovies] = useState<IResponse[]>([]);
  const query = serchParams.get("query");

  useEffect(() => {
    if (query === null) return;
    ApiMoviesQuery(query).then((data) => {
      console.log(data);
      setQueryMovies(data);
    });
    return () => {};
  }, [query]);

  return (
    <div>
      <Forms />
      {query && <Gallery movie={queryMovies} />}
    </div>
  );
};

export { Movies };
