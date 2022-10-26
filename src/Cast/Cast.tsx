import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ApiCastRewieMovies } from "../ApiServise/Api";
import { ICast } from "../Types";
import { CastReviewItems } from "../CastReviewItems/CastReviewItems";
const Cast: FC<{}> = () => {
  const { id } = useParams();
  const [rewieve, setReviewe] = useState<ICast[]>([]);

  useEffect(() => {
    if (id === null) return;
    ApiCastRewieMovies(Number(id), "credits").then((data) => {
      setReviewe(data);
    });

    return () => {};
  }, [id]);

  return (
    <div>
      <ul>
        {rewieve.length !== 0 ? (
          rewieve.map((item) => {
            return <CastReviewItems key={item.id} {...item} />;
          })
        ) : (
          <h1>Sorry</h1>
        )}
      </ul>
    </div>
  );
};

export { Cast };
