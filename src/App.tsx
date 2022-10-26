import { Route, Routes } from "react-router-dom";
import { Home } from "./Page/Home";
import { Movies } from "./Page/Movies";
import { MoviesDatails } from "./Page/MoviesDateils";
import { Cast } from "./Cast/Cast";
import { Reviewe } from "./Reviewe/Reviewe";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MoviesDatails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviewe" element={<Reviewe />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
