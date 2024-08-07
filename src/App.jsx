import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import HomePage from "./pages/HomePage";
import LandingPage from "./pages/LandingPage";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/" element={<Navbar />}>
          <Route path="home" element={<HomePage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
