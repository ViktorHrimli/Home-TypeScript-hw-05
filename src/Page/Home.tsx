import { FC, useEffect, useState } from "react";
import { Navigate } from "../Navigate/Navigate";
import { Gallery } from "../Gallery/Gallery";
import { ApiTrending } from "../ApiServise/Api";
import { IResponse } from "../Types";

const Home: FC<{}> = () => {
  const [movie, setMovie] = useState<IResponse[]>([]);
  useEffect(() => {
    ApiTrending().then((data) => {
      setMovie(data);
    });
    return () => {};
  }, []);

  return (
    <div>
      <Navigate />
      <Gallery movie={movie} />
    </div>
  );
};

export { Home };
