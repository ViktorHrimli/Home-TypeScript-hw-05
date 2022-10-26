import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ApiCastRewieMovies } from "../ApiServise/Api";
import {} from "../Types";
import { CastReviewItems } from "../CastReviewItems/CastReviewItems";
const Reviewe: FC<{}> = () => {
  const { id } = useParams();
  const [rewieve, setReviewe] = useState<[]>([]);

  useEffect(() => {
    if (id === null) return;
    ApiCastRewieMovies(Number(id), "reviews").then((data) => {
      setReviewe(data);
    });

    return () => {};
  }, [id]);

  return (
    <div>
      <ul></ul>
    </div>
  );
};

export { Reviewe };
