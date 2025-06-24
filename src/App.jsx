import "./App.css";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router";
import About from "./pages/About";
import People from "./pages/People";
import Company from "./pages/Company";
import Home from "./pages/Home";

function App() {

  return (
    <>
      <Navbar  />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/cart"
          element={
            <Cart
            />
          }
        />
        <Route path="/about" element={<About />}>
          <Route path="people" element={<People />} />
          <Route path="company" element={<Company />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
