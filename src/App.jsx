import "./App.css";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router";
import About from "./pages/About";
import People from "./pages/People";
import Company from "./pages/Company";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import AddProduct from "./pages/AddProduct";
import EditProduct from "./pages/EditProduct";

function App() {
  return (
    <>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />}>
            <Route path="people" element={<People />} />
            <Route path="company" element={<Company />} />
          </Route>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="add" element={<AddProduct />} />
          <Route path="/edit/:id" element={<EditProduct />}></Route>
        </Routes>
    </>
  );
}

export default App;
