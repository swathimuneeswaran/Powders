import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import HomePage from "./pages/HomePage";
import LandingPage from "./pages/LandingPage";
import ProductPage from "./pages/ProductPage";
import ProductFruit from "./component/product/ProductFruit";
import ProductDescription from "./pages/ProductDescription";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/" element={<Navbar />}>
          <Route path="home" element={<HomePage />} />
          <Route path="product" element={<ProductPage />} />
          <Route path="fruits" element={<ProductFruit />} />
          <Route path="details/:id" element={<ProductDescription />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
