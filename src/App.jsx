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
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
    <ToastContainer/>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="add" element={<AddProduct />} />
          <Route path="/edit/:id" element={<EditProduct />}></Route>
        </Routes>
    </>
  );
}

export default App;
