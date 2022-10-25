import { Route, Routes } from "react-router-dom";
import { Home } from "./Page/Home";
import { Movies } from "./Page/Movies";
import { MoviesDatails } from "./Page/MoviesDateils";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MoviesDatails />} />
      </Routes>
    </div>
  );
}

export default App;
