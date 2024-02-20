import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Phone from "./pages/Phone";
import Laptop from "./pages/Laptop";
import Home from "./pages/Home";
import Tablet from "./pages/Tablet";
import NotFound from "./pages/NotFound";
import "./App.css";
import Header from "./components/Header";
import Product from "./pages/Product";
import ProductDetail from "./pages/ProductDetail";
import { Login } from "./pages/Login";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/laptop" element={<Laptop />} />
        <Route path="/phone" element={<Phone />} />
        <Route path="/tablet" element={<Tablet />} />
        <Route path="/products" element={<Product />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
