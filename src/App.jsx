import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from "./views/Home";
import Pokemones from "./views/Pokemones";
import Pokemon from "./views/Pokemon";

const App = () => {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/pokemones"
          element={<Pokemones /> }
        />
        <Route
          path="/pokemones/:name"
          element={<Pokemon /> }
        />
      </Routes>
    </div>
  );
};
export default App;
