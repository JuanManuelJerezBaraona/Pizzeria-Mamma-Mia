import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';

// Views
import Home from "./views/Home";
import Pizza from "./views/Pizza";
import Carrito from "./views/Carrito";

// Toastify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
          path="/pizza/:id"
          element={<Pizza /> }
        />
        <Route
          path="/carrito"
          element={<Carrito /> }
        />
      </Routes>
      <ToastContainer />
    </div>
  );
};
export default App;
